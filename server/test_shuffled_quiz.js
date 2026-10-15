// Test Shuffled Option Quiz Evaluation & API Backend
const http = require('http');
const { questions } = require('./data/questions');

function shuffleQuestion(q) {
  const letters = ['A', 'B', 'C', 'D'];
  const items = letters.map(letter => ({
    origLetter: letter,
    text: q.options[letter],
    isCorrect: letter === q.correctAnswer,
    distractor: q.distractors ? q.distractors[letter] : null
  }));

  // Reverse / rotate for deterministic test
  const shifted = [items[2], items[3], items[0], items[1]];

  const newOptions = {};
  const newDistractors = {};
  let newCorrectAnswer = q.correctAnswer;

  shifted.forEach((item, idx) => {
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

async function runShuffledQuizTests() {
  console.log('🧪 TESTING SHUFFLED QUIZ EVALUATION ON BACKEND...\n');
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

  // Prepare a set of 10 shuffled questions
  const base10 = questions.slice(0, 10);
  const shuffled10 = base10.map(q => shuffleQuestion(q));

  // Verify that shuffled answers are different from master for some questions
  const changedAnswers = shuffled10.filter((sq, i) => sq.correctAnswer !== base10[i].correctAnswer);
  console.log(`  ℹ️ Shuffled correct answer letters changed for ${changedAnswers.length}/10 questions.`);

  // Test 1: Submit 10 shuffled questions with 10 correct answers (using the shuffled correct letters)
  console.log('\n1. Submitting 10 shuffled questions with 100% correct answers...');
  const userAnswers10 = {};
  shuffled10.forEach(sq => {
    userAnswers10[sq.id] = sq.correctAnswer;
  });

  const res1 = await makeRequest(
    {
      host: 'localhost',
      port: 3000,
      path: '/api/submit-quiz',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    },
    {
      answers: userAnswers10,
      timeSpentSeconds: 120,
      mode: 'exam',
      questionIds: shuffled10.map(q => q.id),
      clientQuestions: shuffled10
    }
  );

  assert(res1.status === 200, 'Quiz submission returns HTTP 200');
  const r1 = res1.data.results;
  assert(r1.totalQuestions === 10, `Total questions evaluated is 10 (got ${r1.totalQuestions})`);
  assert(r1.correctCount === 10, `Correct count is 10 (got ${r1.correctCount})`);
  assert(r1.incorrectCount === 0, `Incorrect count is 0 (got ${r1.incorrectCount})`);
  assert(r1.scorePercentage === 100, `Score percentage is 100% (got ${r1.scorePercentage}%)`);
  assert(r1.grade.includes('A+'), `Grade is A+ (got ${r1.grade})`);

  // Verify review list options match the shuffled options presented to user
  assert(
    r1.reviewList[0].options.A === shuffled10[0].options.A &&
    r1.reviewList[0].correctAnswer === shuffled10[0].correctAnswer,
    'Review list accurately retains the shuffled options & correct letter mapping'
  );

  // Test 2: Submit with 7 correct and 3 wrong answers on shuffled questions
  console.log('\n2. Submitting 10 shuffled questions with 7 correct and 3 wrong answers...');
  const userAnswers7 = {};
  const letters = ['A', 'B', 'C', 'D'];
  shuffled10.forEach((sq, idx) => {
    if (idx < 7) {
      userAnswers7[sq.id] = sq.correctAnswer; // Correct
    } else {
      // Pick intentionally wrong letter
      const wrong = letters.find(l => l !== sq.correctAnswer);
      userAnswers7[sq.id] = wrong;
    }
  });

  const res2 = await makeRequest(
    {
      host: 'localhost',
      port: 3000,
      path: '/api/submit-quiz',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    },
    {
      answers: userAnswers7,
      timeSpentSeconds: 150,
      mode: 'exam',
      questionIds: shuffled10.map(q => q.id),
      clientQuestions: shuffled10
    }
  );

  const r2 = res2.data.results;
  assert(r2.correctCount === 7, `Correct count is 7 (got ${r2.correctCount})`);
  assert(r2.incorrectCount === 3, `Incorrect count is 3 (got ${r2.incorrectCount})`);
  assert(r2.scorePercentage === 70, `Score is 70% (got ${r2.scorePercentage}%)`);
  assert(r2.grade.includes('B'), `Grade is B (got ${r2.grade})`);

  // Test 3: Check answer API with shuffled question options
  console.log('\n3. Testing /api/check-answer with shuffled options...');
  const qTest = shuffled10[0];
  const checkRes = await makeRequest(
    {
      host: 'localhost',
      port: 3000,
      path: '/api/check-answer',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    },
    {
      questionId: qTest.id,
      selectedAnswer: qTest.correctAnswer,
      options: qTest.options,
      correctAnswer: qTest.correctAnswer,
      distractors: qTest.distractors
    }
  );

  assert(checkRes.status === 200, 'Check answer endpoint returned HTTP 200');
  assert(checkRes.data.isCorrect === true, 'Identified shuffled answer as correct');
  assert(checkRes.data.correctAnswer === qTest.correctAnswer, 'Returned correct shuffled letter');

  console.log(`\n========================================`);
  console.log(`📊 SHUFFLED QUIZ TESTS: ${passed} PASSED, ${failed} FAILED`);
  console.log(`========================================\n`);

  if (failed > 0) process.exit(1);
}

runShuffledQuizTests();
