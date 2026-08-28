// Test Custom Quiz Builder Submission & Scoring
const http = require('http');

async function makeRequest(options, postData = null) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: data });
        }
      });
    });
    req.on('error', reject);
    if (postData) {
      req.write(JSON.stringify(postData));
    }
    req.end();
  });
}

async function runCustomBuilderTests() {
  console.log('🧪 TESTING CUSTOM QUIZ BUILDER SCORING & TOTALS...\n');
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

  // Test 1: 10 Custom Questions submitted
  console.log('1. Submitting 10 custom questions with 10 correct answers...');
  const custom10Ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const custom10Answers = {
    1: 'B', 2: 'A', 3: 'C', 4: 'A', 5: 'B',
    6: 'D', 7: 'B', 8: 'B', 9: 'B', 10: 'B'
  };

  const res10 = await makeRequest(
    {
      host: 'localhost',
      port: 3000,
      path: '/api/submit-quiz',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    },
    {
      answers: custom10Answers,
      timeSpentSeconds: 95,
      mode: 'exam',
      questionIds: custom10Ids
    }
  );

  assert(res10.status === 200, 'Endpoint returned HTTP 200');
  const r10 = res10.data.results;
  assert(r10.totalQuestions === 10, `Total questions is 10 (got ${r10.totalQuestions})`);
  assert(r10.correctCount === 10, `Correct count is 10 (got ${r10.correctCount})`);
  assert(r10.answeredCount === 10, `Answered count is 10 (got ${r10.answeredCount})`);
  assert(r10.unansweredCount === 0, `Unanswered count is 0 (got ${r10.unansweredCount})`);
  assert(r10.scorePercentage === 100, `Score is 100% (got ${r10.scorePercentage}%)`);
  assert(r10.grade.includes('A+'), `Grade is A+ (got ${r10.grade})`);
  assert(r10.reviewList.length === 10, `Review list contains exactly 10 questions (got ${r10.reviewList.length})`);

  // Test 2: 25 Custom Questions with 20 correct and 5 wrong
  console.log('\n2. Submitting 25 custom questions with 20 correct and 5 wrong...');
  const custom25Ids = Array.from({ length: 25 }, (_, i) => i + 1);
  const custom25Answers = {};
  custom25Ids.forEach(id => {
    if (id <= 20) {
      // Correct
      const q = [
        null, 'B','A','C','A','B','D','B','B','B','B',
        'A','B','A','D','A','A','A','B','A','B'
      ][id];
      custom25Answers[id] = q;
    } else {
      // Intentionally wrong
      custom25Answers[id] = 'C';
    }
  });

  const res25 = await makeRequest(
    {
      host: 'localhost',
      port: 3000,
      path: '/api/submit-quiz',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    },
    {
      answers: custom25Answers,
      timeSpentSeconds: 210,
      mode: 'exam',
      questionIds: custom25Ids
    }
  );

  const r25 = res25.data.results;
  assert(r25.totalQuestions === 25, `Total questions is 25 (got ${r25.totalQuestions})`);
  assert(r25.correctCount === 20, `Correct count is 20 (got ${r25.correctCount})`);
  assert(r25.incorrectCount === 5, `Incorrect count is 5 (got ${r25.incorrectCount})`);
  assert(r25.scorePercentage === 80, `Score is 80% (got ${r25.scorePercentage}%)`);
  assert(r25.grade.includes('A'), `Grade is A (got ${r25.grade})`);
  assert(r25.reviewList.length === 25, `Review list contains exactly 25 questions (got ${r25.reviewList.length})`);

  console.log(`\n========================================`);
  console.log(`📊 CUSTOM BUILDER TESTS: ${passed} PASSED, ${failed} FAILED`);
  console.log(`========================================\n`);

  if (failed > 0) process.exit(1);
}

runCustomBuilderTests();
