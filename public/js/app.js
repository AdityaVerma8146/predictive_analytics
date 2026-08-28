/**
 * Predictive Analytics 100 MCQs Quiz Application - Core Client Engine
 * Fully resilient for both full-stack (Node/Express) and static deployments (Vercel, Netlify, GitHub Pages).
 */

// ==========================================================================
// 1. GLOBAL APPLICATION STATE
// ==========================================================================
const AppState = {
  // App Config & Data
  allQuestions: (window.PREDICTIVE_ANALYTICS_DATA && window.PREDICTIVE_ANALYTICS_DATA.questions) ? [...window.PREDICTIVE_ANALYTICS_DATA.questions] : [],
  sections: (window.PREDICTIVE_ANALYTICS_DATA && window.PREDICTIVE_ANALYTICS_DATA.sections) ? [...window.PREDICTIVE_ANALYTICS_DATA.sections] : [],
  activeQuestions: [],
  currentIndex: 0,
  currentView: 'dashboard', // 'dashboard' | 'quiz' | 'results' | 'flashcards'
  mode: 'practice', // 'practice' | 'exam' | 'section' | 'mistakes' | 'custom'
  activeSectionFilter: 'ALL',
  
  // User Progress
  userAnswers: {}, // { [qId]: 'A'|'B'|'C'|'D' }
  practiceEvaluations: {}, // { [qId]: evaluationData }
  flaggedQuestions: new Set(),
  bookmarkedQuestions: new Set(),
  mistakeQuestionIds: new Set(),
  notes: {}, // { [qId]: string }

  // Timers & Stats
  timerInterval: null,
  timeSpentSeconds: 0,
  examTimeLimitSeconds: 3600, // 60 mins default
  isExamTimer: false,
  examSubmitted: false,
  lastSubmissionResults: null,

  // Flashcards state
  fcIndex: 0,
  fcQuestions: []
};

