const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const { questions, sections } = require('./data/questions');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Serve static frontend assets
app.use(express.static(path.join(__dirname, '../public')));

// Simple in-memory persistence for user stats, bookmarks, and notes
// (Can also sync with client localStorage)
let userStore = {
  attempts: [],
  bookmarks: new Set(),
  notes: {}
};

// Helper: Shuffle array
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ----------------------------------------------------
// API ROUTES
// ----------------------------------------------------

// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', totalQuestions: questions.length, timestamp: new Date().toISOString() });
});

// 2. Get all sections
app.get('/api/sections', (req, res) => {
  const enrichedSections = sections.map(sec => {
    const secQuestions = questions.filter(q => q.sectionId === sec.id);
    return {
      ...sec,
      count: secQuestions.length
    };
  });
  res.json({ success: true, sections: enrichedSections });
});

// 3. Get questions with filters
app.get('/api/questions', (req, res) => {
  const { section, difficulty, search, limit, shuffle, ids, includeAnswers } = req.query;
  
  let result = [...questions];

  // Filter by section (e.g., 'A', 'B')
  if (section && section !== 'ALL') {
    result = result.filter(q => q.sectionId.toUpperCase() === section.toUpperCase());
  }

  // Filter by specific IDs (e.g. '1,5,12')
  if (ids) {
    const idList = ids.split(',').map(Number);
    result = result.filter(q => idList.includes(q.id));
  }

  // Filter by difficulty
  if (difficulty && difficulty !== 'ALL') {
    result = result.filter(q => q.difficulty.toLowerCase() === difficulty.toLowerCase());
  }

  // Search keyword in question, options, tags, or keyTakeaway
  if (search && search.trim() !== '') {
    const q = search.toLowerCase().trim();
    result = result.filter(item => 
      item.question.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q)) ||
      (item.keyTakeaway && item.keyTakeaway.toLowerCase().includes(q)) ||
      Object.values(item.options).some(opt => opt.toLowerCase().includes(q))
    );
  }

  // Shuffle if requested
  if (shuffle === 'true' || shuffle === true) {
    result = shuffleArray(result);
  }

  // Limit results (e.g. limit=10, limit=25, limit=50)
  if (limit) {
    const parsedLimit = parseInt(limit, 10);
    if (!isNaN(parsedLimit) && parsedLimit > 0) {
      result = result.slice(0, parsedLimit);
    }
  }

  // Sanitize answers if not explicitly requested
  // When includeAnswers is false (for mock exams), we still provide structure without spoiling
  const responseData = result.map(q => {
    const shouldInclude = includeAnswers === 'true' || includeAnswers === true;
    if (shouldInclude) {
      return q;
    }
    return {
      id: q.id,
      sectionId: q.sectionId,
      sectionTitle: q.sectionTitle,
      question: q.question,
      options: q.options,
      difficulty: q.difficulty,
      tags: q.tags
    };
  });

  res.json({
    success: true,
    count: responseData.length,
    totalAvailable: questions.length,
    questions: responseData
  });
});

// 4. Get single question by ID
app.get('/api/questions/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const question = questions.find(q => q.id === id);

  if (!question) {
    return res.status(404).json({ success: false, message: `Question #${id} not found.` });
  }

  res.json({ success: true, question });
});

