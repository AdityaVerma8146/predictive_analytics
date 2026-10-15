/**
 * Predictive Analytics 100 MCQs Quiz Application - Core Client Engine
 * Fully resilient for both full-stack (Node/Express) and static deployments (Vercel, Netlify, GitHub Pages).
 */

// ==========================================================================
// 1. GLOBAL APPLICATION STATE
// ==========================================================================
const AppState = {
  // App Config & Data
  currentUnit: 'unit1',
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

  // Initialize Auth, Analytics & Leaderboard Engines
  if (typeof AuthManager !== 'undefined') AuthManager.init();
  if (typeof AnalyticsTracker !== 'undefined') AnalyticsTracker.init();
  if (typeof LeaderboardManager !== 'undefined') LeaderboardManager.init();

  // Attach all event listeners immediately so clicks work instantly!
  setupEventListeners();

  // Render initial dashboard immediately from local dataset
  renderSectionCards();
  renderDashboard();
  updateMasteryBadge();
  updateCustomBuilderSections();

  // Track page viewed
  if (typeof AnalyticsTracker !== 'undefined') {
    AnalyticsTracker.track('page_viewed', '/dashboard', 'User visited Predictive Analytics Mastery platform');
  }

  // Track initial visit in Vercel Analytics
  trackVercelEvent('App_Initialized', { unit: AppState.currentUnit });

  // Handle direct client-side deep links or refresh on route
  try {
    const directRoute = window.location.pathname.replace(/^\/+|\/+$/g, '');
    if (['quiz', 'results', 'flashcards'].includes(directRoute)) {
      showView(directRoute, true);
    }
  } catch (e) {}

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
// 2.5 VERCEL WEB ANALYTICS CLIENT INTEGRATION
// ==========================================================================
/**
 * Safe client-side wrapper for Vercel Web Analytics.
 * Compatible with the official static HTML integration (window.va / window.vaq queue API).
 * - Standard web analytics (unique visitors, page views, referrers, device/browser, country)
 *   are automatically captured by /_vercel/insights/script.js once enabled in Vercel.
 * - Custom button/interaction events are safely dispatched via window.va('event', ...).
 *   (Note: Custom events require a Vercel Pro or Enterprise plan to be ingested in dashboard;
 *   on the free Hobby plan, they execute cleanly without error or disruption).
 * - Sensitive information (passwords, tokens, emails, student names) is strictly excluded.
 */
function trackVercelEvent(eventName, eventData) {
  if (typeof window !== 'undefined' && typeof window.va === 'function') {
    try {
      if (eventData && typeof eventData === 'object') {
        window.va('event', { name: eventName, ...eventData });
      } else {
        window.va('event', { name: eventName });
      }
    } catch (e) {
      // Fail silently to never disrupt application execution
    }
  }
}

// ==========================================================================
// 3. NAVIGATION & VIEW ROUTING
// ==========================================================================
function showView(viewName, skipPush = false) {
  AppState.currentView = viewName;

  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  const target = document.getElementById(`view-${viewName}`);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update URL via pushState so Vercel Web Analytics automatically tracks client-side navigation
  if (!skipPush) {
    try {
      const routePath = viewName === 'dashboard' ? '/' : `/${viewName}`;
      if (window.location.pathname !== routePath) {
        window.history.pushState({ view: viewName }, '', routePath);
      }
    } catch (e) {}
  }

  // Record SPA Route change in Vercel Analytics
  trackVercelEvent('View_Navigated', { view: viewName });

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

  trackVercelEvent('Quiz_Started', {
    mode: 'practice',
    unit: AppState.currentUnit,
    filter: sectionFilter,
    count: list.length
  });

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

  trackVercelEvent('Quiz_Started', {
    mode: 'exam',
    unit: AppState.currentUnit,
    filter: sectionFilter,
    count: list.length,
    durationMins: effectiveDuration
  });

  showView('quiz');
  renderCurrentQuestion();
  renderPalette();
  startTimer();
}

function startSectionPractice(sectionId) {
  trackVercelEvent('Quiz_Started', {
    mode: 'section',
    section: sectionId,
    unit: AppState.currentUnit
  });
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

  trackVercelEvent('Quiz_Started', {
    mode: 'mistakes_drill',
    unit: AppState.currentUnit,
    count: list.length
  });

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
  if (AppState.activeQuestions && AppState.activeQuestions.length > 0) {
    testQuestions = [...AppState.activeQuestions];
  } else if (Array.isArray(questionIds) && questionIds.length > 0) {
    const idMap = new Map(AppState.allQuestions.map(q => [q.id, q]));
    testQuestions = questionIds.map(id => idMap.get(parseInt(id, 10))).filter(Boolean);
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
      unit: AppState.currentUnit,
      answers: AppState.userAnswers,
      timeSpentSeconds: AppState.timeSpentSeconds,
      mode: AppState.mode,
      sectionFilter: AppState.activeSectionFilter,
      questionIds: activeIds,
      clientQuestions: AppState.activeQuestions
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
  
  // Track submission event
  if (typeof AnalyticsTracker !== 'undefined') {
    AnalyticsTracker.track('exam_submitted', '/quiz', `Submitted ${AppState.currentUnit.toUpperCase()} (${results.correctCount}/${results.totalQuestions} - ${results.scorePercentage}%)`, 'Submit Exam Button');
  }

  // Track submission in Vercel Analytics
  trackVercelEvent('Quiz_Submitted', {
    mode: AppState.mode,
    unit: AppState.currentUnit,
    scorePercentage: results.scorePercentage,
    correctCount: results.correctCount,
    totalQuestions: results.totalQuestions,
    passed: results.isPassed || (results.scorePercentage >= 50)
  });
  
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

  // Check if student qualifies for University Top 25 Performers Leaderboard
  if (typeof LeaderboardManager !== 'undefined') {
    LeaderboardManager.checkAndPromptRecord(results);
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

  trackVercelEvent('Flashcards_Started', {
    unit: AppState.currentUnit,
    filter: sectionFilter,
    count: list.length
  });

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
// 13.5 MULTI-UNIT SYLLABUS MANAGEMENT & REVISION SHEET
// ==========================================================================
function escapeHtml(str) {
  if (typeof str !== 'string') return str == null ? '' : String(str);
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function switchUnit(unitKey) {
  if (unitKey === 'unit3') {
    const modal3 = document.getElementById('modal-unit3');
    if (modal3) modal3.style.display = 'flex';
    if (typeof AnalyticsTracker !== 'undefined') {
      AnalyticsTracker.track('button_clicked', window.location.pathname, 'Attempted to access Unit 3 (Coming Soon)');
    }
    return;
  }

  if (unitKey !== 'unit1' && unitKey !== 'unit2') return;

  AppState.currentUnit = unitKey;

  // Retrieve unit data from window.PREDICTIVE_ANALYTICS_DATA_UNITS
  const unitData = (window.PREDICTIVE_ANALYTICS_DATA_UNITS && window.PREDICTIVE_ANALYTICS_DATA_UNITS[unitKey]) 
    ? window.PREDICTIVE_ANALYTICS_DATA_UNITS[unitKey] 
    : null;

  if (unitData) {
    AppState.allQuestions = [...unitData.questions];
    AppState.sections = [...unitData.sections];
  }

  // Update UI Unit Cards active status
  document.querySelectorAll('.unit-nav-card').forEach(card => card.classList.remove('active'));
  const activeCard = document.getElementById(`card-${unitKey === 'unit1' ? 'unit-1' : 'unit-2'}`);
  if (activeCard) activeCard.classList.add('active');

  // Update Navbar Subtitle
  const navSubtitle = document.getElementById('nav-brand-subtitle');
  if (navSubtitle) {
    navSubtitle.textContent = unitKey === 'unit1'
      ? 'Unit 1: Data Preprocessing, Feature Engineering & Modeling'
      : 'Unit 2: Storage, Management, Feature Engineering & Visualization';
  }

  // Update Hero Section
  const heroBadge = document.getElementById('hero-unit-badge');
  const heroTitle = document.getElementById('hero-main-title');
  const heroDesc = document.getElementById('hero-main-desc');
  const heroTotal = document.getElementById('hero-stat-total');
  const heroUnitsLabel = document.getElementById('hero-stat-units-label');
  const revisionBanner = document.getElementById('banner-revision-sheet');

  if (unitKey === 'unit1') {
    if (heroBadge) heroBadge.textContent = 'UNIT 1 — PREDICTIVE ANALYTICS';
    if (heroTitle) heroTitle.textContent = 'Master Unit 1: Foundations & Modeling with 100 Real Exam MCQs';
    if (heroDesc) heroDesc.textContent = 'Prepare thoroughly for your university examination with interactive Practice, timed Exam Mode, and smart distractor breakdowns.';
    if (heroTotal) heroTotal.textContent = '100';
    if (heroUnitsLabel) heroUnitsLabel.textContent = '8 Syllabus Modules';
    if (revisionBanner) revisionBanner.style.display = 'none';
  } else if (unitKey === 'unit2') {
    if (heroBadge) heroBadge.textContent = 'UNIT 2 — PREDICTIVE ANALYTICS';
    if (heroTitle) heroTitle.textContent = 'Unit 2: Storage, Management, Feature Engineering & Visualization';
    if (heroDesc) heroDesc.textContent = '100 Curated University Exam MCQs spanning Data Warehousing & ETL (Q1–35), Feature Engineering (Q36–70), Data Visualization (Q71–90), and Evaluation & Ethics (Q91–100).';
    if (heroTotal) heroTotal.textContent = '100';
    if (heroUnitsLabel) heroUnitsLabel.textContent = '4 Syllabus Sections';
    if (revisionBanner) revisionBanner.style.display = 'flex';
  }

  // Reset quiz progress for the active view to avoid out-of-bounds errors
  AppState.userAnswers = {};
  AppState.practiceEvaluations = {};
  AppState.flaggedQuestions = new Set();
  AppState.activeQuestions = [];
  AppState.currentIndex = 0;

  // Re-render UI elements
  renderSectionCards();
  renderDashboard();
  updateMasteryBadge();
  updateCustomBuilderSections();

  // Show dashboard view
  showView('dashboard');

  // Track event
  if (typeof AnalyticsTracker !== 'undefined') {
    AnalyticsTracker.track('unit_switched', '/dashboard', `Switched active syllabus to ${unitKey.toUpperCase()}`);
  }

  // Background sync if connected to live API
  syncUnitDataFromServer(unitKey);
}

async function syncUnitDataFromServer(unitKey) {
  try {
    const secRes = await fetch(`/api/sections?unit=${unitKey}`);
    if (secRes.ok) {
      const data = await secRes.json();
      if (data.success && Array.isArray(data.sections) && data.sections.length > 0) {
        AppState.sections = data.sections;
        renderSectionCards();
        updateCustomBuilderSections();
      }
    }
  } catch (e) {}

  try {
    const qRes = await fetch(`/api/questions?unit=${unitKey}&includeAnswers=true`);
    if (qRes.ok) {
      const data = await qRes.json();
      if (data.success && Array.isArray(data.questions) && data.questions.length > 0) {
        AppState.allQuestions = data.questions;
        renderDashboard();
      }
    }
  } catch (e) {}
}

function updateCustomBuilderSections() {
  const select = document.getElementById('builder-section-select');
  if (!select) return;
  select.innerHTML = '<option value="ALL">Entire Unit Curriculum (All Questions)</option>';
  if (Array.isArray(AppState.sections)) {
    AppState.sections.forEach(sec => {
      const opt = document.createElement('option');
      opt.value = sec.id;
      opt.textContent = `${sec.id}: ${sec.name} (${sec.questionCount || 0} MCQs)`;
      select.appendChild(opt);
    });
  }
}

function renderRevisionSheet(filterText = '') {
  const tbody = document.getElementById('revision-table-body');
  if (!tbody) return;

  const unit2Data = (window.PREDICTIVE_ANALYTICS_DATA_UNITS && window.PREDICTIVE_ANALYTICS_DATA_UNITS.unit2) 
    ? window.PREDICTIVE_ANALYTICS_DATA_UNITS.unit2.revisionSheet 
    : [];

  const filter = (filterText || '').trim().toLowerCase();
  const rows = unit2Data.filter(item => {
    if (!filter) return true;
    return item.topic.toLowerCase().includes(filter) || item.keyPoint.toLowerCase().includes(filter);
  });

  if (rows.length === 0) {
    tbody.innerHTML = '<tr><td colspan="2" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No matching revision topics found.</td></tr>';
    return;
  }

  tbody.innerHTML = rows.map((item, idx) => `
    <tr>
      <td><span class="revision-topic-badge">${idx + 1}</span><strong>${escapeHtml(item.topic)}</strong></td>
      <td>${escapeHtml(item.keyPoint)}</td>
    </tr>
  `).join('');
}

// ==========================================================================
// 13.6 AUTHENTICATION & USER TRACKING ENGINE
// ==========================================================================
const AuthManager = {
  currentUser: {
    id: 'U101',
    name: 'Aditya Verma',
    role: 'admin',
    email: 'aditya.verma@example.edu'
  },
  
  init() {
    try {
      const stored = localStorage.getItem('pa_auth_user');
      if (stored) {
        this.currentUser = JSON.parse(stored);
      } else {
        localStorage.setItem('pa_auth_user', JSON.stringify(this.currentUser));
      }
    } catch (e) {
      console.warn('LocalStorage unavailable for auth, using memory store');
    }
    this.updateUI();
  },

  updateUI() {
    const user = this.currentUser;
    const nameEl = document.getElementById('nav-user-name');
    const roleEl = document.getElementById('nav-user-role');
    const avatarEl = document.getElementById('nav-user-avatar');
    const summName = document.getElementById('user-profile-summary-name');
    const summEmail = document.getElementById('user-profile-summary-email');

    if (nameEl) nameEl.textContent = user.name || 'Aditya Verma';
    if (roleEl) roleEl.textContent = user.role === 'admin' ? 'Admin / Lead Dev' : 'Student / Examinee';
    if (avatarEl) {
      const initials = (user.name || 'AV').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
      avatarEl.textContent = initials;
    }
    if (summName) summName.textContent = user.name || 'Aditya Verma';
    if (summEmail) summEmail.textContent = user.email || 'aditya.verma@example.edu';
  },

  async login(email, password) {
    let userObj = {
      id: email && email.includes('aditya') ? 'U101' : 'U' + Math.floor(100 + Math.random() * 900),
      name: email && email.includes('aditya') ? 'Aditya Verma' : (email ? email.split('@')[0] : 'University Student'),
      role: email && email.includes('aditya') ? 'admin' : 'student',
      email: email || 'student@example.edu'
    };

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.user) {
          userObj = data.user;
        }
      }
    } catch (e) {}

    this.currentUser = userObj;
    try {
      localStorage.setItem('pa_auth_user', JSON.stringify(this.currentUser));
    } catch (e) {}

    this.updateUI();
    const modal = document.getElementById('modal-auth');
    if (modal) modal.style.display = 'none';

    if (typeof AnalyticsTracker !== 'undefined') {
      AnalyticsTracker.track('login_success', '/login', `Authenticated user ${userObj.name} (${userObj.id})`);
    }

    alert(`Welcome back, ${userObj.name}! You are logged in as ${userObj.role.toUpperCase()}.`);
  },

  async register(name, email, role, password) {
    let userObj = {
      id: 'U' + Math.floor(100 + Math.random() * 900),
      name: name || 'New Scholar',
      role: role || 'student',
      email: email || 'user@example.edu'
    };

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, role, password })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.user) {
          userObj = data.user;
        }
      }
    } catch (e) {}

    this.currentUser = userObj;
    try {
      localStorage.setItem('pa_auth_user', JSON.stringify(this.currentUser));
    } catch (e) {}

    this.updateUI();
    const modal = document.getElementById('modal-auth');
    if (modal) modal.style.display = 'none';

    if (typeof AnalyticsTracker !== 'undefined') {
      AnalyticsTracker.track('user_registered', '/register', `New account created: ${userObj.name}`);
      AnalyticsTracker.track('login_success', '/register', `Auto-authenticated registration for ${userObj.name}`);
    }

    alert(`Account registered successfully! Welcome to Predictive Analytics Mastery, ${userObj.name}.`);
  },

  quickLogin(type) {
    if (type === 'admin') {
      this.currentUser = {
        id: 'U101',
        name: 'Aditya Verma',
        role: 'admin',
        email: 'aditya.verma@example.edu'
      };
    } else {
      this.currentUser = {
        id: 'U102',
        name: 'Priya Sharma (Student)',
        role: 'student',
        email: 'priya.sharma@university.edu'
      };
    }
    try {
      localStorage.setItem('pa_auth_user', JSON.stringify(this.currentUser));
    } catch (e) {}

    this.updateUI();
    const modal = document.getElementById('modal-auth');
    if (modal) modal.style.display = 'none';

    if (typeof AnalyticsTracker !== 'undefined') {
      AnalyticsTracker.track('login_success', '/login', `Demo login as ${this.currentUser.name} (${this.currentUser.role})`);
    }
  },

  logout() {
    this.currentUser = {
      id: 'GUEST',
      name: 'Guest Scholar',
      role: 'guest',
      email: 'guest@predictiveanalytics.org'
    };
    try {
      localStorage.removeItem('pa_auth_user');
    } catch (e) {}

    this.updateUI();
    if (typeof AnalyticsTracker !== 'undefined') {
      AnalyticsTracker.track('logout', '/logout', 'User session terminated');
    }
    alert('You have logged out of your session.');
  }
};