// ==========================================================================
// 2. INITIALIZATION & SETUP
// ==========================================================================
function initApp() {
  initTheme();
  initAudioControl();
  initKeyboardShortcuts();
  loadPersistedStorage();

  // Attach all event listeners immediately so clicks work instantly!
  setupEventListeners();

  // Render initial dashboard immediately from local dataset
  renderSectionCards();
  renderDashboard();
  updateMasteryBadge();

  // Try background sync with API if server is present
  syncDataFromServer();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Background sync with API (optional enhancement)
async function syncDataFromServer() {
  try {
    const secRes = await fetch('/api/sections');
    if (secRes.ok) {
      const data = await secRes.json();
      if (data.success && Array.isArray(data.sections) && data.sections.length > 0) {
        AppState.sections = data.sections;
        renderSectionCards();
      }
    }
  } catch (e) {
    // Gracefully fallback to embedded dataset
    console.log('Using local sections dataset');
  }

  try {
    const qRes = await fetch('/api/questions?includeAnswers=true');
    if (qRes.ok) {
      const data = await qRes.json();
      if (data.success && Array.isArray(data.questions) && data.questions.length > 0) {
        AppState.allQuestions = data.questions;
      }
    }
  } catch (e) {
    // Gracefully fallback to embedded dataset
    console.log('Using local questions dataset');
  }
}

// Load state from localStorage
function loadPersistedStorage() {
  try {
    const savedBookmarks = localStorage.getItem('pa_quiz_bookmarks');
    if (savedBookmarks) {
      AppState.bookmarkedQuestions = new Set(JSON.parse(savedBookmarks));
    }

    const savedMistakes = localStorage.getItem('pa_quiz_mistakes');
    if (savedMistakes) {
      AppState.mistakeQuestionIds = new Set(JSON.parse(savedMistakes));
    }

    const savedNotes = localStorage.getItem('pa_quiz_notes');
    if (savedNotes) {
      AppState.notes = JSON.parse(savedNotes);
    }
  } catch (e) {
    console.warn('Storage parse error:', e);
  }
}

function persistStorage() {
  try {
    localStorage.setItem('pa_quiz_bookmarks', JSON.stringify(Array.from(AppState.bookmarkedQuestions)));
    localStorage.setItem('pa_quiz_mistakes', JSON.stringify(Array.from(AppState.mistakeQuestionIds)));
    localStorage.setItem('pa_quiz_notes', JSON.stringify(AppState.notes));
  } catch (e) {
    console.warn('Storage save error:', e);
  }
}

// ==========================================================================
// 3. NAVIGATION & VIEW ROUTING
// ==========================================================================
function showView(viewName) {
  AppState.currentView = viewName;

  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  const target = document.getElementById(`view-${viewName}`);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update Header Mode Pill
  const modePillText = document.getElementById('nav-mode-text');
  const navStats = document.getElementById('nav-live-stats');

  if (viewName === 'dashboard') {
    if (modePillText) modePillText.textContent = 'Dashboard';
    if (navStats) navStats.style.display = 'none';
    stopTimer();
    renderDashboard();
  } else if (viewName === 'quiz') {
    if (modePillText) modePillText.textContent = AppState.mode === 'practice' ? 'Practice Mode' : 'Exam Mode';
    if (navStats) navStats.style.display = 'flex';
    updateNavLiveStats();
  } else if (viewName === 'results') {
    if (modePillText) modePillText.textContent = 'Diagnostic Scorecard';
    if (navStats) navStats.style.display = 'none';
    stopTimer();
  } else if (viewName === 'flashcards') {
    if (modePillText) modePillText.textContent = 'Flashcard Recall';
    if (navStats) navStats.style.display = 'none';
    stopTimer();
  }
}

// ==========================================================================
// 4. DASHBOARD RENDERING
// ==========================================================================
function renderDashboard() {
  const mistakesCount = AppState.mistakeQuestionIds.size;
  const countEl = document.getElementById('dash-mistakes-count');
  const badgeEl = document.getElementById('badge-mistake-count');
  if (countEl) countEl.textContent = mistakesCount;
  if (badgeEl) badgeEl.textContent = `${mistakesCount} Missed`;
  updateMasteryBadge();
}

function updateMasteryBadge() {
  const total = AppState.allQuestions.length || 100;
  const correctEvaluations = Object.values(AppState.practiceEvaluations).filter(e => e.isCorrect).length;
  const percent = Math.min(100, Math.round((correctEvaluations / total) * 100));
  const el = document.getElementById('dash-mastery-percent');
  if (el) el.textContent = `${percent}%`;
}

function renderSectionCards() {
  const container = document.getElementById('dashboard-sections-container');
  if (!container) return;

  container.innerHTML = AppState.sections.map(sec => `
    <div class="section-card" data-section-id="${sec.id}" role="button" tabindex="0">
      <div class="sec-card-top">
        <div class="sec-letter-badge" style="background-color: ${sec.color}">${sec.id}</div>
        <span class="sec-count-badge">${sec.count} MCQs (${sec.range})</span>
      </div>
      <h3 class="sec-card-title">${sec.title}</h3>
      <p class="sec-card-desc">${sec.description}</p>
      <div class="sec-card-footer">
        <span>Practice Unit ${sec.id}</span>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// 4.5. OPTION & QUESTION RANDOMIZER (A, B, C, D Dynamic Shuffling)
// ==========================================================================
function shuffleQuestionOptions(q) {
  if (!q || !q.options) return q;
  const letters = ['A', 'B', 'C', 'D'];
  const items = letters.map(letter => ({
    origLetter: letter,
    text: q.options[letter],
    isCorrect: letter === q.correctAnswer,
    distractor: q.distractors ? q.distractors[letter] : null
  }));

  // Fisher-Yates shuffle options among A, B, C, and D
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

function prepareQuestionBatch(questions, shuffleOptions = true, shuffleQuestions = false) {
  let list = questions.map(q => shuffleOptions ? shuffleQuestionOptions(q) : { ...q });
  if (shuffleQuestions) {
    list = shuffleArray(list);
  }
  return list;
}

// ==========================================================================
// 5. QUIZ MODE LAUNCHERS
// ==========================================================================

function startPracticeMode(sectionFilter = 'ALL', shuffle = false, count = null) {
  AppState.mode = 'practice';
  AppState.activeSectionFilter = sectionFilter;
  let list = [...AppState.allQuestions];

  if (sectionFilter !== 'ALL') {
    list = list.filter(q => q.sectionId.toUpperCase() === sectionFilter.toUpperCase());
  }
  
  // Dynamically shuffle options among A, B, C, D on every run!
  list = prepareQuestionBatch(list, true, shuffle);

  if (count && !isNaN(count) && count > 0 && count < list.length) {
    list = list.slice(0, count);
  }

  AppState.activeQuestions = list;
  AppState.currentIndex = 0;
  AppState.userAnswers = {};
  AppState.practiceEvaluations = {};
  AppState.flaggedQuestions.clear();
  AppState.timeSpentSeconds = 0;
  AppState.isExamTimer = false;
  AppState.examSubmitted = false;

  showView('quiz');
  renderCurrentQuestion();
  renderPalette();
  startTimer();
}

function startExamMode(sectionFilter = 'ALL', count = 100, durationMins = null, shuffle = true) {
  AppState.mode = 'exam';
  AppState.activeSectionFilter = sectionFilter;
  let list = [...AppState.allQuestions];

  if (sectionFilter !== 'ALL') {
    list = list.filter(q => q.sectionId.toUpperCase() === sectionFilter.toUpperCase());
  }

  // Dynamically shuffle options among A, B, C, D on every run!
  list = prepareQuestionBatch(list, true, shuffle);

  if (count && !isNaN(count) && count > 0 && count < list.length) {
    list = list.slice(0, count);
  }

  const effectiveDuration = (durationMins && !isNaN(durationMins)) ? durationMins : Math.max(10, Math.round(list.length * 0.75));

  AppState.activeQuestions = list;
  AppState.currentIndex = 0;
  AppState.userAnswers = {};
  AppState.practiceEvaluations = {};
  AppState.flaggedQuestions.clear();
  AppState.timeSpentSeconds = 0;
  AppState.examTimeLimitSeconds = effectiveDuration * 60;
  AppState.isExamTimer = true;
  AppState.examSubmitted = false;

  showView('quiz');
  renderCurrentQuestion();
  renderPalette();
  startTimer();
}

function startSectionPractice(sectionId) {
  startPracticeMode(sectionId, false);
}

function startMistakesDrill() {
  const mistakeIds = Array.from(AppState.mistakeQuestionIds);
  if (mistakeIds.length === 0) {
    alert('🎉 Great job! You have zero mistakes recorded. Complete some practice questions first.');
    return;
  }

  let list = AppState.allQuestions.filter(q => mistakeIds.includes(q.id));
  list = prepareQuestionBatch(list, true, true);

  AppState.mode = 'practice';
  AppState.activeSectionFilter = 'ALL';
  AppState.activeQuestions = list;
  AppState.currentIndex = 0;
  AppState.userAnswers = {};
  AppState.practiceEvaluations = {};
  AppState.timeSpentSeconds = 0;
  AppState.isExamTimer = false;
  AppState.examSubmitted = false;

  showView('quiz');
  renderCurrentQuestion();
  renderPalette();
  startTimer();
}

// ==========================================================================
// 6. QUESTION RENDERING & OPTION SELECTION
// ==========================================================================
function renderCurrentQuestion() {
  const questions = AppState.activeQuestions;
  if (!questions || questions.length === 0) return;

  const q = questions[AppState.currentIndex];
  if (!q) return;

  // Header & Navigation Badges
  const sec = AppState.sections.find(s => s.id === q.sectionId);
  const secBadge = document.getElementById('quiz-section-badge');
  const secTitle = document.getElementById('quiz-section-title');
  if (secTitle) secTitle.textContent = q.sectionTitle || `Section ${q.sectionId}`;
  if (secBadge && sec) {
    const dot = secBadge.querySelector('.sec-badge-dot');
    if (dot) dot.style.backgroundColor = sec.color;
  }

  // Progress Bar
  const currentNum = AppState.currentIndex + 1;
  const totalNum = questions.length;
  const currEl = document.getElementById('current-q-index');
  const totalEl = document.getElementById('total-q-count');
  if (currEl) currEl.textContent = currentNum;
  if (totalEl) totalEl.textContent = totalNum;
  
  const percent = Math.round((currentNum / totalNum) * 100);
  const progText = document.getElementById('quiz-progress-percent');
  const progBar = document.getElementById('quiz-progress-bar');
  if (progText) progText.textContent = `${percent}%`;
  if (progBar) progBar.style.width = `${percent}%`;

  // Question Meta
  const qPill = document.getElementById('q-id-pill');
  const diffPill = document.getElementById('q-diff-pill');
  if (qPill) qPill.textContent = `Q${q.id}`;
  if (diffPill) diffPill.textContent = q.difficulty || 'Standard';
  
  const tagsContainer = document.getElementById('q-tags-container');
  if (tagsContainer) {
    tagsContainer.innerHTML = (q.tags || []).map(t => `<span class="tag-pill">${t}</span>`).join('');
  }

  // Question Text
  const qText = document.getElementById('q-question-text');
  if (qText) qText.textContent = q.question;

  // Bookmark & Flag buttons
  updateBookmarkButton(q.id);
  updateFlagButton(q.id);

  // Render 4 Options
  const letters = ['A', 'B', 'C', 'D'];
  const userChoice = AppState.userAnswers[q.id];
  const evalData = AppState.practiceEvaluations[q.id];

  letters.forEach(letter => {
    const btn = document.getElementById(`opt-btn-${letter}`);
    const textEl = document.getElementById(`opt-text-${letter}`);
    if (!btn || !textEl) return;

    textEl.textContent = q.options[letter] || '';
    btn.className = 'option-card';
    btn.disabled = false;

    if (AppState.mode === 'exam') {
      if (userChoice === letter) {
        btn.classList.add('selected-exam');
      }
    } else if (AppState.mode === 'practice') {
      if (evalData) {
        btn.disabled = true;
        if (letter === evalData.correctAnswer) {
          btn.classList.add('correct-answer');
        } else if (userChoice === letter && !evalData.isCorrect) {
          btn.classList.add('wrong-answer');
        }
      }
    }
  });

  // Explanation Drawer in Practice Mode
  const expDrawer = document.getElementById('explanation-drawer');
  if (AppState.mode === 'practice' && evalData) {
    renderExplanationDrawer(evalData, userChoice);
    if (expDrawer) expDrawer.style.display = 'block';
  } else {
    if (expDrawer) expDrawer.style.display = 'none';
  }

  // Navigation Buttons
  const prevBtn = document.getElementById('btn-prev-question');
  if (prevBtn) prevBtn.disabled = AppState.currentIndex === 0;

  const nextBtn = document.getElementById('btn-next-question');
  const submitBtn = document.getElementById('btn-submit-exam');

  if (AppState.currentIndex === questions.length - 1) {
    if (AppState.mode === 'exam') {
      if (nextBtn) nextBtn.style.display = 'none';
      if (submitBtn) submitBtn.style.display = 'inline-flex';
    } else {
      if (nextBtn) {
        nextBtn.style.display = 'inline-flex';
        nextBtn.innerHTML = 'Complete Practice <i class="fa-solid fa-flag-checkered"></i>';
      }
      if (submitBtn) submitBtn.style.display = 'none';
    }
  } else {
    if (nextBtn) {
      nextBtn.style.display = 'inline-flex';
      nextBtn.innerHTML = 'Next <i class="fa-solid fa-chevron-right"></i>';
    }
    if (submitBtn) submitBtn.style.display = 'none';
  }

  updatePaletteActiveCell();
  updateNavLiveStats();
}

// Local Evaluator Fallback (guarantees instant feedback offline & on static hosting)
function evaluateAnswerLocally(question, selectedLetter) {
  const cleanSelected = String(selectedLetter).toUpperCase().trim();
  const isCorrect = cleanSelected === question.correctAnswer.toUpperCase();
  const selectedDistractorExplanation = question.distractors ? question.distractors[cleanSelected] : null;

  return {
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
  };
}

// Handle Option Selection
async function handleOptionSelect(selectedLetter) {
  const questions = AppState.activeQuestions;
  const q = questions[AppState.currentIndex];
  if (!q) return;

  try {
    if (window.soundEffects) window.soundEffects.playClick();
  } catch (e) {}

  // EXAM MODE SELECTION
  if (AppState.mode === 'exam') {
    AppState.userAnswers[q.id] = selectedLetter;
    renderCurrentQuestion();
    renderPalette();
    return;
  }

  // PRACTICE MODE SELECTION
  if (AppState.practiceEvaluations[q.id]) {
    return; // Already answered
  }

  AppState.userAnswers[q.id] = selectedLetter;

  // Evaluate directly on active shuffled question
  const evalData = evaluateAnswerLocally(q, selectedLetter);
  AppState.practiceEvaluations[q.id] = evalData;

  if (evalData.isCorrect) {
    try { if (window.soundEffects) window.soundEffects.playCorrect(); } catch (e) {}
    AppState.mistakeQuestionIds.delete(q.id);
  } else {
    try { if (window.soundEffects) window.soundEffects.playWrong(); } catch (e) {}
    AppState.mistakeQuestionIds.add(q.id);
  }

  persistStorage();
  renderCurrentQuestion();
  renderPalette();
}

// Render Instant Explanation Drawer
function renderExplanationDrawer(evalData, userChoice) {
  const header = document.getElementById('exp-header');
  const title = document.getElementById('exp-title');
  const subtitle = document.getElementById('exp-subtitle');
  const icon = document.getElementById('exp-status-icon');

  if (evalData.isCorrect) {
    if (header) header.className = 'exp-header correct';
    if (title) title.textContent = '🎉 Correct Answer!';
    if (subtitle) subtitle.textContent = `You selected (${evalData.correctAnswer}): "${evalData.correctOptionText}"`;
    if (icon) icon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  } else {
    if (header) header.className = 'exp-header wrong';
    if (title) title.textContent = '❌ Incorrect Attempt';
    if (subtitle) subtitle.textContent = `You selected (${userChoice}): "${evalData.selectedOptionText}" • Correct Answer is (${evalData.correctAnswer}): "${evalData.correctOptionText}"`;
    if (icon) icon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  }

  // Distractor Analysis (Why user selection was wrong)
  const distractorBox = document.getElementById('distractor-box');
  const distractorText = document.getElementById('distractor-text');
  if (!evalData.isCorrect && (evalData.selectedDistractorExplanation || (evalData.distractors && evalData.distractors[userChoice]))) {
    if (distractorText) distractorText.textContent = evalData.selectedDistractorExplanation || evalData.distractors[userChoice];
    if (distractorBox) distractorBox.style.display = 'block';
  } else {
    if (distractorBox) distractorBox.style.display = 'none';
  }

  // Mathematical Solution
  const solutionBox = document.getElementById('solution-box');
  const solutionText = document.getElementById('solution-text');
  if (evalData.solution) {
    if (solutionText) solutionText.textContent = evalData.solution;
    if (solutionBox) solutionBox.style.display = 'block';
  } else {
    if (solutionBox) solutionBox.style.display = 'none';
  }

  // Conceptual Explanation
  const conceptText = document.getElementById('concept-explanation-text');
  if (conceptText) conceptText.textContent = evalData.explanation;

  // Key Takeaway / Memory Formula
  const takeawayBox = document.getElementById('takeaway-box');
  const takeawayText = document.getElementById('takeaway-text');
  if (evalData.keyTakeaway) {
    if (takeawayText) takeawayText.textContent = evalData.keyTakeaway;
    if (takeawayBox) takeawayBox.style.display = 'flex';
  } else {
    if (takeawayBox) takeawayBox.style.display = 'none';
  }
}

// ==========================================================================
// 7. QUESTION PALETTE (1-100 GRID)
// ==========================================================================
function renderPalette() {
  const container = document.getElementById('palette-grid-container');
  if (!container) return;

  const countBadge = document.getElementById('palette-total-count');
  if (countBadge) countBadge.textContent = AppState.activeQuestions.length;

  const questions = AppState.activeQuestions;
  container.innerHTML = questions.map((q, idx) => {
    let statusClass = 'unvisited';
    const isCurrent = idx === AppState.currentIndex;
    const isFlagged = AppState.flaggedQuestions.has(q.id);
    const userChoice = AppState.userAnswers[q.id];
    const evalData = AppState.practiceEvaluations[q.id];

    if (AppState.mode === 'practice') {
      if (evalData) {
        statusClass = evalData.isCorrect ? 'answered-correct' : 'answered-wrong';
      }
    } else if (AppState.mode === 'exam') {
      if (userChoice) {
        statusClass = 'answered-neutral';
      }
    }

    if (isFlagged) {
      statusClass = 'flagged';
    }

    const currentClass = isCurrent ? 'current' : '';

    return `
      <button class="palette-cell ${statusClass} ${currentClass}" data-q-index="${idx}" title="Q${q.id}">
        ${idx + 1}
      </button>
    `;
  }).join('');
}

function updatePaletteActiveCell() {
  const cells = document.querySelectorAll('.palette-cell');
  cells.forEach((cell, idx) => {
    if (idx === AppState.currentIndex) {
      cell.classList.add('current');
    } else {
      cell.classList.remove('current');
    }
  });
}

function jumpToQuestion(idx) {
  if (idx >= 0 && idx < AppState.activeQuestions.length) {
    AppState.currentIndex = idx;
    renderCurrentQuestion();
  }
}

// ==========================================================================
// 8. EXAM SUBMISSION & LOCAL SCORING ENGINE
// ==========================================================================
function calculateLocalQuizResults(answers, timeSpentSeconds, mode, sectionFilter, questionIds = null) {
  let testQuestions = [];
  if (Array.isArray(questionIds) && questionIds.length > 0) {
    const idMap = new Map(AppState.allQuestions.map(q => [q.id, q]));
    testQuestions = questionIds.map(id => idMap.get(parseInt(id, 10))).filter(Boolean);
  } else if (AppState.activeQuestions && AppState.activeQuestions.length > 0) {
    testQuestions = [...AppState.activeQuestions];
  } else if (sectionFilter && sectionFilter !== 'ALL') {
    testQuestions = AppState.allQuestions.filter(q => q.sectionId.toUpperCase() === sectionFilter.toUpperCase());
  } else {
    testQuestions = [...AppState.allQuestions];
  }

  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;
  const reviewList = [];
  const sectionStats = {};

  AppState.sections.forEach(sec => {
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

  const recommendations = [];
  activeSections.forEach(s => {
    if (s.percentage < 70) {
      recommendations.push({
        sectionId: s.id,
        title: s.title,
        percentage: s.percentage,
        advice: `Focus revision on ${s.title}. Review formulas, definitions, and key distractor traps in this unit.`
      });
    }
  });

  return {
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
    recommendations,
    reviewList,
    submittedAt: new Date().toISOString()
  };
}

async function submitFullQuiz() {
  stopTimer();

  let results = null;
  const activeIds = (AppState.activeQuestions && AppState.activeQuestions.length > 0) 
    ? AppState.activeQuestions.map(q => q.id) 
    : Object.keys(AppState.userAnswers).map(Number);

  try {
    const payload = {
      answers: AppState.userAnswers,
      timeSpentSeconds: AppState.timeSpentSeconds,
      mode: AppState.mode,
      sectionFilter: AppState.activeSectionFilter,
      questionIds: activeIds
    };

    const res = await fetch('/api/submit-quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        results = data.results;
      }
    }
  } catch (err) {
    // Network or static deployment - evaluate locally
  }

  if (!results) {
    results = calculateLocalQuizResults(
      AppState.userAnswers,
      AppState.timeSpentSeconds,
      AppState.mode,
      AppState.activeSectionFilter,
      activeIds
    );
  }

  AppState.lastSubmissionResults = results;
  
  // Update mistake bank
  results.reviewList.forEach(item => {
    if (!item.isCorrect && item.isAnswered) {
      AppState.mistakeQuestionIds.add(item.id);
    } else if (item.isCorrect) {
      AppState.mistakeQuestionIds.delete(item.id);
    }
  });
  persistStorage();

  renderResultsView(results);
  showView('results');

  // Trigger fanfare and celebration for scores >= 75%
  if (results.scorePercentage >= 75) {
    try { if (window.soundEffects) window.soundEffects.playFanfare(); } catch (e) {}
    triggerConfetti();
  }
}

function renderResultsView(results) {
  // Score circle
  const scorePercent = results.scorePercentage;
  const scoreEl = document.getElementById('res-score-percent');
  const fracEl = document.getElementById('res-score-fraction');
  if (scoreEl) scoreEl.textContent = `${scorePercent}%`;
  if (fracEl) fracEl.textContent = `${results.correctCount} / ${results.totalQuestions}`;

  const circleBar = document.getElementById('results-circle-bar');
  if (circleBar) {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (scorePercent / 100) * circumference;
    circleBar.style.strokeDasharray = circumference;
    circleBar.style.strokeDashoffset = offset;
    circleBar.style.stroke = results.badgeColor;
  }

  // Grade pill
  const gradePill = document.getElementById('res-grade-pill');
  if (gradePill) {
    gradePill.textContent = `Grade: ${results.grade}`;
    gradePill.style.color = results.badgeColor;
    gradePill.style.borderColor = results.badgeColor;
  }

  // Stats Grid
  const cEl = document.getElementById('res-correct-count');
  const iEl = document.getElementById('res-incorrect-count');
  const tEl = document.getElementById('res-time-spent');
  const sEl = document.getElementById('res-avg-speed');
  const mEl = document.getElementById('res-missed-num');

  if (cEl) cEl.textContent = results.correctCount;
  if (iEl) iEl.textContent = results.incorrectCount;
  if (tEl) tEl.textContent = results.timeFormatted;
  if (sEl) sEl.textContent = results.avgTimePerQuestion;
  if (mEl) mEl.textContent = results.incorrectCount;

  // Section Breakdown Bars
  const secContainer = document.getElementById('res-sections-list');
  if (secContainer) {
    secContainer.innerHTML = results.sectionBreakdown.map(s => `
      <div class="sec-stat-row">
        <div class="sec-stat-header">
          <span>${s.title}</span>
          <span><strong>${s.correct} / ${s.total}</strong> (${s.percentage}%)</span>
        </div>
        <div class="sec-stat-bar-bg">
          <div class="sec-stat-bar-fill" style="width: ${s.percentage}%; background-color: ${s.color}"></div>
        </div>
      </div>
    `).join('');
  }

  // Recommendations
  const recsContainer = document.getElementById('res-recs-container');
  const recsList = document.getElementById('res-recs-list');
  if (results.recommendations && results.recommendations.length > 0) {
    if (recsContainer) recsContainer.style.display = 'block';
    if (recsList) {
      recsList.innerHTML = results.recommendations.map(r => `
        <div class="rec-card">
          <i class="fa-solid fa-lightbulb"></i>
          <div>
            <strong>${r.title} (${r.percentage}%)</strong>
            <p>${r.advice}</p>
          </div>
        </div>
      `).join('');
    }
  } else {
    if (recsContainer) recsContainer.style.display = 'none';
  }

  // Render Full Review List
  renderReviewQuestionsList(results.reviewList, 'ALL');
  updateReviewCounts(results.reviewList);
}

function updateReviewCounts(reviewList) {
  const allEl = document.getElementById('rev-count-all');
  const wrongEl = document.getElementById('rev-count-wrong');
  const corrEl = document.getElementById('rev-count-correct');
  const bmEl = document.getElementById('rev-count-bookmarks');

  if (allEl) allEl.textContent = reviewList.length;
  if (wrongEl) wrongEl.textContent = reviewList.filter(q => !q.isCorrect).length;
  if (corrEl) corrEl.textContent = reviewList.filter(q => q.isCorrect).length;
  if (bmEl) bmEl.textContent = reviewList.filter(q => AppState.bookmarkedQuestions.has(q.id)).length;
}

function renderReviewQuestionsList(reviewList, filter = 'ALL') {
  const container = document.getElementById('res-review-container');
  if (!container) return;

  let filtered = [...reviewList];
  if (filter === 'INCORRECT') {
    filtered = filtered.filter(q => !q.isCorrect);
  } else if (filter === 'CORRECT') {
    filtered = filtered.filter(q => q.isCorrect);
  } else if (filter === 'BOOKMARKED') {
    filtered = filtered.filter(q => AppState.bookmarkedQuestions.has(q.id));
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div class="search-empty">No questions match the filter "${filter}".</div>`;
    return;
  }

  container.innerHTML = filtered.map(q => {
    const isCorrect = q.isCorrect;
    const isUnanswered = !q.isAnswered;
    const cardClass = isCorrect ? 'is-correct' : (isUnanswered ? 'is-unanswered' : 'is-incorrect');
    const statusText = isCorrect ? 'Correct' : (isUnanswered ? 'Unanswered' : 'Incorrect');
    const statusClass = isCorrect ? 'correct' : (isUnanswered ? 'unanswered' : 'incorrect');

    const optionsHtml = ['A', 'B', 'C', 'D'].map(letter => {
      let optClass = 'rc-opt';
      if (letter === q.correctAnswer) optClass += ' opt-correct';
      if (!isCorrect && letter === q.userSelected) optClass += ' opt-wrong-choice';

      return `<div class="${optClass}"><strong>${letter}:</strong> ${q.options[letter]}</div>`;
    }).join('');

    return `
      <div class="review-card ${cardClass}">
        <div class="rc-top">
          <span class="rc-num">Question #${q.id} • ${q.sectionTitle}</span>
          <span class="rc-status-pill ${statusClass}">${statusText}</span>
        </div>
        <h4 class="rc-question">${q.question}</h4>
        <div class="rc-options">${optionsHtml}</div>

        <button class="rc-details-toggle" data-toggle-id="rc-dd-${q.id}">
          <i class="fa-solid fa-chevron-down"></i> View Detailed Solution & Concept Explanation
        </button>

        <div class="rc-deep-dive" id="rc-dd-${q.id}" style="display: none;">
          ${q.solution ? `
            <div class="exp-card solution-card">
              <div class="exp-card-label"><i class="fa-solid fa-calculator"></i> Mathematical Derivation:</div>
              <pre class="exp-math-code">${q.solution}</pre>
            </div>
          ` : ''}
          <div class="exp-card concept-card">
            <div class="exp-card-label"><i class="fa-solid fa-lightbulb"></i> Conceptual Reasoning:</div>
            <div class="exp-card-body">${q.explanation}</div>
          </div>
          ${q.keyTakeaway ? `
            <div class="exp-takeaway">
              <i class="fa-solid fa-key"></i>
              <div><strong>Key Formula:</strong> ${q.keyTakeaway}</div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function toggleReviewDeepDive(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = el.style.display === 'none' ? 'flex' : 'none';
  }
}

// ==========================================================================
// 9. FLASHCARD ENGINE (3D Flip)
// ==========================================================================
function startFlashcardsMode(sectionFilter = 'ALL') {
  AppState.mode = 'flashcards';
  let list = [...AppState.allQuestions];
  if (sectionFilter !== 'ALL') {
    list = list.filter(q => q.sectionId.toUpperCase() === sectionFilter.toUpperCase());
  }

  AppState.fcQuestions = prepareQuestionBatch(list, true, false);
  AppState.fcIndex = 0;

  showView('flashcards');
  renderFlashcard();
}

function renderFlashcard() {
  const questions = AppState.fcQuestions;
  if (!questions || questions.length === 0) return;

  const card = document.getElementById('active-flashcard');
  if (card) card.classList.remove('flipped');

  const q = questions[AppState.fcIndex];
  if (!q) return;

  // Counters
  const cEl = document.getElementById('fc-current-idx');
  const tEl = document.getElementById('fc-total-count');
  const nfEl = document.getElementById('fc-num-front');
  const nbEl = document.getElementById('fc-num-back');

  if (cEl) cEl.textContent = AppState.fcIndex + 1;
  if (tEl) tEl.textContent = questions.length;
  if (nfEl) nfEl.textContent = q.id;
  if (nbEl) nbEl.textContent = q.id;

  // Front
  const bFront = document.getElementById('fc-badge-front');
  const qFront = document.getElementById('fc-question-text');
  const optPreview = document.getElementById('fc-options-preview');

  if (bFront) bFront.textContent = q.sectionTitle || `Section ${q.sectionId}`;
  if (qFront) qFront.textContent = q.question;
  if (optPreview) {
    optPreview.innerHTML = ['A', 'B', 'C', 'D'].map(l => `<div><strong>${l}:</strong> ${q.options[l]}</div>`).join('');
  }

  // Back
  const corrLetter = document.getElementById('fc-correct-letter');
  const corrText = document.getElementById('fc-correct-text');
  if (corrLetter) corrLetter.textContent = q.correctAnswer;
  if (corrText) corrText.textContent = q.options[q.correctAnswer];
  
  const mathBox = document.getElementById('fc-math-box');
  const mathText = document.getElementById('fc-math-text');
  if (q.solution) {
    if (mathText) mathText.textContent = q.solution;
    if (mathBox) mathBox.style.display = 'block';
  } else {
    if (mathBox) mathBox.style.display = 'none';
  }

  const expText = document.getElementById('fc-explanation-text');
  const takeText = document.getElementById('fc-takeaway-text');
  if (expText) expText.textContent = q.explanation;
  if (takeText) takeText.textContent = q.keyTakeaway || 'Master this fundamental concept.';
}

function flipActiveFlashcard() {
  const card = document.getElementById('active-flashcard');
  if (card) {
    card.classList.toggle('flipped');
    try { if (window.soundEffects) window.soundEffects.playClick(); } catch (e) {}
  }
}

// ==========================================================================
// 10. SEARCH ENGINE
// ==========================================================================
function searchQuestions(query) {
  const listContainer = document.getElementById('search-results-list');
  if (!listContainer) return;

  const q = query.toLowerCase().trim();
  if (q.length === 0) {
    listContainer.innerHTML = '<div class="search-empty">Type keywords to search across all 100 MCQs and mathematical explanations...</div>';
    return;
  }

  const results = AppState.allQuestions.filter(item =>
    item.question.toLowerCase().includes(q) ||
    (item.explanation && item.explanation.toLowerCase().includes(q)) ||
    (item.solution && item.solution.toLowerCase().includes(q)) ||
    (item.tags && item.tags.some(t => t.toLowerCase().includes(q))) ||
    Object.values(item.options).some(opt => opt.toLowerCase().includes(q))
  );

  if (results.length === 0) {
    listContainer.innerHTML = `<div class="search-empty">No results found for "${query}".</div>`;
    return;
  }

  listContainer.innerHTML = results.map(item => `
    <div class="search-result-item" data-q-id="${item.id}" role="button" tabindex="0">
      <div class="s-res-top">
        <span>Q${item.id} • ${item.sectionTitle}</span>
        <span>${item.difficulty || 'Standard'}</span>
      </div>
      <div class="s-res-q">${item.question}</div>
    </div>
  `).join('');
}

function openQuestionFromSearch(questionId) {
  const searchModal = document.getElementById('modal-search');
  if (searchModal) searchModal.style.display = 'none';
  const targetIdx = AppState.allQuestions.findIndex(q => q.id === questionId);
  if (targetIdx !== -1) {
    AppState.mode = 'practice';
    AppState.activeQuestions = [...AppState.allQuestions];
    AppState.currentIndex = targetIdx;
    showView('quiz');
    renderCurrentQuestion();
    renderPalette();
  }
}

// ==========================================================================
// 11. TIMERS & UTILITIES
// ==========================================================================
function startTimer() {
  stopTimer();
  AppState.timerInterval = setInterval(() => {
    AppState.timeSpentSeconds++;

    let displayStr = '';
    if (AppState.isExamTimer) {
      const remaining = Math.max(0, AppState.examTimeLimitSeconds - AppState.timeSpentSeconds);
      const mins = Math.floor(remaining / 60);
      const secs = remaining % 60;
      displayStr = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;

      if (remaining === 0) {
        alert('⏰ Time limit reached! Submitting exam automatically...');
        submitFullQuiz();
      }
    } else {
      const mins = Math.floor(AppState.timeSpentSeconds / 60);
      const secs = AppState.timeSpentSeconds % 60;
      displayStr = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    const timerDisplay = document.getElementById('quiz-timer-display');
    const navTimer = document.getElementById('stat-timer');
    if (timerDisplay) timerDisplay.textContent = displayStr;
    if (navTimer) navTimer.textContent = displayStr;
  }, 1000);
}

function stopTimer() {
  if (AppState.timerInterval) {
    clearInterval(AppState.timerInterval);
    AppState.timerInterval = null;
  }
}

function updateNavLiveStats() {
  const correctCount = Object.values(AppState.practiceEvaluations).filter(e => e.isCorrect).length;
  const wrongCount = Object.values(AppState.practiceEvaluations).filter(e => !e.isCorrect).length;
  
  const cEl = document.getElementById('stat-correct-count');
  const wEl = document.getElementById('stat-wrong-count');
  if (cEl) cEl.textContent = correctCount;
  if (wEl) wEl.textContent = wrongCount;
}

function updateBookmarkButton(questionId) {
  const isBookmarked = AppState.bookmarkedQuestions.has(questionId);
  const icon = document.getElementById('icon-bookmark');
  if (icon) {
    icon.className = isBookmarked ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark';
    icon.style.color = isBookmarked ? '#f59e0b' : 'inherit';
  }
}

function updateFlagButton(questionId) {
  const isFlagged = AppState.flaggedQuestions.has(questionId);
  const icon = document.getElementById('flag-icon');
  const text = document.getElementById('flag-text');
  if (icon) {
    icon.className = isFlagged ? 'fa-solid fa-flag' : 'fa-regular fa-flag';
    icon.style.color = isFlagged ? '#f59e0b' : 'inherit';
  }
  if (text) {
    text.textContent = isFlagged ? 'Flagged' : 'Mark for Review';
  }
}

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// ==========================================================================
// 12. THEME & AUDIO INITIALIZERS
// ==========================================================================
function initTheme() {
  const saved = localStorage.getItem('pa_quiz_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('pa_quiz_theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  }
}

function initAudioControl() {
  const icon = document.getElementById('sound-icon');
  if (icon && window.soundEffects) {
    icon.className = window.soundEffects.enabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
  }
}

function toggleAudio() {
  if (window.soundEffects) {
    const enabled = window.soundEffects.toggle();
    const icon = document.getElementById('sound-icon');
    if (icon) {
      icon.className = enabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
    }
  }
}

// ==========================================================================
// 13. KEYBOARD SHORTCUTS
// ==========================================================================
function initKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop').forEach(m => m.style.display = 'none');
      }
      return;
    }

    if (e.key === '/') {
      e.preventDefault();
      const modal = document.getElementById('modal-search');
      const input = document.getElementById('global-search-input');
      if (modal) modal.style.display = 'flex';
      if (input) input.focus();
      return;
    }

    if (AppState.currentView === 'quiz') {
      if (['1', 'a', 'A'].includes(e.key)) handleOptionSelect('A');
      if (['2', 'b', 'B'].includes(e.key)) handleOptionSelect('B');
      if (['3', 'c', 'C'].includes(e.key)) handleOptionSelect('C');
      if (['4', 'd', 'D'].includes(e.key)) handleOptionSelect('D');

      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (AppState.currentIndex < AppState.activeQuestions.length - 1) {
          AppState.currentIndex++;
          renderCurrentQuestion();
        }
      } else if (e.key === 'ArrowLeft') {
        if (AppState.currentIndex > 0) {
          AppState.currentIndex--;
          renderCurrentQuestion();
        }
      }
    }

    if (AppState.currentView === 'flashcards') {
      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        flipActiveFlashcard();
      } else if (e.key === 'ArrowRight') {
        if (AppState.fcIndex < AppState.fcQuestions.length - 1) {
          AppState.fcIndex++;
          renderFlashcard();
        }
      } else if (e.key === 'ArrowLeft') {
        if (AppState.fcIndex > 0) {
          AppState.fcIndex--;
          renderFlashcard();
        }
      }
    }
  });
}

