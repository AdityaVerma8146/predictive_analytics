// Full-Stack Comprehensive Integration Test Suite
const http = require('http');

async function makeRequest(options, postData = null) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve({ status: res.statusCode, headers: res.headers, data: parsed, raw: data });
        } catch (e) {
          resolve({ status: res.statusCode, headers: res.headers, raw: data });
        }
      });
    });
    req.on('error', reject);
    if (postData) {
      req.write(typeof postData === 'string' ? postData : JSON.stringify(postData));
    }
    req.end();
  });
}

async function runTests() {
  console.log('🚀 STARTING FULL INTEGRATION TEST SUITE...\n');
  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${message}`);
      failed++;
    }
  }

  try {
    // 1. Health Check
    console.log('1. Testing /api/health...');
    const health = await makeRequest({ host: 'localhost', port: 3000, path: '/api/health', method: 'GET' });
    assert(health.status === 200, 'Health endpoint returns HTTP 200');
    assert(health.data.status === 'ok' && health.data.totalQuestions === 100, 'Health report shows 100 MCQs loaded');

    // 2. Sections API
    console.log('\n2. Testing /api/sections...');
    const secRes = await makeRequest({ host: 'localhost', port: 3000, path: '/api/sections', method: 'GET' });
    assert(secRes.status === 200, 'Sections endpoint returns HTTP 200');
    assert(secRes.data.sections.length === 8, 'Returns exactly 8 sections (A to H)');
    const expectedTotals = { A: 15, B: 15, C: 15, D: 10, E: 11, F: 19, G: 5, H: 10 };
    secRes.data.sections.forEach(s => {
      assert(s.count === expectedTotals[s.id], `Section ${s.id} count is ${s.count} (expected ${expectedTotals[s.id]})`);
    });

    // 3. Question Filtering API
    console.log('\n3. Testing /api/questions filtering...');
    const allQs = await makeRequest({ host: 'localhost', port: 3000, path: '/api/questions?includeAnswers=true', method: 'GET' });
    assert(allQs.data.count === 100, 'Fetched all 100 questions');

    const secC = await makeRequest({ host: 'localhost', port: 3000, path: '/api/questions?section=C&includeAnswers=true', method: 'GET' });
    assert(secC.data.count === 15, 'Section C filter returns 15 questions');

    const searchRes = await makeRequest({ host: 'localhost', port: 3000, path: '/api/questions?search=SMOTE&includeAnswers=true', method: 'GET' });
    assert(searchRes.data.count >= 2, `Search 'SMOTE' returns ${searchRes.data.count} questions`);

    // 4. Wrong Answer Check (Practice Mode Instant Feedback & Distractor Breakdown)
    console.log('\n4. Testing /api/check-answer on wrong selection (Q27)...');
    const wrongAttempt = await makeRequest(
      {
        host: 'localhost',
        port: 3000,
        path: '/api/check-answer',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      },
      { questionId: 27, selectedAnswer: 'A' }
    );
    assert(wrongAttempt.status === 200, 'Check answer endpoint returned HTTP 200');
    assert(wrongAttempt.data.isCorrect === false, 'Identified attempt as incorrect');
    assert(wrongAttempt.data.correctAnswer === 'C', 'Correct answer is identified as C (60)');
    assert(wrongAttempt.data.solution && wrongAttempt.data.solution.includes('Upper Fence = Q3 + 1.5'), 'Includes step-by-step IQR calculation');
    assert(wrongAttempt.data.selectedDistractorExplanation.includes('40 is simply Q3 + 10'), 'Explains why choice A (40) was wrong');

    // 5. Correct Answer Check (Practice Mode)
    console.log('\n5. Testing /api/check-answer on correct selection (Q93 - MSE Calculation)...');
    const correctAttempt = await makeRequest(
      {
        host: 'localhost',
        port: 3000,
        path: '/api/check-answer',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      },
      { questionId: 93, selectedAnswer: 'B' }
    );
    assert(correctAttempt.data.isCorrect === true, 'Identified attempt as correct');
    assert(correctAttempt.data.solution && correctAttempt.data.solution.includes('MSE = (4 + 4) / 2 = 8 / 2 = 4'), 'Includes full MSE calculation workout');
    assert(correctAttempt.data.keyTakeaway && correctAttempt.data.keyTakeaway.includes('MSE'), 'Includes key takeaway formula');

    // 6. Exam Mode Submission & Diagnostic Evaluation
    console.log('\n6. Testing /api/submit-quiz (Full Exam Scoring)...');
    const examSubmission = await makeRequest(
      {
        host: 'localhost',
        port: 3000,
        path: '/api/submit-quiz',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      },
      {
        answers: {
          1: 'B', 2: 'A', 3: 'C', 4: 'A', 5: 'B', 6: 'D', 7: 'B', 8: 'B', 9: 'B', 10: 'B',
          11: 'A', 12: 'B', 13: 'A', 14: 'D', 15: 'A', // Section A: 15/15 = 100%
          16: 'A', 17: 'A', 18: 'B', 19: 'A', 20: 'B', 21: 'A', 22: 'D', 23: 'A', 24: 'A', 25: 'B',
          26: 'B', 27: 'A', 28: 'B', 29: 'D', 30: 'A'  // Section B: 14/15 (Q27 wrong)
        },
        timeSpentSeconds: 450,
        mode: 'exam'
      }
    );
    assert(examSubmission.status === 200, 'Quiz submission returns HTTP 200');
    const r = examSubmission.data.results;
    assert(r.totalQuestions === 100, 'Total questions evaluated: 100');
    assert(r.answeredCount === 30, 'Answered questions count: 30');
    assert(r.correctCount === 29, 'Correct questions count: 29');
    assert(r.incorrectCount === 1, 'Incorrect questions count: 1');
    assert(r.unansweredCount === 70, 'Unanswered count: 70');
    assert(r.sectionBreakdown.length === 8, 'Section breakdown contains all 8 units');
    assert(r.reviewList.length === 100, 'Review list contains all 100 questions');

    // 7. Bookmarks & Notes
    console.log('\n7. Testing /api/bookmarks and /api/notes...');
    const bookmarkToggle = await makeRequest(
      {
        host: 'localhost',
        port: 3000,
        path: '/api/bookmarks/toggle',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      },
      { questionId: 45 }
    );
    assert(bookmarkToggle.data.success === true && typeof bookmarkToggle.data.isBookmarked === 'boolean', 'Toggled bookmark for Q45');

    const noteSave = await makeRequest(
      {
        host: 'localhost',
        port: 3000,
        path: '/api/notes',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      },
      { questionId: 45, note: 'Remember: BMI is weight divided by height squared in meters.' }
    );
    assert(noteSave.data.note.includes('weight divided by height squared'), 'Saved custom study note');

    // 8. Static Web Assets Verification
    console.log('\n8. Testing Static Assets...');
    const indexHtml = await makeRequest({ host: 'localhost', port: 3000, path: '/', method: 'GET' });
    assert(indexHtml.status === 200 && indexHtml.raw.includes('Predictive Analytics'), 'index.html served correctly');

    const cssFile = await makeRequest({ host: 'localhost', port: 3000, path: '/css/styles.css', method: 'GET' });
    assert(cssFile.status === 200 && cssFile.raw.includes('--bg-primary'), 'styles.css served correctly');

    const jsFile = await makeRequest({ host: 'localhost', port: 3000, path: '/js/app.js', method: 'GET' });
    assert(jsFile.status === 200 && jsFile.raw.includes('AppState'), 'app.js served correctly');

    console.log(`\n========================================`);
    console.log(`📊 FINAL RESULT: ${passed} PASSED, ${failed} FAILED`);
    console.log(`========================================\n`);

    if (failed > 0) {
      process.exit(1);
    }
  } catch (err) {
    console.error('Integration test exception:', err);
    process.exit(1);
  }
}

runTests();
