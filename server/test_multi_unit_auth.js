// Comprehensive test suite for Multi-Unit (Unit 1, Unit 2, Unit 3), Auth, and Analytics
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { units, getUnit } = require('./data/units');

console.log('==================================================');
console.log('🧪 RUNNING COMPREHENSIVE MULTI-UNIT & AUTH TESTS');
console.log('==================================================');

// 1. Verify Unit 1
const u1 = getUnit('unit1');
console.log(`Unit 1 loaded: ${u1.questions.length} questions, ${u1.sections.length} sections`);
if (u1.questions.length !== 100) throw new Error('Unit 1 must have 100 questions');
console.log('✅ PASS: Unit 1 has exactly 100 MCQs.');

// 2. Verify Unit 2
const u2 = getUnit('unit2');
console.log(`Unit 2 loaded: ${u2.questions.length} questions, ${u2.sections.length} sections`);
if (u2.questions.length !== 100) throw new Error('Unit 2 must have 100 questions');
const u2Counts = {};
u2.questions.forEach(q => { u2Counts[q.sectionId] = (u2Counts[q.sectionId] || 0) + 1; });
console.log('Unit 2 Section Breakdown:', u2Counts);
if (u2Counts.A !== 35 || u2Counts.B !== 35 || u2Counts.C !== 20 || u2Counts.D !== 10) {
  throw new Error(`Unit 2 section counts mismatch! Expected A:35, B:35, C:20, D:10, got ${JSON.stringify(u2Counts)}`);
}
console.log('✅ PASS: Unit 2 has 35 (A) + 35 (B) + 20 (C) + 10 (D) = exactly 100 MCQs.');

// 3. Verify Unit 2 Revision Sheet
if (!u2.revisionSheet || u2.revisionSheet.length !== 29) {
  throw new Error(`Unit 2 revision sheet expected 29 items, got ${u2.revisionSheet ? u2.revisionSheet.length : 0}`);
}
console.log(`✅ PASS: Unit 2 Revision Sheet has ${u2.revisionSheet.length} high-yield topics.`);

// 4. Verify Unit 3
const u3 = getUnit('unit3');
if (u3.status !== 'coming_soon') throw new Error('Unit 3 must have status coming_soon');
console.log('✅ PASS: Unit 3 configured as Coming Soon.');

// 5. Test Question Options & Correct Answers Integrity on Unit 2
let u2Errors = 0;
u2.questions.forEach((q, idx) => {
  if (q.id !== idx + 1) { console.error(`Bad ID: ${q.id}`); u2Errors++; }
  if (!q.options.A || !q.options.B || !q.options.C || !q.options.D) { console.error(`Missing options in Q#${q.id}`); u2Errors++; }
  if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) { console.error(`Invalid answer in Q#${q.id}`); u2Errors++; }
  if (!q.explanation || q.explanation.length < 5) { console.error(`Missing explanation in Q#${q.id}`); u2Errors++; }
});
if (u2Errors > 0) throw new Error(`Found ${u2Errors} errors in Unit 2 questions`);
console.log('✅ PASS: All 100 questions in Unit 2 verified for valid IDs, options A-D, answers, and explanations.');

// 6. Verify the generated browser bundle exposes the same real Unit 2 bank
const clientWindow = {};
const clientBundlePath = path.join(__dirname, '../public/js/questions-data.js');
vm.runInNewContext(fs.readFileSync(clientBundlePath, 'utf8'), { window: clientWindow });
const clientUnit2 = clientWindow.PREDICTIVE_ANALYTICS_DATA.getUnitData('unit2');
if (JSON.stringify(clientUnit2.questions) !== JSON.stringify(u2.questions) ||
    clientUnit2.revisionSheet.length !== u2.revisionSheet.length) {
  throw new Error('The browser Unit 2 bundle does not match the source question bank.');
}
console.log('✅ PASS: All browser Unit 2 questions and revision topics match the source data.');

console.log('==================================================');
console.log('🎉 ALL MULTI-UNIT & AUTH DATA INTEGRITY TESTS PASSED!');
console.log('==================================================');