// ==========================================================================
// 14. EVENT LISTENERS & BULLETPROOF EVENT DELEGATION
// ==========================================================================
function setupEventListeners() {
  // Navigation Bar
  document.getElementById('btn-brand')?.addEventListener('click', () => showView('dashboard'));
  document.getElementById('btn-home')?.addEventListener('click', () => showView('dashboard'));
  document.getElementById('btn-theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('btn-sound-toggle')?.addEventListener('click', toggleAudio);
  document.getElementById('btn-search-toggle')?.addEventListener('click', () => {
    const modal = document.getElementById('modal-search');
    const input = document.getElementById('global-search-input');
    if (modal) modal.style.display = 'flex';
    if (input) input.focus();
  });

  // Dashboard Mode Cards
  document.getElementById('card-mode-practice')?.addEventListener('click', () => startPracticeMode('ALL', false));
  document.getElementById('card-mode-exam')?.addEventListener('click', () => startExamMode('ALL', 100, 60, true));
  document.getElementById('card-mode-flashcards')?.addEventListener('click', () => startFlashcardsMode('ALL'));
  document.getElementById('card-mode-mistakes')?.addEventListener('click', startMistakesDrill);
  document.getElementById('btn-open-custom-builder')?.addEventListener('click', () => {
    const m = document.getElementById('modal-custom-builder');
    if (m) m.style.display = 'flex';
  });

  // Event Delegation for Section Cards in Dashboard
  const secContainer = document.getElementById('dashboard-sections-container');
  if (secContainer) {
    secContainer.addEventListener('click', (e) => {
      const card = e.target.closest('.section-card');
      if (card) {
        const secId = card.getAttribute('data-section-id');
        if (secId) startSectionPractice(secId);
      }
    });
  }

  // Event Delegation for Options Container in Quiz View
  const optionsContainer = document.getElementById('options-container');
  if (optionsContainer) {
    optionsContainer.addEventListener('click', (e) => {
      const optCard = e.target.closest('.option-card');
      if (optCard) {
        const optLetter = optCard.getAttribute('data-option');
        if (optLetter) handleOptionSelect(optLetter);
      }
    });
  }

  // Event Delegation for Question Palette Grid
  const paletteContainer = document.getElementById('palette-grid-container');
  if (paletteContainer) {
    paletteContainer.addEventListener('click', (e) => {
      const cell = e.target.closest('.palette-cell');
      if (cell) {
        const idx = parseInt(cell.getAttribute('data-q-index'), 10);
        if (!isNaN(idx)) jumpToQuestion(idx);
      }
    });
  }

  // Event Delegation for Search Results
  const searchResultsContainer = document.getElementById('search-results-list');
  if (searchResultsContainer) {
    searchResultsContainer.addEventListener('click', (e) => {
      const item = e.target.closest('.search-result-item');
      if (item) {
        const qId = parseInt(item.getAttribute('data-q-id'), 10);
        if (!isNaN(qId)) openQuestionFromSearch(qId);
      }
    });
  }

  // Event Delegation for Results Review Deep Dives
  const reviewContainer = document.getElementById('res-review-container');
  if (reviewContainer) {
    reviewContainer.addEventListener('click', (e) => {
      const toggleBtn = e.target.closest('.rc-details-toggle');
      if (toggleBtn) {
        const targetId = toggleBtn.getAttribute('data-toggle-id');
        if (targetId) toggleReviewDeepDive(targetId);
      }
    });
  }

  // Quiz Navigation Buttons
  document.getElementById('btn-prev-question')?.addEventListener('click', () => {
    if (AppState.currentIndex > 0) {
      AppState.currentIndex--;
      renderCurrentQuestion();
    }
  });

  document.getElementById('btn-next-question')?.addEventListener('click', () => {
    if (AppState.currentIndex < AppState.activeQuestions.length - 1) {
      AppState.currentIndex++;
      renderCurrentQuestion();
    } else if (AppState.mode === 'practice') {
      submitFullQuiz();
    }
  });

  document.getElementById('btn-quiz-back')?.addEventListener('click', () => showView('dashboard'));

  // Flag for review
  document.getElementById('btn-flag-review')?.addEventListener('click', () => {
    const q = AppState.activeQuestions[AppState.currentIndex];
    if (!q) return;
    if (AppState.flaggedQuestions.has(q.id)) {
      AppState.flaggedQuestions.delete(q.id);
    } else {
      AppState.flaggedQuestions.add(q.id);
    }
    updateFlagButton(q.id);
    renderPalette();
  });

  // Bookmark Toggle
  document.getElementById('btn-quiz-bookmark')?.addEventListener('click', () => {
    const q = AppState.activeQuestions[AppState.currentIndex];
    if (!q) return;
    if (AppState.bookmarkedQuestions.has(q.id)) {
      AppState.bookmarkedQuestions.delete(q.id);
    } else {
      AppState.bookmarkedQuestions.add(q.id);
    }
    persistStorage();
    updateBookmarkButton(q.id);
  });

  // Note Modal
  document.getElementById('btn-quiz-notes')?.addEventListener('click', () => {
    const q = AppState.activeQuestions[AppState.currentIndex];
    if (!q) return;
    const preview = document.getElementById('note-q-preview');
    const textarea = document.getElementById('note-textarea');
    const modal = document.getElementById('modal-note');
    if (preview) preview.textContent = `Q${q.id}: ${q.question}`;
    if (textarea) textarea.value = AppState.notes[q.id] || '';
    if (modal) modal.style.display = 'flex';
  });

  document.getElementById('btn-save-note')?.addEventListener('click', () => {
    const q = AppState.activeQuestions[AppState.currentIndex];
    if (!q) return;
    const textarea = document.getElementById('note-textarea');
    const modal = document.getElementById('modal-note');
    if (textarea) AppState.notes[q.id] = textarea.value;
    persistStorage();
    if (modal) modal.style.display = 'none';
  });

  document.getElementById('btn-cancel-note')?.addEventListener('click', () => {
    const modal = document.getElementById('modal-note');
    if (modal) modal.style.display = 'none';
  });
  document.getElementById('btn-close-note')?.addEventListener('click', () => {
    const modal = document.getElementById('modal-note');
    if (modal) modal.style.display = 'none';
  });

  // Question Palette Sidebar Toggle
  document.getElementById('btn-quiz-palette-toggle')?.addEventListener('click', () => {
    const palette = document.getElementById('quiz-palette-sidebar');
    palette?.classList.toggle('mobile-open');
  });
  document.getElementById('btn-close-palette')?.addEventListener('click', () => {
    document.getElementById('quiz-palette-sidebar')?.classList.remove('mobile-open');
  });

  // Exam Submit Trigger
  document.getElementById('btn-submit-exam')?.addEventListener('click', () => {
    const total = AppState.activeQuestions.length;
    const answered = Object.keys(AppState.userAnswers).length;
    const unanswered = total - answered;
    const flagged = AppState.flaggedQuestions.size;

    const ansEl = document.getElementById('conf-answered-count');
    const unansEl = document.getElementById('conf-unanswered-count');
    const flagEl = document.getElementById('conf-flagged-count');
    const modal = document.getElementById('modal-submit-confirm');

    if (ansEl) ansEl.textContent = answered;
    if (unansEl) unansEl.textContent = unanswered;
    if (flagEl) flagEl.textContent = flagged;
    if (modal) modal.style.display = 'flex';
  });

  document.getElementById('btn-cancel-submit')?.addEventListener('click', () => {
    const modal = document.getElementById('modal-submit-confirm');
    if (modal) modal.style.display = 'none';
  });
  document.getElementById('btn-close-confirm')?.addEventListener('click', () => {
    const modal = document.getElementById('modal-submit-confirm');
    if (modal) modal.style.display = 'none';
  });
  document.getElementById('btn-confirm-final-submit')?.addEventListener('click', () => {
    const modal = document.getElementById('modal-submit-confirm');
    if (modal) modal.style.display = 'none';
    submitFullQuiz();
  });

  // Results Actions
  document.getElementById('btn-res-retry-mistakes')?.addEventListener('click', startMistakesDrill);
  document.getElementById('btn-res-retake-all')?.addEventListener('click', () => {
    const qCount = AppState.activeQuestions.length || 100;
    if (AppState.mode === 'practice') {
      startPracticeMode(AppState.activeSectionFilter, false, qCount);
    } else {
      startExamMode(AppState.activeSectionFilter, qCount, Math.max(10, Math.round(qCount * 0.75)), true);
    }
  });
  document.getElementById('btn-res-print')?.addEventListener('click', () => window.print());

  // Results Review Filter Tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-tab');
      if (!btn) return;
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'ALL';
      if (AppState.lastSubmissionResults) {
        renderReviewQuestionsList(AppState.lastSubmissionResults.reviewList, filter);
      }
    });
  });

  // Flashcards Controls
  document.getElementById('active-flashcard')?.addEventListener('click', flipActiveFlashcard);
  document.getElementById('btn-fc-back')?.addEventListener('click', () => showView('dashboard'));
  document.getElementById('btn-fc-shuffle')?.addEventListener('click', () => {
    AppState.fcQuestions = prepareQuestionBatch(AppState.fcQuestions, true, true);
    AppState.fcIndex = 0;
    renderFlashcard();
  });

  document.getElementById('btn-fc-prev')?.addEventListener('click', () => {
    if (AppState.fcIndex > 0) {
      AppState.fcIndex--;
      renderFlashcard();
    }
  });

  document.getElementById('btn-fc-next')?.addEventListener('click', () => {
    if (AppState.fcIndex < AppState.fcQuestions.length - 1) {
      AppState.fcIndex++;
      renderFlashcard();
    }
  });

  document.getElementById('btn-fc-hard')?.addEventListener('click', () => {
    const q = AppState.fcQuestions[AppState.fcIndex];
    if (q) {
      AppState.mistakeQuestionIds.add(q.id);
      persistStorage();
    }
    if (AppState.fcIndex < AppState.fcQuestions.length - 1) {
      AppState.fcIndex++;
      renderFlashcard();
    }
  });

  document.getElementById('btn-fc-easy')?.addEventListener('click', () => {
    const q = AppState.fcQuestions[AppState.fcIndex];
    if (q) {
      AppState.mistakeQuestionIds.delete(q.id);
      persistStorage();
    }
    if (AppState.fcIndex < AppState.fcQuestions.length - 1) {
      AppState.fcIndex++;
      renderFlashcard();
    }
  });

  // Global Search Input
  document.getElementById('global-search-input')?.addEventListener('input', (e) => {
    searchQuestions(e.target.value);
  });
  document.getElementById('btn-close-search')?.addEventListener('click', () => {
    const modal = document.getElementById('modal-search');
    if (modal) modal.style.display = 'none';
  });

  // Custom Quiz Builder
  document.getElementById('btn-cancel-builder')?.addEventListener('click', () => {
    const modal = document.getElementById('modal-custom-builder');
    if (modal) modal.style.display = 'none';
  });
  document.getElementById('btn-close-builder')?.addEventListener('click', () => {
    const modal = document.getElementById('modal-custom-builder');
    if (modal) modal.style.display = 'none';
  });
  document.getElementById('btn-start-custom-quiz')?.addEventListener('click', () => {
    const secSelect = document.getElementById('builder-section-select');
    const section = secSelect ? secSelect.value : 'ALL';
    const countRadio = document.querySelector('input[name="builder-count"]:checked');
    const count = countRadio ? parseInt(countRadio.value, 10) : 25;
    const modeRadio = document.querySelector('input[name="builder-mode"]:checked');
    const mode = modeRadio ? modeRadio.value : 'practice';
    const shuffleBox = document.getElementById('builder-shuffle');
    const shuffle = shuffleBox ? shuffleBox.checked : false;

    const modal = document.getElementById('modal-custom-builder');
    if (modal) modal.style.display = 'none';

    if (mode === 'practice') {
      startPracticeMode(section, shuffle, count);
    } else {
      startExamMode(section, count, Math.max(10, Math.round(count * 0.75)), shuffle);
    }
  });

  // Close modals when clicking backdrop outside container
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.style.display = 'none';
      }
    });
  });
}

// ==========================================================================
// 15. ATTACH GLOBAL EXPORTS TO WINDOW
// ==========================================================================
window.AppState = AppState;
window.showView = showView;
window.startPracticeMode = startPracticeMode;
window.startExamMode = startExamMode;
window.startFlashcardsMode = startFlashcardsMode;
window.startMistakesDrill = startMistakesDrill;
window.startSectionPractice = startSectionPractice;
window.handleOptionSelect = handleOptionSelect;
window.jumpToQuestion = jumpToQuestion;
window.openQuestionFromSearch = openQuestionFromSearch;
window.toggleReviewDeepDive = toggleReviewDeepDive;
window.flipActiveFlashcard = flipActiveFlashcard;
window.submitFullQuiz = submitFullQuiz;
window.toggleTheme = toggleTheme;
window.toggleAudio = toggleAudio;