// ==========================================================================
// 13.7 ADMIN ANALYTICS & CLICK TRACKING ENGINE
// ==========================================================================
const AnalyticsTracker = {
  stats: {
    totalUsers: 250,
    newRegistrations: 18,
    loginsToday: 75,
    activeUsers: 42,
    buttonClicks: 120,
    events: [
      { id: 1, event: 'login_success', userId: 'U101', page: '/login', time: '09:10', details: 'Successful credential authentication' },
      { id: 2, event: 'button_clicked', userId: 'U101', page: '/dashboard', time: '09:12', details: 'Dashboard button clicked' },
      { id: 3, event: 'page_viewed', userId: 'U102', page: '/home', time: '09:14', details: 'Home view rendered' },
      { id: 4, event: 'button_clicked', userId: 'U101', page: '/dashboard', time: '09:15', details: 'Dashboard button clicked 120 times' },
      { id: 5, event: 'user_registered', userId: 'U103', page: '/register', time: '09:18', details: '18 new registrations logged today' }
    ]
  },

  init() {
    try {
      const stored = localStorage.getItem('pa_analytics_stats');
      if (stored) {
        const parsed = JSON.parse(stored);
        this.stats = { ...this.stats, ...parsed };
      }
    } catch (e) {}
    this.refresh();
  },

  async refresh() {
    try {
      const res = await fetch('/api/analytics/dashboard');
      if (res.ok) {
        const metrics = data.metrics || data.analytics;
        if (data.success && metrics) {
          this.stats = {
            totalUsers: metrics.totalRegisteredUsers || this.stats.totalUsers,
            newRegistrations: metrics.newRegistrationsToday || this.stats.newRegistrations,
            loginsToday: metrics.loginsToday || metrics.loginActivityToday || this.stats.loginsToday,
            activeUsers: metrics.activeUsersToday || this.stats.activeUsers,
            buttonClicks: metrics.totalButtonClicks || metrics.buttonClicks || this.stats.buttonClicks,
            events: Array.isArray(data.recentEvents) && data.recentEvents.length > 0
              ? data.recentEvents
              : (Array.isArray(metrics.events) ? metrics.events : this.stats.events)
          };
          this.persist();
        }
      }
    } catch (e) {}
    this.renderDashboard();
  },

  persist() {
    try {
      localStorage.setItem('pa_analytics_stats', JSON.stringify(this.stats));
    } catch (e) {}
  },

  async track(event, page = window.location.pathname, details = '') {
    const userId = (AuthManager && AuthManager.currentUser) ? AuthManager.currentUser.id : 'GUEST';
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Update local metric counts
    if (event === 'button_clicked') {
      this.stats.buttonClicks++;
    } else if (event === 'login_success') {
      this.stats.loginsToday++;
    } else if (event === 'user_registered') {
      this.stats.newRegistrations++;
      this.stats.totalUsers++;
    }

    const newEvent = {
      id: Date.now() + Math.floor(Math.random() * 100),
      event,
      userId,
      page: page || '/dashboard',
      time: timeStr,
      details
    };

    if (!Array.isArray(this.stats.events)) this.stats.events = [];
    this.stats.events.unshift(newEvent);
    if (this.stats.events.length > 50) this.stats.events = this.stats.events.slice(0, 50);

    this.persist();

    // If modal is open, re-render
    const modal = document.getElementById('modal-admin-analytics');
    if (modal && modal.style.display === 'flex') {
      this.renderDashboard();
    }

    // Try posting to backend
    try {
      fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event, userId, page, details })
      }).catch(() => {});
    } catch (e) {}
  },

  simulateClick() {
    this.track('button_clicked', '/dashboard', 'Dashboard button clicked: Simulating user interaction');
    this.renderDashboard();
  },

  async reset() {
    this.stats = {
      totalUsers: 250,
      newRegistrations: 18,
      loginsToday: 75,
      activeUsers: 42,
      buttonClicks: 120,
      events: [
        { id: 1, event: 'login_success', userId: 'U101', page: '/login', time: '09:10', details: 'Successful credential authentication' },
        { id: 2, event: 'button_clicked', userId: 'U101', page: '/dashboard', time: '09:12', details: 'Dashboard button clicked' },
        { id: 3, event: 'page_viewed', userId: 'U102', page: '/home', time: '09:14', details: 'Home view rendered' },
        { id: 4, event: 'button_clicked', userId: 'U101', page: '/dashboard', time: '09:15', details: 'Dashboard button clicked 120 times' },
        { id: 5, event: 'user_registered', userId: 'U103', page: '/register', time: '09:18', details: '18 new registrations logged today' }
      ]
    };
    this.persist();
    try {
      await fetch('/api/analytics/reset', { method: 'POST' });
    } catch (e) {}
    this.renderDashboard();
  },

  renderDashboard() {
    const kpiTotal = document.getElementById('kpi-total-users');
    const kpiNewReg = document.getElementById('kpi-new-reg');
    const kpiLogins = document.getElementById('kpi-logins-today');
    const kpiActive = document.getElementById('kpi-active-users');
    const kpiClicks = document.getElementById('kpi-button-clicks');

    if (kpiTotal) kpiTotal.textContent = `${this.stats.totalUsers} accounts`;
    if (kpiNewReg) kpiNewReg.textContent = `+${this.stats.newRegistrations} today`;
    if (kpiLogins) kpiLogins.textContent = `${this.stats.loginsToday} today`;
    if (kpiActive) kpiActive.textContent = `${this.stats.activeUsers} today`;
    if (kpiClicks) kpiClicks.textContent = `${this.stats.buttonClicks} clicks`;

    // Render event table
    const tbody = document.getElementById('events-table-body');
    if (!tbody) return;

    if (!this.stats.events || this.stats.events.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:1rem;">No tracking events recorded yet.</td></tr>';
      return;
    }

    tbody.innerHTML = this.stats.events.map(ev => `
      <tr>
        <td><span class="event-tag event-${escapeHtml(ev.event)}">${escapeHtml(ev.event)}</span></td>
        <td><strong>${escapeHtml(ev.userId)}</strong></td>
        <td><code>${escapeHtml(ev.page)}</code></td>
        <td>${escapeHtml(ev.time)}</td>
        <td>${escapeHtml(ev.details || '-')}</td>
      </tr>
    `).join('');
  },

  exportData() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.stats, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', 'analytics_activity_log.json');
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
  }
};