// 5. Check a single answer in Practice Mode (Instant Explanation)
app.post('/api/check-answer', (req, res) => {
  const { questionId, selectedAnswer } = req.body;

  if (!questionId || !selectedAnswer) {
    return res.status(400).json({ success: false, message: 'questionId and selectedAnswer are required.' });
  }

  const question = questions.find(q => q.id === parseInt(questionId, 10));
  if (!question) {
    return res.status(404).json({ success: false, message: `Question #${questionId} not found.` });
  }

  const cleanSelected = String(selectedAnswer).toUpperCase().trim();
  const isCorrect = cleanSelected === question.correctAnswer.toUpperCase();
  const selectedDistractorExplanation = question.distractors ? question.distractors[cleanSelected] : null;

  res.json({
    success: true,
    questionId: question.id,
    selectedAnswer: cleanSelected,
    isCorrect,
    correctAnswer: question.correctAnswer,
    correctOptionText: question.options[question.correctAnswer],
    selectedOptionText: question.options[cleanSelected] || 'None',
    explanation: question.explanation,
    solution: question.solution || null,
    distractors: question.distractors || {},
    selectedDistractorExplanation: selectedDistractorExplanation || null,
    keyTakeaway: question.keyTakeaway || null,
    difficulty: question.difficulty,
    tags: question.tags,
    sectionTitle: question.sectionTitle
  });
});

