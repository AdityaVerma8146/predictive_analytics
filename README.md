# Predictive Analytics — Interactive Quiz Application

An interactive web application built with **Node.js, Express, and Vanilla JavaScript/CSS** for studying Predictive Analytics. Unit 1 and Unit 2 each provide a 100-question bank; questions are shared between the server API and the generated browser bundle so the quiz also works on static deployments. The app includes practice explanations, timed exams, section review, flashcards, bookmarks, and diagnostic results.

---

## 🌟 Key Features

### 1. 🧠 Interactive Practice Mode with Instant Explanations
- **Real-time Feedback**: Selecting an option instantly evaluates correctness.
- **Misconception Buster**: If you make a wrong attempt, the system highlights your choice in crimson, shakes the card, and immediately displays a **"Why Your Selection is Wrong"** breakdown.
- **Mathematical Workouts**: For numerical questions (IQR, Tukey Fences, Z-score standardization, Min-Max normalization, Sigmoid calculations, Gini Impurity, Entropy, MSE, Precision, Recall, Accuracy), a dedicated step-by-step calculation card is revealed.
- **Key Takeaways & Formula Cards**: Every question includes a concise summary rule for fast memory consolidation.

### 2. ⏱️ Timed Mock Exam Mode
- Simulates official examination conditions with a customizable countdown timer (e.g. 60 mins for 100 Qs).
- Live Question Palette sidebar (1-100 grid) showing real-time states (Answered, Flagged for Review, Unvisited, Current).
- Submit confirmation modal with summary of answered vs unanswered questions.
- Comprehensive diagnostic scorecard with Grade (A+, A, B, C, D, F), Accuracy %, Time spent, and Avg speed per question.

### 3. 🎯 Section-by-Section Mastery
Choose Unit 1 or Unit 2 and practice individual syllabus sections. Unit 1 covers:
- **Section A**: Introduction to Predictive Analysis (Q1 - Q15)
- **Section B**: Data Cleaning and Preprocessing (Q16 - Q30)
- **Section C**: Feature Scaling, Encoding & Feature Engineering (Q31 - Q45)
- **Section D**: Train-Test Split & Cross-Validation (Q46 - Q55)
- **Section E**: EDA & Imbalanced Data (Q56 - Q66)
- **Section F**: Supervised Learning & Algorithms (Q67 - Q85)
- **Section G**: Random Forest & Gradient Boosting (Q86 - Q90)
- **Section H**: Model Evaluation & Confusion Matrix (Q91 - Q100)

Unit 2 covers data storage and warehousing, feature engineering, visualization, evaluation, and ethics across four sections. Its 100 questions and revision sheet are sourced from `server/data/unit2.js`.

### 4. 🎴 3D Flippable Flashcards Revision
- Test conceptual recall with 3D card flipping animations.
- Mark cards as "Mastered" or "Need Practice" to dynamically populate your Mistake Bank.

### 5. ⚠️ Mistake Bank & Weakness Retester
- Automatically records questions answered incorrectly across any mode.
- Practice only missed questions until you achieve 100% mastery.

### 6. 🔍 Instant Search & Question Explorer
- Search across all 100 MCQs, formulas, and distractor explanations by pressing `/` or clicking the search icon.

### 7. 🔊 Web Audio Sound FX & 🌓 Dark/Light Themes
- Built-in Web Audio API synthesizer for positive chimes, gentle mistake alerts, click sounds, and victory fanfare (no external audio files needed).
- Sleek glassmorphism dark theme by default with smooth light theme toggle.
- Keyboard shortcuts: `1-4` / `A-D` to select, `Space`/`Enter` to navigate or flip flashcards, `Arrow Left/Right` to browse questions, `/` to search.

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Application Server
```bash
npm start
```
The server will start at **`http://localhost:3000`**.

### 3. Run Automated Tests
```bash
npm test
```
To run the full 36-point end-to-end integration test suite:
```bash
node server/test_full_suite.js
```

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Healthcheck and question count |
| `GET` | `/api/sections` | Metadata and counts for all 8 syllabus units |
| `GET` | `/api/questions` | Filter questions by section, difficulty, keyword search, limit, or shuffle |
| `GET` | `/api/questions/:id` | Full question details, distractors, formulas, and explanations |
| `POST` | `/api/check-answer` | Evaluates single answer in practice mode with step-by-step solutions |
| `POST` | `/api/submit-quiz` | Scores full mock exams, generates section diagnostics and recommendations |
| `POST` | `/api/bookmarks/toggle` | Save or unsave bookmarked questions |
| `POST` | `/api/notes` | Save custom personal study notes for any MCQ |
| `GET` | `/api/stats` | Retrieve test history and mastery statistics |

---

## 📁 Project Structure

```
├── server/
│   ├── data/
│   │   ├── questions.js      # Unit 1 question bank
│   │   └── unit2.js          # Unit 2 question bank and revision sheet
│   ├── server.js             # Express REST API backend server
│   ├── test_api.js           # Question structure and data integrity test
│   └── test_full_suite.js    # Comprehensive full-stack integration test suite
├── public/
│   ├── index.html            # Semantic HTML5 single-page application
│   ├── css/
│   │   └── styles.css        # Glassmorphic responsive dark/light styling system
│   └── js/
│       ├── audio.js          # Web Audio API sound synthesizer
│       ├── app.js            # Frontend state machine and interactive engine
│       └── questions-data.js # Generated browser bundle for static deployments
├── package.json
└── README.md
```
