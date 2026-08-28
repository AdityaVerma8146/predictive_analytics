// Test Script to verify API logic and questions dataset
const { questions, sections } = require('./data/questions');

console.log('--- RUNNING QUESTIONS DATA INTEGRITY TESTS ---');

// Test 1: Total 100 questions
console.log(`Total questions loaded: ${questions.length}`);
if (questions.length !== 100) {
  console.error(`ERROR: Expected 100 questions, got ${questions.length}`);
  process.exit(1);
} else {
  console.log('✅ PASS: Exactly 100 questions loaded.');
}

// Test 2: Check sections coverage
const sectionCounts = {};
questions.forEach(q => {
  sectionCounts[q.sectionId] = (sectionCounts[q.sectionId] || 0) + 1;
});
console.log('Section counts:', sectionCounts);

const expectedSections = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
expectedSections.forEach(s => {
  if (!sectionCounts[s] || sectionCounts[s] === 0) {
    console.error(`ERROR: Section ${s} has no questions!`);
    process.exit(1);
  }
});
console.log('✅ PASS: All 8 sections (A through H) populated.');

// Test 3: Validate each question structure
let errors = 0;
questions.forEach((q, index) => {
  if (!q.id || q.id !== index + 1) {
    console.error(`Question at index ${index} has bad ID: ${q.id}`);
    errors++;
  }
  if (!q.question || q.question.trim().length === 0) {
    console.error(`Question #${q.id} has empty question text.`);
    errors++;
  }
  if (!q.options || !q.options.A || !q.options.B || !q.options.C || !q.options.D) {
    console.error(`Question #${q.id} is missing options.`);
    errors++;
  }
  if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) {
    console.error(`Question #${q.id} has invalid correctAnswer: ${q.correctAnswer}`);
    errors++;
  }
  if (!q.explanation || q.explanation.trim().length === 0) {
    console.error(`Question #${q.id} has no explanation.`);
    errors++;
  }
});

if (errors > 0) {
  console.error(`❌ Total ${errors} structural errors found!`);
  process.exit(1);
} else {
  console.log('✅ PASS: All 100 questions have valid IDs, options A-D, valid answers, and rich explanations.');
}

console.log('--- ALL BACKEND DATA INTEGRITY TESTS PASSED! ---');
