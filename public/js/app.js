/**
 * Predictive Analytics 100 MCQs Quiz Application - Core Engine
 * Manages State, Modes, Navigation, Real-Time Practice Feedback, Exam Evaluation, and Analytics.
 */

// ==========================================================================
// 1. GLOBAL APPLICATION STATE
// ==========================================================================
const AppState = {
  // App Config & Data
  allQuestions: [],
  sections: [],
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
  examTimeLimitSeconds: 3600, // 60 mins for 100 Qs default
  isExamTimer: false,
  examSubmitted: false,
  lastSubmissionResults: null,

  // Flashcards state
  fcIndex: 0,
  fcQuestions: []
};

// ==========================================================================
// 2. INITIALIZATION & DATA FETCHING
// ==========================================================================
document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  initAudioControl();
  initKeyboardShortcuts();
  loadPersistedStorage();

  // Fetch initial data from server
  await fetchSections();
  await fetchAllQuestions();

  setupEventListeners();
  renderDashboard();
  updateMasteryBadge();
});

// Fetch sections from API
async function fetchSections() {
  try {
    const res = await fetch('/api/sections');
    const data = await res.json();
    if (data.success) {
      AppState.sections = data.sections;
      renderSectionCards();
    }
  } catch (err) {
    console.error('Error fetching sections:', err);
  }
}

// Fetch all questions from API
async function fetchAllQuestions() {
  try {
    const res = await fetch('/api/questions?includeAnswers=true');
    const data = await res.json();
    if (data.success) {
      AppState.allQuestions = data.questions;
      console.log(`Loaded ${data.questions.length} questions successfully.`);
    }
  } catch (err) {
    console.error('Error fetching questions:', err);
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
    modePillText.textContent = 'Dashboard';
    navStats.style.display = 'none';
    stopTimer();
    renderDashboard();
  } else if (viewName === 'quiz') {
    modePillText.textContent = AppState.mode === 'practice' ? 'Practice Mode' : 'Exam Mode';
    navStats.style.display = 'flex';
    updateNavLiveStats();
  } else if (viewName === 'results') {
    modePillText.textContent = 'Diagnostic Scorecard';
    navStats.style.display = 'none';
    stopTimer();
  } else if (viewName === 'flashcards') {
    modePillText.textContent = 'Flashcard Recall';
    navStats.style.display = 'none';
    stopTimer();
  }
}

// ==========================================================================
// 4. DASHBOARD RENDERING
// ==========================================================================
function renderDashboard() {
  const mistakesCount = AppState.mistakeQuestionIds.size;
  document.getElementById('dash-mistakes-count').textContent = mistakesCount;
  document.getElementById('badge-mistake-count').textContent = `${mistakesCount} Missed`;
  updateMasteryBadge();
}

function updateMasteryBadge() {
  const total = AppState.allQuestions.length || 100;
  // Calculate accuracy from past answers
  const correctEvaluations = Object.values(AppState.practiceEvaluations).filter(e => e.isCorrect).length;
  const percent = Math.min(100, Math.round((correctEvaluations / total) * 100));
  const el = document.getElementById('dash-mastery-percent');
  if (el) el.textContent = `${percent}%`;
}

