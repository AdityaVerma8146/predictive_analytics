// Script to balance the base dataset across A, B, C, D and format both data files
const fs = require('fs');
const path = require('path');
const { questions, sections } = require('./data/questions.js');

function shuffleQuestion(q, targetIndex) {
  const letters = ['A', 'B', 'C', 'D'];
  const targetCorrectLetter = letters[targetIndex % 4];

  // Current items
  const currentItems = letters.map(l => ({
    origLetter: l,
    text: q.options[l],
    isCorrect: l === q.correctAnswer,
    distractor: q.distractors ? q.distractors[l] : null
  }));

  const correctItem = currentItems.find(it => it.isCorrect);
  const wrongItems = currentItems.filter(it => !it.isCorrect);

  // Shuffle wrong items randomly
  for (let i = wrongItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wrongItems[i], wrongItems[j]] = [wrongItems[j], wrongItems[i]];
  }

  // Place correct item at target position
  const targetPos = letters.indexOf(targetCorrectLetter);
  const finalItems = [];
  let wrongIdx = 0;
  for (let i = 0; i < 4; i++) {
    if (i === targetPos) {
      finalItems.push(correctItem);
    } else {
      finalItems.push(wrongItems[wrongIdx++]);
    }
  }

  const newOptions = {};
  const newDistractors = {};
  finalItems.forEach((it, idx) => {
    const letter = letters[idx];
    newOptions[letter] = it.text;
    if (!it.isCorrect && it.distractor) {
      newDistractors[letter] = it.distractor;
    }
  });

  return {
    id: q.id,
    sectionId: q.sectionId,
    sectionTitle: q.sectionTitle,
    question: q.question,
    options: newOptions,
    correctAnswer: targetCorrectLetter,
    explanation: q.explanation,
    solution: q.solution || null,
    distractors: newDistractors,
    keyTakeaway: q.keyTakeaway || null,
    difficulty: q.difficulty || "Standard",
    tags: q.tags || []
  };
}

const balancedQuestions = questions.map((q, idx) => shuffleQuestion(q, idx));

// Check distribution
const counts = { A: 0, B: 0, C: 0, D: 0 };
balancedQuestions.forEach(q => counts[q.correctAnswer]++);
console.log('Balanced dataset distribution:', counts);

// Format server/data/questions.js
const serverContent = `/**
 * Complete Question Bank: Unit-1 Predictive Analysis (100 MCQs)
 * Fully annotated with rich explanations, mathematical derivations, distractor breakdowns, and key takeaways.
 * Perfectly balanced across all options A, B, C, and D (25% each).
 */

const questions = ${JSON.stringify(balancedQuestions, null, 2)};

const sections = ${JSON.stringify(sections, null, 2)};

module.exports = {
  questions,
  sections
};
`;

// Format public/js/questions-data.js
const clientContent = `/**
 * Predictive Analytics 100 MCQs - Complete Client-Side Dataset
 * Enables 100% offline, zero-latency, and static deployment support.
 * Perfectly balanced across options A, B, C, and D.
 */

window.PREDICTIVE_ANALYTICS_DATA = {
  sections: ${JSON.stringify(sections, null, 2)},
  questions: ${JSON.stringify(balancedQuestions, null, 2)}
};
`;

fs.writeFileSync(path.join(__dirname, 'data', 'questions.js'), serverContent, 'utf8');
fs.writeFileSync(path.join(__dirname, '..', 'public', 'js', 'questions-data.js'), clientContent, 'utf8');

console.log('✅ Successfully wrote balanced questions to server/data/questions.js and public/js/questions-data.js');