// 6. Submit Full Quiz (Exam Mode / Complete Evaluation)
app.post('/api/submit-quiz', (req, res) => {
  const { answers = {}, timeSpentSeconds = 0, mode = 'exam', sectionFilter = 'ALL', questionIds } = req.body;

  let testQuestions = [...questions];
  if (Array.isArray(questionIds) && questionIds.length > 0) {
    const idMap = new Map(questions.map(q => [q.id, q]));
    testQuestions = questionIds.map(id => idMap.get(parseInt(id, 10))).filter(Boolean);
  } else if (sectionFilter && sectionFilter !== 'ALL') {
    testQuestions = testQuestions.filter(q => q.sectionId.toUpperCase() === sectionFilter.toUpperCase());
  }

  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;
  const reviewList = [];
  const sectionStats = {};

  // Initialize section stats
  sections.forEach(sec => {
    sectionStats[sec.id] = {
      id: sec.id,
      title: sec.title,
      total: 0,
      correct: 0,
      incorrect: 0,
      unanswered: 0,
      color: sec.color
    };
  });

  testQuestions.forEach(q => {
    const userSelected = answers[q.id] ? String(answers[q.id]).toUpperCase() : null;
    const isAnswered = !!userSelected;
    const isCorrect = isAnswered && userSelected === q.correctAnswer;

    if (sectionStats[q.sectionId]) {
      sectionStats[q.sectionId].total += 1;
      if (isCorrect) sectionStats[q.sectionId].correct += 1;
      else if (isAnswered) sectionStats[q.sectionId].incorrect += 1;
      else sectionStats[q.sectionId].unanswered += 1;
    }

    if (!isAnswered) {
      unansweredCount += 1;
    } else if (isCorrect) {
      correctCount += 1;
    } else {
      incorrectCount += 1;
    }

    reviewList.push({
      id: q.id,
      sectionId: q.sectionId,
      sectionTitle: q.sectionTitle,
      question: q.question,
      options: q.options,
      userSelected: userSelected || null,
      correctAnswer: q.correctAnswer,
      isCorrect,
      isAnswered,
      explanation: q.explanation,
      solution: q.solution || null,
      distractors: q.distractors || {},
      keyTakeaway: q.keyTakeaway || null,
      difficulty: q.difficulty,
      tags: q.tags
    });
  });

  const totalQuestions = testQuestions.length;
  const scorePercentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100 * 10) / 10 : 0;

  // Compute Grade
  let grade = 'F';
  let badgeColor = '#ef4444';
  if (scorePercentage >= 90) { grade = 'A+ (Outstanding)'; badgeColor = '#10b981'; }
  else if (scorePercentage >= 80) { grade = 'A (Excellent)'; badgeColor = '#10b981'; }
  else if (scorePercentage >= 70) { grade = 'B (Good)'; badgeColor = '#3b82f6'; }
  else if (scorePercentage >= 60) { grade = 'C (Fair)'; badgeColor = '#f59e0b'; }
  else if (scorePercentage >= 50) { grade = 'D (Pass)'; badgeColor = '#f97316'; }
  else { grade = 'F (Needs Revision)'; badgeColor = '#ef4444'; }

  // Format Time
  const mins = Math.floor(timeSpentSeconds / 60);
  const secs = timeSpentSeconds % 60;
  const timeFormatted = `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
  const avgTimePerQuestion = totalQuestions > 0 ? (timeSpentSeconds / totalQuestions).toFixed(1) + 's' : '0s';

  // Section breakdown percentages and weakest/strongest
  const activeSections = Object.values(sectionStats).filter(s => s.total > 0).map(s => ({
    ...s,
    percentage: Math.round((s.correct / s.total) * 100)
  }));

  const sortedSections = [...activeSections].sort((a, b) => a.percentage - b.percentage);
  const weakestSection = sortedSections.length > 0 ? sortedSections[0] : null;
  const strongestSection = sortedSections.length > 0 ? sortedSections[sortedSections.length - 1] : null;

  // Study Recommendations
  const recommendations = [];
  activeSections.forEach(s => {
    if (s.percentage < 70) {
      recommendations.push({
        sectionId: s.id,
        title: s.title,
        percentage: s.percentage,
        advice: `Focus revision on ${s.title}. Pay special attention to formulas, definitions, and distractor traps in this unit.`
      });
    }
  });

  const submissionResult = {
    totalQuestions,
    answeredCount: correctCount + incorrectCount,
    correctCount,
    incorrectCount,
    unansweredCount,
    scorePercentage,
    grade,
    badgeColor,
    timeSpentSeconds,
    timeFormatted,
    avgTimePerQuestion,
    sectionBreakdown: activeSections,
    weakestSection,
    strongestSection,
    recommendations,
    reviewList,
    submittedAt: new Date().toISOString()
  };

  // Record into in-memory store
  userStore.attempts.push({
    id: Date.now(),
    date: new Date().toISOString(),
    scorePercentage,
    correctCount,
    totalQuestions,
    mode,
    timeSpentSeconds
  });

  res.json({ success: true, results: submissionResult });
});

// 7. Bookmarks
app.get('/api/bookmarks', (req, res) => {
  const bookmarkIds = Array.from(userStore.bookmarks);
  const bookmarkedQuestions = questions.filter(q => userStore.bookmarks.has(q.id));
  res.json({ success: true, count: bookmarkedQuestions.length, ids: bookmarkIds, questions: bookmarkedQuestions });
});

app.post('/api/bookmarks/toggle', (req, res) => {
  const { questionId } = req.body;
  const id = parseInt(questionId, 10);
  if (isNaN(id)) return res.status(400).json({ success: false, message: 'Invalid questionId' });

  if (userStore.bookmarks.has(id)) {
    userStore.bookmarks.delete(id);
    return res.json({ success: true, isBookmarked: false, questionId: id });
  } else {
    userStore.bookmarks.add(id);
    return res.json({ success: true, isBookmarked: true, questionId: id });
  }
});

// 8. User Notes
app.get('/api/notes/:questionId', (req, res) => {
  const id = parseInt(req.params.questionId, 10);
  res.json({ success: true, note: userStore.notes[id] || '' });
});

app.post('/api/notes', (req, res) => {
  const { questionId, note } = req.body;
  const id = parseInt(questionId, 10);
  if (isNaN(id)) return res.status(400).json({ success: false, message: 'Invalid questionId' });

  userStore.notes[id] = note;
  res.json({ success: true, questionId: id, note });
});

// 9. Past Attempt Stats
app.get('/api/stats', (req, res) => {
  res.json({
    success: true,
    totalAttempts: userStore.attempts.length,
    attempts: userStore.attempts.slice(-10),
    totalQuestions: questions.length,
    bookmarkedCount: userStore.bookmarks.size
  });
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🔥 Predictive Analytics Quiz App running on http://localhost:${PORT}`);
  console.log(`📊 Loaded ${questions.length} MCQs across 8 sections (A to H)`);
  console.log(`====================================================`);
});