function renderSectionCards() {
  const container = document.getElementById('dashboard-sections-container');
  if (!container) return;

  container.innerHTML = AppState.sections.map(sec => `
    <div class="section-card" onclick="startSectionPractice('${sec.id}')" role="button" tabindex="0">
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
// 5. QUIZ MODE LAUNCHERS
// ==========================================================================

// Launch Full 100 Practice Mode
function startPracticeMode(sectionFilter = 'ALL', shuffle = false) {
  AppState.mode = 'practice';
  AppState.activeSectionFilter = sectionFilter;
  let list = [...AppState.allQuestions];

  if (sectionFilter !== 'ALL') {
    list = list.filter(q => q.sectionId.toUpperCase() === sectionFilter.toUpperCase());
  }
  if (shuffle) {
    list = shuffleArray(list);
  }

  AppState.activeQuestions = list;
  AppState.currentIndex = 0;
  AppState.userAnswers = {};
  AppState.timeSpentSeconds = 0;
  AppState.isExamTimer = false;
  AppState.examSubmitted = false;

  showView('quiz');
  renderCurrentQuestion();
  renderPalette();
  startTimer();
}

// Launch Timed Mock Exam Mode
function startExamMode(sectionFilter = 'ALL', count = 100, durationMins = 60, shuffle = true) {
  AppState.mode = 'exam';
  AppState.activeSectionFilter = sectionFilter;
  let list = [...AppState.allQuestions];

  if (sectionFilter !== 'ALL') {
    list = list.filter(q => q.sectionId.toUpperCase() === sectionFilter.toUpperCase());
  }
  if (shuffle) {
    list = shuffleArray(list);
  }
  if (count && count < list.length) {
    list = list.slice(0, count);
  }

  AppState.activeQuestions = list;
  AppState.currentIndex = 0;
  AppState.userAnswers = {};
  AppState.practiceEvaluations = {};
  AppState.flaggedQuestions.clear();
  AppState.timeSpentSeconds = 0;
  AppState.examTimeLimitSeconds = durationMins * 60;
  AppState.isExamTimer = true;
  AppState.examSubmitted = false;

  showView('quiz');
  renderCurrentQuestion();
  renderPalette();
  startTimer();
}

// Launch Section Practice
window.startSectionPractice = function(sectionId) {
  startPracticeMode(sectionId, false);
};

// Launch Mistake Bank Drill
function startMistakesDrill() {
  const mistakeIds = Array.from(AppState.mistakeQuestionIds);
  if (mistakeIds.length === 0) {
    alert('🎉 Great job! You have zero mistakes recorded. Practice standard mode first to log attempts.');
    return;
  }

  const list = AppState.allQuestions.filter(q => mistakeIds.includes(q.id));
  AppState.mode = 'practice';
  AppState.activeSectionFilter = 'ALL';
  AppState.activeQuestions = list;
  AppState.currentIndex = 0;
  AppState.userAnswers = {};
  AppState.timeSpentSeconds = 0;
  AppState.isExamTimer = false;
  AppState.examSubmitted = false;

  showView('quiz');
  renderCurrentQuestion();
  renderPalette();
  startTimer();
}

// ==========================================================================
// 6. QUESTION RENDERING & INTERACTION (Practice / Exam)
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
  document.getElementById('current-q-index').textContent = currentNum;
  document.getElementById('total-q-count').textContent = totalNum;
  
  const percent = Math.round((currentNum / totalNum) * 100);
  document.getElementById('quiz-progress-percent').textContent = `${percent}%`;
  document.getElementById('quiz-progress-bar').style.width = `${percent}%`;

  // Question Meta
  document.getElementById('q-id-pill').textContent = `Q${q.id}`;
  document.getElementById('q-diff-pill').textContent = q.difficulty || 'Standard';
  
  const tagsContainer = document.getElementById('q-tags-container');
  if (tagsContainer) {
    tagsContainer.innerHTML = (q.tags || []).map(t => `<span class="tag-pill">${t}</span>`).join('');
  }

  // Question Text
  document.getElementById('q-question-text').textContent = q.question;

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
    expDrawer.style.display = 'block';
  } else {
    expDrawer.style.display = 'none';
  }

  // Navigation Buttons
  document.getElementById('btn-prev-question').disabled = AppState.currentIndex === 0;

  const nextBtn = document.getElementById('btn-next-question');
  const submitBtn = document.getElementById('btn-submit-exam');

  if (AppState.currentIndex === questions.length - 1) {
    if (AppState.mode === 'exam') {
      nextBtn.style.display = 'none';
      submitBtn.style.display = 'inline-flex';
    } else {
      nextBtn.innerHTML = 'Complete Practice <i class="fa-solid fa-flag-checkered"></i>';
      submitBtn.style.display = 'none';
    }
  } else {
    nextBtn.style.display = 'inline-flex';
    nextBtn.innerHTML = 'Next <i class="fa-solid fa-chevron-right"></i>';
    submitBtn.style.display = 'none';
  }

  updatePaletteActiveCell();
  updateNavLiveStats();
}

// Handle Option Selection
async function handleOptionSelect(selectedLetter) {
  const questions = AppState.activeQuestions;
  const q = questions[AppState.currentIndex];
  if (!q) return;

  if (window.soundEffects) window.soundEffects.playClick();

  // EXAM MODE SELECTION
  if (AppState.mode === 'exam') {
    AppState.userAnswers[q.id] = selectedLetter;
    renderCurrentQuestion();
    renderPalette();
    return;
  }

  // PRACTICE MODE SELECTION (Instant Feedback & Deep Explanation)
  if (AppState.practiceEvaluations[q.id]) {
    // Already answered in practice
    return;
  }

  AppState.userAnswers[q.id] = selectedLetter;

  try {
    // Validate answer with backend API
    const response = await fetch('/api/check-answer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId: q.id, selectedAnswer: selectedLetter })
    });
    const evalData = await response.json();

    if (evalData.success) {
      AppState.practiceEvaluations[q.id] = evalData;

      if (evalData.isCorrect) {
        if (window.soundEffects) window.soundEffects.playCorrect();
        AppState.mistakeQuestionIds.delete(q.id);
      } else {
        if (window.soundEffects) window.soundEffects.playWrong();
        AppState.mistakeQuestionIds.add(q.id);
      }
      persistStorage();
      renderCurrentQuestion();
      renderPalette();
    }
  } catch (err) {
    console.error('Check answer error:', err);
  }
}

// Render Instant Explanation Drawer
function renderExplanationDrawer(evalData, userChoice) {
  const header = document.getElementById('exp-header');
  const title = document.getElementById('exp-title');
  const subtitle = document.getElementById('exp-subtitle');
  const icon = document.getElementById('exp-status-icon');

  if (evalData.isCorrect) {
    header.className = 'exp-header correct';
    title.textContent = '🎉 Correct Answer!';
    subtitle.textContent = `You selected (${evalData.correctAnswer}): "${evalData.correctOptionText}"`;
    icon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  } else {
    header.className = 'exp-header wrong';
    title.textContent = '❌ Incorrect Attempt';
    subtitle.textContent = `You selected (${userChoice}): "${evalData.selectedOptionText}" • Correct Answer is (${evalData.correctAnswer}): "${evalData.correctOptionText}"`;
    icon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  }

  // Distractor Analysis (Explaining why user's choice was wrong)
  const distractorBox = document.getElementById('distractor-box');
  const distractorText = document.getElementById('distractor-text');
  if (!evalData.isCorrect && evalData.selectedDistractorExplanation) {
    distractorText.textContent = evalData.selectedDistractorExplanation;
    distractorBox.style.display = 'block';
  } else if (!evalData.isCorrect && evalData.distractors && evalData.distractors[userChoice]) {
    distractorText.textContent = evalData.distractors[userChoice];
    distractorBox.style.display = 'block';
  } else {
    distractorBox.style.display = 'none';
  }

  // Mathematical Solution (If formula calculation question)
  const solutionBox = document.getElementById('solution-box');
  const solutionText = document.getElementById('solution-text');
  if (evalData.solution) {
    solutionText.textContent = evalData.solution;
    solutionBox.style.display = 'block';
  } else {
    solutionBox.style.display = 'none';
  }

  // Conceptual Explanation
  document.getElementById('concept-explanation-text').textContent = evalData.explanation;

  // Key Takeaway / Memory Formula
  const takeawayBox = document.getElementById('takeaway-box');
  const takeawayText = document.getElementById('takeaway-text');
  if (evalData.keyTakeaway) {
    takeawayText.textContent = evalData.keyTakeaway;
    takeawayBox.style.display = 'flex';
  } else {
    takeawayBox.style.display = 'none';
  }
}

// ==========================================================================
// 7. QUESTION PALETTE (1-100 GRID)
// ==========================================================================
function renderPalette() {
  const container = document.getElementById('palette-grid-container');
  if (!container) return;

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
      <button class="palette-cell ${statusClass} ${currentClass}" onclick="jumpToQuestion(${idx})" title="Q${q.id}">
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

window.jumpToQuestion = function(idx) {
  if (idx >= 0 && idx < AppState.activeQuestions.length) {
    AppState.currentIndex = idx;
    renderCurrentQuestion();
  }
};

// ==========================================================================
// 8. EXAM SUBMISSION & RESULTS EVALUATION
// ==========================================================================
async function submitFullQuiz() {
  stopTimer();

  try {
    const payload = {
      answers: AppState.userAnswers,
      timeSpentSeconds: AppState.timeSpentSeconds,
      mode: AppState.mode,
      sectionFilter: AppState.activeSectionFilter
    };

    const res = await fetch('/api/submit-quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (data.success) {
      AppState.lastSubmissionResults = data.results;
      
      // Update mistake bank from submitted exam
      data.results.reviewList.forEach(item => {
        if (!item.isCorrect && item.isAnswered) {
          AppState.mistakeQuestionIds.add(item.id);
        } else if (item.isCorrect) {
          AppState.mistakeQuestionIds.delete(item.id);
        }
      });
      persistStorage();

      renderResultsView(data.results);
      showView('results');

      // Trigger victory fanfare & confetti for high scores
      if (data.results.scorePercentage >= 75) {
        if (window.soundEffects) window.soundEffects.playFanfare();
        triggerConfetti();
      }
    }
  } catch (err) {
    console.error('Quiz submission error:', err);
  }
}

function renderResultsView(results) {
  // Score circle
  const scorePercent = results.scorePercentage;
  document.getElementById('res-score-percent').textContent = `${scorePercent}%`;
  document.getElementById('res-score-fraction').textContent = `${results.correctCount} / ${results.totalQuestions}`;

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
  gradePill.textContent = `Grade: ${results.grade}`;
  gradePill.style.color = results.badgeColor;
  gradePill.style.borderColor = results.badgeColor;

  // Stats Grid
  document.getElementById('res-correct-count').textContent = results.correctCount;
  document.getElementById('res-incorrect-count').textContent = results.incorrectCount;
  document.getElementById('res-time-spent').textContent = results.timeFormatted;
  document.getElementById('res-avg-speed').textContent = results.avgTimePerQuestion;
  document.getElementById('res-missed-num').textContent = results.incorrectCount;

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
    recsContainer.style.display = 'block';
    recsList.innerHTML = results.recommendations.map(r => `
      <div class="rec-card">
        <i class="fa-solid fa-lightbulb"></i>
        <div>
          <strong>${r.title} (${r.percentage}%)</strong>
          <p>${r.advice}</p>
        </div>
      </div>
    `).join('');
  } else {
    recsContainer.style.display = 'none';
  }

  // Render Full Review List
  renderReviewQuestionsList(results.reviewList, 'ALL');
  updateReviewCounts(results.reviewList);
}

function updateReviewCounts(reviewList) {
  document.getElementById('rev-count-all').textContent = reviewList.length;
  document.getElementById('rev-count-wrong').textContent = reviewList.filter(q => !q.isCorrect).length;
  document.getElementById('rev-count-correct').textContent = reviewList.filter(q => q.isCorrect).length;
  document.getElementById('rev-count-bookmarks').textContent = reviewList.filter(q => AppState.bookmarkedQuestions.has(q.id)).length;
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

        <button class="rc-details-toggle" onclick="toggleReviewDeepDive('rc-dd-${q.id}')">
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

window.toggleReviewDeepDive = function(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = el.style.display === 'none' ? 'flex' : 'none';
  }
};

// ==========================================
// 9. FLASHCARD ENGINE (3D Flip)
// ==========================================
function startFlashcardsMode(sectionFilter = 'ALL') {
  AppState.mode = 'flashcards';
  let list = [...AppState.allQuestions];
  if (sectionFilter !== 'ALL') {
    list = list.filter(q => q.sectionId.toUpperCase() === sectionFilter.toUpperCase());
  }

  AppState.fcQuestions = list;
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
  document.getElementById('fc-current-idx').textContent = AppState.fcIndex + 1;
  document.getElementById('fc-total-count').textContent = questions.length;
  document.getElementById('fc-num-front').textContent = q.id;
  document.getElementById('fc-num-back').textContent = q.id;

  // Front
  document.getElementById('fc-badge-front').textContent = q.sectionTitle || `Section ${q.sectionId}`;
  document.getElementById('fc-question-text').textContent = q.question;
  
  const optPreview = document.getElementById('fc-options-preview');
  if (optPreview) {
    optPreview.innerHTML = ['A', 'B', 'C', 'D'].map(l => `<div><strong>${l}:</strong> ${q.options[l]}</div>`).join('');
  }

  // Back
  document.getElementById('fc-correct-letter').textContent = q.correctAnswer;
  document.getElementById('fc-correct-text').textContent = q.options[q.correctAnswer];
  
  const mathBox = document.getElementById('fc-math-box');
  const mathText = document.getElementById('fc-math-text');
  if (q.solution) {
    mathText.textContent = q.solution;
    mathBox.style.display = 'block';
  } else {
    mathBox.style.display = 'none';
  }

  document.getElementById('fc-explanation-text').textContent = q.explanation;
  document.getElementById('fc-takeaway-text').textContent = q.keyTakeaway || 'Master this fundamental pattern.';
}

function flipActiveFlashcard() {
  const card = document.getElementById('active-flashcard');
  if (card) {
    card.classList.toggle('flipped');
    if (window.soundEffects) window.soundEffects.playClick();
  }
}

// ==========================================
// 10. SEARCH ENGINE
// ==========================================
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
    <div class="search-result-item" onclick="openQuestionFromSearch(${item.id})">
      <div class="s-res-top">
        <span>Q${item.id} • ${item.sectionTitle}</span>
        <span>${item.difficulty || 'Standard'}</span>
      </div>
      <div class="s-res-q">${item.question}</div>
    </div>
  `).join('');
}

