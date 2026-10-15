/**
 * Units Master Repository for Predictive Analytics
 * Unit 1: Foundations & Classical ML (100 MCQs, Sections A-H)
 * Unit 2: Data Storage, Feature Engineering & Visualization (100 MCQs, Sections A-D + Revision Sheet)
 * Unit 3: Advanced Predictive Modeling & AI (Coming Soon)
 */

const { questions: unit1Questions, sections: unit1Sections } = require('./questions');
const { unit2Questions, unit2Sections, unit2RevisionSheet } = require('./unit2');

const units = {
  unit1: {
    id: 'unit1',
    number: 1,
    title: 'Unit 1: Foundations & Classical ML',
    shortTitle: 'Unit 1: Foundations & ML',
    subtitle: '100 MCQs • 8 Sections (A to H)',
    description: 'Master core foundations, data cleaning, IQR outliers, feature scaling, train-test splits, cross-validation, regression, logistic, decision trees, ensembles, and evaluation metrics.',
    badge: '100 MCQs Ready',
    status: 'available',
    questionCount: unit1Questions.length,
    sections: unit1Sections,
    questions: unit1Questions,
    revisionSheet: []
  },
  unit2: {
    id: 'unit2',
    number: 2,
    title: 'Unit 2: Storage, Feature Engineering & Visualization',
    shortTitle: 'Unit 2: Storage, Features & Viz',
    subtitle: '100 MCQs • 4 Sections (A to D) + High-Yield Revision Sheet',
    description: 'Master data storage & warehousing, ETL vs ELT pipelines, database indexing, feature importance & selection (RFE, Lasso), scaling, lag & rolling features, PCA, Python visualization (Matplotlib, Seaborn, Tableau), and responsible AI ethics.',
    badge: '100 MCQs Ready',
    status: 'available',
    questionCount: unit2Questions.length,
    sections: unit2Sections,
    questions: unit2Questions,
    revisionSheet: unit2RevisionSheet
  },
  unit3: {
    id: 'unit3',
    number: 3,
    title: 'Unit 3: Advanced Predictive Modeling & AI',
    shortTitle: 'Unit 3: Advanced AI',
    subtitle: '100 MCQs • Coming Soon',
    description: 'Upcoming university syllabus covering Deep Neural Networks, Time-Series Forecasting (ARIMA, LSTM, GRU), Natural Language Processing for Predictive Analytics, and Cloud MLOps Model Deployment.',
    badge: 'Coming Soon',
    status: 'coming_soon',
    questionCount: 0,
    sections: [],
    questions: [],
    revisionSheet: []
  }
};

function getUnit(unitId = 'unit1') {
  const normalized = String(unitId).toLowerCase().replace(/[^a-z0-9]/g, '');
  if (normalized === 'unit2' || normalized === '2') {
    return units.unit2;
  }
  if (normalized === 'unit3' || normalized === '3') {
    return units.unit3;
  }
  return units.unit1;
}

module.exports = {
  units,
  getUnit
};
