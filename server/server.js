const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const { units, getUnit } = require('./data/units');
const { questions: defaultUnit1Questions, sections: defaultUnit1Sections } = require('./data/questions');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Serve static frontend assets
app.use(express.static(path.join(__dirname, '../public')));

// ----------------------------------------------------
// IN-MEMORY DATA STORES (Persists in memory + syncs with clients)
// ----------------------------------------------------

let userStore = {
  attempts: [],
  bookmarks: new Set(),
  notes: {}
};

// Authentication Store with preloaded accounts matching prompt specs
const authStore = {
  currentUser: {
    id: 'U101',
    name: 'Aditya Verma',
    email: 'aditya@predictiveanalytics.edu',
    role: 'admin',
    avatar: 'AV',
    registeredAt: '2026-10-10T08:00:00Z',
    loginsCount: 75
  },
  users: [
    { id: 'U101', name: 'Aditya Verma', email: 'aditya@predictiveanalytics.edu', role: 'admin', registeredAt: '2026-10-10T08:00:00Z', loginsCount: 75 },
    { id: 'U102', name: 'Priya Sharma', email: 'priya@university.edu', role: 'student', registeredAt: '2026-10-14T09:15:00Z', loginsCount: 14 },
    { id: 'U103', name: 'Rohan Gupta', email: 'rohan@university.edu', role: 'student', registeredAt: '2026-10-15T02:30:00Z', loginsCount: 6 },
    { id: 'U104', name: 'Ananya Patel', email: 'ananya@university.edu', role: 'student', registeredAt: '2026-10-15T04:45:00Z', loginsCount: 9 },
    { id: 'U105', name: 'Kavita Nair', email: 'kavita@university.edu', role: 'student', registeredAt: '2026-10-15T05:20:00Z', loginsCount: 4 }
  ],
  sessions: new Map()
};

// Analytics & Event Tracking Store populated only by real application events
const analyticsStore = {
  metrics: {
    totalRegisteredUsers: 0,
    newRegistrationsToday: 0,
    loginsToday: 0,
    activeUsersToday: 0,
    totalButtonClicks: 0,
    clicksBreakdown: {},
    pageViews: {}
  },
  events: []
};

// Leaderboard records are added only when a learner shares an exam result.
const leaderboardStore = [];

// ----------------------------------------------------
// HELPERS
// ----------------------------------------------------

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleQuestionOptions(q) {
  if (!q || !q.options) return q;
  const letters = ['A', 'B', 'C', 'D'];
  const items = letters.map(letter => ({
    origLetter: letter,
    text: q.options[letter],
    isCorrect: letter === q.correctAnswer,
    distractor: q.distractors ? q.distractors[letter] : null
  }));

  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  const newOptions = {};
  const newDistractors = {};
  let newCorrectAnswer = q.correctAnswer;

  items.forEach((item, idx) => {
    const newLetter = letters[idx];
    newOptions[newLetter] = item.text;
    if (item.isCorrect) {
      newCorrectAnswer = newLetter;
    } else if (item.distractor) {
      newDistractors[newLetter] = item.distractor;
    }
  });

  return {
    ...q,
    options: newOptions,
    correctAnswer: newCorrectAnswer,
    distractors: newDistractors
  };
}

function resolveUnitQuestions(unitId = 'unit1') {
  const unit = getUnit(unitId);
  return {
    unit,
    questions: unit.questions || defaultUnit1Questions,
    sections: unit.sections || defaultUnit1Sections
  };
}

// ----------------------------------------------------
// 1. HEALTH & METADATA APIS
// ----------------------------------------------------

// 1. Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    developer: 'Aditya Verma',
    availableUnits: Object.keys(units).map(key => ({
      id: units[key].id,
      title: units[key].title,
      status: units[key].status,
      questionCount: units[key].questionCount
    })),
    totalQuestions: units.unit1.questions.length + units.unit2.questions.length,
    timestamp: new Date().toISOString()
  });
});