// ==========================================================================
// 13.8 UNIVERSITY TOP 25 PERFORMERS LEADERBOARD ENGINE
// ==========================================================================
const LeaderboardManager = {
  data: [
    { id: 'LB-01', rank: 1, name: 'Priya Sharma', college: 'Dept of Data Science', unit: 'Unit 2', scorePercentage: 98, correctCount: 98, totalQuestions: 100, timeSpentSeconds: 1420, formattedTime: '23m 40s', date: 'Today, 08:45 AM' },
    { id: 'LB-02', rank: 2, name: 'Rohan Gupta', college: 'Computer Engineering', unit: 'Unit 1', scorePercentage: 97, correctCount: 97, totalQuestions: 100, timeSpentSeconds: 1512, formattedTime: '25m 12s', date: 'Today, 07:30 AM' },
    { id: 'LB-03', rank: 3, name: 'Ananya Patel', college: 'School of AI & ML', unit: 'Unit 2', scorePercentage: 96, correctCount: 96, totalQuestions: 100, timeSpentSeconds: 1590, formattedTime: '26m 30s', date: 'Yesterday' },
    { id: 'LB-04', rank: 4, name: 'Devansh Mehta', college: 'Information Technology', unit: 'Unit 1', scorePercentage: 95, correctCount: 95, totalQuestions: 100, timeSpentSeconds: 1625, formattedTime: '27m 05s', date: 'Yesterday' },
    { id: 'LB-05', rank: 5, name: 'Kavita Nair', college: 'Statistics & Analytics', unit: 'Unit 2', scorePercentage: 94, correctCount: 94, totalQuestions: 100, timeSpentSeconds: 1695, formattedTime: '28m 15s', date: '2 days ago' },
    { id: 'LB-06', rank: 6, name: 'Siddharth Rao', college: 'Computer Science', unit: 'Unit 1', scorePercentage: 93, correctCount: 93, totalQuestions: 100, timeSpentSeconds: 1750, formattedTime: '29m 10s', date: '2 days ago' },
    { id: 'LB-07', rank: 7, name: 'Sneha Kulkarni', college: 'Data Science & Engg', unit: 'Unit 2', scorePercentage: 92, correctCount: 92, totalQuestions: 100, timeSpentSeconds: 1785, formattedTime: '29m 45s', date: '3 days ago' },
    { id: 'LB-08', rank: 8, name: 'Aarav Joshi', college: 'AI & Data Systems', unit: 'Unit 1', scorePercentage: 91, correctCount: 91, totalQuestions: 100, timeSpentSeconds: 1820, formattedTime: '30m 20s', date: '3 days ago' },
    { id: 'LB-09', rank: 9, name: 'Ritu Deshmukh', college: 'Dept of Analytics', unit: 'Unit 2', scorePercentage: 90, correctCount: 90, totalQuestions: 100, timeSpentSeconds: 1875, formattedTime: '31m 15s', date: '3 days ago' },
    { id: 'LB-10', rank: 10, name: 'Vikram Malhotra', college: 'Computational Engg', unit: 'Unit 1', scorePercentage: 89, correctCount: 89, totalQuestions: 100, timeSpentSeconds: 1920, formattedTime: '32m 00s', date: '4 days ago' },
    { id: 'LB-11', rank: 11, name: 'Tanvi Agarwal', college: 'Information Science', unit: 'Unit 2', scorePercentage: 88, correctCount: 88, totalQuestions: 100, timeSpentSeconds: 1960, formattedTime: '32m 40s', date: '4 days ago' },
    { id: 'LB-12', rank: 12, name: 'Yashvardhan Singh', college: 'Mathematics & Stats', unit: 'Unit 1', scorePercentage: 87, correctCount: 87, totalQuestions: 100, timeSpentSeconds: 1990, formattedTime: '33m 10s', date: '5 days ago' },
    { id: 'LB-13', rank: 13, name: 'Meera Nambiar', college: 'Dept of AI', unit: 'Unit 2', scorePercentage: 86, correctCount: 86, totalQuestions: 100, timeSpentSeconds: 2045, formattedTime: '34m 05s', date: '5 days ago' },
    { id: 'LB-14', rank: 14, name: 'Karan Chopra', college: 'Software Systems', unit: 'Unit 1', scorePercentage: 85, correctCount: 85, totalQuestions: 100, timeSpentSeconds: 2090, formattedTime: '34m 50s', date: '6 days ago' },
    { id: 'LB-15', rank: 15, name: 'Ishaan Bhatia', college: 'Data Analytics Dept', unit: 'Unit 2', scorePercentage: 84, correctCount: 84, totalQuestions: 100, timeSpentSeconds: 2120, formattedTime: '35m 20s', date: '6 days ago' },
    { id: 'LB-16', rank: 16, name: 'Pooja Sundaram', college: 'Computer Science', unit: 'Unit 1', scorePercentage: 83, correctCount: 83, totalQuestions: 100, timeSpentSeconds: 2160, formattedTime: '36m 00s', date: '1 week ago' },
    { id: 'LB-17', rank: 17, name: 'Nihal Sen', college: 'Machine Learning Lab', unit: 'Unit 2', scorePercentage: 82, correctCount: 82, totalQuestions: 100, timeSpentSeconds: 2205, formattedTime: '36m 45s', date: '1 week ago' },
    { id: 'LB-18', rank: 18, name: 'Diya Sen', college: 'Information Tech', unit: 'Unit 1', scorePercentage: 81, correctCount: 81, totalQuestions: 100, timeSpentSeconds: 2235, formattedTime: '37m 15s', date: '1 week ago' },
    { id: 'LB-19', rank: 19, name: 'Arjun Reddy', college: 'Data Science Dept', unit: 'Unit 2', scorePercentage: 80, correctCount: 80, totalQuestions: 100, timeSpentSeconds: 2280, formattedTime: '38m 00s', date: '1 week ago' },
    { id: 'LB-20', rank: 20, name: 'Shalini Verma', college: 'School of Computing', unit: 'Unit 1', scorePercentage: 79, correctCount: 79, totalQuestions: 100, timeSpentSeconds: 2320, formattedTime: '38m 40s', date: '1 week ago' }
  ],
  activeFilter: 'ALL',
  searchQuery: '',
  highlightId: null,
  pendingRecord: null,

  init() {
    try {
      const stored = localStorage.getItem('pa_top25_leaderboard');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.data = parsed;
        }
      }
    } catch (e) {}

    // Update active count & tests taken in navbar
    const activeEl = document.getElementById('nav-active-count');
    const testsEl = document.getElementById('nav-tests-taken-count');
    if (activeEl) activeEl.textContent = '42';
    if (testsEl) testsEl.textContent = '250+';

    this.syncFromServer();
  },

  async syncFromServer() {
    try {
      const res = await fetch('/api/leaderboard');
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.leaderboard) && json.leaderboard.length > 0) {
          this.data = json.leaderboard;
          try {
            localStorage.setItem('pa_top25_leaderboard', JSON.stringify(this.data));
          } catch (e) {}
        }
      }
    } catch (e) {}
  },

  formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s < 10 ? '0' : ''}${s}s`;
  },

  isTop25(scorePercentage, timeSpentSeconds = 1800) {
    if (this.data.length < 25) return true;
    const lowest = this.data[this.data.length - 1];
    if (scorePercentage > lowest.scorePercentage) return true;
    if (scorePercentage === lowest.scorePercentage && timeSpentSeconds < (lowest.timeSpentSeconds || 3600)) return true;
    return false;
  },

  getPredictedRank(scorePercentage, timeSpentSeconds = 1800) {
    for (let i = 0; i < this.data.length; i++) {
      if (scorePercentage > this.data[i].scorePercentage) return i + 1;
      if (scorePercentage === this.data[i].scorePercentage && timeSpentSeconds < (this.data[i].timeSpentSeconds || 3600)) {
        return i + 1;
      }
    }
    return Math.min(25, this.data.length + 1);
  },

  checkAndPromptRecord(results) {
    if (!results || results.scorePercentage < 60) return;
    if (this.isTop25(results.scorePercentage, results.timeSpentSeconds)) {
      const rank = this.getPredictedRank(results.scorePercentage, results.timeSpentSeconds);
      const timeStr = this.formatTime(results.timeSpentSeconds || 0);

      this.pendingRecord = {
        unit: (AppState.currentUnit === 'unit2') ? 'Unit 2' : 'Unit 1',
        scorePercentage: results.scorePercentage,
        correctCount: results.correctCount,
        totalQuestions: results.totalQuestions,
        timeSpentSeconds: results.timeSpentSeconds || 0,
        formattedTime: timeStr
      };

      const scoreBadge = document.getElementById('record-score-badge');
      const timeBadge = document.getElementById('record-time-badge');
      const rankBadge = document.getElementById('record-rank-badge');
      const nameInput = document.getElementById('record-input-name');

      if (scoreBadge) scoreBadge.textContent = `${results.scorePercentage}% (${results.correctCount}/${results.totalQuestions})`;
      if (timeBadge) timeBadge.textContent = timeStr;
      if (rankBadge) rankBadge.textContent = `Rank #${rank} of Top 25`;
      if (nameInput) {
        let defaultName = (AuthManager && AuthManager.currentUser && AuthManager.currentUser.name && AuthManager.currentUser.name !== 'Guest Scholar') 
          ? AuthManager.currentUser.name 
          : '';
        if (defaultName.length > 25) defaultName = defaultName.slice(0, 25);
        nameInput.value = defaultName;
        const countSpan = document.getElementById('record-name-word-count');
        if (countSpan) countSpan.textContent = `${defaultName.length} / 25 letters`;
      }

      // Show celebratory modal after brief pause
      setTimeout(() => {
        const modal = document.getElementById('modal-record-name');
        if (modal) modal.style.display = 'flex';
        try { if (window.soundEffects) window.soundEffects.playFanfare(); } catch (e) {}
        triggerConfetti();
      }, 700);
    }
  },

  async addRecord(name, college) {
    if (!this.pendingRecord) return;
    const rec = this.pendingRecord;

    // Enforce name limit up to 25 letters / characters
    let sanitizedName = (name || '').trim();
    if (sanitizedName.length > 25) {
      sanitizedName = sanitizedName.slice(0, 25).trim();
    }
    if (!sanitizedName) sanitizedName = 'Anonymous Scholar';

    const newEntry = {
      id: `LB-${Date.now().toString().slice(-4)}`,
      name: sanitizedName,
      college: (college && college.trim()) ? college.trim() : 'University Scholar',
      unit: rec.unit,
      scorePercentage: rec.scorePercentage,
      correctCount: rec.correctCount,
      totalQuestions: rec.totalQuestions,
      timeSpentSeconds: rec.timeSpentSeconds,
      formattedTime: rec.formattedTime,
      date: 'Just now'
    };

    this.data.push(newEntry);
    this.data.sort((a, b) => {
      if (b.scorePercentage !== a.scorePercentage) return b.scorePercentage - a.scorePercentage;
      return (a.timeSpentSeconds || 0) - (b.timeSpentSeconds || 0);
    });

    this.data.forEach((item, idx) => item.rank = idx + 1);
    if (this.data.length > 25) this.data.length = 25;

    this.highlightId = newEntry.id;
    try {
      localStorage.setItem('pa_top25_leaderboard', JSON.stringify(this.data));
    } catch (e) {}

    // Post to server if available
    try {
      fetch('/api/leaderboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry)
      }).catch(() => {});
    } catch (e) {}

    // Track analytics event
    if (typeof AnalyticsTracker !== 'undefined') {
      AnalyticsTracker.track('button_clicked', '/quiz', `Added to Top 25 Leaderboard: ${newEntry.name} (Rank #${newEntry.rank})`);
    }

    this.pendingRecord = null;
    this.openLeaderboard();
  },

  openLeaderboard() {
    this.renderLeaderboard(this.activeFilter, this.searchQuery);
    const modal = document.getElementById('modal-leaderboard');
    if (modal) modal.style.display = 'flex';
    if (typeof AnalyticsTracker !== 'undefined') {
      AnalyticsTracker.track('page_viewed', '/leaderboard', 'Viewed Top 25 Leaderboard');
    }
  },

  renderLeaderboard(filter = 'ALL', search = '') {
    this.activeFilter = filter;
    this.searchQuery = search;

    const tbody = document.getElementById('lb-table-body');
    if (!tbody) return;

    let items = [...this.data];

    // Filter by unit
    if (filter && filter !== 'ALL') {
      const matchUnit = (filter === 'unit1' || filter === 'Unit 1') ? 'Unit 1' : 'Unit 2';
      items = items.filter(it => it.unit === matchUnit);
    }

    // Filter by search query
    const q = (search || '').trim().toLowerCase();
    if (q) {
      items = items.filter(it => (it.name && it.name.toLowerCase().includes(q)) || (it.college && it.college.toLowerCase().includes(q)));
    }

    // Update KPI boxes
    const topScoreEl = document.getElementById('lb-top-score');
    const fastestEl = document.getElementById('lb-fastest-time');
    if (topScoreEl && this.data.length > 0) topScoreEl.textContent = `${this.data[0].scorePercentage}%`;
    if (fastestEl && this.data.length > 0) {
      const fastest = [...this.data].sort((a,b) => (a.timeSpentSeconds||9999) - (b.timeSpentSeconds||9999))[0];
      if (fastest) fastestEl.textContent = fastest.formattedTime || '23m 40s';
    }

    if (items.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 2rem;">No matching leaderboard records found.</td></tr>';
      return;
    }

    tbody.innerHTML = items.map((item, idx) => {
      const rankNum = item.rank || (idx + 1);
      let rankClass = 'rank-other';
      let rankBadgeContent = rankNum;
      if (rankNum === 1) {
        rankClass = 'rank-1';
        rankBadgeContent = '<i class="fa-solid fa-crown"></i> 1';
      } else if (rankNum === 2) {
        rankClass = 'rank-2';
        rankBadgeContent = '<i class="fa-solid fa-medal"></i> 2';
      } else if (rankNum === 3) {
        rankClass = 'rank-3';
        rankBadgeContent = '<i class="fa-solid fa-award"></i> 3';
      }

      const initials = (item.name || 'S').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
      const isHighlighted = item.id === this.highlightId ? 'highlight-my-record' : '';
      const unitClass = item.unit === 'Unit 2' ? 'u2' : 'u1';

      return `
        <tr class="${isHighlighted}">
          <td style="text-align: center;">
            <span class="rank-badge ${rankClass}">${rankBadgeContent}</span>
          </td>
          <td>
            <div class="lb-student-cell">
              <span class="lb-avatar">${escapeHtml(initials)}</span>
              <div>
                <span class="lb-student-name">${escapeHtml(item.name)} ${item.id === this.highlightId ? '⭐ (You)' : ''}</span>
                <span class="lb-student-college">${escapeHtml(item.college || 'University Scholar')}</span>
              </div>
            </div>
          </td>
          <td><span class="unit-tag-pill ${unitClass}">${escapeHtml(item.unit || 'Unit 1')}</span></td>
          <td><span class="lb-score-text">${item.scorePercentage}%</span></td>
          <td>${item.correctCount || item.scorePercentage}/${item.totalQuestions || 100} correct</td>
          <td><i class="fa-regular fa-clock" style="color:var(--text-dim); margin-right:4px;"></i>${escapeHtml(item.formattedTime || '25m 00s')}</td>
          <td><small style="color:var(--text-dim);">${escapeHtml(item.date || 'Recent')}</small></td>
        </tr>
      `;
    }).join('');
  }
};

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

  // Unit Navigation Cards
  document.getElementById('card-unit-1')?.addEventListener('click', () => switchUnit('unit1'));
  document.getElementById('card-unit-2')?.addEventListener('click', () => switchUnit('unit2'));
  document.getElementById('card-unit-3')?.addEventListener('click', () => switchUnit('unit3'));

  // Footer Unit Links
  document.getElementById('footer-btn-unit1')?.addEventListener('click', () => switchUnit('unit1'));
  document.getElementById('footer-btn-unit2')?.addEventListener('click', () => switchUnit('unit2'));
  document.getElementById('footer-btn-unit3')?.addEventListener('click', () => switchUnit('unit3'));

  // Unit 3 Modal Buttons
  document.getElementById('btn-close-unit3')?.addEventListener('click', () => {
    const m = document.getElementById('modal-unit3');
    if (m) m.style.display = 'none';
  });
  document.getElementById('btn-dismiss-unit3')?.addEventListener('click', () => {
    const m = document.getElementById('modal-unit3');
    if (m) m.style.display = 'none';
  });
  document.getElementById('btn-explore-unit2')?.addEventListener('click', () => {
    const m = document.getElementById('modal-unit3');
    if (m) m.style.display = 'none';
    switchUnit('unit2');
  });

  // Revision Sheet Modal
  document.getElementById('btn-open-revision-sheet')?.addEventListener('click', () => {
    renderRevisionSheet();
    const m = document.getElementById('modal-revision-sheet');
    if (m) m.style.display = 'flex';
    if (typeof AnalyticsTracker !== 'undefined') {
      AnalyticsTracker.track('button_clicked', '/dashboard', 'Opened Unit 2 Revision Sheet');
    }
  });
  document.getElementById('btn-close-revision')?.addEventListener('click', () => {
    const m = document.getElementById('modal-revision-sheet');
    if (m) m.style.display = 'none';
  });
  document.getElementById('btn-dismiss-revision')?.addEventListener('click', () => {
    const m = document.getElementById('modal-revision-sheet');
    if (m) m.style.display = 'none';
  });
  document.getElementById('revision-search-input')?.addEventListener('input', (e) => {
    renderRevisionSheet(e.target.value);
  });
  document.getElementById('btn-print-revision')?.addEventListener('click', () => {
    window.print();
  });

  // User Authentication Menu & Modal
  const authMenuBtn = document.getElementById('btn-auth-menu');
  const userDropdown = document.getElementById('user-dropdown-menu');
  if (authMenuBtn && userDropdown) {
    authMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      userDropdown.classList.toggle('show');
    });
    document.addEventListener('click', (e) => {
      if (!userDropdown.contains(e.target) && e.target !== authMenuBtn) {
        userDropdown.classList.remove('show');
      }
    });
  }

  document.getElementById('menu-item-login')?.addEventListener('click', () => {
    userDropdown?.classList.remove('show');
    const m = document.getElementById('modal-auth');
    if (m) m.style.display = 'flex';
  });

  document.getElementById('menu-item-logout')?.addEventListener('click', () => {
    userDropdown?.classList.remove('show');
    AuthManager.logout();
  });

  document.getElementById('btn-close-auth')?.addEventListener('click', () => {
    const m = document.getElementById('modal-auth');
    if (m) m.style.display = 'none';
  });

  // Auth Modal Tabs
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const targetTab = tab.getAttribute('data-tab');
      const loginForm = document.getElementById('form-login');
      const regForm = document.getElementById('form-register');
      if (targetTab === 'login') {
        if (loginForm) loginForm.style.display = 'block';
        if (regForm) regForm.style.display = 'none';
      } else {
        if (loginForm) loginForm.style.display = 'none';
        if (regForm) regForm.style.display = 'block';
      }
    });
  });

  document.getElementById('form-login')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email')?.value;
    const pass = document.getElementById('login-password')?.value;
    AuthManager.login(email, pass);
  });

  document.getElementById('form-register')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name')?.value;
    const email = document.getElementById('reg-email')?.value;
    const role = document.getElementById('reg-role')?.value;
    const pass = document.getElementById('reg-password')?.value;
    AuthManager.register(name, email, role, pass);
  });

  document.getElementById('btn-quick-login-admin')?.addEventListener('click', () => {
    AuthManager.quickLogin('admin');
  });

  document.getElementById('btn-quick-login-student')?.addEventListener('click', () => {
    AuthManager.quickLogin('student');
  });

  // Admin Analytics Modal
  const openAnalytics = () => {
    userDropdown?.classList.remove('show');
    AnalyticsTracker.renderDashboard();
    const m = document.getElementById('modal-admin-analytics');
    if (m) m.style.display = 'flex';
    AnalyticsTracker.track('page_viewed', '/admin-analytics', 'Admin analytics dashboard viewed');
  };

  document.getElementById('btn-analytics-toggle')?.addEventListener('click', openAnalytics);
  document.getElementById('menu-item-analytics')?.addEventListener('click', openAnalytics);
  document.getElementById('footer-link-analytics')?.addEventListener('click', (e) => {
    e.preventDefault();
    openAnalytics();
  });

  document.getElementById('btn-close-analytics')?.addEventListener('click', () => {
    const m = document.getElementById('modal-admin-analytics');
    if (m) m.style.display = 'none';
  });

  document.getElementById('btn-analytics-refresh')?.addEventListener('click', () => {
    AnalyticsTracker.refresh();
  });

  document.getElementById('btn-simulate-click')?.addEventListener('click', () => {
    AnalyticsTracker.simulateClick();
  });

  document.getElementById('btn-reset-analytics')?.addEventListener('click', () => {
    AnalyticsTracker.reset();
  });

  document.getElementById('btn-export-analytics')?.addEventListener('click', () => {
    AnalyticsTracker.exportData();
  });

  // Global Click Tracking Engine
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button, a, .mode-card, .section-card, .unit-nav-card, .btn');
    if (!btn) return;
    if (btn.id === 'btn-simulate-click') return;
    let label = btn.innerText?.trim() || btn.getAttribute('aria-label') || btn.title || btn.id || 'Button';
    if (label.length > 35) label = label.substring(0, 32) + '...';
    if (typeof AnalyticsTracker !== 'undefined') {
      AnalyticsTracker.track('button_clicked', window.location.pathname || '/dashboard', `User clicked: ${label}`);
    }
  }, true);

  // Top 25 Performers Leaderboard
  const openLeaderboardFn = () => {
    if (typeof LeaderboardManager !== 'undefined') {
      LeaderboardManager.openLeaderboard();
    }
  };

  document.getElementById('btn-open-leaderboard')?.addEventListener('click', openLeaderboardFn);
  document.getElementById('btn-dash-open-leaderboard')?.addEventListener('click', openLeaderboardFn);
  document.getElementById('footer-btn-leaderboard')?.addEventListener('click', openLeaderboardFn);

  document.getElementById('btn-close-leaderboard')?.addEventListener('click', () => {
    const modal = document.getElementById('modal-leaderboard');
    if (modal) modal.style.display = 'none';
  });

  document.getElementById('btn-dismiss-leaderboard')?.addEventListener('click', () => {
    const modal = document.getElementById('modal-leaderboard');
    if (modal) modal.style.display = 'none';
  });

  document.getElementById('btn-lb-take-test')?.addEventListener('click', () => {
    const modal = document.getElementById('modal-leaderboard');
    if (modal) modal.style.display = 'none';
    startExamMode('ALL', 100, 60, true);
  });

  document.getElementById('footer-btn-take-exam')?.addEventListener('click', () => {
    startExamMode('ALL', 100, 60, true);
  });

  // Leaderboard Filter Tabs
  document.querySelectorAll('.lb-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.lb-tab').forEach(t => t.classList.remove('active'));
      const btn = e.target.closest('.lb-tab');
      if (btn) {
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter') || 'ALL';
        const searchVal = document.getElementById('lb-search-input')?.value || '';
        LeaderboardManager.renderLeaderboard(filter, searchVal);
      }
    });
  });

  // Leaderboard Search Input
  document.getElementById('lb-search-input')?.addEventListener('input', (e) => {
    const activeTab = document.querySelector('.lb-tab.active');
    const filter = activeTab ? activeTab.getAttribute('data-filter') : 'ALL';
    LeaderboardManager.renderLeaderboard(filter, e.target.value);
  });

  // Top 25 Record Claim Form Word Counter & Submit
  const recordNameInput = document.getElementById('record-input-name');
  const wordCountSpan = document.getElementById('record-name-word-count');
  const recordNameError = document.getElementById('record-name-error');

  recordNameInput?.addEventListener('input', (e) => {
    let val = e.target.value;
    if (val.length > 25) {
      val = val.slice(0, 25);
      e.target.value = val;
    }
    const count = val.length;
    if (wordCountSpan) {
      wordCountSpan.textContent = `${count} / 25 letters`;
      wordCountSpan.style.color = count >= 25 ? '#fbbf24' : 'var(--text-dim)';
    }
    if (recordNameError) {
      recordNameError.style.display = count > 25 ? 'block' : 'none';
    }
  });

  document.getElementById('form-record-name')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const rawName = document.getElementById('record-input-name')?.value || '';
    const college = document.getElementById('record-input-college')?.value || '';
    
    let name = rawName.trim();
    if (name.length > 25) {
      name = name.slice(0, 25).trim();
    }

    if (name) {
      LeaderboardManager.addRecord(name, college);
      const modal = document.getElementById('modal-record-name');
      if (modal) modal.style.display = 'none';
    }
  });

  document.getElementById('btn-skip-record')?.addEventListener('click', () => {
    const modal = document.getElementById('modal-record-name');
    if (modal) modal.style.display = 'none';
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
window.switchUnit = switchUnit;
window.AuthManager = AuthManager;
window.AnalyticsTracker = AnalyticsTracker;
window.renderRevisionSheet = renderRevisionSheet;
window.LeaderboardManager = LeaderboardManager;