window.openQuestionFromSearch = function(questionId) {
  document.getElementById('modal-search').style.display = 'none';
  const targetIdx = AppState.allQuestions.findIndex(q => q.id === questionId);
  if (targetIdx !== -1) {
    AppState.mode = 'practice';
    AppState.activeQuestions = [...AppState.allQuestions];
    AppState.currentIndex = targetIdx;
    showView('quiz');
    renderCurrentQuestion();
    renderPalette();
  }
};

// ==========================================
// 11. TIMERS & UTILITIES
// ==========================================
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

// ==========================================
// 12. THEME & AUDIO INITIALIZERS
// ==========================================
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

// ==========================================
// 13. KEYBOARD SHORTCUTS
// ==========================================
function initKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    // If inside textarea or search input, ignore navigation shortcuts
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop').forEach(m => m.style.display = 'none');
      }
      return;
    }

    // Global Search trigger
    if (e.key === '/') {
      e.preventDefault();
      document.getElementById('modal-search').style.display = 'flex';
      document.getElementById('global-search-input').focus();
      return;
    }

    // Quiz View Shortcuts
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

    // Flashcard View Shortcuts
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

// ==========================================
// 14. EVENT LISTENERS SETUP
// ==========================================
function setupEventListeners() {
  // Navigation Bar
  document.getElementById('btn-brand')?.addEventListener('click', () => showView('dashboard'));
  document.getElementById('btn-home')?.addEventListener('click', () => showView('dashboard'));
  document.getElementById('btn-theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('btn-sound-toggle')?.addEventListener('click', toggleAudio);
  document.getElementById('btn-search-toggle')?.addEventListener('click', () => {
    document.getElementById('modal-search').style.display = 'flex';
    document.getElementById('global-search-input').focus();
  });

  // Dashboard Mode Cards
  document.getElementById('card-mode-practice')?.addEventListener('click', () => startPracticeMode('ALL', false));
  document.getElementById('card-mode-exam')?.addEventListener('click', () => startExamMode('ALL', 100, 60, true));
  document.getElementById('card-mode-flashcards')?.addEventListener('click', () => startFlashcardsMode('ALL'));
  document.getElementById('card-mode-mistakes')?.addEventListener('click', startMistakesDrill);
  document.getElementById('btn-open-custom-builder')?.addEventListener('click', () => {
    document.getElementById('modal-custom-builder').style.display = 'flex';
  });

  // Quiz Option Buttons
  ['A', 'B', 'C', 'D'].forEach(letter => {
    document.getElementById(`opt-btn-${letter}`)?.addEventListener('click', () => handleOptionSelect(letter));
  });

  // Quiz Navigation
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
    document.getElementById('note-q-preview').textContent = `Q${q.id}: ${q.question}`;
    document.getElementById('note-textarea').value = AppState.notes[q.id] || '';
    document.getElementById('modal-note').style.display = 'flex';
  });

  document.getElementById('btn-save-note')?.addEventListener('click', () => {
    const q = AppState.activeQuestions[AppState.currentIndex];
    if (!q) return;
    const note = document.getElementById('note-textarea').value;
    AppState.notes[q.id] = note;
    persistStorage();
    document.getElementById('modal-note').style.display = 'none';
  });

  document.getElementById('btn-cancel-note')?.addEventListener('click', () => {
    document.getElementById('modal-note').style.display = 'none';
  });
  document.getElementById('btn-close-note')?.addEventListener('click', () => {
    document.getElementById('modal-note').style.display = 'none';
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
    // Show summary confirm modal
    const total = AppState.activeQuestions.length;
    const answered = Object.keys(AppState.userAnswers).length;
    const unanswered = total - answered;
    const flagged = AppState.flaggedQuestions.size;

    document.getElementById('conf-answered-count').textContent = answered;
    document.getElementById('conf-unanswered-count').textContent = unanswered;
    document.getElementById('conf-flagged-count').textContent = flagged;
    document.getElementById('modal-submit-confirm').style.display = 'flex';
  });

  document.getElementById('btn-cancel-submit')?.addEventListener('click', () => {
    document.getElementById('modal-submit-confirm').style.display = 'none';
  });
  document.getElementById('btn-close-confirm')?.addEventListener('click', () => {
    document.getElementById('modal-submit-confirm').style.display = 'none';
  });
  document.getElementById('btn-confirm-final-submit')?.addEventListener('click', () => {
    document.getElementById('modal-submit-confirm').style.display = 'none';
    submitFullQuiz();
  });

  // Results Actions
  document.getElementById('btn-res-retry-mistakes')?.addEventListener('click', startMistakesDrill);
  document.getElementById('btn-res-retake-all')?.addEventListener('click', () => startExamMode('ALL', 100, 60, true));
  document.getElementById('btn-res-print')?.addEventListener('click', () => window.print());

  // Results Review Filter Tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      const filter = e.target.getAttribute('data-filter');
      if (AppState.lastSubmissionResults) {
        renderReviewQuestionsList(AppState.lastSubmissionResults.reviewList, filter);
      }
    });
  });

  // Flashcards Controls
  document.getElementById('active-flashcard')?.addEventListener('click', flipActiveFlashcard);
  document.getElementById('btn-fc-back')?.addEventListener('click', () => showView('dashboard'));
  document.getElementById('btn-fc-shuffle')?.addEventListener('click', () => {
    AppState.fcQuestions = shuffleArray(AppState.fcQuestions);
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
    document.getElementById('modal-search').style.display = 'none';
  });

  // Custom Quiz Builder
  document.getElementById('btn-cancel-builder')?.addEventListener('click', () => {
    document.getElementById('modal-custom-builder').style.display = 'none';
  });
  document.getElementById('btn-close-builder')?.addEventListener('click', () => {
    document.getElementById('modal-custom-builder').style.display = 'none';
  });
  document.getElementById('btn-start-custom-quiz')?.addEventListener('click', () => {
    const section = document.getElementById('builder-section-select').value;
    const count = parseInt(document.querySelector('input[name="builder-count"]:checked')?.value || '25', 10);
    const mode = document.querySelector('input[name="builder-mode"]:checked')?.value || 'practice';
    const shuffle = document.getElementById('builder-shuffle')?.checked || false;

    document.getElementById('modal-custom-builder').style.display = 'none';

    if (mode === 'practice') {
      startPracticeMode(section, shuffle);
    } else {
      startExamMode(section, count, Math.max(15, count * 0.75), shuffle);
    }
  });
}