// 2. Units Metadata
app.get('/api/units', (req, res) => {
  const unitsSummary = Object.values(units).map(u => ({
    id: u.id,
    number: u.number,
    title: u.title,
    shortTitle: u.shortTitle,
    subtitle: u.subtitle,
    description: u.description,
    badge: u.badge,
    status: u.status,
    questionCount: u.questionCount,
    sectionsCount: u.sections ? u.sections.length : 0
  }));
  res.json({ success: true, developer: 'Aditya Verma', units: unitsSummary });
});

// 3. Sections by Unit
app.get('/api/sections', (req, res) => {
  const unitId = req.query.unit || 'unit1';
  const { unit, questions, sections } = resolveUnitQuestions(unitId);

  const enrichedSections = sections.map(sec => {
    const secQuestions = questions.filter(q => q.sectionId === sec.id);
    return {
      ...sec,
      count: secQuestions.length
    };
  });

  res.json({
    success: true,
    unit: unit.id,
    unitTitle: unit.title,
    sections: enrichedSections
  });
});

// 4. Questions with Filter & Unit Support
app.get('/api/questions', (req, res) => {
  const { unit: reqUnit, section, difficulty, search, limit, shuffle, shuffleOptions, ids, includeAnswers } = req.query;
  const { unit, questions } = resolveUnitQuestions(reqUnit || 'unit1');

  let result = [...questions];

  // Filter by section
  if (section && section !== 'ALL') {
    result = result.filter(q => q.sectionId.toUpperCase() === section.toUpperCase());
  }

  // Filter by IDs
  if (ids) {
    const idList = ids.split(',').map(Number);
    result = result.filter(q => idList.includes(q.id));
  }

  // Filter by difficulty
  if (difficulty && difficulty !== 'ALL') {
    result = result.filter(q => q.difficulty.toLowerCase() === difficulty.toLowerCase());
  }

  // Search in question, options, tags, keyTakeaway
  if (search && search.trim() !== '') {
    const q = search.toLowerCase().trim();
    result = result.filter(item =>
      item.question.toLowerCase().includes(q) ||
      (item.tags && item.tags.some(t => t.toLowerCase().includes(q))) ||
      (item.keyTakeaway && item.keyTakeaway.toLowerCase().includes(q)) ||
      (item.options && Object.values(item.options).some(opt => opt.toLowerCase().includes(q)))
    );
  }

  // Shuffle options if requested
  if (shuffleOptions === 'true' || shuffleOptions === true) {
    result = result.map(q => shuffleQuestionOptions(q));
  }

  // Shuffle questions if requested
  if (shuffle === 'true' || shuffle === true) {
    result = shuffleArray(result);
  }

  // Limit count
  if (limit) {
    const parsedLimit = parseInt(limit, 10);
    if (!isNaN(parsedLimit) && parsedLimit > 0) {
      result = result.slice(0, parsedLimit);
    }
  }

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
    unit: unit.id,
    count: responseData.length,
    totalAvailable: questions.length,
    questions: responseData
  });
});

// 5. Get Single Question
app.get('/api/questions/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const unitId = req.query.unit || 'unit1';
  const { questions } = resolveUnitQuestions(unitId);

  let question = questions.find(q => q.id === id);
  if (!question) {
    // Fallback search across other units
    const otherUnits = Object.values(units);
    for (const u of otherUnits) {
      const found = (u.questions || []).find(q => q.id === id);
      if (found) {
        question = found;
        break;
      }
    }
  }

  if (!question) {
    return res.status(404).json({ success: false, message: `Question #${id} not found.` });
  }

  res.json({ success: true, question });
});

// 6. Check a single answer (Practice Mode Instant Explanation)
app.post('/api/check-answer', (req, res) => {
  const {
    unit: reqUnit,
    questionId,
    selectedAnswer,
    selectedOptionText,
    options: clientOptions,
    correctAnswer: clientCorrectAnswer,
    distractors: clientDistractors
  } = req.body;

  if (!questionId || (!selectedAnswer && !selectedOptionText)) {
    return res.status(400).json({ success: false, message: 'questionId and selectedAnswer are required.' });
  }

  const { questions } = resolveUnitQuestions(reqUnit || 'unit1');
  let masterQuestion = questions.find(q => q.id === parseInt(questionId, 10));

  if (!masterQuestion) {
    for (const u of Object.values(units)) {
      const found = (u.questions || []).find(q => q.id === parseInt(questionId, 10));
      if (found) {
        masterQuestion = found;
        break;
      }
    }
  }

  if (!masterQuestion) {
    return res.status(404).json({ success: false, message: `Question #${questionId} not found.` });
  }

  const options = clientOptions || masterQuestion.options;
  const distractors = clientDistractors || masterQuestion.distractors || {};

  let expectedCorrectLetter = masterQuestion.correctAnswer;
  if (clientCorrectAnswer) {
    expectedCorrectLetter = clientCorrectAnswer;
  } else if (clientOptions) {
    const masterCorrectText = masterQuestion.options[masterQuestion.correctAnswer];
    const matchingLetter = Object.keys(clientOptions).find(l => clientOptions[l] === masterCorrectText);
    if (matchingLetter) {
      expectedCorrectLetter = matchingLetter;
    }
  }

  let cleanSelected = selectedAnswer ? String(selectedAnswer).toUpperCase().trim() : null;
  if (!cleanSelected && selectedOptionText) {
    const foundLetter = Object.keys(options).find(l => options[l].trim().toLowerCase() === String(selectedOptionText).trim().toLowerCase());
    if (foundLetter) cleanSelected = foundLetter;
  }

  const isCorrect = cleanSelected === expectedCorrectLetter.toUpperCase();
  const selectedDistractorExplanation = distractors ? distractors[cleanSelected] : null;

  res.json({
    success: true,
    questionId: masterQuestion.id,
    selectedAnswer: cleanSelected,
    isCorrect,
    correctAnswer: expectedCorrectLetter,
    correctOptionText: options[expectedCorrectLetter] || masterQuestion.options[masterQuestion.correctAnswer],
    selectedOptionText: (cleanSelected && options[cleanSelected]) ? options[cleanSelected] : (selectedOptionText || 'None'),
    explanation: masterQuestion.explanation,
    solution: masterQuestion.solution || null,
    distractors: distractors,
    selectedDistractorExplanation: selectedDistractorExplanation || null,
    keyTakeaway: masterQuestion.keyTakeaway || null,
    difficulty: masterQuestion.difficulty,
    tags: masterQuestion.tags,
    sectionTitle: masterQuestion.sectionTitle
  });
});

// 7. Submit Full Quiz (Exam Mode Evaluation)
app.post('/api/submit-quiz', (req, res) => {
  const {
    unit: reqUnit = 'unit1',
    answers = {},
    timeSpentSeconds = 0,
    mode = 'exam',
    sectionFilter = 'ALL',
    questionIds,
    clientQuestions,
    questions: customQuestions
  } = req.body;

  const { unit, questions, sections } = resolveUnitQuestions(reqUnit);
  const masterMap = new Map(questions.map(q => [q.id, q]));
  let testQuestions = [];

  const providedQuestions = (Array.isArray(clientQuestions) && clientQuestions.length > 0)
    ? clientQuestions
    : ((Array.isArray(customQuestions) && customQuestions.length > 0) ? customQuestions : null);

  if (providedQuestions) {
    testQuestions = providedQuestions.map(pq => {
      const master = masterMap.get(parseInt(pq.id, 10));
      if (!master) return pq;
      return {
        ...master,
        ...pq,
        options: pq.options || master.options,
        correctAnswer: pq.correctAnswer || master.correctAnswer,
        distractors: pq.distractors || master.distractors || {}
      };
    });
  } else if (Array.isArray(questionIds) && questionIds.length > 0) {
    testQuestions = questionIds.map(id => masterMap.get(parseInt(id, 10))).filter(Boolean);
  } else if (sectionFilter && sectionFilter !== 'ALL') {
    testQuestions = questions.filter(q => q.sectionId.toUpperCase() === sectionFilter.toUpperCase());
  } else {
    testQuestions = [...questions];
  }

  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;
  const reviewList = [];
  const sectionStats = {};

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
    let userSelected = null;
    let userSelectedText = null;

    if (answers[q.id] !== undefined && answers[q.id] !== null) {
      if (typeof answers[q.id] === 'object') {
        userSelected = answers[q.id].selectedAnswer ? String(answers[q.id].selectedAnswer).toUpperCase().trim() : null;
        userSelectedText = answers[q.id].selectedText || (userSelected && q.options ? q.options[userSelected] : null);
      } else {
        userSelected = String(answers[q.id]).toUpperCase().trim();
        userSelectedText = q.options ? q.options[userSelected] : null;
      }
    }

    const isAnswered = !!userSelected;
    let isCorrect = false;

    if (isAnswered) {
      if (userSelected === q.correctAnswer) {
        isCorrect = true;
      } else if (userSelectedText && q.options && q.correctAnswer && userSelectedText.trim().toLowerCase() === String(q.options[q.correctAnswer]).trim().toLowerCase()) {
        isCorrect = true;
      }
    }

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
      userSelectedText: userSelectedText || null,
      correctAnswer: q.correctAnswer,
      correctOptionText: q.options ? q.options[q.correctAnswer] : '',
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

  let grade = 'F';
  let badgeColor = '#ef4444';
  if (scorePercentage >= 90) { grade = 'A+ (Outstanding)'; badgeColor = '#10b981'; }
  else if (scorePercentage >= 80) { grade = 'A (Excellent)'; badgeColor = '#10b981'; }
  else if (scorePercentage >= 70) { grade = 'B (Good)'; badgeColor = '#3b82f6'; }
  else if (scorePercentage >= 60) { grade = 'C (Fair)'; badgeColor = '#f59e0b'; }
  else if (scorePercentage >= 50) { grade = 'D (Pass)'; badgeColor = '#f97316'; }
  else { grade = 'F (Needs Revision)'; badgeColor = '#ef4444'; }

  const mins = Math.floor(timeSpentSeconds / 60);
  const secs = timeSpentSeconds % 60;
  const timeFormatted = `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
  const avgTimePerQuestion = totalQuestions > 0 ? (timeSpentSeconds / totalQuestions).toFixed(1) + 's' : '0s';

  const activeSections = Object.values(sectionStats).filter(s => s.total > 0).map(s => ({
    ...s,
    percentage: s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0
  }));

  const sortedSections = [...activeSections].sort((a, b) => a.percentage - b.percentage);
  const weakestSection = sortedSections.length > 0 ? sortedSections[0] : null;
  const strongestSection = sortedSections.length > 0 ? sortedSections[sortedSections.length - 1] : null;

  const recommendations = [];
  activeSections.forEach(s => {
    if (s.percentage < 70) {
      recommendations.push({
        sectionId: s.id,
        title: s.title,
        percentage: s.percentage,
        advice: `Focus revision on ${s.title}. Review core formulas and definitions in ${unit.title}.`
      });
    }
  });

  const submissionResult = {
    unit: unit.id,
    unitTitle: unit.title,
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

  userStore.attempts.push({
    id: Date.now(),
    unit: unit.id,
    date: new Date().toISOString(),
    scorePercentage,
    correctCount,
    totalQuestions,
    mode,
    timeSpentSeconds
  });

  res.json({ success: true, results: submissionResult });
});

// 8. Revision Sheet Endpoint (High-Yield Table for Unit 2)
app.get('/api/revision-sheet', (req, res) => {
  const unitId = req.query.unit || 'unit2';
  const unit = getUnit(unitId);
  res.json({
    success: true,
    unit: unit.id,
    unitTitle: unit.title,
    count: (unit.revisionSheet || []).length,
    revisionSheet: unit.revisionSheet || []
  });
});

// ----------------------------------------------------
// 2. AUTHENTICATION SYSTEM APIS
// ----------------------------------------------------

// Register New User
app.post('/api/auth/register', (req, res) => {
  const { name, email, password, role = 'student' } = req.body;
  if (!name || !email) {
    return res.status(400).json({ success: false, message: 'Name and email are required.' });
  }

  const existing = authStore.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    return res.status(400).json({ success: false, message: 'An account with this email already exists.' });
  }

  const newId = `U${100 + authStore.users.length + 1}`;
  const newUser = {
    id: newId,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    role: role.toLowerCase() === 'admin' ? 'admin' : 'student',
    registeredAt: new Date().toISOString(),
    loginsCount: 1
  };

  authStore.users.push(newUser);
  authStore.currentUser = newUser;

  // Update telemetry metrics
  analyticsStore.metrics.totalRegisteredUsers += 1;
  analyticsStore.metrics.newRegistrationsToday += 1;
  analyticsStore.metrics.loginsToday += 1;
  analyticsStore.metrics.activeUsersToday += 1;

  // Log events
  const regTime = new Date().toLocaleTimeString('en-US', { hour12: false });
  analyticsStore.events.unshift({
    id: `EVT-${Date.now().toString().slice(-4)}`,
    event: 'user_registered',
    userId: newUser.id,
    userName: newUser.name,
    page: '/register',
    time: regTime,
    details: `New account created: ${newUser.name} (${newUser.role})`
  });

  analyticsStore.events.unshift({
    id: `EVT-${(Date.now() + 1).toString().slice(-4)}`,
    event: 'login_success',
    userId: newUser.id,
    userName: newUser.name,
    page: '/dashboard',
    time: regTime,
    details: 'Auto-login after registration'
  });

  res.json({
    success: true,
    message: 'Registration successful!',
    user: newUser
  });
});

// Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required.' });
  }

  let user = authStore.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    // If demo login with name, create user on the fly
    const namePart = email.split('@')[0].replace(/[^a-zA-Z]/g, ' ') || 'Student User';
    const capitalized = namePart.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const newId = `U${100 + authStore.users.length + 1}`;
    user = {
      id: newId,
      name: capitalized,
      email: email.trim().toLowerCase(),
      role: email.includes('admin') || email.includes('aditya') ? 'admin' : 'student',
      registeredAt: new Date().toISOString(),
      loginsCount: 1
    };
    authStore.users.push(user);
    analyticsStore.metrics.totalRegisteredUsers += 1;
    analyticsStore.metrics.newRegistrationsToday += 1;
  } else {
    user.loginsCount = (user.loginsCount || 0) + 1;
  }

  authStore.currentUser = user;
  analyticsStore.metrics.loginsToday += 1;
  analyticsStore.metrics.activeUsersToday = Math.min(analyticsStore.metrics.totalRegisteredUsers, analyticsStore.metrics.activeUsersToday + 1);

  const loginTime = new Date().toLocaleTimeString('en-US', { hour12: false });
  analyticsStore.events.unshift({
    id: `EVT-${Date.now().toString().slice(-4)}`,
    event: 'login_success',
    userId: user.id,
    userName: user.name,
    page: '/login',
    time: loginTime,
    details: `User logged in: ${user.name} (${user.role})`
  });

  res.json({
    success: true,
    message: `Welcome back, ${user.name}!`,
    user
  });
});

// Logout
app.post('/api/auth/logout', (req, res) => {
  const user = authStore.currentUser;
  if (user) {
    const logoutTime = new Date().toLocaleTimeString('en-US', { hour12: false });
    analyticsStore.events.unshift({
      id: `EVT-${Date.now().toString().slice(-4)}`,
      event: 'user_logout',
      userId: user.id,
      userName: user.name,
      page: '/logout',
      time: logoutTime,
      details: `User signed out: ${user.name}`
    });
  }
  authStore.currentUser = null;
  res.json({ success: true, message: 'Logged out successfully.' });
});

// Current User Session
app.get('/api/auth/me', (req, res) => {
  res.json({
    success: true,
    user: authStore.currentUser || {
      id: 'U101',
      name: 'Aditya Verma',
      email: 'aditya@predictiveanalytics.edu',
      role: 'admin'
    }
  });
});

// ----------------------------------------------------
// 3. ANALYTICS & CLICK TRACKING APIS
// ----------------------------------------------------

// Track Activity & Click Events
app.post('/api/analytics/track', (req, res) => {
  const { event, userId, userName, page = '/dashboard', details = '', buttonName } = req.body;
  if (!event) {
    return res.status(400).json({ success: false, message: 'Event type is required.' });
  }

  const activeUser = authStore.currentUser || { id: 'U101', name: 'Aditya Verma' };
  const uid = userId || activeUser.id;
  const uname = userName || activeUser.name;
  const timeFormatted = new Date().toLocaleTimeString('en-US', { hour12: false });

  // Update metrics
  if (event === 'button_clicked') {
    analyticsStore.metrics.totalButtonClicks += 1;
    const btnKey = buttonName || 'Dashboard Button';
    analyticsStore.metrics.clicksBreakdown[btnKey] = (analyticsStore.metrics.clicksBreakdown[btnKey] || 0) + 1;
  }

  if (event === 'page_viewed' || event === 'view_opened') {
    analyticsStore.metrics.pageViews[page] = (analyticsStore.metrics.pageViews[page] || 0) + 1;
  }

  const eventEntry = {
    id: `EVT-${Date.now().toString().slice(-4)}`,
    event,
    userId: uid,
    userName: uname,
    page,
    time: timeFormatted,
    details: details || `Action on ${page}`
  };

  analyticsStore.events.unshift(eventEntry);
  if (analyticsStore.events.length > 200) {
    analyticsStore.events.pop();
  }

  res.json({ success: true, eventId: eventEntry.id });
});

// Admin Analytics Dashboard Stats
app.get('/api/analytics/dashboard', (req, res) => {
  res.json({
    success: true,
    developer: 'Aditya Verma',
    metrics: analyticsStore.metrics,
    recentEvents: analyticsStore.events.slice(0, 50),
    topUsers: authStore.users.slice(0, 10),
    totalTrackedEvents: analyticsStore.events.length
  });
});

// Reset analytics counters and event history
app.post('/api/analytics/reset', (req, res) => {
  analyticsStore.metrics.totalRegisteredUsers = authStore.users.length;
  analyticsStore.metrics.newRegistrationsToday = 0;
  analyticsStore.metrics.loginsToday = 0;
  analyticsStore.metrics.activeUsersToday = 0;
  analyticsStore.metrics.totalButtonClicks = 0;
  analyticsStore.metrics.clicksBreakdown = {};
  analyticsStore.metrics.pageViews = {};
  analyticsStore.events = [];
  res.json({ success: true, message: 'Analytics metrics and event history cleared.' });
});

// ----------------------------------------------------
// 3.5 TOP 25 PERFORMERS LEADERBOARD APIS
// ----------------------------------------------------

// Get Leaderboard
app.get('/api/leaderboard', (req, res) => {
  const unit = req.query.unit;
  let list = [...leaderboardStore];
  if (unit && unit !== 'ALL') {
    const unitFormatted = (unit.toLowerCase() === 'unit1' || unit === 'Unit 1') ? 'Unit 1' : 'Unit 2';
    list = list.filter(item => item.unit === unitFormatted);
  }
  res.json({
    success: true,
    count: list.length,
    topScore: list.length > 0 ? list[0].scorePercentage : null,
    leaderboard: list.slice(0, 25)
  });
});

// Submit / Record Top 25 Entry
app.post('/api/leaderboard', (req, res) => {
  const { name, college = 'University Scholar', unit = 'Unit 1', scorePercentage, correctCount, totalQuestions = 100, timeSpentSeconds, formattedTime } = req.body;
  if (!name || scorePercentage == null) {
    return res.status(400).json({ success: false, message: 'Name and score are required.' });
  }

  // Sanitize and limit name up to 25 letters / characters
  let sanitizedName = (name || '').trim();
  if (sanitizedName.length > 25) {
    sanitizedName = sanitizedName.slice(0, 25).trim();
  }
  if (!sanitizedName) sanitizedName = 'Anonymous Scholar';

  const newEntry = {
    id: `LB-${Date.now().toString().slice(-4)}`,
    name: sanitizedName,
    college: college.trim() || 'University Scholar',
    unit: (unit === 'unit2' || unit === 'Unit 2') ? 'Unit 2' : 'Unit 1',
    scorePercentage: Number(scorePercentage),
    correctCount: Number(correctCount || scorePercentage),
    totalQuestions: Number(totalQuestions || 100),
    timeSpentSeconds: Number(timeSpentSeconds || 1800),
    formattedTime: formattedTime || '30m 00s',
    date: 'Just now'
  };

  // Add and sort leaderboard: higher score first, tie-break by time
  leaderboardStore.push(newEntry);
  leaderboardStore.sort((a, b) => {
    if (b.scorePercentage !== a.scorePercentage) {
      return b.scorePercentage - a.scorePercentage;
    }
    return (a.timeSpentSeconds || 0) - (b.timeSpentSeconds || 0);
  });

  // Reassign ranks
  leaderboardStore.forEach((item, idx) => {
    item.rank = idx + 1;
  });

  // Cap at 25
  if (leaderboardStore.length > 25) {
    leaderboardStore.length = 25;
  }

  const assignedRank = leaderboardStore.findIndex(item => item.id === newEntry.id) + 1;

  // Log activity event
  analyticsStore.events.unshift({
    id: `EVT-${Date.now().toString().slice(-4)}`,
    event: 'leaderboard_record',
    userId: `STU-${Date.now().toString().slice(-4)}`,
    userName: newEntry.name,
    page: '/leaderboard',
    time: new Date().toLocaleTimeString('en-US', { hour12: false }),
    details: `New Top 25 Record! Rank #${assignedRank} with ${newEntry.scorePercentage}%`
  });

  res.json({
    success: true,
    rank: assignedRank,
    entry: newEntry,
    leaderboard: leaderboardStore
  });
});

// ----------------------------------------------------
// 4. BOOKMARKS & NOTES APIS
// ----------------------------------------------------

app.get('/api/bookmarks', (req, res) => {
  const bookmarkIds = Array.from(userStore.bookmarks);
  const unitId = req.query.unit || 'unit1';
  const { questions } = resolveUnitQuestions(unitId);
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

// Local dev fallback for Vercel Web Analytics endpoints (prevents MIME type console errors on localhost)
app.all('/_vercel/insights/*', (req, res) => {
  if (req.path.endsWith('.js')) {
    res.type('application/javascript').send('/* Vercel Web Analytics localhost development stub */');
  } else {
    res.status(204).end();
  }
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🔥 Predictive Analytics Quiz App running on http://localhost:${PORT}`);
  console.log(`🚀 Developed by Aditya Verma`);
  console.log(`📊 Unit 1: ${units.unit1.questions.length} MCQs | Unit 2: ${units.unit2.questions.length} MCQs | Unit 3: Coming Soon`);
  console.log(`🔐 Simple Auth & Click Analytics Engine: Active`);
  console.log(`====================================================`);
});
