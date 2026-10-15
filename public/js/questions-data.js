/**
 * Predictive Analytics Multi-Unit Client-Side Dataset
 * Developed by Aditya Verma
 * Supports Unit-1, Unit-2 (100 MCQs each), and Unit-3 (Coming Soon).
 * Enables 100% offline, zero-latency, and static deployment support.
 */

window.PREDICTIVE_ANALYTICS_DATA = {
  activeUnit: 'unit1',
  units: {
    unit1: {
      id: "unit1",
      number: 1,
      title: "Unit 1: Foundations & Classical ML",
      shortTitle: "Unit 1: Foundations & ML",
      subtitle: "100 MCQs • 8 Sections (A to H)",
      description: "Master core foundations, data cleaning, IQR outliers, feature scaling, train-test splits, cross-validation, regression, logistic, decision trees, ensembles, and evaluation metrics.",
      badge: "100 MCQs Ready",
      status: "available",
      sections: [
  {
    "id": "A",
    "title": "A. Introduction to Predictive Analysis",
    "description": "Foundations, analytics taxonomy (descriptive, diagnostic, predictive, prescriptive), ML lifecycle, data quality, and ethics.",
    "count": 15,
    "range": "Q1 - Q15",
    "color": "#6366f1"
  },
  {
    "id": "B",
    "title": "B. Data Cleaning and Preprocessing",
    "description": "Missing values, mean/median/mode imputation, outlier detection, Tukey fences, IQR calculation, and noise.",
    "count": 15,
    "range": "Q16 - Q30",
    "color": "#06b6d4"
  },
  {
    "id": "C",
    "title": "C. Feature Scaling, Encoding & Feature Engineering",
    "description": "Standardization (Z-score), Min-Max normalization, One-Hot Encoding, Label Encoding, and Feature Engineering formulas (BMI).",
    "count": 15,
    "range": "Q31 - Q45",
    "color": "#10b981"
  },
  {
    "id": "D",
    "title": "D. Train-Test Split & Cross-Validation",
    "description": "Train/validation/test splits, data leakage prevention, K-Fold cross-validation mechanisms, and scoring.",
    "count": 10,
    "range": "Q46 - Q55",
    "color": "#f59e0b"
  },
  {
    "id": "E",
    "title": "E. EDA & Imbalanced Data",
    "description": "Exploratory data analysis, histograms, scatter plots, variance, correlation, class imbalance, and SMOTE.",
    "count": 11,
    "range": "Q56 - Q66",
    "color": "#ec4899"
  },
  {
    "id": "F",
    "title": "F. Supervised Learning & Algorithms",
    "description": "Linear regression equations (β₀, β₁), Logistic regression, Sigmoid function, Decision trees, Gini Impurity, and Entropy/Information Gain.",
    "count": 19,
    "range": "Q67 - Q85",
    "color": "#8b5cf6"
  },
  {
    "id": "G",
    "title": "G. Random Forest & Gradient Boosting",
    "description": "Ensemble learning, Bagging vs Boosting, majority voting, residual fitting, and sequential learning.",
    "count": 5,
    "range": "Q86 - Q90",
    "color": "#14b8a6"
  },
  {
    "id": "H",
    "title": "H. Model Evaluation",
    "description": "Regression metrics (MSE, R²), Confusion matrix mathematics (Precision, Recall, Accuracy, Specificity), F1-score, and Overfitting vs Underfitting.",
    "count": 10,
    "range": "Q91 - Q100",
    "color": "#f43f5e"
  }
],
      questions: [
  {
    "id": 1,
    "sectionId": "A",
    "sectionTitle": "A. Introduction to Predictive Analysis",
    "question": "Predictive analytics is primarily used to:",
    "options": {
      "A": "Predict future outcomes",
      "B": "Create databases",
      "C": "Store historical data",
      "D": "Delete irrelevant data"
    },
    "correctAnswer": "A",
    "explanation": "Predictive analytics extracts actionable insights from historical and real-time data using statistical algorithms and machine learning techniques to forecast future probabilities, behaviors, trends, and outcomes.",
    "solution": null,
    "distractors": {
      "B": "Creating databases is a database management (DBMS) task.",
      "C": "Storing historical data is the function of data warehousing and storage systems, not predictive modeling.",
      "D": "Deleting irrelevant data is part of data cleaning/preprocessing."
    },
    "keyTakeaway": "Predictive Analytics = Historical Data + Statistical/ML Algorithms -> Future Predictions.",
    "difficulty": "Easy",
    "tags": [
      "Fundamentals",
      "Definition"
    ]
  },
  {
    "id": 2,
    "sectionId": "A",
    "sectionTitle": "A. Introduction to Predictive Analysis",
    "question": "Predictive analytics mainly uses:",
    "options": {
      "A": "Random guesses",
      "B": "Historical data and analytical techniques",
      "C": "Only manual calculations",
      "D": "Only current data"
    },
    "correctAnswer": "B",
    "explanation": "Predictive analytics relies fundamentally on historical patterns identified through statistical algorithms, machine learning models, and automated analytical techniques to predict what will happen next.",
    "solution": null,
    "distractors": {
      "A": "Predictive analytics is rigorous and empirical, the exact opposite of random guessing.",
      "C": "Modern predictive analytics involves computational algorithms running on massive datasets, far beyond manual calculation.",
      "D": "Current data alone lacks the longitudinal pattern context needed to model trends and train statistical models."
    },
    "keyTakeaway": "Core Inputs: Past patterns (Historical Data) + Quantitative Modeling (Analytical Techniques).",
    "difficulty": "Easy",
    "tags": [
      "Fundamentals",
      "Inputs"
    ]
  },
  {
    "id": 3,
    "sectionId": "A",
    "sectionTitle": "A. Introduction to Predictive Analysis",
    "question": "Which type of analytics answers the question \"What is likely to happen?\"",
    "options": {
      "A": "Diagnostic analytics",
      "B": "Prescriptive analytics",
      "C": "Predictive analytics",
      "D": "Descriptive analytics"
    },
    "correctAnswer": "C",
    "explanation": "The analytics maturity spectrum answers 4 core questions:\n1. Descriptive: 'What happened?'\n2. Diagnostic: 'Why did it happen?'\n3. Predictive: 'What is likely to happen?'\n4. Prescriptive: 'What action should we take?'",
    "solution": null,
    "distractors": {
      "A": "Diagnostic analytics investigates root causes and answers 'Why did it happen?'.",
      "B": "Prescriptive analytics recommends optimal actions and answers 'What should we do about it?'.",
      "D": "Descriptive analytics summarizes past events and reports 'What happened?'."
    },
    "keyTakeaway": "Spectrum: Descriptive (What happened) -> Diagnostic (Why) -> Predictive (What will happen) -> Prescriptive (What to do).",
    "difficulty": "Easy",
    "tags": [
      "Analytics Types",
      "Maturity Model"
    ]
  },
  {
    "id": 4,
    "sectionId": "A",
    "sectionTitle": "A. Introduction to Predictive Analysis",
    "question": "Which of the following is an application of predictive analytics?",
    "options": {
      "A": "Typing data",
      "B": "Creating a folder",
      "C": "Formatting a document",
      "D": "Predicting customer churn"
    },
    "correctAnswer": "D",
    "explanation": "Predicting customer churn involves training classification algorithms on user behavior (usage frequency, support tickets, billing history) to identify customers at risk of canceling subscriptions before they leave.",
    "solution": null,
    "distractors": {
      "A": "Typing data is manual data entry.",
      "B": "Creating a folder is file system management in an OS.",
      "C": "Formatting a document is basic word processing."
    },
    "keyTakeaway": "Real-world Predictive Use Cases: Customer churn, fraud detection, credit scoring, demand forecasting, disease diagnosis.",
    "difficulty": "Easy",
    "tags": [
      "Applications",
      "Churn Prediction"
    ]
  },
  {
    "id": 5,
    "sectionId": "A",
    "sectionTitle": "A. Introduction to Predictive Analysis",
    "question": "Predictive analytics supports decision-making by:",
    "options": {
      "A": "Providing data-driven predictions",
      "B": "Eliminating all human judgment",
      "C": "Removing historical data",
      "D": "Randomizing decisions"
    },
    "correctAnswer": "A",
    "explanation": "Predictive analytics augments decision-making by quantifying risks and forecasting future outcomes with statistical probabilities based on empirical data, enabling leaders to make informed, data-driven decisions.",
    "solution": null,
    "distractors": {
      "B": "It augments and empowers human judgment rather than eliminating it entirely.",
      "C": "It preserves and leverages historical data rather than removing it.",
      "D": "It minimizes uncertainty and randomness rather than randomizing choices."
    },
    "keyTakeaway": "Predictive systems provide probabilistic evidence to enhance human decision-making.",
    "difficulty": "Easy",
    "tags": [
      "Decision Support"
    ]
  },
  {
    "id": 6,
    "sectionId": "A",
    "sectionTitle": "A. Introduction to Predictive Analysis",
    "question": "Which is NOT generally a characteristic of good predictive data?",
    "options": {
      "A": "Relevance",
      "B": "Randomness",
      "C": "Accuracy",
      "D": "Completeness"
    },
    "correctAnswer": "B",
    "explanation": "Good predictive data must have high quality—meaning it is accurate, complete, consistent, timely, and relevant to the target problem. Unstructured randomness or noise obscures real patterns and degrades model performance.",
    "solution": null,
    "distractors": {
      "A": "Relevance ensures features have true predictive relationship with the target variable.",
      "C": "Accuracy is essential: incorrect data yields misleading predictions ('Garbage In, Garbage Out').",
      "D": "Completeness ensures models do not suffer from missing information bias."
    },
    "keyTakeaway": "Key Data Quality Dimensions: Accuracy, Completeness, Consistency, Timeliness, Relevance.",
    "difficulty": "Easy",
    "tags": [
      "Data Quality"
    ]
  },
  {
    "id": 7,
    "sectionId": "A",
    "sectionTitle": "A. Introduction to Predictive Analysis",
    "question": "Data is considered accurate when:",
    "options": {
      "A": "It contains duplicate records",
      "B": "It contains many missing values",
      "C": "It correctly represents the real-world situation",
      "D": "It is always large"
    },
    "correctAnswer": "C",
    "explanation": "Data accuracy measures the degree of conformity between recorded values in a dataset and the true, factual ground-truth values in the real world.",
    "solution": null,
    "distractors": {
      "A": "Duplicate records indicate redundancy and poor data hygiene.",
      "B": "Missing values represent incompleteness, not accuracy.",
      "D": "A large dataset can still be full of inaccuracies and noise."
    },
    "keyTakeaway": "Accuracy = Closeness between recorded values and real-world truth.",
    "difficulty": "Easy",
    "tags": [
      "Data Quality",
      "Accuracy"
    ]
  },
  {
    "id": 8,
    "sectionId": "A",
    "sectionTitle": "A. Introduction to Predictive Analysis",
    "question": "Data consistency means:",
    "options": {
      "A": "Data has many features",
      "B": "Data is very large",
      "C": "Data is always numerical",
      "D": "Data does not contain contradictions"
    },
    "correctAnswer": "D",
    "explanation": "Data consistency ensures that data across multiple tables, records, or systems is uniform, coherent, and free of contradictions (e.g., birthdate matching age across all databases).",
    "solution": null,
    "distractors": {
      "A": "Having many features refers to dimensionality.",
      "B": "Size refers to volume, not consistency.",
      "C": "Data can be consistent regardless of whether it is categorical, text, or numerical."
    },
    "keyTakeaway": "Consistency = Absence of conflicts or contradictions across datasets.",
    "difficulty": "Easy",
    "tags": [
      "Data Quality",
      "Consistency"
    ]
  },
  {
    "id": 9,
    "sectionId": "A",
    "sectionTitle": "A. Introduction to Predictive Analysis",
    "question": "Which is generally the first major step in predictive analytics?",
    "options": {
      "A": "Data collection",
      "B": "Deployment",
      "C": "Model evaluation",
      "D": "Hyperparameter tuning"
    },
    "correctAnswer": "A",
    "explanation": "Before any analysis, cleaning, or modeling can take place, the data must first be identified and collected from relevant sources (databases, APIs, sensors, logs).",
    "solution": null,
    "distractors": {
      "B": "Deployment is the final operational phase.",
      "C": "Model evaluation occurs after model training.",
      "D": "Hyperparameter tuning occurs during model optimization."
    },
    "keyTakeaway": "Lifecycle Step 1: Problem Definition & Data Collection.",
    "difficulty": "Easy",
    "tags": [
      "Lifecycle",
      "Process"
    ]
  },
  {
    "id": 10,
    "sectionId": "A",
    "sectionTitle": "A. Introduction to Predictive Analysis",
    "question": "Which sequence is correct?",
    "options": {
      "A": "Evaluation → Collection → Training → Preprocessing",
      "B": "Collection → Preprocessing → Model Training → Evaluation",
      "C": "Preprocessing → Collection → Evaluation → Training",
      "D": "Training → Collection → Evaluation → Preprocessing"
    },
    "correctAnswer": "B",
    "explanation": "The standard machine learning / CRISP-DM workflow follows: (1) Data Collection -> (2) Data Preprocessing & Cleaning -> (3) Model Training -> (4) Model Evaluation -> (5) Deployment.",
    "solution": null,
    "distractors": {
      "A": "Evaluation cannot happen before training.",
      "C": "Preprocessing requires collected data first.",
      "D": "You cannot train a model before collecting and preprocessing data."
    },
    "keyTakeaway": "Pipeline: Collection -> Preprocessing -> Model Training -> Evaluation -> Deployment.",
    "difficulty": "Easy",
    "tags": [
      "Workflow",
      "CRISP-DM"
    ]
  },
  {
    "id": 11,
    "sectionId": "A",
    "sectionTitle": "A. Introduction to Predictive Analysis",
    "question": "Which step prepares raw data for machine learning?",
    "options": {
      "A": "Prediction",
      "B": "Model deployment",
      "C": "Data preprocessing",
      "D": "Model interpretation"
    },
    "correctAnswer": "C",
    "explanation": "Raw data is often noisy, inconsistent, incomplete, and non-numeric. Data preprocessing cleans errors, handles missing values, encodes categories, and normalizes scales so ML algorithms can consume it.",
    "solution": null,
    "distractors": {
      "A": "Prediction generates inference on new observations.",
      "B": "Deployment serves trained models into production.",
      "D": "Model interpretation explains model feature importance and logic."
    },
    "keyTakeaway": "Data Preprocessing transforms messy raw data into a clean, structured ML-ready format.",
    "difficulty": "Easy",
    "tags": [
      "Preprocessing",
      "Data Preparation"
    ]
  },
  {
    "id": 12,
    "sectionId": "A",
    "sectionTitle": "A. Introduction to Predictive Analysis",
    "question": "Model training means:",
    "options": {
      "A": "Testing only the final model",
      "B": "Collecting new data",
      "C": "Deleting training data",
      "D": "Learning patterns from training data"
    },
    "correctAnswer": "D",
    "explanation": "Model training is the algorithmic process where a model fits its internal parameters (weights, coefficients, split thresholds) by discovering mathematical patterns and correlations in the training dataset.",
    "solution": null,
    "distractors": {
      "A": "Testing is model evaluation, distinct from parameter fitting.",
      "B": "Data collection precedes training.",
      "C": "Training data is consumed and analyzed, never arbitrarily deleted."
    },
    "keyTakeaway": "Training = Fitting model parameters to minimize loss on training data.",
    "difficulty": "Easy",
    "tags": [
      "Training",
      "Concept"
    ]
  },
  {
    "id": 13,
    "sectionId": "A",
    "sectionTitle": "A. Introduction to Predictive Analysis",
    "question": "Model evaluation is performed to:",
    "options": {
      "A": "Check model performance",
      "B": "Create a database",
      "C": "Increase missing values",
      "D": "Remove the target variable"
    },
    "correctAnswer": "A",
    "explanation": "Model evaluation measures how accurately, robustly, and reliably a trained model predicts on unseen data using metrics such as Accuracy, Precision, Recall, F1-Score, MSE, and R².",
    "solution": null,
    "distractors": {
      "B": "Database creation is database engineering.",
      "C": "Evaluation has nothing to do with injecting missing values.",
      "D": "Removing the target variable prevents supervised learning."
    },
    "keyTakeaway": "Model Evaluation validates generalization capability and performance on unseen data.",
    "difficulty": "Easy",
    "tags": [
      "Evaluation",
      "Metrics"
    ]
  },
  {
    "id": 14,
    "sectionId": "A",
    "sectionTitle": "A. Introduction to Predictive Analysis",
    "question": "Which is an ethical issue in predictive analytics?",
    "options": {
      "A": "Bias",
      "B": "All of the above",
      "C": "Fairness",
      "D": "Privacy"
    },
    "correctAnswer": "B",
    "explanation": "Predictive analytics introduces critical ethical challenges including user data privacy (GDPR/HIPAA compliance), algorithmic bias (discriminatory training data), and fairness (equal opportunity across demographic groups).",
    "solution": null,
    "distractors": {
      "A": "Bias is critical, but privacy and fairness are also ethical concerns.",
      "C": "Fairness is critical, but privacy and bias are also key.",
      "D": "Privacy is a major ethical pillar, but Bias and Fairness are equally vital."
    },
    "keyTakeaway": "Ethical AI Pillars: Privacy, Fairness, Transparency, Accountability, and Bias Mitigation.",
    "difficulty": "Easy",
    "tags": [
      "Ethics",
      "AI Governance"
    ]
  },
  {
    "id": 15,
    "sectionId": "A",
    "sectionTitle": "A. Introduction to Predictive Analysis",
    "question": "Algorithmic bias can occur when:",
    "options": {
      "A": "Model has no features",
      "B": "Test data is larger",
      "C": "Training data contains systematic bias",
      "D": "Data is always perfect"
    },
    "correctAnswer": "C",
    "explanation": "If historical training data reflects human prejudice, unequal sampling, or systemic social disparities, the machine learning model will learn and perpetuate or even amplify those biases in its predictions.",
    "solution": null,
    "distractors": {
      "A": "A model with no features cannot make feature-based predictions.",
      "B": "Test set size has no direct causality with algorithmic bias in training data.",
      "D": "Perfect, unbiased, representative data would prevent algorithmic bias."
    },
    "keyTakeaway": "Bias in Data -> Bias in Model Predictions (Historical bias in, systematic bias out).",
    "difficulty": "Easy",
    "tags": [
      "Ethics",
      "Algorithmic Bias"
    ]
  },
  {
    "id": 16,
    "sectionId": "B",
    "sectionTitle": "B. Data Cleaning and Preprocessing",
    "question": "Data preprocessing is performed mainly to:",
    "options": {
      "A": "Avoid model training",
      "B": "Increase errors",
      "C": "Remove the target from every dataset",
      "D": "Make raw data suitable for modeling"
    },
    "correctAnswer": "D",
    "explanation": "Data preprocessing cleans noisy, incomplete, duplicate, and non-standardized records so that algorithms can accurately compute relationships without computational errors or skewed weights.",
    "solution": null,
    "distractors": {
      "A": "Preprocessing is a prerequisite step to enable proper model training.",
      "B": "Preprocessing aims to reduce and eliminate errors.",
      "C": "The target variable is needed for supervised modeling."
    },
    "keyTakeaway": "Preprocessing converts messy raw data into high-quality structured training matrices.",
    "difficulty": "Easy",
    "tags": [
      "Preprocessing",
      "Data Cleaning"
    ]
  },
  {
    "id": 17,
    "sectionId": "B",
    "sectionTitle": "B. Data Cleaning and Preprocessing",
    "question": "Which of the following is a data-cleaning task?",
    "options": {
      "A": "Handling missing values",
      "B": "Model deployment",
      "C": "Hyperparameter selection only",
      "D": "Prediction"
    },
    "correctAnswer": "A",
    "explanation": "Handling missing values (via dropping, mean/median/mode imputation, or KNN imputation) is a primary data-cleaning task. Other cleaning tasks include outlier removal, deduplication, and syntax correction.",
    "solution": null,
    "distractors": {
      "B": "Model deployment is post-training production engineering.",
      "C": "Hyperparameter selection tunes model structure.",
      "D": "Prediction is model inference."
    },
    "keyTakeaway": "Data Cleaning Tasks: Imputation, Deduplication, Outlier Handling, Formatting.",
    "difficulty": "Easy",
    "tags": [
      "Data Cleaning",
      "Imputation"
    ]
  },
  {
    "id": 18,
    "sectionId": "B",
    "sectionTitle": "B. Data Cleaning and Preprocessing",
    "question": "A missing value means:",
    "options": {
      "A": "A duplicate value",
      "B": "An absent value for an observation/feature",
      "C": "A categorical value",
      "D": "An extreme value"
    },
    "correctAnswer": "B",
    "explanation": "A missing value (often represented as NULL, NaN, or None) occurs when no data value is stored for an attribute in a given observation/row.",
    "solution": null,
    "distractors": {
      "A": "A duplicate value is a repeated row or entry.",
      "C": "A categorical value represents a discrete class (e.g., Color = Red).",
      "D": "An extreme value is an outlier."
    },
    "keyTakeaway": "Missing Value = Absence of recorded data for a variable (NaN / NULL).",
    "difficulty": "Easy",
    "tags": [
      "Missing Values",
      "Definition"
    ]
  },
  {
    "id": 19,
    "sectionId": "B",
    "sectionTitle": "B. Data Cleaning and Preprocessing",
    "question": "Which measure is commonly used to replace missing numerical values?",
    "options": {
      "A": "Mode only",
      "B": "Accuracy",
      "C": "Mean",
      "D": "Precision"
    },
    "correctAnswer": "C",
    "explanation": "Mean imputation is the most standard approach for filling missing numerical data when data is normally distributed. For skewed numerical data, median is preferred.",
    "solution": null,
    "distractors": {
      "A": "Mode is primarily used for categorical or discrete features.",
      "B": "Accuracy is an evaluation metric, not an imputation statistic.",
      "D": "Precision is a classification metric."
    },
    "keyTakeaway": "Numerical Imputation: Mean (normal distribution) or Median (skewed distribution).",
    "difficulty": "Easy",
    "tags": [
      "Imputation",
      "Mean"
    ]
  },
  {
    "id": 20,
    "sectionId": "B",
    "sectionTitle": "B. Data Cleaning and Preprocessing",
    "question": "Which measure is generally more robust to extreme outliers?",
    "options": {
      "A": "Standard deviation",
      "B": "Variance",
      "C": "Mean",
      "D": "Median"
    },
    "correctAnswer": "D",
    "explanation": "The median is the middle value in an ordered set. Because it depends on rank rather than magnitude, extreme values at either tail do not pull the median, making it highly robust.",
    "solution": null,
    "distractors": {
      "A": "Standard deviation is derived from variance and is heavily affected by outliers.",
      "B": "Variance squares differences from the mean, making it extremely sensitive to outliers.",
      "C": "The mean sums all values, so a single large outlier heavily skews it."
    },
    "keyTakeaway": "Robust Central Tendency: Median is resistant to outliers; Mean is sensitive to outliers.",
    "difficulty": "Easy",
    "tags": [
      "Statistics",
      "Median",
      "Outliers"
    ]
  },
  {
    "id": 21,
    "sectionId": "B",
    "sectionTitle": "B. Data Cleaning and Preprocessing",
    "question": "Mode is particularly suitable for:",
    "options": {
      "A": "Categorical data",
      "B": "MSE calculation",
      "C": "Continuous regression errors",
      "D": "Model coefficients"
    },
    "correctAnswer": "A",
    "explanation": "The mode represents the most frequently occurring value in a dataset, making it the only standard central tendency measure applicable to nominal/categorical variables.",
    "solution": null,
    "distractors": {
      "B": "MSE is calculated using mean squared residuals.",
      "C": "Regression errors are continuous numbers measured using residuals/MSE.",
      "D": "Model coefficients are calculated via optimization (e.g., OLS or gradient descent)."
    },
    "keyTakeaway": "Categorical Imputation: Mode Imputation (most frequent category).",
    "difficulty": "Easy",
    "tags": [
      "Statistics",
      "Mode",
      "Categorical"
    ]
  },
  {
    "id": 22,
    "sectionId": "B",
    "sectionTitle": "B. Data Cleaning and Preprocessing",
    "question": "Consider the values:\n10, 12, 13, 15, 100\nWhich value is most likely an outlier?",
    "options": {
      "A": "15",
      "B": "100",
      "C": "10",
      "D": "12"
    },
    "correctAnswer": "B",
    "explanation": "The values 10, 12, 13, and 15 are clustered tightly in the range [10, 15], whereas 100 is far removed from the rest of the distribution, making it an extreme outlier.",
    "solution": null,
    "distractors": {
      "A": "15 is adjacent to 13 and within normal range.",
      "C": "10 is adjacent to 12 and within normal range.",
      "D": "12 is part of the core cluster."
    },
    "keyTakeaway": "Outliers deviate dramatically from the overarching pattern of the data cluster.",
    "difficulty": "Easy",
    "tags": [
      "Outlier Detection",
      "Numerical Example"
    ]
  },
  {
    "id": 23,
    "sectionId": "B",
    "sectionTitle": "B. Data Cleaning and Preprocessing",
    "question": "An outlier is:",
    "options": {
      "A": "Always an incorrect value",
      "B": "Always a missing value",
      "C": "An observation significantly different from other observations",
      "D": "A categorical variable"
    },
    "correctAnswer": "C",
    "explanation": "An outlier is a data point that differs significantly from other observations in the sample. Outliers can arise from experimental error, measurement variance, or genuine extreme phenomena.",
    "solution": null,
    "distractors": {
      "A": "An outlier can be a completely valid true reading (e.g., billionaire income or fraudulent charge).",
      "B": "Outliers are present recorded values, not missing (NaN) values.",
      "D": "Outliers are data points, not variable types."
    },
    "keyTakeaway": "Outlier = Extreme data point that deviates markedly from the overall distribution.",
    "difficulty": "Easy",
    "tags": [
      "Outliers",
      "Definition"
    ]
  },
  {
    "id": 24,
    "sectionId": "B",
    "sectionTitle": "B. Data Cleaning and Preprocessing",
    "question": "Which visualization is commonly used to identify outliers?",
    "options": {
      "A": "Area chart",
      "B": "Bar chart",
      "C": "Pie chart",
      "D": "Box plot"
    },
    "correctAnswer": "D",
    "explanation": "A box plot (box-and-whisker plot) displays the median, quartiles (Q1, Q3), and whiskers (1.5 × IQR). Individual points plotted beyond the whiskers are explicitly identified as outliers.",
    "solution": null,
    "distractors": {
      "A": "Area charts display cumulative trends over time.",
      "B": "Bar charts show counts or aggregates across discrete categories.",
      "C": "Pie charts display proportional parts of a whole for categorical variables."
    },
    "keyTakeaway": "Box Plot displays the 5-number summary (Min, Q1, Median, Q3, Max) + Outliers as dots.",
    "difficulty": "Easy",
    "tags": [
      "Visualization",
      "Box Plot",
      "Outliers"
    ]
  },
  {
    "id": 25,
    "sectionId": "B",
    "sectionTitle": "B. Data Cleaning and Preprocessing",
    "question": "IQR is calculated as:",
    "options": {
      "A": "Q3 − Q1",
      "B": "Q1 × Q3",
      "C": "Q1 + Q3",
      "D": "Q1 − Q3"
    },
    "correctAnswer": "A",
    "explanation": "The Interquartile Range (IQR) measures the statistical dispersion of the middle 50% of data and is defined as the difference between the 75th percentile (Q3) and the 25th percentile (Q1): IQR = Q3 - Q1.",
    "solution": null,
    "distractors": {
      "B": "Multiplication is not used in quartile dispersion.",
      "C": "Summing Q1 and Q3 does not measure spread.",
      "D": "Q1 - Q3 would produce a negative number since Q3 >= Q1."
    },
    "keyTakeaway": "IQR Formula: IQR = Q3 − Q1 (Upper Quartile − Lower Quartile).",
    "difficulty": "Easy",
    "tags": [
      "Formulas",
      "IQR",
      "Statistics"
    ]
  },
  {
    "id": 26,
    "sectionId": "B",
    "sectionTitle": "B. Data Cleaning and Preprocessing",
    "question": "If Q1 = 20 and Q3 = 40, what is IQR?",
    "options": {
      "A": "60",
      "B": "20",
      "C": "30",
      "D": "10"
    },
    "correctAnswer": "B",
    "explanation": "Applying the Interquartile Range formula:\nIQR = Q3 - Q1\nIQR = 40 - 20 = 20.",
    "solution": "Step 1: Formula -> IQR = Q3 − Q1\nStep 2: Substitute values -> IQR = 40 − 20 = 20.",
    "distractors": {
      "A": "60 is the sum of Q1 and Q3 (20 + 40).",
      "C": "30 is the average of Q1 and Q3 ((20+40)/2).",
      "D": "10 is half of IQR (semi-interquartile range)."
    },
    "keyTakeaway": "IQR = Q3 − Q1 = 40 − 20 = 20.",
    "difficulty": "Easy",
    "tags": [
      "Calculation",
      "IQR"
    ]
  },
  {
    "id": 27,
    "sectionId": "B",
    "sectionTitle": "B. Data Cleaning and Preprocessing",
    "question": "If Q1 = 10 and Q3 = 30, the upper outlier boundary is:",
    "options": {
      "A": "70",
      "B": "50",
      "C": "60",
      "D": "40"
    },
    "correctAnswer": "C",
    "explanation": "By Tukey's outlier detection rule:\n1. IQR = Q3 - Q1 = 30 - 10 = 20\n2. Upper Outlier Fence = Q3 + 1.5(IQR) = 30 + 1.5(20) = 30 + 30 = 60.\nAny observation > 60 is flagged as an outlier.",
    "solution": "Step 1: Calculate IQR -> IQR = Q3 − Q1 = 30 − 10 = 20\nStep 2: Upper Boundary Formula -> Upper Fence = Q3 + 1.5 × IQR\nStep 3: Calculate -> Upper Fence = 30 + 1.5 × 20 = 30 + 30 = 60.",
    "distractors": {
      "A": "70 is Q3 + 2.0(IQR) = 30 + 40.",
      "B": "50 is Q3 + 1.0(IQR) = 30 + 20.",
      "D": "40 is simply Q3 + 10 (or Q3 + 0.5 IQR)."
    },
    "keyTakeaway": "Tukey Fences: Lower = Q1 − 1.5(IQR), Upper = Q3 + 1.5(IQR).",
    "difficulty": "Medium",
    "tags": [
      "Calculation",
      "Tukey Fence",
      "Outliers"
    ]
  },
  {
    "id": 28,
    "sectionId": "B",
    "sectionTitle": "B. Data Cleaning and Preprocessing",
    "question": "Noise in data refers to:",
    "options": {
      "A": "Useful patterns",
      "B": "Categorical values",
      "C": "Target variables",
      "D": "Unwanted/random variation or error"
    },
    "correctAnswer": "D",
    "explanation": "Data noise refers to meaningless, corrupt, or random variations and errors that distort the true underlying signal in the dataset.",
    "solution": null,
    "distractors": {
      "A": "Useful patterns are the underlying 'signal' we want models to learn.",
      "B": "Categorical values are discrete qualitative features.",
      "C": "Target variable is the outcome being predicted (y)."
    },
    "keyTakeaway": "Noise = Random error or variance obscuring the true data signal.",
    "difficulty": "Easy",
    "tags": [
      "Data Quality",
      "Noise"
    ]
  },
  {
    "id": 29,
    "sectionId": "B",
    "sectionTitle": "B. Data Cleaning and Preprocessing",
    "question": "Which is NOT a common preprocessing technique?",
    "options": {
      "A": "Model deployment",
      "B": "Feature scaling",
      "C": "Encoding",
      "D": "Handling missing values"
    },
    "correctAnswer": "A",
    "explanation": "Model deployment is the operational phase of hosting a trained model behind an API/service in production. Preprocessing techniques include scaling, encoding, missing value imputation, and feature extraction.",
    "solution": null,
    "distractors": {
      "B": "Feature scaling is a standard preprocessing step (e.g. StandardScaler).",
      "C": "Encoding is a standard preprocessing step (e.g. OneHotEncoder).",
      "D": "Handling missing values is a fundamental data cleaning step."
    },
    "keyTakeaway": "Deployment = Serving models into production (post-modeling), NOT preprocessing.",
    "difficulty": "Easy",
    "tags": [
      "Preprocessing",
      "Pipeline"
    ]
  },
  {
    "id": 30,
    "sectionId": "B",
    "sectionTitle": "B. Data Cleaning and Preprocessing",
    "question": "Data transformation means:",
    "options": {
      "A": "Evaluating test accuracy",
      "B": "Converting data into a suitable form",
      "C": "Training only neural networks",
      "D": "Deleting all data"
    },
    "correctAnswer": "B",
    "explanation": "Data transformation involves converting data from its original format or distribution into a suitable format (e.g., log transformation, Box-Cox, scaling, binning) to improve model learning and satisfy algorithm assumptions.",
    "solution": null,
    "distractors": {
      "A": "Evaluating test accuracy is model evaluation.",
      "C": "Data transformation applies across all ML models, not just neural networks.",
      "D": "Deleting all data destroys the information."
    },
    "keyTakeaway": "Data Transformation = Restructuring data to optimize algorithmic mathematical computation.",
    "difficulty": "Easy",
    "tags": [
      "Transformation",
      "Concepts"
    ]
  },
  {
    "id": 31,
    "sectionId": "C",
    "sectionTitle": "C. Feature Scaling, Encoding & Feature Engineering",
    "question": "Feature scaling is used to:",
    "options": {
      "A": "Convert categories into text",
      "B": "Remove the target variable",
      "C": "Put numerical features on comparable scales",
      "D": "Create labels"
    },
    "correctAnswer": "C",
    "explanation": "Distance-based algorithms (KNN, SVM, K-Means) and gradient-based algorithms (Linear/Logistic Regression, Neural Networks) are sensitive to feature magnitudes. Scaling ensures no single large-scale feature dominates.",
    "solution": null,
    "distractors": {
      "A": "Converting categories into numbers is encoding.",
      "B": "The target variable is preserved for supervised training.",
      "D": "Creating labels is dataset annotation/labeling."
    },
    "keyTakeaway": "Feature Scaling balances the magnitude of independent variables for fair weighting.",
    "difficulty": "Easy",
    "tags": [
      "Feature Scaling",
      "Concepts"
    ]
  },
  {
    "id": 32,
    "sectionId": "C",
    "sectionTitle": "C. Feature Scaling, Encoding & Feature Engineering",
    "question": "Standardization generally produces:",
    "options": {
      "A": "Mean = 1 and SD = 0",
      "B": "Values only from 0 to 1",
      "C": "Mean = 100",
      "D": "Mean ≈ 0 and SD ≈ 1"
    },
    "correctAnswer": "D",
    "explanation": "Standardization (Z-score normalization) centers the feature around zero with unit standard deviation: Mean (μ) = 0, Standard Deviation (σ) = 1.",
    "solution": null,
    "distractors": {
      "A": "Mean = 1 and SD = 0 is impossible because SD=0 means all values are identical constants.",
      "B": "Values strictly bound between 0 and 1 are produced by Min-Max Normalization.",
      "C": "Mean = 100 is not standardized."
    },
    "keyTakeaway": "Standardization (Z-Score): Mean = 0, Standard Deviation = 1.",
    "difficulty": "Easy",
    "tags": [
      "Standardization",
      "Z-Score"
    ]
  },
  {
    "id": 33,
    "sectionId": "C",
    "sectionTitle": "C. Feature Scaling, Encoding & Feature Engineering",
    "question": "The standardization formula is:",
    "options": {
      "A": "(x − μ)/σ",
      "B": "(x − σ)/μ",
      "C": "(x + μ)/σ",
      "D": "x × μ × σ"
    },
    "correctAnswer": "A",
    "explanation": "The Z-score formula subtracts the population/sample mean (μ) from observation x and divides by standard deviation (σ): z = (x − μ) / σ.",
    "solution": null,
    "distractors": {
      "B": "Subtracting sigma and dividing by mean is algebraically incorrect.",
      "C": "Adding the mean does not center around zero.",
      "D": "Multiplying terms increases variance rather than standardizing it."
    },
    "keyTakeaway": "Formula: z = (x − μ) / σ",
    "difficulty": "Easy",
    "tags": [
      "Formulas",
      "Standardization"
    ]
  },
  {
    "id": 34,
    "sectionId": "C",
    "sectionTitle": "C. Feature Scaling, Encoding & Feature Engineering",
    "question": "If x = 70, μ = 50 and σ = 10, standardized value is:",
    "options": {
      "A": "3",
      "B": "2",
      "C": "4",
      "D": "1"
    },
    "correctAnswer": "B",
    "explanation": "Using the standardization formula:\nz = (x - μ) / σ = (70 - 50) / 10 = 20 / 10 = 2.",
    "solution": "Step 1: Formula -> z = (x − μ) / σ\nStep 2: Substitute values -> z = (70 − 50) / 10\nStep 3: Calculate -> z = 20 / 10 = 2.",
    "distractors": {
      "A": "3 would result from (80 - 50)/10.",
      "C": "4 would result from (90 - 50)/10.",
      "D": "1 would result from (60 - 50)/10."
    },
    "keyTakeaway": "z = (70 − 50) / 10 = 2 (meaning 2 standard deviations above the mean).",
    "difficulty": "Easy",
    "tags": [
      "Calculation",
      "Z-Score"
    ]
  },
  {
    "id": 35,
    "sectionId": "C",
    "sectionTitle": "C. Feature Scaling, Encoding & Feature Engineering",
    "question": "Min-Max normalization commonly transforms data into:",
    "options": {
      "A": "1 to 100",
      "B": "−1 to −2",
      "C": "0 to 1",
      "D": "−∞ to +∞"
    },
    "correctAnswer": "C",
    "explanation": "Min-Max Normalization (or feature scaling) rescales all values of a feature into a fixed bounded range, standardly [0, 1].",
    "solution": null,
    "distractors": {
      "A": "1 to 100 is percentage scaling (often used in display formatting).",
      "B": "−1 to −2 is not a standard scaling range.",
      "D": "Standardization produces unbounded values theoretically spanning (−∞, +∞)."
    },
    "keyTakeaway": "Min-Max Range = [0, 1].",
    "difficulty": "Easy",
    "tags": [
      "Min-Max",
      "Normalization"
    ]
  },
  {
    "id": 36,
    "sectionId": "C",
    "sectionTitle": "C. Feature Scaling, Encoding & Feature Engineering",
    "question": "Min-Max normalization formula is:",
    "options": {
      "A": "(x − xmax)/(xmin − xmax)",
      "B": "(x + μ)/σ",
      "C": "x/μ",
      "D": "(x − xmin)/(xmax − xmin)"
    },
    "correctAnswer": "D",
    "explanation": "The Min-Max scaling formula is: x_norm = (x − x_min) / (x_max − x_min). When x = x_min, x_norm = 0. When x = x_max, x_norm = 1.",
    "solution": null,
    "distractors": {
      "A": "Inverts numerator and denominator improperly.",
      "B": "Formula with mean and sigma is related to standardization, not Min-Max.",
      "C": "Dividing by mean is mean scaling, not Min-Max."
    },
    "keyTakeaway": "Formula: x_scaled = (x − x_min) / (x_max − x_min)",
    "difficulty": "Easy",
    "tags": [
      "Formulas",
      "Min-Max"
    ]
  },
  {
    "id": 37,
    "sectionId": "C",
    "sectionTitle": "C. Feature Scaling, Encoding & Feature Engineering",
    "question": "Given x = 30, min = 10 and max = 50, normalized value is:",
    "options": {
      "A": "0.5",
      "B": "1",
      "C": "0.75",
      "D": "0.25"
    },
    "correctAnswer": "A",
    "explanation": "Applying the Min-Max formula:\nx_norm = (30 - 10) / (50 - 10) = 20 / 40 = 0.5.",
    "solution": "Step 1: Formula -> x_norm = (x − min) / (max − min)\nStep 2: Substitute -> (30 − 10) / (50 − 10)\nStep 3: Calculate -> 20 / 40 = 0.5.",
    "distractors": {
      "B": "1 would result if x was the maximum value (50).",
      "C": "0.75 would result if x was 40.",
      "D": "0.25 would result if x was 20."
    },
    "keyTakeaway": "x = 30 is the exact midpoint between 10 and 50, so its normalized value is 0.5.",
    "difficulty": "Easy",
    "tags": [
      "Calculation",
      "Min-Max"
    ]
  },
  {
    "id": 38,
    "sectionId": "C",
    "sectionTitle": "C. Feature Scaling, Encoding & Feature Engineering",
    "question": "Which technique converts categories into separate binary columns?",
    "options": {
      "A": "Imputation",
      "B": "One-Hot Encoding",
      "C": "Standardization",
      "D": "Normalization"
    },
    "correctAnswer": "B",
    "explanation": "One-Hot Encoding creates a new binary (0 or 1) dummy column for each unique category level in a categorical feature.",
    "solution": null,
    "distractors": {
      "A": "Imputation fills in missing values.",
      "C": "Standardization rescales numerical variables.",
      "D": "Normalization bounds numerical variables to [0, 1]."
    },
    "keyTakeaway": "One-Hot Encoding converts N categories into binary indicator columns (0/1).",
    "difficulty": "Easy",
    "tags": [
      "Encoding",
      "One-Hot Encoding"
    ]
  },
  {
    "id": 39,
    "sectionId": "C",
    "sectionTitle": "C. Feature Scaling, Encoding & Feature Engineering",
    "question": "One-Hot Encoding represents categories using:",
    "options": {
      "A": "Mean values",
      "B": "Regression coefficients",
      "C": "Binary indicators",
      "D": "Standard deviations"
    },
    "correctAnswer": "C",
    "explanation": "In One-Hot Encoding, presence of a category is marked with a 1 (True) and absence is marked with a 0 (False), creating binary vectors.",
    "solution": null,
    "distractors": {
      "A": "Using mean values is Target Encoding, not One-Hot.",
      "B": "Regression coefficients are weights learned by a linear model.",
      "D": "Standard deviation is a measure of dispersion."
    },
    "keyTakeaway": "One-Hot indicators: 1 = Active category, 0 = Inactive category.",
    "difficulty": "Easy",
    "tags": [
      "Encoding",
      "Binary Representation"
    ]
  },
  {
    "id": 40,
    "sectionId": "C",
    "sectionTitle": "C. Feature Scaling, Encoding & Feature Engineering",
    "question": "Label encoding converts categories into:",
    "options": {
      "A": "Missing values",
      "B": "Errors",
      "C": "Outliers",
      "D": "Numerical labels"
    },
    "correctAnswer": "D",
    "explanation": "Label Encoding assigns a unique integer (0, 1, 2, ..., K-1) to each unique category in a categorical column.",
    "solution": null,
    "distractors": {
      "A": "Label encoding preserves observations, not replaces them with missing values.",
      "B": "It is a valid transformation, not an error.",
      "C": "Integer labels are structured encodings, not statistical outliers."
    },
    "keyTakeaway": "Label Encoding assigns integer IDs (0, 1, 2, ...) to categories.",
    "difficulty": "Easy",
    "tags": [
      "Encoding",
      "Label Encoding"
    ]
  },
  {
    "id": 41,
    "sectionId": "C",
    "sectionTitle": "C. Feature Scaling, Encoding & Feature Engineering",
    "question": "Suppose:\nRed → 0, Blue → 1, Green → 2\nThis is:",
    "options": {
      "A": "Label Encoding",
      "B": "One-Hot Encoding",
      "C": "Min-Max Scaling",
      "D": "Standardization"
    },
    "correctAnswer": "A",
    "explanation": "Mapping discrete category strings directly to sequential integers (Red->0, Blue->1, Green->2) in a single column is the definition of Label Encoding.",
    "solution": null,
    "distractors": {
      "B": "One-Hot Encoding would create 3 distinct binary columns: [is_Red, is_Blue, is_Green].",
      "C": "Min-Max scaling normalizes numerical ranges.",
      "D": "Standardization scales continuous numerical data."
    },
    "keyTakeaway": "Mapping Category Strings -> Sequential Integers = Label Encoding.",
    "difficulty": "Easy",
    "tags": [
      "Encoding",
      "Example"
    ]
  },
  {
    "id": 42,
    "sectionId": "C",
    "sectionTitle": "C. Feature Scaling, Encoding & Feature Engineering",
    "question": "Which technique is generally more appropriate for nominal categories when no meaningful order exists?",
    "options": {
      "A": "Label Encoding",
      "B": "One-Hot Encoding",
      "C": "Min-Max Scaling",
      "D": "Standardization"
    },
    "correctAnswer": "B",
    "explanation": "Nominal categories have no intrinsic ordering (e.g., Colors, Cities). Label Encoding inadvertently introduces a false mathematical ranking (e.g., Green(2) > Red(0)), which misleads linear/distance models. One-Hot Encoding treats each class independently without false hierarchy.",
    "solution": null,
    "distractors": {
      "A": "Label encoding imposes an artificial numerical ordering, which is harmful for nominal data in linear/distance models.",
      "C": "Min-Max applies to numeric data.",
      "D": "Standardization applies to numeric data."
    },
    "keyTakeaway": "Nominal (No Order) -> One-Hot Encoding; Ordinal (Ordered: Low/Med/High) -> Label/Ordinal Encoding.",
    "difficulty": "Medium",
    "tags": [
      "Nominal",
      "Encoding Choice"
    ]
  },
  {
    "id": 43,
    "sectionId": "C",
    "sectionTitle": "C. Feature Scaling, Encoding & Feature Engineering",
    "question": "Feature engineering means:",
    "options": {
      "A": "Removing all features",
      "B": "Testing the model",
      "C": "Creating or transforming useful features",
      "D": "Only scaling data"
    },
    "correctAnswer": "C",
    "explanation": "Feature engineering is the process of using domain knowledge and statistical operations to create new features, extract informative signals, and transform variables to boost model accuracy.",
    "solution": null,
    "distractors": {
      "A": "Removing all features leaves no data for learning.",
      "B": "Testing the model is evaluation.",
      "D": "Feature scaling is just one sub-technique; engineering includes interaction terms, aggregations, ratios, and embeddings."
    },
    "keyTakeaway": "Feature Engineering = Synthesizing informative domain features from raw attributes.",
    "difficulty": "Easy",
    "tags": [
      "Feature Engineering",
      "Definition"
    ]
  },
  {
    "id": 44,
    "sectionId": "C",
    "sectionTitle": "C. Feature Scaling, Encoding & Feature Engineering",
    "question": "If Height and Weight are used to create BMI, this is:",
    "options": {
      "A": "Model evaluation",
      "B": "Data splitting",
      "C": "Cross-validation",
      "D": "Feature engineering"
    },
    "correctAnswer": "D",
    "explanation": "Constructing Body Mass Index (BMI = Weight / Height²) combines two raw measurements into a scientifically meaningful composite metric, which is a classic example of feature engineering.",
    "solution": null,
    "distractors": {
      "A": "Model evaluation assesses prediction quality.",
      "B": "Data splitting divides data into train/test sets.",
      "C": "Cross-validation evaluates generalization error across K folds."
    },
    "keyTakeaway": "Combining raw features via domain formulas (e.g., BMI) = Feature Engineering.",
    "difficulty": "Easy",
    "tags": [
      "Feature Engineering",
      "BMI Example"
    ]
  },
  {
    "id": 45,
    "sectionId": "C",
    "sectionTitle": "C. Feature Scaling, Encoding & Feature Engineering",
    "question": "BMI is calculated as:",
    "options": {
      "A": "Weight / Height²",
      "B": "Weight × Height",
      "C": "Height / Weight²",
      "D": "Weight + Height"
    },
    "correctAnswer": "A",
    "explanation": "The standard physiological formula for Body Mass Index (BMI) is weight in kilograms divided by the square of height in meters: BMI = Weight / (Height)².",
    "solution": null,
    "distractors": {
      "B": "Weight × Height gives an arbitrary product, not body mass density.",
      "C": "Inverting height and weight produces incorrect dimensional units.",
      "D": "Summing weight and height is dimensionally invalid."
    },
    "keyTakeaway": "BMI Formula = Weight (kg) / [Height (m)]²",
    "difficulty": "Easy",
    "tags": [
      "Formulas",
      "Domain Engineering"
    ]
  },
  {
    "id": 46,
    "sectionId": "D",
    "sectionTitle": "D. Train-Test Split & Cross-Validation",
    "question": "The training set is used to:",
    "options": {
      "A": "Perform final evaluation only",
      "B": "Train the model",
      "C": "Create test labels",
      "D": "Remove outliers only"
    },
    "correctAnswer": "B",
    "explanation": "The training set is the primary dataset provided to the machine learning algorithm to learn patterns, optimize parameters, and minimize loss.",
    "solution": null,
    "distractors": {
      "A": "Final evaluation must be done on the unseen test set to prevent data leakage/overfitting bias.",
      "C": "Labels are ground-truth data, not created by training sets.",
      "D": "Outlier handling is part of preprocessing."
    },
    "keyTakeaway": "Training Set: Learns weights, coefficients, and model parameters.",
    "difficulty": "Easy",
    "tags": [
      "Splitting",
      "Training Set"
    ]
  },
  {
    "id": 47,
    "sectionId": "D",
    "sectionTitle": "D. Train-Test Split & Cross-Validation",
    "question": "The test set is primarily used to:",
    "options": {
      "A": "Create training examples",
      "B": "Tune every parameter",
      "C": "Evaluate performance on unseen data",
      "D": "Train the model"
    },
    "correctAnswer": "C",
    "explanation": "The test set acts as an unbiased proxy for future real-world data to evaluate how well the trained model generalizes to completely unseen observations.",
    "solution": null,
    "distractors": {
      "A": "Training examples come from the training partition.",
      "B": "Hyperparameter tuning should be performed on a validation set or via cross-validation, not the final test set.",
      "D": "A model should never be trained on test data (data leakage)."
    },
    "keyTakeaway": "Test Set = Gold-standard unseen data for unbiased generalization evaluation.",
    "difficulty": "Easy",
    "tags": [
      "Splitting",
      "Test Set"
    ]
  },
  {
    "id": 48,
    "sectionId": "D",
    "sectionTitle": "D. Train-Test Split & Cross-Validation",
    "question": "The validation set is commonly used for:",
    "options": {
      "A": "Removing all features",
      "B": "Final deployment only",
      "C": "Data collection",
      "D": "Model selection and hyperparameter tuning"
    },
    "correctAnswer": "D",
    "explanation": "The validation set provides an intermediate evaluation used to compare different model architectures, select algorithms, and tune hyperparameters without contaminating the final test set.",
    "solution": null,
    "distractors": {
      "A": "Removing all features eliminates the dataset.",
      "B": "Deployment is operational serving in production.",
      "C": "Data collection occurs before any splitting."
    },
    "keyTakeaway": "Validation Set = Used for model selection and hyperparameter tuning.",
    "difficulty": "Easy",
    "tags": [
      "Validation Set",
      "Hyperparameter Tuning"
    ]
  },
  {
    "id": 49,
    "sectionId": "D",
    "sectionTitle": "D. Train-Test Split & Cross-Validation",
    "question": "Which data should generally remain unseen during model training?",
    "options": {
      "A": "Test data",
      "B": "Historical data",
      "C": "Training data",
      "D": "Feature data"
    },
    "correctAnswer": "A",
    "explanation": "Test data must remain strictly isolated and unseen during training and feature engineering to avoid 'data leakage', ensuring the reported performance reflects true real-world generalization.",
    "solution": null,
    "distractors": {
      "B": "Historical data constitutes the dataset.",
      "C": "Training data must be seen by the model to learn parameters.",
      "D": "Feature data is the input X required for training."
    },
    "keyTakeaway": "Data Leakage Prevention: Test data must remain completely isolated until final evaluation.",
    "difficulty": "Easy",
    "tags": [
      "Data Leakage",
      "Best Practices"
    ]
  },
  {
    "id": 50,
    "sectionId": "D",
    "sectionTitle": "D. Train-Test Split & Cross-Validation",
    "question": "A common train-test split is:",
    "options": {
      "A": "10%-90% only",
      "B": "80%-20%",
      "C": "50%-50% only",
      "D": "99%-1% only"
    },
    "correctAnswer": "B",
    "explanation": "An 80%-20% or 70%-30% split is the standard rule-of-thumb in machine learning, ensuring sufficient data for robust training while reserving a statistically significant sample for evaluation.",
    "solution": null,
    "distractors": {
      "A": "10-90 does not provide enough training data to learn model parameters.",
      "C": "50-50 wastes too much training data for most applications.",
      "D": "99-1 leaves too few test samples for reliable statistical evaluation."
    },
    "keyTakeaway": "Standard Splits: 80/20 or 70/30 (Train/Test).",
    "difficulty": "Easy",
    "tags": [
      "Splitting Ratios"
    ]
  },
  {
    "id": 51,
    "sectionId": "D",
    "sectionTitle": "D. Train-Test Split & Cross-Validation",
    "question": "Cross-validation is mainly used to:",
    "options": {
      "A": "Delete data",
      "B": "Create missing values",
      "C": "Obtain a more reliable estimate of model performance",
      "D": "Convert categories"
    },
    "correctAnswer": "C",
    "explanation": "Cross-validation mitigates sampling bias and variance associated with a single arbitrary train-test split by evaluating the model across multiple folds to yield a reliable, generalized performance estimate.",
    "solution": null,
    "distractors": {
      "A": "Cross-validation utilizes all data partitions without deleting data.",
      "B": "Cross-validation has nothing to do with injecting missing values.",
      "D": "Converting categories is encoding."
    },
    "keyTakeaway": "Cross-Validation yields lower-variance, more reliable estimates of generalization error.",
    "difficulty": "Easy",
    "tags": [
      "Cross-Validation",
      "Concepts"
    ]
  },
  {
    "id": 52,
    "sectionId": "D",
    "sectionTitle": "D. Train-Test Split & Cross-Validation",
    "question": "In 5-fold cross-validation, data is divided into:",
    "options": {
      "A": "3 folds",
      "B": "10 folds",
      "C": "2 folds",
      "D": "5 folds"
    },
    "correctAnswer": "D",
    "explanation": "In K-fold cross-validation, the dataset is partitioned into K equal-sized subsets (folds). Thus, in 5-fold CV, there are exactly 5 folds.",
    "solution": null,
    "distractors": {
      "A": "3 folds corresponds to 3-fold CV.",
      "B": "10 folds corresponds to 10-fold CV.",
      "C": "2 folds corresponds to 2-fold (or 50/50 split) CV."
    },
    "keyTakeaway": "K-fold CV = Data partitioned into K distinct, equal-sized subsets.",
    "difficulty": "Easy",
    "tags": [
      "K-Fold",
      "Definition"
    ]
  },
  {
    "id": 53,
    "sectionId": "D",
    "sectionTitle": "D. Train-Test Split & Cross-Validation",
    "question": "In K-fold cross-validation:",
    "options": {
      "A": "Every fold gets a chance to act as validation data",
      "B": "Test data is always duplicated",
      "C": "Only the first fold is used",
      "D": "No training occurs"
    },
    "correctAnswer": "A",
    "explanation": "In K-fold CV, the process iterates K times. In each iteration, one fold acts as the validation set while the remaining (K-1) folds are combined to form the training set, ensuring every sample is validated exactly once.",
    "solution": null,
    "distractors": {
      "B": "Data is partitioned without duplication.",
      "C": "Using only the first fold is a standard single split, not K-fold CV.",
      "D": "Training occurs K separate times."
    },
    "keyTakeaway": "Each fold serves as validation data once while remaining K-1 folds train the model.",
    "difficulty": "Easy",
    "tags": [
      "K-Fold",
      "Mechanism"
    ]
  },
  {
    "id": 54,
    "sectionId": "D",
    "sectionTitle": "D. Train-Test Split & Cross-Validation",
    "question": "If five validation scores are 80%, 82%, 78%, 84%, and 76%, average CV score is:",
    "options": {
      "A": "78%",
      "B": "80%",
      "C": "82%",
      "D": "84%"
    },
    "correctAnswer": "B",
    "explanation": "The overall cross-validation score is the arithmetic mean of the individual fold scores:\nCV Score = (80 + 82 + 78 + 84 + 76) / 5 = 400 / 5 = 80%.",
    "solution": "Step 1: Sum all scores -> 80 + 82 + 78 + 84 + 76 = 400%\nStep 2: Divide by K (5) -> 400% / 5 = 80%.",
    "distractors": {
      "A": "78% is the 2nd lowest fold score.",
      "C": "82% is above the average.",
      "D": "84% is the maximum single fold score."
    },
    "keyTakeaway": "CV Score = (Σ fold_scores) / K = 400 / 5 = 80%.",
    "difficulty": "Easy",
    "tags": [
      "Calculation",
      "CV Score"
    ]
  },
  {
    "id": 55,
    "sectionId": "D",
    "sectionTitle": "D. Train-Test Split & Cross-Validation",
    "question": "Cross-validation is particularly useful when:",
    "options": {
      "A": "There are no features",
      "B": "No model is required",
      "C": "Dataset is limited and model selection is needed",
      "D": "There is no data"
    },
    "correctAnswer": "C",
    "explanation": "When data is scarce or limited, sacrificing a large fixed portion for a separate test set significantly degrades training quality. Cross-validation maximizes data utility by using every data point for both training and validation.",
    "solution": null,
    "distractors": {
      "A": "Features are required for predictive modeling.",
      "B": "Cross-validation is specifically designed for model evaluation.",
      "D": "Machine learning cannot operate with zero data."
    },
    "keyTakeaway": "CV is especially essential for small to medium datasets to avoid sample selection bias.",
    "difficulty": "Easy",
    "tags": [
      "Cross-Validation",
      "Use Cases"
    ]
  },
  {
    "id": 56,
    "sectionId": "E",
    "sectionTitle": "E. EDA & Imbalanced Data",
    "question": "EDA stands for:",
    "options": {
      "A": "Effective Data Algorithm",
      "B": "Experimental Data Algorithm",
      "C": "Estimated Data Analysis",
      "D": "Exploratory Data Analysis"
    },
    "correctAnswer": "D",
    "explanation": "EDA stands for Exploratory Data Analysis, an analytical philosophy and practice pioneered by John Tukey to visually and statistically investigate datasets before modeling.",
    "solution": null,
    "distractors": {
      "A": "Incorrect expansion.",
      "B": "Incorrect expansion.",
      "C": "Incorrect expansion."
    },
    "keyTakeaway": "EDA = Exploratory Data Analysis.",
    "difficulty": "Easy",
    "tags": [
      "EDA",
      "Acronym"
    ]
  },
  {
    "id": 57,
    "sectionId": "E",
    "sectionTitle": "E. EDA & Imbalanced Data",
    "question": "The primary purpose of EDA is to:",
    "options": {
      "A": "Understand data patterns and structure",
      "B": "Automatically deploy models",
      "C": "Train only Random Forest",
      "D": "Delete all outliers"
    },
    "correctAnswer": "A",
    "explanation": "The primary objective of EDA is to uncover underlying distributions, detect anomalies/outliers, test hypotheses, check assumptions, and discover relationships between variables.",
    "solution": null,
    "distractors": {
      "B": "Deployment is an operational step in MLOps.",
      "C": "EDA is model-agnostic and conducted before any algorithm selection.",
      "D": "Not all outliers should be deleted; some carry vital fraud/anomaly signals."
    },
    "keyTakeaway": "Goal of EDA: Understand distributions, correlations, outliers, and feature-target dynamics.",
    "difficulty": "Easy",
    "tags": [
      "EDA",
      "Purpose"
    ]
  },
  {
    "id": 58,
    "sectionId": "E",
    "sectionTitle": "E. EDA & Imbalanced Data",
    "question": "Which plot is best suited for showing the distribution of a numerical variable?",
    "options": {
      "A": "Tree diagram",
      "B": "Histogram",
      "C": "Confusion matrix",
      "D": "Pie chart"
    },
    "correctAnswer": "B",
    "explanation": "A histogram bins continuous numerical data into ranges and plots bar heights proportional to frequency, clearly showing skewness, modality, and spread.",
    "solution": null,
    "distractors": {
      "A": "Tree diagrams show hierarchical decision logic.",
      "C": "A confusion matrix evaluates classification performance.",
      "D": "Pie charts represent categorical proportions."
    },
    "keyTakeaway": "Histogram = Best visualization for univariate continuous frequency distributions.",
    "difficulty": "Easy",
    "tags": [
      "Visualization",
      "Histogram"
    ]
  },
  {
    "id": 59,
    "sectionId": "E",
    "sectionTitle": "E. EDA & Imbalanced Data",
    "question": "Which plot is commonly used to study the relationship between two numerical variables?",
    "options": {
      "A": "Bar chart only",
      "B": "Box plot only",
      "C": "Scatter plot",
      "D": "Pie chart"
    },
    "correctAnswer": "C",
    "explanation": "A scatter plot plots Cartesian coordinates (X, Y) for two continuous variables, making it ideal for visualizing linear, non-linear, positive, or negative correlations.",
    "solution": null,
    "distractors": {
      "A": "Bar charts display categorical comparisons.",
      "B": "Box plots show distribution summary and outliers (univariate or categorical vs numeric).",
      "D": "Pie charts represent categorical proportions of a single variable."
    },
    "keyTakeaway": "Scatter Plot = Gold standard for bivariate continuous correlation analysis (X vs Y).",
    "difficulty": "Easy",
    "tags": [
      "Visualization",
      "Scatter Plot"
    ]
  },
  {
    "id": 60,
    "sectionId": "E",
    "sectionTitle": "E. EDA & Imbalanced Data",
    "question": "Which statistic measures the spread of data around its mean?",
    "options": {
      "A": "Median",
      "B": "Mode",
      "C": "Mean",
      "D": "Variance"
    },
    "correctAnswer": "D",
    "explanation": "Variance (σ² or s²) quantifies the average squared deviation of each data point from the mean: Var(X) = Σ(x - μ)² / N.",
    "solution": null,
    "distractors": {
      "A": "Median is the 50th percentile (central tendency).",
      "B": "Mode is the most frequent value (central tendency).",
      "C": "Mean is a measure of central location."
    },
    "keyTakeaway": "Spread / Dispersion Measures: Variance and Standard Deviation.",
    "difficulty": "Easy",
    "tags": [
      "Statistics",
      "Variance"
    ]
  },
  {
    "id": 61,
    "sectionId": "E",
    "sectionTitle": "E. EDA & Imbalanced Data",
    "question": "Correlation measures:",
    "options": {
      "A": "Association between variables",
      "B": "Number of classes",
      "C": "Model complexity",
      "D": "Number of missing values only"
    },
    "correctAnswer": "A",
    "explanation": "Correlation (such as Pearson's r or Spearman's rho) measures the strength and direction of linear or monotonic association between two variables, ranging from -1 to +1.",
    "solution": null,
    "distractors": {
      "B": "Number of classes is class cardinality.",
      "C": "Model complexity relates to parameters, depth, or degrees of freedom.",
      "D": "Missing values are counted via null checks."
    },
    "keyTakeaway": "Correlation coefficient (r) ranges from −1 (perfect negative) to +1 (perfect positive).",
    "difficulty": "Easy",
    "tags": [
      "Statistics",
      "Correlation"
    ]
  },
  {
    "id": 62,
    "sectionId": "E",
    "sectionTitle": "E. EDA & Imbalanced Data",
    "question": "A dataset contains:\n9900 normal transactions and 100 fraudulent transactions.\nThis dataset is:",
    "options": {
      "A": "Standardized",
      "B": "Imbalanced",
      "C": "Balanced",
      "D": "Normalized"
    },
    "correctAnswer": "B",
    "explanation": "With 99% (9900) belonging to the majority class (normal) and only 1% (100) to the minority class (fraud), there is an extreme class imbalance (99:1 ratio).",
    "solution": null,
    "distractors": {
      "A": "Standardization is a numerical scaling transformation.",
      "C": "A balanced dataset would have roughly equal class representation (e.g. 5000 / 5000).",
      "D": "Normalization is bounding values to [0, 1]."
    },
    "keyTakeaway": "Class Imbalance occurs when one class heavily outnumbers the other.",
    "difficulty": "Easy",
    "tags": [
      "Imbalanced Data",
      "Fraud Detection"
    ]
  },
  {
    "id": 63,
    "sectionId": "E",
    "sectionTitle": "E. EDA & Imbalanced Data",
    "question": "Why can accuracy be misleading for imbalanced data?",
    "options": {
      "A": "Accuracy is always zero",
      "B": "Accuracy cannot be calculated",
      "C": "Majority-class predictions can produce high accuracy",
      "D": "Accuracy only applies to regression"
    },
    "correctAnswer": "C",
    "explanation": "In a 99:1 imbalanced dataset, a naive model predicting 'Normal' 100% of the time achieves 99% accuracy while completely failing to detect even a single fraudulent transaction.",
    "solution": null,
    "distractors": {
      "A": "Accuracy is rarely zero.",
      "B": "Accuracy can always be mathematically calculated as (TP+TN)/Total.",
      "D": "Accuracy is a classification metric, not regression."
    },
    "keyTakeaway": "Accuracy Paradox: A naive majority classifier appears highly accurate while failing minority detection.",
    "difficulty": "Medium",
    "tags": [
      "Evaluation",
      "Accuracy Paradox",
      "Imbalance"
    ]
  },
  {
    "id": 64,
    "sectionId": "E",
    "sectionTitle": "E. EDA & Imbalanced Data",
    "question": "Which technique creates synthetic minority-class examples?",
    "options": {
      "A": "R²",
      "B": "PCA",
      "C": "MSE",
      "D": "SMOTE"
    },
    "correctAnswer": "D",
    "explanation": "SMOTE (Synthetic Minority Over-sampling Technique) creates synthetic data points along line segments connecting k-nearest neighbors in the feature space of minority class samples.",
    "solution": null,
    "distractors": {
      "A": "R² is the coefficient of determination for regression.",
      "B": "PCA (Principal Component Analysis) is a dimensionality reduction technique.",
      "C": "MSE (Mean Squared Error) is a regression loss metric."
    },
    "keyTakeaway": "SMOTE = Generates synthetic samples between k-NN minority instances to balance classes.",
    "difficulty": "Easy",
    "tags": [
      "Sampling",
      "SMOTE"
    ]
  },
  {
    "id": 65,
    "sectionId": "E",
    "sectionTitle": "E. EDA & Imbalanced Data",
    "question": "SMOTE stands for:",
    "options": {
      "A": "Synthetic Minority Over-sampling Technique",
      "B": "Standard Machine Output Training Equation",
      "C": "Synthetic Model Testing Evaluation",
      "D": "Statistical Model Optimization Testing Equation"
    },
    "correctAnswer": "A",
    "explanation": "SMOTE is an acronym for Synthetic Minority Over-sampling Technique, published by Chawla et al. in 2002.",
    "solution": null,
    "distractors": {
      "B": "Incorrect acronym expansion.",
      "C": "Incorrect acronym expansion.",
      "D": "Incorrect acronym expansion."
    },
    "keyTakeaway": "SMOTE = Synthetic Minority Over-sampling Technique.",
    "difficulty": "Easy",
    "tags": [
      "SMOTE",
      "Acronym"
    ]
  },
  {
    "id": 66,
    "sectionId": "E",
    "sectionTitle": "E. EDA & Imbalanced Data",
    "question": "Which is a method for handling class imbalance?",
    "options": {
      "A": "Oversampling",
      "B": "All of the above",
      "C": "Class weights",
      "D": "Undersampling"
    },
    "correctAnswer": "B",
    "explanation": "Class imbalance can be resolved at the data level (Oversampling minority class / SMOTE, Undersampling majority class) or at the algorithmic level (Cost-sensitive learning / Class weights penalizing minority misclassifications).",
    "solution": null,
    "distractors": {
      "A": "Oversampling is valid, but B and C are also widely used methods.",
      "C": "Class weighting is valid, but A and B are also widely used methods.",
      "D": "Undersampling is valid, but A and C are also widely used methods."
    },
    "keyTakeaway": "Class Imbalance Solutions: Oversampling (SMOTE), Undersampling, Cost-sensitive Class Weights.",
    "difficulty": "Easy",
    "tags": [
      "Imbalanced Data",
      "Techniques"
    ]
  },
  {
    "id": 67,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "Supervised learning uses:",
    "options": {
      "A": "Random data only",
      "B": "Only unlabeled data",
      "C": "Labeled data",
      "D": "No target variable"
    },
    "correctAnswer": "C",
    "explanation": "Supervised learning requires datasets with labeled ground-truth pairs (features X and known target labels Y) to train models to map inputs to correct outputs.",
    "solution": null,
    "distractors": {
      "A": "Random data prevents learning meaningful associations.",
      "B": "Unlabeled data is used in Unsupervised Learning (e.g. Clustering).",
      "D": "Supervised learning fundamentally relies on a target variable (Y)."
    },
    "keyTakeaway": "Supervised = Labeled data (Input X + Target Y); Unsupervised = Unlabeled data (Input X only).",
    "difficulty": "Easy",
    "tags": [
      "Supervised Learning",
      "Concepts"
    ]
  },
  {
    "id": 68,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "Which is an example of regression?",
    "options": {
      "A": "Predicting spam/not spam",
      "B": "Predicting pass/fail",
      "C": "Predicting disease/no disease",
      "D": "Predicting house price"
    },
    "correctAnswer": "D",
    "explanation": "Regression tasks predict a continuous numeric quantity (e.g., House price = $450,000.00).",
    "solution": null,
    "distractors": {
      "A": "Spam / Not Spam is binary classification.",
      "B": "Pass / Fail is binary classification.",
      "C": "Disease / No Disease is binary classification."
    },
    "keyTakeaway": "Regression = Continuous quantity prediction; Classification = Discrete class prediction.",
    "difficulty": "Easy",
    "tags": [
      "Regression",
      "Problem Types"
    ]
  },
  {
    "id": 69,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "Which is an example of classification?",
    "options": {
      "A": "Predicting spam/not spam",
      "B": "Predicting house price",
      "C": "Predicting salary",
      "D": "Predicting temperature"
    },
    "correctAnswer": "A",
    "explanation": "Classification tasks predict discrete categorical labels (e.g., Spam vs. Not Spam, Fraud vs. Legitimate).",
    "solution": null,
    "distractors": {
      "B": "House price is continuous numerical data (Regression).",
      "C": "Salary is continuous numerical data (Regression).",
      "D": "Temperature in degrees is continuous numerical data (Regression)."
    },
    "keyTakeaway": "Classification = Categorical outcome (discrete labels/classes).",
    "difficulty": "Easy",
    "tags": [
      "Classification",
      "Problem Types"
    ]
  },
  {
    "id": 70,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "Linear Regression is mainly used for:",
    "options": {
      "A": "Missing value removal",
      "B": "Continuous numerical prediction",
      "C": "Categorical encoding",
      "D": "Clustering"
    },
    "correctAnswer": "B",
    "explanation": "Linear Regression models the relationship between independent feature(s) X and a continuous target variable Y by fitting a linear equation.",
    "solution": null,
    "distractors": {
      "A": "Missing value removal is a cleaning step.",
      "C": "Categorical encoding converts text categories to numbers.",
      "D": "Clustering is unsupervised grouping (e.g., K-Means)."
    },
    "keyTakeaway": "Linear Regression = Fits straight line / hyperplane to predict continuous numerical targets.",
    "difficulty": "Easy",
    "tags": [
      "Linear Regression",
      "Purpose"
    ]
  },
  {
    "id": 71,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "The basic equation of simple linear regression is:",
    "options": {
      "A": "y = 1/(1+e⁻ˣ)",
      "B": "y = x²",
      "C": "ŷ = β₀ + β₁x",
      "D": "y = log(x)"
    },
    "correctAnswer": "C",
    "explanation": "Simple linear regression models the straight line relationship ŷ = β₀ + β₁x (equivalent to y = mx + c), where β₀ is intercept and β₁ is the slope.",
    "solution": null,
    "distractors": {
      "A": "y = 1/(1+e⁻ˣ) is the standard logistic/sigmoid function.",
      "B": "y = x² is quadratic regression.",
      "D": "y = log(x) is logarithmic transformation."
    },
    "keyTakeaway": "Simple Linear Regression: ŷ = β₀ + β₁x",
    "difficulty": "Easy",
    "tags": [
      "Formulas",
      "Linear Regression"
    ]
  },
  {
    "id": 72,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "In ŷ = β₀ + β₁x, β₀ represents:",
    "options": {
      "A": "Slope",
      "B": "Variance",
      "C": "Error",
      "D": "Intercept"
    },
    "correctAnswer": "D",
    "explanation": "β₀ is the y-intercept: the predicted value of ŷ when the independent variable x equals zero.",
    "solution": null,
    "distractors": {
      "A": "Slope is β₁ (rate of change of y with respect to x).",
      "B": "Variance measures data dispersion.",
      "C": "Error is the residual ε = y − ŷ."
    },
    "keyTakeaway": "In ŷ = β₀ + β₁x: β₀ = Intercept (value of y when x=0).",
    "difficulty": "Easy",
    "tags": [
      "Linear Regression",
      "Parameters"
    ]
  },
  {
    "id": 73,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "In ŷ = β₀ + β₁x, β₁ represents:",
    "options": {
      "A": "Slope/coefficient",
      "B": "MSE",
      "C": "Intercept",
      "D": "Target value"
    },
    "correctAnswer": "A",
    "explanation": "β₁ is the slope (regression coefficient): it indicates the expected change in the target variable ŷ for every one-unit increase in x.",
    "solution": null,
    "distractors": {
      "B": "MSE is Mean Squared Error evaluation metric.",
      "C": "Intercept is β₀.",
      "D": "Target value is y."
    },
    "keyTakeaway": "In ŷ = β₀ + β₁x: β₁ = Slope / Coefficient (change in y per unit change in x).",
    "difficulty": "Easy",
    "tags": [
      "Linear Regression",
      "Parameters"
    ]
  },
  {
    "id": 74,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "Logistic Regression is primarily used for:",
    "options": {
      "A": "Continuous regression only",
      "B": "Classification",
      "C": "Data cleaning",
      "D": "Clustering"
    },
    "correctAnswer": "B",
    "explanation": "Despite the word 'Regression' in its historical name, Logistic Regression is a classification algorithm that models the probability of categorical class outcomes (e.g. 0 or 1).",
    "solution": null,
    "distractors": {
      "A": "Standard continuous regression uses Linear Regression.",
      "C": "Data cleaning is data preparation.",
      "D": "Clustering is unsupervised."
    },
    "keyTakeaway": "Logistic Regression is used for Classification (probability estimation of discrete classes).",
    "difficulty": "Easy",
    "tags": [
      "Logistic Regression",
      "Classification"
    ]
  },
  {
    "id": 75,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "Logistic Regression commonly uses which function?",
    "options": {
      "A": "Square root",
      "B": "Linear only",
      "C": "Sigmoid",
      "D": "Absolute value"
    },
    "correctAnswer": "C",
    "explanation": "Logistic Regression maps real-valued linear outputs z = β₀ + β₁x through the Sigmoid (logistic) activation function to compress the output into a valid probability range [0, 1].",
    "solution": null,
    "distractors": {
      "A": "Square root does not map values to the [0, 1] probability range.",
      "B": "A purely linear function produces unbounded output (-∞, +∞), not probabilities.",
      "D": "Absolute value produces non-negative outputs but is unbounded."
    },
    "keyTakeaway": "Logistic Regression compresses linear combinations into probabilities via the Sigmoid function.",
    "difficulty": "Easy",
    "tags": [
      "Logistic Regression",
      "Sigmoid"
    ]
  },
  {
    "id": 76,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "The sigmoid function is:",
    "options": {
      "A": "z²",
      "B": "log(z)",
      "C": "z + 1",
      "D": "1/(1+e⁻ᶻ)"
    },
    "correctAnswer": "D",
    "explanation": "The standard logistic/sigmoid formula is σ(z) = 1 / (1 + e^(-z)), producing an S-shaped curve bounded strictly between 0 and 1.",
    "solution": null,
    "distractors": {
      "A": "z² is a parabolic function.",
      "B": "log(z) is the natural logarithm.",
      "C": "z + 1 is a linear shift."
    },
    "keyTakeaway": "Sigmoid Formula: σ(z) = 1 / (1 + e⁻ᶻ)",
    "difficulty": "Easy",
    "tags": [
      "Formulas",
      "Sigmoid"
    ]
  },
  {
    "id": 77,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "The output of the sigmoid function lies between:",
    "options": {
      "A": "0 and 1",
      "B": "1 and 100",
      "C": "−∞ and +∞",
      "D": "−1 and 1"
    },
    "correctAnswer": "A",
    "explanation": "For any real input z from −∞ to +∞, the sigmoid function σ(z) outputs values strictly bounded between 0 and 1 (0 < σ(z) < 1), making it ideal for probability modeling.",
    "solution": null,
    "distractors": {
      "B": "1 to 100 is percentage scaling.",
      "C": "−∞ to +∞ is the domain of input z (logits).",
      "D": "−1 to 1 is the range of the Hyperbolic Tangent (tanh) function."
    },
    "keyTakeaway": "Sigmoid Output Range: (0, 1) -> Represents event probability P(Y=1|X).",
    "difficulty": "Easy",
    "tags": [
      "Sigmoid",
      "Probability"
    ]
  },
  {
    "id": 78,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "A Decision Tree consists of:",
    "options": {
      "A": "Only clusters",
      "B": "Nodes and branches",
      "C": "Only equations",
      "D": "Only vectors"
    },
    "correctAnswer": "B",
    "explanation": "A Decision Tree is a flowchart-like hierarchical tree structure consisting of internal decision nodes (feature condition tests), branches (decision outcomes), and leaf nodes (class predictions/values).",
    "solution": null,
    "distractors": {
      "A": "Clusters belong to clustering algorithms like K-Means.",
      "C": "Decision trees partition feature space with if-else decision rules rather than single analytical equations.",
      "D": "Vectors are used in Support Vector Machines."
    },
    "keyTakeaway": "Decision Tree Structure: Root Node -> Decision Nodes & Branches -> Terminal Leaf Nodes.",
    "difficulty": "Easy",
    "tags": [
      "Decision Tree",
      "Structure"
    ]
  },
  {
    "id": 79,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "The topmost node of a Decision Tree is called:",
    "options": {
      "A": "Child node",
      "B": "Leaf node",
      "C": "Root node",
      "D": "Terminal node"
    },
    "correctAnswer": "C",
    "explanation": "The root node is the topmost node containing the entire dataset before any splits occur. It splits on the feature that provides the highest Information Gain or lowest Gini Impurity.",
    "solution": null,
    "distractors": {
      "A": "A child node is a downstream node resulting from a split.",
      "B": "A leaf node is a terminal node at the bottom of the tree.",
      "D": "A terminal node is another name for a leaf node."
    },
    "keyTakeaway": "Topmost node = Root Node; Bottom nodes = Leaf / Terminal Nodes.",
    "difficulty": "Easy",
    "tags": [
      "Decision Tree",
      "Root Node"
    ]
  },
  {
    "id": 80,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "A leaf node represents:",
    "options": {
      "A": "Root of the tree",
      "B": "Missing data",
      "C": "Feature scaling",
      "D": "Final prediction/output"
    },
    "correctAnswer": "D",
    "explanation": "A leaf node (terminal node) has no child branches and holds the final predicted class label (in classification) or numerical average (in regression).",
    "solution": null,
    "distractors": {
      "A": "The root node is at the very top of the tree.",
      "B": "Missing data is handled during preprocessing.",
      "C": "Feature scaling is a preprocessing step."
    },
    "keyTakeaway": "Leaf Node = Terminal node holding the final model prediction.",
    "difficulty": "Easy",
    "tags": [
      "Decision Tree",
      "Leaf Node"
    ]
  },
  {
    "id": 81,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "Which measure can be used for splitting a classification Decision Tree?",
    "options": {
      "A": "Gini impurity",
      "B": "Accuracy only",
      "C": "MSE only",
      "D": "R² only"
    },
    "correctAnswer": "A",
    "explanation": "Classification decision trees (CART, ID3, C4.5) use purity metrics such as Gini Impurity or Entropy / Information Gain to evaluate split quality at each node.",
    "solution": null,
    "distractors": {
      "B": "Accuracy is an overall metric, not standardly used as a tree split criterion.",
      "C": "MSE is used for Regression trees, not classification.",
      "D": "R² is a regression evaluation metric."
    },
    "keyTakeaway": "Classification Tree Split Criteria: Gini Impurity (CART) or Entropy / Information Gain (ID3/C4.5).",
    "difficulty": "Easy",
    "tags": [
      "Decision Tree",
      "Gini Impurity"
    ]
  },
  {
    "id": 82,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "Gini impurity is calculated as:",
    "options": {
      "A": "Σpᵢ",
      "B": "1 − Σpᵢ²",
      "C": "1 + Σpᵢ²",
      "D": "Σpᵢ²"
    },
    "correctAnswer": "B",
    "explanation": "Gini Impurity measures the probability of incorrectly classifying a randomly chosen element if it were randomly labeled according to class distribution: Gini = 1 − Σ(pᵢ²).",
    "solution": null,
    "distractors": {
      "A": "Σpᵢ is always equal to 1 for probability distributions.",
      "C": "Adding 1 to squared probabilities is mathematically invalid.",
      "D": "Σpᵢ² is the Gini Purity index (purity, not impurity)."
    },
    "keyTakeaway": "Gini Impurity Formula: Gini = 1 − Σ(pᵢ²)",
    "difficulty": "Easy",
    "tags": [
      "Formulas",
      "Gini Impurity"
    ]
  },
  {
    "id": 83,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "A node with Gini impurity = 0 is:",
    "options": {
      "A": "Missing data",
      "B": "Completely random",
      "C": "Completely pure",
      "D": "Always overfitted"
    },
    "correctAnswer": "C",
    "explanation": "When Gini = 0, all observations belonging to that node belong to a single class (p₁ = 1, so 1 - 1² = 0). It is a 100% pure node.",
    "solution": null,
    "distractors": {
      "A": "Gini = 0 refers to class uniformity, not missing data.",
      "B": "A completely mixed/random binary node has maximum Gini = 0.5.",
      "D": "A pure leaf node is natural and does not automatically mean overfitting."
    },
    "keyTakeaway": "Gini = 0 -> 100% Pure Node (all samples belong to a single class).",
    "difficulty": "Easy",
    "tags": [
      "Gini Impurity",
      "Pure Node"
    ]
  },
  {
    "id": 84,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "Entropy is given by:",
    "options": {
      "A": "Σp²",
      "B": "1−Σp²",
      "C": "Σp log(p)",
      "D": "−Σpᵢlog₂(pᵢ)"
    },
    "correctAnswer": "D",
    "explanation": "In Shannon's information theory, Entropy measures impurity or uncertainty: H(S) = −Σ pᵢ · log₂(pᵢ).",
    "solution": null,
    "distractors": {
      "A": "Σp² is Gini purity.",
      "B": "1 - Σp² is Gini impurity.",
      "C": "Lacks the negative sign (since log of fractions p < 1 is negative, without minus it would be negative)."
    },
    "keyTakeaway": "Entropy Formula: H(S) = − Σ [pᵢ · log₂(pᵢ)]",
    "difficulty": "Easy",
    "tags": [
      "Formulas",
      "Entropy"
    ]
  },
  {
    "id": 85,
    "sectionId": "F",
    "sectionTitle": "F. Supervised Learning & Algorithms",
    "question": "Information Gain is:",
    "options": {
      "A": "Entropy(parent) − weighted entropy(children)",
      "B": "Entropy(parent) + entropy(children)",
      "C": "MSE − R²",
      "D": "Accuracy − Precision"
    },
    "correctAnswer": "A",
    "explanation": "Information Gain measures the reduction in entropy achieved by partitioning a dataset on an attribute: IG(T, a) = Entropy(Parent) − Σ [ (|S_v|/|S|) × Entropy(Child_v) ].",
    "solution": null,
    "distractors": {
      "B": "Adding entropies would measure total chaos, not reduction of uncertainty.",
      "C": "MSE and R² are unrelated regression metrics.",
      "D": "Accuracy and Precision are distinct classification metrics."
    },
    "keyTakeaway": "Information Gain = Parent Entropy − Weighted Average Children Entropy.",
    "difficulty": "Easy",
    "tags": [
      "Information Gain",
      "Decision Tree"
    ]
  },
  {
    "id": 86,
    "sectionId": "G",
    "sectionTitle": "G. Random Forest & Gradient Boosting",
    "question": "Random Forest is:",
    "options": {
      "A": "A preprocessing technique",
      "B": "An ensemble of decision trees",
      "C": "A single linear model",
      "D": "A clustering algorithm"
    },
    "correctAnswer": "B",
    "explanation": "Random Forest is a bagging (Bootstrap Aggregating) ensemble learning method that builds multiple independent decision trees with random feature subsampling and aggregates their predictions.",
    "solution": null,
    "distractors": {
      "A": "Random Forest is a predictive model, not preprocessing.",
      "C": "A single linear model is Linear or Logistic regression.",
      "D": "Clustering is unsupervised grouping (e.g. K-Means)."
    },
    "keyTakeaway": "Random Forest = Ensemble of randomized Decision Trees trained in parallel (Bagging).",
    "difficulty": "Easy",
    "tags": [
      "Ensemble",
      "Random Forest"
    ]
  },
  {
    "id": 87,
    "sectionId": "G",
    "sectionTitle": "G. Random Forest & Gradient Boosting",
    "question": "In Random Forest classification, final prediction is commonly based on:",
    "options": {
      "A": "Median of labels only",
      "B": "Random selection",
      "C": "Majority voting",
      "D": "Minimum MSE only"
    },
    "correctAnswer": "C",
    "explanation": "For classification, each tree in the Random Forest votes for a class, and the class receiving the majority of votes (or highest average predicted class probability) becomes the ensemble's final prediction.",
    "solution": null,
    "distractors": {
      "A": "Median of discrete classes is not standardly used for categorical classification.",
      "B": "Predictions are aggregate majority consensus, not random.",
      "D": "MSE is used in continuous regression, not discrete voting."
    },
    "keyTakeaway": "Random Forest Classification = Majority Voting across all decision trees.",
    "difficulty": "Easy",
    "tags": [
      "Random Forest",
      "Voting"
    ]
  },
  {
    "id": 88,
    "sectionId": "G",
    "sectionTitle": "G. Random Forest & Gradient Boosting",
    "question": "In Random Forest regression, predictions from trees are commonly:",
    "options": {
      "A": "Multiplied",
      "B": "Ignored",
      "C": "Converted to categories",
      "D": "Averaged"
    },
    "correctAnswer": "D",
    "explanation": "For regression tasks, the Random Forest aggregates predictions by calculating the arithmetic mean (average) of all individual tree predictions: ŷ = (1/T) Σ ŷ_t.",
    "solution": null,
    "distractors": {
      "A": "Multiplying numeric values would exponentially explode prediction scale.",
      "B": "Individual tree predictions form the core basis of the ensemble.",
      "C": "Regression predicts continuous numerical values, not categories."
    },
    "keyTakeaway": "Random Forest Regression = Averaging numeric outputs of all trees.",
    "difficulty": "Easy",
    "tags": [
      "Random Forest",
      "Regression"
    ]
  },
  {
    "id": 89,
    "sectionId": "G",
    "sectionTitle": "G. Random Forest & Gradient Boosting",
    "question": "Gradient Boosting builds models:",
    "options": {
      "A": "Sequentially",
      "B": "Without training data",
      "C": "Completely independently",
      "D": "Only once"
    },
    "correctAnswer": "A",
    "explanation": "Gradient Boosting is a sequential boosting technique where each new base model (typically a shallow decision tree) is trained sequentially to predict and correct the pseudo-residuals (errors) of the previous ensemble.",
    "solution": null,
    "distractors": {
      "B": "Gradient boosting requires training data.",
      "C": "Random Forest builds trees independently/in parallel; Gradient Boosting builds sequentially.",
      "D": "It iterates across tens or hundreds of sequential boosting rounds."
    },
    "keyTakeaway": "Boosting = Sequential model construction; Bagging (Random Forest) = Parallel independent construction.",
    "difficulty": "Easy",
    "tags": [
      "Gradient Boosting",
      "Boosting"
    ]
  },
  {
    "id": 90,
    "sectionId": "G",
    "sectionTitle": "G. Random Forest & Gradient Boosting",
    "question": "In Gradient Boosting, later models mainly try to:",
    "options": {
      "A": "Remove all features",
      "B": "Correct/reduce errors from previous models",
      "C": "Delete previous models",
      "D": "Increase missing values"
    },
    "correctAnswer": "B",
    "explanation": "Each subsequent decision tree in Gradient Boosting fits directly to the residual errors (gradient of the loss function) made by all prior trees, progressively minimizing total ensemble error.",
    "solution": null,
    "distractors": {
      "A": "Features are used across all boosting rounds.",
      "C": "Previous models are retained and summed with a learning rate shrinkage factor.",
      "D": "Boosting has no role in increasing missing data."
    },
    "keyTakeaway": "Gradient Boosting trains successive trees on residual errors of previous iterations.",
    "difficulty": "Easy",
    "tags": [
      "Gradient Boosting",
      "Residuals"
    ]
  },
  {
    "id": 91,
    "sectionId": "H",
    "sectionTitle": "H. Model Evaluation",
    "question": "MSE is primarily used for:",
    "options": {
      "A": "Cross-validation",
      "B": "Classification only",
      "C": "Regression",
      "D": "Encoding"
    },
    "correctAnswer": "C",
    "explanation": "MSE (Mean Squared Error) computes the average of squared differences between actual and predicted continuous targets, making it a foundational regression evaluation metric and loss function.",
    "solution": null,
    "distractors": {
      "A": "Cross-validation is a validation resampling framework, not a metric itself.",
      "B": "Classification uses Cross-Entropy (Log Loss), Accuracy, F1-Score, ROC-AUC.",
      "D": "Encoding converts categories to numbers."
    },
    "keyTakeaway": "MSE = Standard error metric for continuous Regression models.",
    "difficulty": "Easy",
    "tags": [
      "MSE",
      "Regression Metrics"
    ]
  },
  {
    "id": 92,
    "sectionId": "H",
    "sectionTitle": "H. Model Evaluation",
    "question": "MSE is calculated as:",
    "options": {
      "A": "TP/(TP+FP)",
      "B": "Σ(y−ŷ)",
      "C": "Σ(y+ŷ)",
      "D": "(1/n)Σ(y−ŷ)²"
    },
    "correctAnswer": "D",
    "explanation": "Mean Squared Error is computed by taking the residual difference between each actual value y and predicted value ŷ, squaring it, summing all squared residuals, and dividing by sample size n: MSE = (1/n) Σ(y - ŷ)².",
    "solution": null,
    "distractors": {
      "A": "TP/(TP+FP) is the formula for Precision in classification.",
      "B": "Σ(y−ŷ) is simple sum of errors (can cancel out to zero with positive and negative errors).",
      "C": "Sum of actual and predicted is meaningless for error measurement."
    },
    "keyTakeaway": "Formula: MSE = (1/n) Σ (yᵢ − ŷᵢ)²",
    "difficulty": "Easy",
    "tags": [
      "Formulas",
      "MSE"
    ]
  },
  {
    "id": 93,
    "sectionId": "H",
    "sectionTitle": "H. Model Evaluation",
    "question": "If actual values are [10, 20] and predictions are [12, 18], MSE is:",
    "options": {
      "A": "4",
      "B": "16",
      "C": "2",
      "D": "8"
    },
    "correctAnswer": "A",
    "explanation": "Detailed calculation:\nResiduals: (10 - 12) = -2, (20 - 18) = +2\nSquared Residuals: (-2)² = 4, (+2)² = 4\nMSE = (4 + 4) / 2 = 8 / 2 = 4.",
    "solution": "Step 1: Calculate residuals (y − ŷ):\n  • Error 1 = 10 − 12 = −2\n  • Error 2 = 20 − 18 = 2\nStep 2: Square the residuals:\n  • (−2)² = 4\n  • (2)² = 4\nStep 3: Average the squared residuals:\n  • MSE = (4 + 4) / 2 = 8 / 2 = 4.",
    "distractors": {
      "B": "16 is 4 squared.",
      "C": "2 is the Mean Absolute Error (MAE): (|−2| + |2|)/2 = 2.",
      "D": "8 is the sum of squared errors (SSE), before dividing by n=2."
    },
    "keyTakeaway": "MSE = [(10−12)² + (20−18)²] / 2 = (4 + 4) / 2 = 4.",
    "difficulty": "Medium",
    "tags": [
      "Calculation",
      "MSE",
      "Step-by-Step"
    ]
  },
  {
    "id": 94,
    "sectionId": "H",
    "sectionTitle": "H. Model Evaluation",
    "question": "R² primarily measures:",
    "options": {
      "A": "Classification precision",
      "B": "Proportion of variance explained by the regression model",
      "C": "Number of outliers",
      "D": "Classification recall"
    },
    "correctAnswer": "B",
    "explanation": "R² (Coefficient of Determination) quantifies the proportion of the total variance in the dependent variable Y that is explained/predicted by the independent features X: R² = 1 − (SS_res / SS_tot).",
    "solution": null,
    "distractors": {
      "A": "Precision measures exactness of positive classification predictions.",
      "C": "Outliers are counted via statistical filtering.",
      "D": "Recall measures sensitivity/completeness of positive detections."
    },
    "keyTakeaway": "R² = Fraction of variance explained (1.0 = perfect fit, 0.0 = baseline mean model).",
    "difficulty": "Easy",
    "tags": [
      "R-Squared",
      "Regression Metrics"
    ]
  },
  {
    "id": 95,
    "sectionId": "H",
    "sectionTitle": "H. Model Evaluation",
    "question": "Which metric generally has a better value when it is lower?",
    "options": {
      "A": "R²",
      "B": "Recall",
      "C": "MSE",
      "D": "Precision"
    },
    "correctAnswer": "C",
    "explanation": "MSE (Mean Squared Error) is a loss/error metric. Lower error signifies closer predictions to actual values, with 0 being a perfect score.",
    "solution": null,
    "distractors": {
      "A": "R² is better when higher (closer to 1.0).",
      "B": "Recall is better when higher (closer to 100%).",
      "D": "Precision is better when higher (closer to 100%)."
    },
    "keyTakeaway": "Loss/Error metrics (MSE, RMSE, MAE, Log-Loss) -> Lower is better; Performance metrics (R², Precision, Recall, Accuracy) -> Higher is better.",
    "difficulty": "Easy",
    "tags": [
      "Metrics",
      "Evaluation Criteria"
    ]
  },
  {
    "id": 96,
    "sectionId": "H",
    "sectionTitle": "H. Model Evaluation",
    "question": "If TP = 80, FP = 20, Precision is:",
    "options": {
      "A": "90%",
      "B": "60%",
      "C": "70%",
      "D": "80%"
    },
    "correctAnswer": "D",
    "explanation": "Precision measures positive predictive value: out of all instances predicted positive (TP + FP), how many were truly positive (TP)?\nPrecision = 80 / (80 + 20) = 80 / 100 = 80%.",
    "solution": "Step 1: Formula -> Precision = TP / (TP + FP)\nStep 2: Substitute values -> Precision = 80 / (80 + 20)\nStep 3: Calculate -> Precision = 80 / 100 = 0.80 = 80%.",
    "distractors": {
      "A": "90% is incorrect arithmetic.",
      "B": "60% would be (80-20)/100.",
      "C": "70% is incorrect arithmetic."
    },
    "keyTakeaway": "Precision = TP / (TP + FP) = 80 / 100 = 80%.",
    "difficulty": "Medium",
    "tags": [
      "Calculation",
      "Precision",
      "Confusion Matrix"
    ]
  },
  {
    "id": 97,
    "sectionId": "H",
    "sectionTitle": "H. Model Evaluation",
    "question": "If TP = 90 and FN = 10, Recall is:",
    "options": {
      "A": "90%",
      "B": "80%",
      "C": "85%",
      "D": "95%"
    },
    "correctAnswer": "A",
    "explanation": "Recall (Sensitivity) measures the proportion of actual positive cases that were correctly identified by the model:\nRecall = TP / (TP + FN) = 90 / (90 + 10) = 90 / 100 = 90%.",
    "solution": "Step 1: Formula -> Recall = TP / (TP + FN)\nStep 2: Substitute values -> Recall = 90 / (90 + 10)\nStep 3: Calculate -> Recall = 90 / 100 = 0.90 = 90%.",
    "distractors": {
      "B": "80% is incorrect.",
      "C": "85% is (90 - 5) / 100.",
      "D": "95% would require TP=95 with FN=5."
    },
    "keyTakeaway": "Recall = TP / (TP + FN) = 90 / 100 = 90%.",
    "difficulty": "Medium",
    "tags": [
      "Calculation",
      "Recall",
      "Confusion Matrix"
    ]
  },
  {
    "id": 98,
    "sectionId": "H",
    "sectionTitle": "H. Model Evaluation",
    "question": "If TP = 80, TN = 90, FP = 10 and FN = 20, accuracy is:",
    "options": {
      "A": "80%",
      "B": "85%",
      "C": "82.5%",
      "D": "90%"
    },
    "correctAnswer": "B",
    "explanation": "Accuracy is the ratio of correct predictions (both positive and negative) to total predictions:\nAccuracy = (80 + 90) / (80 + 90 + 10 + 20) = 170 / 200 = 85%.",
    "solution": "Step 1: Formula -> Accuracy = (TP + TN) / (TP + TN + FP + FN)\nStep 2: Calculate Numerator -> TP + TN = 80 + 90 = 170\nStep 3: Calculate Denominator -> 80 + 90 + 10 + 20 = 200\nStep 4: Calculate Accuracy -> 170 / 200 = 0.85 = 85%.",
    "distractors": {
      "A": "80% is the precision (80 / 100).",
      "C": "82.5% is incorrect arithmetic.",
      "D": "90% is TN / (TN + FP) = 90/100 (Specificity)."
    },
    "keyTakeaway": "Accuracy = (TP + TN) / Total = (80 + 90) / 200 = 170 / 200 = 85%.",
    "difficulty": "Medium",
    "tags": [
      "Calculation",
      "Accuracy",
      "Confusion Matrix"
    ]
  },
  {
    "id": 99,
    "sectionId": "H",
    "sectionTitle": "H. Model Evaluation",
    "question": "F1-score combines:",
    "options": {
      "A": "MSE and R²",
      "B": "Accuracy and MSE",
      "C": "Precision and Recall",
      "D": "Bias and Variance"
    },
    "correctAnswer": "C",
    "explanation": "The F1-score is the harmonic mean of Precision and Recall: F1 = 2 × (Precision × Recall) / (Precision + Recall), balancing precision and sensitivity especially in imbalanced datasets.",
    "solution": null,
    "distractors": {
      "A": "MSE and R² are regression metrics.",
      "B": "Accuracy and MSE combine classification and regression metrics.",
      "D": "Bias and variance are learning error components (Bias-Variance Tradeoff)."
    },
    "keyTakeaway": "F1-Score = Harmonic Mean of Precision and Recall: 2·(P·R)/(P+R).",
    "difficulty": "Easy",
    "tags": [
      "F1-Score",
      "Classification Metrics"
    ]
  },
  {
    "id": 100,
    "sectionId": "H",
    "sectionTitle": "H. Model Evaluation",
    "question": "A model has 99% training accuracy but 70% test accuracy. This indicates:",
    "options": {
      "A": "High bias only",
      "B": "Perfect generalization",
      "C": "Underfitting",
      "D": "Overfitting"
    },
    "correctAnswer": "D",
    "explanation": "A substantial performance drop between training accuracy (99%) and test accuracy (70%) is the classic hallmark of Overfitting (High Variance): the model has memorized noise in the training data rather than generalizing true patterns.",
    "solution": null,
    "distractors": {
      "A": "High bias causes underfitting, whereas here the model exhibits high variance (overfitting).",
      "B": "Perfect generalization would exhibit equally high accuracy on both train and test sets.",
      "C": "Underfitting occurs when the model performs poorly on both training and test data (High Bias)."
    },
    "keyTakeaway": "High Train Score + Low Test Score = Overfitting (High Variance).",
    "difficulty": "Easy",
    "tags": [
      "Overfitting",
      "Bias-Variance"
    ]
  }
],
      revisionSheet: []
    },
    unit2: {
      id: "unit2",
      number: 2,
      title: "Unit 2: Storage, Feature Engineering & Visualization",
      shortTitle: "Unit 2: Storage, Features & Viz",
      subtitle: "100 MCQs • 4 Sections (A to D) + High-Yield Revision Sheet",
      description: "Master data storage & warehousing, ETL vs ELT pipelines, database indexing, feature importance & selection (RFE, Lasso), scaling, lag & rolling features, PCA, Python visualization (Matplotlib, Seaborn, Tableau), and responsible AI ethics.",
      badge: "100 MCQs Ready",
      status: "available",
      sections: [
  {
    "id": "A",
    "title": "Section A: Data Storage & Management for Predictive Analysis",
    "description": "Data storage, warehousing, relational/NoSQL DBMS, ETL vs ELT pipelines, cloud architecture, encryption, access control, indexing, partitioning, Parquet, data lakes, and query latency.",
    "count": 35,
    "range": "Q1 - Q35",
    "color": "#6366f1"
  },
  {
    "id": "B",
    "title": "Section B: Feature Engineering & Dimensionality Reduction",
    "description": "Feature importance, filter/wrapper/embedded methods (RFE, Lasso), min-max scaling, standardization (z-score), imputation, one-hot/ordinal encoding, lag & rolling features, data leakage, and PCA.",
    "count": 35,
    "range": "Q36 - Q70",
    "color": "#06b6d4"
  },
  {
    "id": "C",
    "title": "Section C: Data Visualization for Predictive Analysis",
    "description": "Scatter plots, histograms, bar charts, heatmaps, box plots (IQR), Matplotlib, Seaborn, Tableau, residual plots, confusion matrix, ROC curves, ROC-AUC, and actual vs predicted plots.",
    "count": 20,
    "range": "Q71 - Q90",
    "color": "#10b981"
  },
  {
    "id": "D",
    "title": "Section D: Fundamentals, Evaluation & Responsible AI",
    "description": "Predictive analytics workflow, regression metrics (MSE), classification metrics (Accuracy, Precision, Recall, F1-score), overfitting, cross-validation, algorithmic bias, privacy, and model drift.",
    "count": 10,
    "range": "Q91 - Q100",
    "color": "#f59e0b"
  }
],
      questions: [
  {
    "id": 1,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "What is the primary objective of predictive analytics?",
    "options": {
      "A": "To store data permanently",
      "B": "To predict future outcomes using historical data",
      "C": "To create graphical user interfaces",
      "D": "To eliminate all uncertainty"
    },
    "correctAnswer": "B",
    "explanation": "Predictive analytics uses historical data, statistical techniques, and machine learning to estimate future outcomes, probabilities, and trends.",
    "solution": null,
    "distractors": {
      "A": "Permanent data storage is the function of databases and archival systems, not predictive modeling.",
      "C": "Creating graphical user interfaces is front-end software development.",
      "D": "No statistical model can eliminate all uncertainty; predictive analytics estimates probabilities rather than guaranteeing certainty."
    },
    "keyTakeaway": "Predictive Analytics = Historical Data + Statistical/ML Modeling -> Future Outcome Estimation.",
    "difficulty": "Easy",
    "tags": [
      "Fundamentals",
      "Objectives"
    ]
  },
  {
    "id": 2,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Which storage system is specifically designed for reporting and analytical queries?",
    "options": {
      "A": "Data warehouse",
      "B": "Text editor",
      "C": "Compiler",
      "D": "Operating system"
    },
    "correctAnswer": "A",
    "explanation": "A data warehouse integrates historical data from multiple heterogeneous sources and optimizes schema design (star/snowflake) specifically for reporting, analytical queries, and business intelligence (OLAP).",
    "solution": null,
    "distractors": {
      "B": "A text editor is software for editing plain text files (e.g. VS Code, Notepad).",
      "C": "A compiler translates source code into machine code.",
      "D": "An operating system manages computer hardware and system resources."
    },
    "keyTakeaway": "Data warehouses are read-optimized analytical repositories (OLAP) consolidating multi-source historical data.",
    "difficulty": "Easy",
    "tags": [
      "Data Warehouse",
      "Storage"
    ]
  },
  {
    "id": 3,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Which of the following is a characteristic of a traditional data warehouse?",
    "options": {
      "A": "It stores only images",
      "B": "It is designed primarily for gaming",
      "C": "It organizes integrated data for analytical processing",
      "D": "It cannot store historical information"
    },
    "correctAnswer": "C",
    "explanation": "Traditional data warehouses organize integrated, subject-oriented, non-volatile, and time-variant data to support complex analytical processing (OLAP) and strategic decision-making.",
    "solution": null,
    "distractors": {
      "A": "Data warehouses primarily store structured alphanumeric tabular business data.",
      "B": "Data warehouses are enterprise business intelligence systems, not gaming engines.",
      "D": "Storing historical information over years is one of the foundational capabilities of data warehouses."
    },
    "keyTakeaway": "Inmon & Kimball define data warehouses as subject-oriented, integrated, time-variant, and non-volatile analytical systems.",
    "difficulty": "Easy",
    "tags": [
      "Data Warehouse",
      "OLAP"
    ]
  },
  {
    "id": 4,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "What is the primary purpose of a database management system (DBMS)?",
    "options": {
      "A": "To design charts only",
      "B": "To manage, retrieve, update, and organize data",
      "C": "To train neural networks exclusively",
      "D": "To encrypt every file automatically"
    },
    "correctAnswer": "B",
    "explanation": "A Database Management System (DBMS) provides systematic mechanisms for creating, storing, retrieving, updating, securing, and managing structured collections of data.",
    "solution": null,
    "distractors": {
      "A": "Designing charts is the domain of data visualization and reporting tools.",
      "C": "Training neural networks is performed by machine learning frameworks (e.g., PyTorch, TensorFlow).",
      "D": "Encryption is an optional security feature, not the primary foundational definition of a DBMS."
    },
    "keyTakeaway": "A DBMS serves as the software interface between databases and end-users/applications to manage data integrity and CRUD operations.",
    "difficulty": "Easy",
    "tags": [
      "DBMS",
      "Data Management"
    ]
  },
  {
    "id": 5,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Which of the following is an example of a relational database?",
    "options": {
      "A": "MySQL",
      "B": "Matplotlib",
      "C": "Tableau",
      "D": "Scikit-learn"
    },
    "correctAnswer": "A",
    "explanation": "MySQL is an open-source Relational Database Management System (RDBMS) that stores structured data in related tables using rows, columns, primary keys, and foreign keys.",
    "solution": null,
    "distractors": {
      "B": "Matplotlib is a Python visualization library for 2D graphics.",
      "C": "Tableau is a visual analytics and business intelligence tool.",
      "D": "Scikit-learn is a Python machine learning library."
    },
    "keyTakeaway": "Relational databases (MySQL, PostgreSQL, Oracle, SQL Server) organize structured tables linked via relational constraints.",
    "difficulty": "Easy",
    "tags": [
      "RDBMS",
      "SQL",
      "Database"
    ]
  },
  {
    "id": 6,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Which storage approach is particularly useful for scalable, on-demand infrastructure without maintaining physical servers?",
    "options": {
      "A": "Local notebook storage only",
      "B": "Cloud-based storage",
      "C": "Paper records",
      "D": "A single USB drive"
    },
    "correctAnswer": "B",
    "explanation": "Cloud-based storage (such as AWS S3, Google Cloud Storage, or Azure Blob) provides elastic, scalable, on-demand infrastructure with high availability and redundancy without needing on-premise hardware maintenance.",
    "solution": null,
    "distractors": {
      "A": "Local notebook storage is tied to a single machine with constrained capacity.",
      "C": "Paper records cannot support automated querying or scalable digital computing.",
      "D": "A single USB drive has physical limits, single point of failure risk, and no elastic scaling."
    },
    "keyTakeaway": "Cloud storage offers on-demand elasticity, pay-per-use economics, and zero on-premise physical hardware maintenance.",
    "difficulty": "Easy",
    "tags": [
      "Cloud Storage",
      "Scalability"
    ]
  },
  {
    "id": 7,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "What does ETL stand for?",
    "options": {
      "A": "Extract, Transfer, Link",
      "B": "Evaluate, Train, Learn",
      "C": "Extract, Transform, Load",
      "D": "Encode, Test, Launch"
    },
    "correctAnswer": "C",
    "explanation": "ETL stands for Extract, Transform, Load — the standard three-phase data integration pipeline used to consolidate data from source systems into analytical repositories.",
    "solution": null,
    "distractors": {
      "A": "'Transfer, Link' are not standard ETL pipeline stages.",
      "B": "'Evaluate, Train, Learn' are steps in a machine learning workflow.",
      "D": "'Encode, Test, Launch' are software deployment or ML development phrases."
    },
    "keyTakeaway": "ETL: Extract (source retrieval) -> Transform (cleaning & mapping) -> Load (writing to destination).",
    "difficulty": "Easy",
    "tags": [
      "ETL",
      "Pipelines"
    ]
  },
  {
    "id": 8,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Which is the correct sequence of traditional ETL operations?",
    "options": {
      "A": "Load -> Transform -> Extract",
      "B": "Extract -> Transform -> Load",
      "C": "Transform -> Load -> Extract",
      "D": "Extract -> Load -> Transform"
    },
    "correctAnswer": "B",
    "explanation": "Traditional ETL extracts data from sources, transforms it in a staging area (cleaning, standardizing, validating), and finally loads the clean data into the target analytical warehouse.",
    "solution": null,
    "distractors": {
      "A": "You cannot load data before extracting it from the source.",
      "C": "You cannot transform data before it has been extracted.",
      "D": "Extract -> Load -> Transform is ELT, common in modern cloud warehouses, not traditional ETL."
    },
    "keyTakeaway": "ETL Sequence: First Extract from sources, then Transform in staging, finally Load into storage.",
    "difficulty": "Easy",
    "tags": [
      "ETL",
      "Data Pipeline"
    ]
  },
  {
    "id": 9,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Which ETL stage involves collecting data from source systems?",
    "options": {
      "A": "Extraction",
      "B": "Transformation",
      "C": "Loading",
      "D": "Visualization"
    },
    "correctAnswer": "A",
    "explanation": "Extraction is the first stage of ETL, where data is read and pulled from various source systems such as operational databases, ERP/CRM platforms, flat files, or APIs.",
    "solution": null,
    "distractors": {
      "B": "Transformation alters and standardizes data formats after it has already been extracted.",
      "C": "Loading writes the transformed data into the target warehouse.",
      "D": "Visualization is the reporting layer downstream of the ETL pipeline."
    },
    "keyTakeaway": "Extraction pulls raw data from source systems into an ingestion or staging area.",
    "difficulty": "Easy",
    "tags": [
      "ETL",
      "Extraction"
    ]
  },
  {
    "id": 10,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Removing duplicate records and correcting inconsistent date formats are examples of which ETL stage?",
    "options": {
      "A": "Extraction",
      "B": "Transformation",
      "C": "Loading",
      "D": "Archiving"
    },
    "correctAnswer": "B",
    "explanation": "Transformation includes data cleaning, deduplication, standardizing date/time formats, converting data types, filtering invalid records, and computing derived attributes.",
    "solution": null,
    "distractors": {
      "A": "Extraction simply reads the raw data from source systems without modifying it.",
      "C": "Loading inserts clean records into the destination database tables.",
      "D": "Archiving moves cold, inactive data to long-term storage tiers."
    },
    "keyTakeaway": "Transformation is where data cleansing, standardization, and schema conformity take place.",
    "difficulty": "Easy",
    "tags": [
      "ETL",
      "Transformation",
      "Data Cleaning"
    ]
  },
  {
    "id": 11,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "In ETL, what does the loading stage do?",
    "options": {
      "A": "Deletes all historical data",
      "B": "Creates predictions without a model",
      "C": "Writes processed data into a target system",
      "D": "Automatically selects the best algorithm"
    },
    "correctAnswer": "C",
    "explanation": "The load operation commits and writes the transformed, validated dataset into the target storage system, such as an enterprise data warehouse or operational data store.",
    "solution": null,
    "distractors": {
      "A": "Loading appends or upserts data; it preserves historical records rather than deleting them.",
      "B": "Loading is a data engineering step and does not generate predictive ML outputs.",
      "D": "Algorithm selection is part of automated machine learning (AutoML), not ETL loading."
    },
    "keyTakeaway": "Loading writes transformed, analytics-ready datasets into target storage tables.",
    "difficulty": "Easy",
    "tags": [
      "ETL",
      "Loading"
    ]
  },
  {
    "id": 12,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "What is the primary difference between ETL and ELT?",
    "options": {
      "A": "ELT does not involve data extraction",
      "B": "ETL transforms before loading, while ELT transforms after loading",
      "C": "ETL is only for images",
      "D": "ELT cannot use cloud storage"
    },
    "correctAnswer": "B",
    "explanation": "In ETL, transformations occur on a separate processing server prior to loading into the warehouse. In ELT, raw data is loaded directly into the destination warehouse first, leveraging the massive parallel processing (MPP) compute power of the modern cloud warehouse (Snowflake, BigQuery, Redshift) to transform data in place.",
    "solution": null,
    "distractors": {
      "A": "Both ETL and ELT begin with data extraction from sources.",
      "C": "ETL is universally used for structured and semi-structured business data, not just images.",
      "D": "ELT was specifically popularized by modern cloud data warehouses."
    },
    "keyTakeaway": "ETL transforms in a middle tier before loading; ELT loads raw data first and transforms inside the target database.",
    "difficulty": "Medium",
    "tags": [
      "ETL",
      "ELT",
      "Architecture"
    ]
  },
  {
    "id": 13,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Which of the following is an example of structured data?",
    "options": {
      "A": "A relational table containing student marks",
      "B": "An unorganized collection of audio recordings",
      "C": "A folder of unrelated video files",
      "D": "A collection of free-form voice messages"
    },
    "correctAnswer": "A",
    "explanation": "Structured data follows a rigid, predefined schema composed of tabular rows and columns with explicit data types (e.g., student ID, subject name, exam marks).",
    "solution": null,
    "distractors": {
      "B": "Audio recordings are unstructured binary multimedia data.",
      "C": "Video files lack a tabular relational schema and are unstructured.",
      "D": "Voice messages are unstructured acoustic audio signals."
    },
    "keyTakeaway": "Structured data conforms to a formal schema with strict tabular rows and columns (RDBMS, CSV, spreadsheets).",
    "difficulty": "Easy",
    "tags": [
      "Data Types",
      "Structured Data"
    ]
  },
  {
    "id": 14,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Which of the following is generally considered unstructured data?",
    "options": {
      "A": "A table of employee IDs and salaries",
      "B": "A relational customer table",
      "C": "A collection of free-form text documents",
      "D": "A table of product codes"
    },
    "correctAnswer": "C",
    "explanation": "Free-form text documents (such as customer reviews, legal contracts, or emails) lack a predefined relational schema or tabular layout, classifying them as unstructured data.",
    "solution": null,
    "distractors": {
      "A": "A table of employee IDs and salaries is structured tabular data.",
      "B": "A relational customer table has predefined columns and data types (structured).",
      "D": "A table of product codes follows an explicit tabular schema (structured)."
    },
    "keyTakeaway": "Unstructured data includes text, audio, images, and video which cannot be represented directly in fixed tabular schemas without parsing.",
    "difficulty": "Easy",
    "tags": [
      "Data Types",
      "Unstructured Data"
    ]
  },
  {
    "id": 15,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "What is the main purpose of data encryption?",
    "options": {
      "A": "To increase the number of features",
      "B": "To protect data confidentiality by making it unreadable without appropriate decryption",
      "C": "To visualize missing values",
      "D": "To remove duplicate observations"
    },
    "correctAnswer": "B",
    "explanation": "Encryption transforms plaintext data into unintelligible ciphertext using cryptographic algorithms and keys, ensuring confidentiality so unauthorized parties cannot read the data.",
    "solution": null,
    "distractors": {
      "A": "Feature creation is part of feature engineering, not cryptographic security.",
      "C": "Visualizing missing values is done through EDA tools (e.g. heatmap, missingno).",
      "D": "Removing duplicate records is data cleaning (ETL transformation)."
    },
    "keyTakeaway": "Encryption converts plaintext to ciphertext using mathematical algorithms, safeguarding data confidentiality.",
    "difficulty": "Easy",
    "tags": [
      "Security",
      "Encryption"
    ]
  },
  {
    "id": 16,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Which encryption approach is commonly used to protect data transmitted between a client and a server?",
    "options": {
      "A": "TLS",
      "B": "PCA",
      "C": "K-means",
      "D": "Min-max scaling"
    },
    "correctAnswer": "A",
    "explanation": "Transport Layer Security (TLS, the successor to SSL) provides cryptographic security and data privacy for communications over computer networks (HTTPS).",
    "solution": null,
    "distractors": {
      "B": "PCA (Principal Component Analysis) is a linear dimensionality reduction technique.",
      "C": "K-means is an unsupervised clustering algorithm.",
      "D": "Min-max scaling is a feature scaling normalization technique."
    },
    "keyTakeaway": "TLS (Transport Layer Security) encrypts and authenticates data in transit across client-server network connections.",
    "difficulty": "Easy",
    "tags": [
      "Security",
      "TLS",
      "Network"
    ]
  },
  {
    "id": 17,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Which security principle grants users only the permissions necessary to perform their jobs?",
    "options": {
      "A": "Data duplication",
      "B": "Least privilege",
      "C": "Feature extraction",
      "D": "Data normalization"
    },
    "correctAnswer": "B",
    "explanation": "The Principle of Least Privilege (PoLP) dictates that a user, service, or program should possess only the minimum privileges and access permissions strictly required to perform their intended duties.",
    "solution": null,
    "distractors": {
      "A": "Data duplication increases redundancy and storage overhead.",
      "C": "Feature extraction creates new features from raw inputs in machine learning.",
      "D": "Data normalization scales values to a standard range in statistics or eliminates database redundancy."
    },
    "keyTakeaway": "Least privilege minimizes security attack surfaces by restricting user and service permissions to the bare operational necessity.",
    "difficulty": "Easy",
    "tags": [
      "Security",
      "Least Privilege"
    ]
  },
  {
    "id": 18,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "What is the purpose of access control in a predictive analytics system?",
    "options": {
      "A": "To let every user access all records",
      "B": "To restrict data and system operations according to permissions",
      "C": "To increase the dataset's size",
      "D": "To replace data preprocessing"
    },
    "correctAnswer": "B",
    "explanation": "Access control implements authentication and authorization mechanisms (RBAC/ABAC) to determine which users can view, modify, export, or administer sensitive data and modeling assets.",
    "solution": null,
    "distractors": {
      "A": "Unrestricted access violates compliance, confidentiality, and data privacy principles.",
      "C": "Access control is a security boundary and does not modify dataset row counts.",
      "D": "Data preprocessing is an ML data preparation step that cannot be replaced by security policies."
    },
    "keyTakeaway": "Access control regulates who can access, query, modify, or export data based on defined security policies.",
    "difficulty": "Easy",
    "tags": [
      "Security",
      "Access Control"
    ]
  },
  {
    "id": 19,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "What is a database index primarily used for?",
    "options": {
      "A": "Improving the speed of data retrieval",
      "B": "Encrypting every database column",
      "C": "Generating histograms",
      "D": "Removing the need for backups"
    },
    "correctAnswer": "A",
    "explanation": "A database index (e.g. B-tree or Hash index) creates an auxiliary lookup structure that allows the query engine to locate matching rows quickly without performing a slow full table scan.",
    "solution": null,
    "distractors": {
      "B": "Column-level encryption is achieved using cryptographic mechanisms, not index trees.",
      "C": "Histograms summarize numerical distributions in exploratory data analysis.",
      "D": "Indexes do not protect against data corruption or system failure; backups remain essential."
    },
    "keyTakeaway": "Indexes speed up SELECT queries by enabling fast lookup paths, trading write overhead for read performance.",
    "difficulty": "Easy",
    "tags": [
      "Database",
      "Indexing",
      "Performance"
    ]
  },
  {
    "id": 20,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Which action can improve the performance of a frequently executed analytical query?",
    "options": {
      "A": "Removing all relevant indexes",
      "B": "Storing every value as free-form text",
      "C": "Optimizing the query and using appropriate indexes",
      "D": "Duplicating every record repeatedly"
    },
    "correctAnswer": "C",
    "explanation": "Query optimization (e.g. avoiding SELECT *, filtering early in WHERE clauses, eliminating unnecessary joins) and adding appropriate indexes dramatically accelerate analytical query throughput.",
    "solution": null,
    "distractors": {
      "A": "Removing indexes forces expensive full table scans and degrades query performance.",
      "B": "Storing everything as free-form text prevents numeric optimizations and index efficiency.",
      "D": "Duplicating records inflates storage size and increases I/O overhead without benefit."
    },
    "keyTakeaway": "Query tuning + targeted indexing minimize I/O and CPU overhead for analytical workloads.",
    "difficulty": "Easy",
    "tags": [
      "Performance",
      "Query Optimization"
    ]
  },
  {
    "id": 21,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "What is the purpose of database partitioning?",
    "options": {
      "A": "To divide a large dataset into smaller manageable sections",
      "B": "To convert all data into images",
      "C": "To eliminate database security",
      "D": "To guarantee that every query is instantaneous"
    },
    "correctAnswer": "A",
    "explanation": "Database partitioning divides large tables into smaller, distinct physical subsets (e.g. by date range or region) while presenting a single logical table to users, enabling partition pruning to speed up queries.",
    "solution": null,
    "distractors": {
      "B": "Partitioning splits tables logically/physically, it does not convert data to images.",
      "C": "Partitioning has no adverse effect on database security controls.",
      "D": "No database technique can guarantee instantaneous queries under all network and data volumes."
    },
    "keyTakeaway": "Partitioning splits massive tables into smaller chunks (e.g., by month/year), enabling query engines to scan only relevant subsets (partition pruning).",
    "difficulty": "Easy",
    "tags": [
      "Partitioning",
      "Performance",
      "Storage"
    ]
  },
  {
    "id": 22,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "What is data compression in storage management?",
    "options": {
      "A": "Converting every dataset into a prediction",
      "B": "Reducing the space needed to represent data",
      "C": "Deleting every repeated feature",
      "D": "Encrypting data with a password"
    },
    "correctAnswer": "B",
    "explanation": "Data compression encodes information using fewer bits than the original representation, reducing physical disk storage consumption and lowering network data transfer times.",
    "solution": null,
    "distractors": {
      "A": "Generating predictions is machine learning inference, not data compression.",
      "C": "Deleting features is feature selection, not storage compression.",
      "D": "Password protection is authentication/encryption, not storage volume reduction."
    },
    "keyTakeaway": "Compression encodes data into fewer bytes (e.g., Snappy, GZIP, ZSTD), cutting storage footprint and I/O costs.",
    "difficulty": "Easy",
    "tags": [
      "Compression",
      "Storage Management"
    ]
  },
  {
    "id": 23,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Which storage format is generally well suited to analytical workloads that read selected columns from large datasets?",
    "options": {
      "A": "Parquet",
      "B": "Plain handwritten notes",
      "C": "An executable program",
      "D": "A screenshot of a table"
    },
    "correctAnswer": "A",
    "explanation": "Apache Parquet is an open-source, columnar storage format optimized for analytical queries. It allows analytical engines to read only the specific columns needed by a query, skipping unrequested columns and applying high compression ratios.",
    "solution": null,
    "distractors": {
      "B": "Handwritten notes are physical records with no digital query capability.",
      "C": "An executable program is compiled binary code, not a data storage format.",
      "D": "A screenshot of a table is a static raster image that cannot be queried with columnar efficiency."
    },
    "keyTakeaway": "Apache Parquet is the industry standard columnar format for big data analytics, enabling efficient column projection and predicate pushdown.",
    "difficulty": "Medium",
    "tags": [
      "Parquet",
      "Columnar Storage",
      "Big Data"
    ]
  },
  {
    "id": 24,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "What is the main purpose of a data lake?",
    "options": {
      "A": "To store only relational tables with fixed schemas",
      "B": "To store large amounts of data in various formats, often in raw form",
      "C": "To execute only SQL transactions",
      "D": "To replace all machine-learning algorithms"
    },
    "correctAnswer": "B",
    "explanation": "A data lake is a centralized storage repository that holds vast volumes of raw data in its native format, including structured, semi-structured (JSON, XML), and unstructured (logs, audio, video) data at massive scale.",
    "solution": null,
    "distractors": {
      "A": "Fixed schema relational storage is the definition of a traditional data warehouse, not a data lake.",
      "C": "Executing ACID transactions is typical of transactional databases (OLTP).",
      "D": "Data lakes supply data to train ML algorithms; they do not replace the algorithms themselves."
    },
    "keyTakeaway": "Data Lake = Scalable raw repository for structured, semi-structured, and unstructured data (schema-on-read).",
    "difficulty": "Easy",
    "tags": [
      "Data Lake",
      "Big Data Architecture"
    ]
  },
  {
    "id": 25,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Which of the following is an example of semi-structured data?",
    "options": {
      "A": "JSON records",
      "B": "A relational table with a fixed schema only",
      "C": "A printed paper form",
      "D": "An unrecorded conversation"
    },
    "correctAnswer": "A",
    "explanation": "JSON (JavaScript Object Notation) organizes information using self-describing key-value pairs and nested hierarchies without requiring a rigid, predefined tabular relational schema, making it semi-structured.",
    "solution": null,
    "distractors": {
      "B": "A relational table with fixed columns and schema is structured data.",
      "C": "A printed paper form is a physical document requiring OCR or manual entry.",
      "D": "An unrecorded conversation represents transient, uncaptured information."
    },
    "keyTakeaway": "Semi-structured data (JSON, XML, YAML) contains internal markers and tags without conforming to a rigid relational schema.",
    "difficulty": "Easy",
    "tags": [
      "Data Types",
      "JSON",
      "Semi-Structured"
    ]
  },
  {
    "id": 26,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "What is data integrity?",
    "options": {
      "A": "The ability to make charts interactive",
      "B": "The accuracy, consistency, and reliability of data",
      "C": "The total number of database users",
      "D": "The amount of RAM installed"
    },
    "correctAnswer": "B",
    "explanation": "Data integrity refers to the overall accuracy, completeness, consistency, and validity of data across its entire lifecycle, maintained via database constraints, validation rules, and transactional guarantees.",
    "solution": null,
    "distractors": {
      "A": "Chart interactivity is a feature of visualization libraries like Plotly or Tableau.",
      "C": "User concurrency is a database capacity metric, not data integrity.",
      "D": "Installed RAM is a physical server hardware metric."
    },
    "keyTakeaway": "Data integrity ensures that stored data remains accurate, complete, and trustworthy across its lifecycle.",
    "difficulty": "Easy",
    "tags": [
      "Data Integrity",
      "Quality"
    ]
  },
  {
    "id": 27,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Why are regular data backups important?",
    "options": {
      "A": "They guarantee that a model has no bias",
      "B": "They help recover data after accidental deletion, corruption, or system failure",
      "C": "They eliminate the need for access controls",
      "D": "They automatically improve model accuracy"
    },
    "correctAnswer": "B",
    "explanation": "Data backups create copies of operational and historical data to ensure business continuity, disaster recovery, and data restoration in the event of accidental deletion, ransomware attacks, hardware failure, or corruption.",
    "solution": null,
    "distractors": {
      "A": "Backups store exact copies of data; they do not eliminate statistical or algorithmic bias.",
      "C": "Access controls are still required to secure both primary systems and backup archives.",
      "D": "Backups safeguard data preservation, but do not alter machine learning model weights or accuracy."
    },
    "keyTakeaway": "Backups ensure disaster recovery, data durability, and business continuity.",
    "difficulty": "Easy",
    "tags": [
      "Backup",
      "Disaster Recovery",
      "Operations"
    ]
  },
  {
    "id": 28,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Which database property ensures that a transaction is completed entirely or not at all?",
    "options": {
      "A": "Consistency",
      "B": "Isolation",
      "C": "Atomicity",
      "D": "Durability"
    },
    "correctAnswer": "C",
    "explanation": "Atomicity is the 'all-or-nothing' property of ACID database transactions. If any operation within a transaction fails, the entire transaction is rolled back, leaving the database in its original state.",
    "solution": null,
    "distractors": {
      "A": "Consistency ensures the database transitions only between valid states conforming to constraints.",
      "B": "Isolation ensures concurrent transactions execute without interfering with one another.",
      "D": "Durability guarantees that once a transaction commits, its changes survive system crashes."
    },
    "keyTakeaway": "ACID Properties: Atomicity (all-or-nothing), Consistency (rules maintained), Isolation (independent execution), Durability (persisted permanently).",
    "difficulty": "Easy",
    "tags": [
      "ACID",
      "Transactions",
      "Atomicity"
    ]
  },
  {
    "id": 29,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "What does scalability mean in data storage?",
    "options": {
      "A": "The ability to handle increasing workloads or data volumes",
      "B": "The ability to remove every feature",
      "C": "The ability to make data confidential without encryption",
      "D": "The ability to guarantee perfect predictions"
    },
    "correctAnswer": "A",
    "explanation": "Scalability is the capability of a data system, infrastructure, or network to handle growing amounts of work, data volumes, or concurrent users gracefully without degradation of performance.",
    "solution": null,
    "distractors": {
      "B": "Feature removal is feature selection, not system scalability.",
      "C": "Confidentiality without encryption is impossible in open storage architectures.",
      "D": "Predictive perfection is unattainable in empirical real-world statistical modeling."
    },
    "keyTakeaway": "Scalability is the capacity to expand throughput and storage as workloads and datasets increase.",
    "difficulty": "Easy",
    "tags": [
      "Scalability",
      "Architecture"
    ]
  },
  {
    "id": 30,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Which is an example of horizontal scaling?",
    "options": {
      "A": "Increasing the RAM of one server",
      "B": "Adding more servers to a distributed storage system",
      "C": "Deleting half of a database",
      "D": "Compressing a single image"
    },
    "correctAnswer": "B",
    "explanation": "Horizontal scaling (scaling out) increases system capacity by adding more machines or nodes to a distributed cluster, sharing the processing and storage load across multiple computers.",
    "solution": null,
    "distractors": {
      "A": "Upgrading the RAM or CPU of a single server is vertical scaling (scaling up).",
      "C": "Deleting data reduces database size but does not scale infrastructure.",
      "D": "Compressing an image saves local disk space, not distributed cluster scaling."
    },
    "keyTakeaway": "Horizontal Scaling (Scale Out) = Adding more machines to a cluster. Vertical Scaling (Scale Up) = Adding more RAM/CPU to an existing machine.",
    "difficulty": "Easy",
    "tags": [
      "Horizontal Scaling",
      "Distributed Systems"
    ]
  },
  {
    "id": 31,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Which is an example of vertical scaling?",
    "options": {
      "A": "Adding more independent servers",
      "B": "Increasing the CPU or RAM of an existing server",
      "C": "Splitting a dataset among multiple regions",
      "D": "Adding more database replicas across machines"
    },
    "correctAnswer": "B",
    "explanation": "Vertical scaling (scaling up) involves upgrading the physical hardware resources (such as adding more CPU cores, larger RAM, or faster NVMe SSDs) of an individual existing server.",
    "solution": null,
    "distractors": {
      "A": "Adding independent nodes to a cluster is horizontal scaling.",
      "C": "Multi-region data distribution is geo-sharding/replication.",
      "D": "Adding read replicas across separate hosts is horizontal database scaling."
    },
    "keyTakeaway": "Vertical scaling increases hardware capacity on a single node (CPU/RAM upgrades) up to physical machine limits.",
    "difficulty": "Easy",
    "tags": [
      "Vertical Scaling",
      "Hardware"
    ]
  },
  {
    "id": 32,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Why is data lineage important in predictive analytics?",
    "options": {
      "A": "It records where data originated and how it was transformed",
      "B": "It guarantees that the target variable is correct",
      "C": "It replaces model evaluation",
      "D": "It converts numerical features into images"
    },
    "correctAnswer": "A",
    "explanation": "Data lineage tracks the entire lifecycle of data: its origin (provenance), every transformation step it underwent, pipeline dependencies, and its final destination, ensuring auditability and reproducibility.",
    "solution": null,
    "distractors": {
      "B": "Data lineage documents transformation history, but cannot mathematically guarantee data correctness.",
      "C": "Model evaluation (cross-validation, testing) remains strictly necessary to evaluate ML models.",
      "D": "Feature visualization or image conversion is separate from pipeline provenance tracking."
    },
    "keyTakeaway": "Data lineage provides auditability, compliance traceability, and root-cause debugging across data pipelines.",
    "difficulty": "Medium",
    "tags": [
      "Data Lineage",
      "Governance",
      "Auditing"
    ]
  },
  {
    "id": 33,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Which practice best supports privacy when using personal data for predictive analysis?",
    "options": {
      "A": "Publishing all customer records",
      "B": "Collecting unlimited personal information",
      "C": "Applying appropriate access restrictions and data minimization",
      "D": "Sharing passwords among analysts"
    },
    "correctAnswer": "C",
    "explanation": "Data minimization (collecting only the minimum data required for the specific analytical purpose) combined with role-based access restrictions and pseudonymization/anonymization best protects user privacy.",
    "solution": null,
    "distractors": {
      "A": "Publicly exposing personal customer records violates privacy regulations (GDPR/CCPA/HIPAA).",
      "B": "Collecting excessive personal information violates the data minimization principle.",
      "D": "Sharing credentials compromises account accountability and breaches security best practices."
    },
    "keyTakeaway": "Privacy protection relies on data minimization (collect only what is needed) and strict access controls.",
    "difficulty": "Easy",
    "tags": [
      "Privacy",
      "Data Governance",
      "Ethics"
    ]
  },
  {
    "id": 34,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "What is a data retention policy?",
    "options": {
      "A": "A rule specifying how long data is kept and when it is deleted or archived",
      "B": "A method for selecting model features",
      "C": "A chart showing class frequencies",
      "D": "A technique for training neural networks"
    },
    "correctAnswer": "A",
    "explanation": "A data retention policy defines established corporate and legal rules determining the duration for which different categories of data are retained in active storage and when they must be archived or permanently purged.",
    "solution": null,
    "distractors": {
      "B": "Feature selection methods (e.g. RFE, Lasso) select input variables for machine learning models.",
      "C": "A chart showing class frequencies is a bar chart or histogram.",
      "D": "Backpropagation and gradient descent are techniques for training neural networks."
    },
    "keyTakeaway": "Data retention policies establish legal and operational schedules for retaining, archiving, and purging data.",
    "difficulty": "Easy",
    "tags": [
      "Data Governance",
      "Compliance",
      "Retention"
    ]
  },
  {
    "id": 35,
    "sectionId": "A",
    "sectionTitle": "Section A: Data Storage & Management for Predictive Analysis",
    "question": "Which metric is most directly useful for measuring the time taken to retrieve a database query result?",
    "options": {
      "A": "Precision",
      "B": "Recall",
      "C": "Query latency",
      "D": "F1-score"
    },
    "correctAnswer": "C",
    "explanation": "Query latency measures the elapsed time (usually in milliseconds or seconds) from when a query is submitted to the database engine until the result set is returned to the client.",
    "solution": null,
    "distractors": {
      "A": "Precision evaluates the proportion of true positives among positive classification predictions.",
      "B": "Recall measures the proportion of actual positive cases detected by a classification model.",
      "D": "F1-score is the harmonic mean of precision and recall."
    },
    "keyTakeaway": "Query latency measures retrieval execution delay in database systems.",
    "difficulty": "Easy",
    "tags": [
      "Query Latency",
      "Database Performance"
    ]
  },
  {
    "id": 36,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "What is feature engineering?",
    "options": {
      "A": "Designing database hardware",
      "B": "Creating, transforming, or selecting input variables to improve machine-learning models",
      "C": "Deleting the target variable from every dataset",
      "D": "Creating charts without using data"
    },
    "correctAnswer": "B",
    "explanation": "Feature engineering is the process of using domain knowledge and mathematical transformations to create, extract, scale, encode, and select informative input variables (features) that help machine learning algorithms learn patterns more effectively.",
    "solution": null,
    "distractors": {
      "A": "Designing hardware is computer engineering.",
      "C": "Deleting the target variable prevents supervised learning altogether.",
      "D": "Charts require underlying numerical or categorical data to be rendered."
    },
    "keyTakeaway": "Feature Engineering = Domain Knowledge + Transformations to turn raw data into optimal model inputs.",
    "difficulty": "Easy",
    "tags": [
      "Feature Engineering",
      "Fundamentals"
    ]
  },
  {
    "id": 37,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "In a predictive model, what is a feature?",
    "options": {
      "A": "An input variable used by the model",
      "B": "The final prediction only",
      "C": "The model's source code",
      "D": "A database password"
    },
    "correctAnswer": "A",
    "explanation": "A feature (independent variable, explanatory attribute, or predictor) is an individual measurable property or characteristic of a phenomenon being observed, supplied as an input to the machine learning model.",
    "solution": null,
    "distractors": {
      "B": "The final prediction is the output (y_hat) produced by the model.",
      "C": "Source code is the programming implementation of the algorithm.",
      "D": "A database password is an authentication credential."
    },
    "keyTakeaway": "Features are the independent input variables (X) fed into models to generate predictions (y).",
    "difficulty": "Easy",
    "tags": [
      "Feature",
      "Terminology"
    ]
  },
  {
    "id": 38,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "What is the target variable in supervised learning?",
    "options": {
      "A": "The variable used only to label the x-axis",
      "B": "The variable the model is trained to predict",
      "C": "The variable used to store passwords",
      "D": "The variable that must always be categorical"
    },
    "correctAnswer": "B",
    "explanation": "In supervised learning, the target variable (dependent variable, response, or label, often denoted as y) is the outcome attribute that the predictive model is trained to forecast.",
    "solution": null,
    "distractors": {
      "A": "Chart axis labeling is a graphic design setting in visualization.",
      "C": "Security credentials are never used as model target variables.",
      "D": "Target variables can be continuous in regression (e.g. house price) or categorical in classification (e.g. churn)."
    },
    "keyTakeaway": "Target Variable (y) = Ground-truth label or response variable that the model learns to predict.",
    "difficulty": "Easy",
    "tags": [
      "Supervised Learning",
      "Target Variable"
    ]
  },
  {
    "id": 39,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "What is feature selection?",
    "options": {
      "A": "Choosing a subset of relevant features from the original dataset",
      "B": "Generating random target values",
      "C": "Increasing the number of records without limit",
      "D": "Converting every feature into a string"
    },
    "correctAnswer": "A",
    "explanation": "Feature selection is the technique of selecting a subset of the most relevant and non-redundant features to use in model construction, reducing overfitting, improving training speed, and simplifying interpretability.",
    "solution": null,
    "distractors": {
      "B": "Generating random target values destroys statistical relationships.",
      "C": "Increasing records is data collection or synthetic oversampling (e.g. SMOTE), not feature selection.",
      "D": "Converting numerical features into strings prevents mathematical model fitting."
    },
    "keyTakeaway": "Feature selection isolates the most informative predictors, reducing the curse of dimensionality and overfitting.",
    "difficulty": "Easy",
    "tags": [
      "Feature Selection",
      "Preprocessing"
    ]
  },
  {
    "id": 40,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "Which of the following is a filter-based feature selection method?",
    "options": {
      "A": "Recursive Feature Elimination (RFE)",
      "B": "Forward feature selection using model performance",
      "C": "Chi-square test",
      "D": "Decision tree-based feature importance"
    },
    "correctAnswer": "C",
    "explanation": "Filter methods evaluate features using statistical properties independent of any machine learning model. The Chi-square test (testing independence between categorical features and target) is a classic filter method.",
    "solution": null,
    "distractors": {
      "A": "Recursive Feature Elimination (RFE) is a wrapper method that iteratively trains models.",
      "B": "Forward feature selection using model validation error is a wrapper method.",
      "D": "Decision tree importance is an embedded method built into tree construction."
    },
    "keyTakeaway": "Filter methods (Chi-Square, Pearson correlation, ANOVA F-test, Mutual Information) score features using statistics without training an ML model.",
    "difficulty": "Medium",
    "tags": [
      "Filter Methods",
      "Chi-Square",
      "Feature Selection"
    ]
  },
  {
    "id": 41,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "Filter methods generally evaluate features using:",
    "options": {
      "A": "Statistical properties independent of a specific predictive model",
      "B": "Only the execution speed of a computer",
      "C": "Only the size of the dataset on disk",
      "D": "The visual appearance of a chart"
    },
    "correctAnswer": "A",
    "explanation": "Filter methods assess feature relevance based on intrinsic statistical characteristics (e.g., variance, correlation with the target, mutual information) prior to and completely independent of any predictive modeling algorithm.",
    "solution": null,
    "distractors": {
      "B": "Compute execution speed is a hardware performance benchmark, not feature relevance.",
      "C": "File size on disk does not reflect statistical predictability.",
      "D": "Visual appearance is subjective and does not provide algorithmic selection."
    },
    "keyTakeaway": "Filter methods rely purely on statistical criteria (correlation, variance, hypothesis tests) independent of model training.",
    "difficulty": "Easy",
    "tags": [
      "Filter Methods",
      "Statistical Properties"
    ]
  },
  {
    "id": 42,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "Which feature selection approach repeatedly trains or evaluates models to find a useful subset of features?",
    "options": {
      "A": "Filter method",
      "B": "Wrapper method",
      "C": "Data compression",
      "D": "Data encryption"
    },
    "correctAnswer": "B",
    "explanation": "Wrapper methods treat feature selection as a search problem, using a chosen machine learning algorithm as a 'black box' wrapper to evaluate subsets of features based on their validation performance scores.",
    "solution": null,
    "distractors": {
      "A": "Filter methods do not train predictive models to evaluate features.",
      "C": "Data compression reduces byte storage size.",
      "D": "Data encryption protects data confidentiality."
    },
    "keyTakeaway": "Wrapper methods (Forward selection, Backward elimination, RFE) wrap an ML model to score and select feature subsets.",
    "difficulty": "Easy",
    "tags": [
      "Wrapper Methods",
      "Feature Selection"
    ]
  },
  {
    "id": 43,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "Which of the following is a wrapper method?",
    "options": {
      "A": "Pearson correlation ranking",
      "B": "Chi-square test",
      "C": "Recursive Feature Elimination (RFE)",
      "D": "Variance thresholding"
    },
    "correctAnswer": "C",
    "explanation": "Recursive Feature Elimination (RFE) is a wrapper method that iteratively trains a model (e.g. SVM or linear regression), ranks features by importance or weights, and prunes the least important features until the target number is reached.",
    "solution": null,
    "distractors": {
      "A": "Pearson correlation ranking is a filter method.",
      "B": "Chi-square test is a filter method.",
      "D": "Variance thresholding removes low-variance features using a simple statistical filter."
    },
    "keyTakeaway": "RFE is a quintessential wrapper method that iteratively fits models and eliminates the weakest features.",
    "difficulty": "Medium",
    "tags": [
      "Wrapper Methods",
      "RFE"
    ]
  },
  {
    "id": 44,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "What is a major disadvantage of wrapper-based feature selection?",
    "options": {
      "A": "It can be computationally expensive",
      "B": "It cannot use model performance",
      "C": "It never uses a learning algorithm",
      "D": "It always selects every feature"
    },
    "correctAnswer": "A",
    "explanation": "Because wrapper methods require repeatedly training and cross-validating the predictive model for dozens or hundreds of candidate feature subsets (2^N search space), they are computationally intensive and slow on large datasets.",
    "solution": null,
    "distractors": {
      "B": "Wrapper methods explicitly use model performance as their evaluation criteria.",
      "C": "Wrapper methods fundamentally depend on a learning algorithm.",
      "D": "Wrapper methods select a subset of features rather than retaining all of them."
    },
    "keyTakeaway": "Wrapper methods yield high performance tailored to specific models, but suffer from high computational expense.",
    "difficulty": "Easy",
    "tags": [
      "Wrapper Methods",
      "Computational Complexity"
    ]
  },
  {
    "id": 45,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "Which method performs feature selection as part of model training?",
    "options": {
      "A": "Embedded method",
      "B": "Manual data entry",
      "C": "Data encryption",
      "D": "Data archiving"
    },
    "correctAnswer": "A",
    "explanation": "Embedded methods perform feature selection internally during the mathematical optimization process of training the algorithm itself (e.g. LASSO regularization, Decision Tree splits).",
    "solution": null,
    "distractors": {
      "B": "Manual data entry is human typing of data.",
      "C": "Data encryption secures data confidentiality.",
      "D": "Data archiving moves inactive data to secondary storage."
    },
    "keyTakeaway": "Embedded methods (Lasso, Ridge, Elastic Net, Decision Trees) perform feature selection as an intrinsic step of model fitting.",
    "difficulty": "Easy",
    "tags": [
      "Embedded Methods",
      "Feature Selection"
    ]
  },
  {
    "id": 46,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "Which of the following is an example of an embedded feature selection method?",
    "options": {
      "A": "Lasso regression",
      "B": "A simple histogram",
      "C": "A database backup",
      "D": "Min-max scaling alone"
    },
    "correctAnswer": "A",
    "explanation": "Lasso (L1-regularized) regression incorporates an L1 penalty on the absolute magnitude of coefficients (lambda * sum(|w_i|)). This forces coefficients of non-informative features to become exactly zero, naturally selecting features during model fitting.",
    "solution": null,
    "distractors": {
      "B": "A histogram is a descriptive visualization of distribution frequencies.",
      "C": "A database backup is a system recovery operation.",
      "D": "Min-max scaling rescales feature ranges but does not select or discard features."
    },
    "keyTakeaway": "Lasso (L1) regression drives irrelevant feature coefficients to exactly zero, making it an embedded feature selector.",
    "difficulty": "Medium",
    "tags": [
      "Lasso",
      "L1 Regularization",
      "Embedded Methods"
    ]
  },
  {
    "id": 47,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "In a decision tree, feature importance can be estimated using:",
    "options": {
      "A": "The number of database backups",
      "B": "The reduction in impurity contributed by a feature",
      "C": "The length of a feature's name",
      "D": "The number of charts in a report"
    },
    "correctAnswer": "B",
    "explanation": "In decision trees and tree ensembles (Random Forest, Gradient Boosting), feature importance is calculated by summing the total reduction in criterion impurity (Gini impurity, Entropy, or Variance/MSE) brought about by splits on that feature across the trees.",
    "solution": null,
    "distractors": {
      "A": "Database backups have zero connection to decision tree splits.",
      "C": "The character length of variable names is completely irrelevant to mathematical split criteria.",
      "D": "Report charts are reporting artifacts outside model mechanics."
    },
    "keyTakeaway": "Tree Feature Importance = Total weighted reduction in split impurity (Gini/Entropy/MSE) contributed by that feature.",
    "difficulty": "Easy",
    "tags": [
      "Decision Trees",
      "Feature Importance",
      "Impurity"
    ]
  },
  {
    "id": 48,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "What does feature importance indicate?",
    "options": {
      "A": "How useful a feature is to a particular model under a particular importance measure",
      "B": "That a feature necessarily causes the target outcome",
      "C": "That a feature contains no missing values",
      "D": "That a feature must be measured in meters"
    },
    "correctAnswer": "A",
    "explanation": "Feature importance scores indicate the relative utility or predictive contribution of a feature within a specific trained model under a chosen metric (e.g. MDI, permutation importance). It reflects statistical association, NOT causation.",
    "solution": null,
    "distractors": {
      "B": "Association does not imply causation; high importance does not prove causal influence.",
      "C": "Features with missing values can still be ranked as important if imputed or handled by tree splits.",
      "D": "Measurement units do not define feature importance."
    },
    "keyTakeaway": "Feature importance reflects model reliance and statistical utility, not causal ground-truth.",
    "difficulty": "Medium",
    "tags": [
      "Feature Importance",
      "Model Interpretation"
    ]
  },
  {
    "id": 49,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "What is the main objective of feature scaling?",
    "options": {
      "A": "To put numerical features on comparable scales",
      "B": "To convert all numerical values into text",
      "C": "To increase the number of target classes",
      "D": "To remove every categorical variable automatically"
    },
    "correctAnswer": "A",
    "explanation": "Feature scaling transforms numerical variables onto a comparable range, preventing features with large numerical magnitudes (e.g., Annual Salary: 80,000) from dominating distance calculations or gradient updates over smaller features (e.g., Age: 25).",
    "solution": null,
    "distractors": {
      "B": "Converting numbers into text destroys arithmetic relationships required for modeling.",
      "C": "Target classes depend on the problem formulation, not feature scaling.",
      "D": "Scaling applies to numerical columns; categorical columns require encoding (e.g. one-hot)."
    },
    "keyTakeaway": "Feature scaling equalizes feature magnitudes so algorithms sensitive to distance or gradients treat all dimensions fairly.",
    "difficulty": "Easy",
    "tags": [
      "Feature Scaling",
      "Normalization"
    ]
  },
  {
    "id": 50,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "Which formula represents min-max normalization to the range [0,1]?",
    "options": {
      "A": "x' = (x - mu) / sigma",
      "B": "x' = x^2",
      "C": "x' = (x - x_min) / (x_max - x_min)",
      "D": "x' = x + mu"
    },
    "correctAnswer": "C",
    "explanation": "Min-Max normalization scales a feature linearly into the bounded interval [0, 1] using the formula: x' = (x - x_min) / (x_max - x_min), where x_min maps to 0 and x_max maps to 1.",
    "solution": "Formula: x' = (x - x_min) / (x_max - x_min)",
    "distractors": {
      "A": "x' = (x - mu) / sigma represents standardization (z-score scaling).",
      "B": "x' = x^2 is a quadratic polynomial transformation.",
      "D": "x' = x + mu simply shifts values by the mean."
    },
    "keyTakeaway": "Min-Max Formula: x' = (x - x_min) / (x_max - x_min). Resulting range is bounded between 0 and 1.",
    "difficulty": "Easy",
    "tags": [
      "Min-Max Scaling",
      "Formulas"
    ]
  },
  {
    "id": 51,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "A feature has a minimum value of 10, a maximum value of 50, and an observation of 30. What is its min-max scaled value?",
    "options": {
      "A": "0.25",
      "B": "0.50",
      "C": "0.75",
      "D": "1.00"
    },
    "correctAnswer": "B",
    "explanation": "Applying the min-max formula: x' = (x - x_min) / (x_max - x_min) = (30 - 10) / (50 - 10) = 20 / 40 = 0.50.",
    "solution": "Given:\n- x = 30\n- x_min = 10\n- x_max = 50\n\nCalculation:\nx' = (30 - 10) / (50 - 10)\nx' = 20 / 40 = 0.50",
    "distractors": {
      "A": "0.25 would result if x = 20: (20 - 10)/40 = 10/40 = 0.25.",
      "C": "0.75 would result if x = 40: (40 - 10)/40 = 30/40 = 0.75.",
      "D": "1.00 is the scaled value of the maximum observation (50)."
    },
    "keyTakeaway": "Substitute directly into x' = (x - x_min)/(x_max - x_min). Here, 20/40 = 0.50.",
    "difficulty": "Easy",
    "tags": [
      "Min-Max Scaling",
      "Calculations"
    ]
  },
  {
    "id": 52,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "Which formula represents standardization using a z-score?",
    "options": {
      "A": "z = (x - mu) / sigma",
      "B": "z = x + mu + sigma",
      "C": "z = x_max / x_min",
      "D": "z = x^2 - mu"
    },
    "correctAnswer": "A",
    "explanation": "Standardization (z-score normalization) transforms observations by subtracting the sample mean (mu) and dividing by the standard deviation (sigma): z = (x - mu) / sigma.",
    "solution": "Formula: z = (x - mu) / sigma",
    "distractors": {
      "B": "Summing x, mu, and sigma has no statistical standardization meaning.",
      "C": "Dividing maximum by minimum is an extreme value ratio.",
      "D": "Squaring x and subtracting the mean is a non-linear shift."
    },
    "keyTakeaway": "Z-score Formula: z = (x - mu) / sigma. Measures how many standard deviations an observation lies from the mean.",
    "difficulty": "Easy",
    "tags": [
      "Standardization",
      "Z-Score",
      "Formulas"
    ]
  },
  {
    "id": 53,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "After standardization, a feature generally has which properties on the data used to calculate its mean and standard deviation?",
    "options": {
      "A": "Mean 1 and standard deviation 0",
      "B": "Mean 0 and standard deviation 1",
      "C": "Minimum 0 and maximum 1 in every dataset",
      "D": "Mean 100 and standard deviation 10"
    },
    "correctAnswer": "B",
    "explanation": "Standardization centers the feature at a mean of zero (mu = 0) and scales it to unit variance with a standard deviation of one (sigma = 1).",
    "solution": null,
    "distractors": {
      "A": "Standardization yields mean 0, not mean 1, and standard deviation 1, not 0.",
      "C": "Minimum 0 and maximum 1 describes Min-Max scaling, not Z-score standardization.",
      "D": "Mean 100 and standard deviation 10 is standard IQ test scaling, not standard ML z-score."
    },
    "keyTakeaway": "Standardized features have Mean = 0 and Standard Deviation (Variance) = 1.",
    "difficulty": "Easy",
    "tags": [
      "Standardization",
      "Z-Score",
      "Properties"
    ]
  },
  {
    "id": 54,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "Which algorithm is particularly sensitive to feature scales because it relies on distances between observations?",
    "options": {
      "A": "K-Nearest Neighbors (KNN)",
      "B": "A fixed database lookup",
      "C": "A simple file copy",
      "D": "A password manager"
    },
    "correctAnswer": "A",
    "explanation": "K-Nearest Neighbors (KNN) classifies or predicts outcomes based on Euclidean or Manhattan distance metrics between data points. Features with larger unscaled numeric magnitudes will overwhelmingly dominate the distance calculation.",
    "solution": null,
    "distractors": {
      "B": "Database lookups check exact keys or equality, not Euclidean distance metrics.",
      "C": "File copying is an OS file operation.",
      "D": "Password managers store hashed credentials."
    },
    "keyTakeaway": "Distance-based algorithms (KNN, K-Means, SVM with RBF, PCA) strictly require feature scaling.",
    "difficulty": "Easy",
    "tags": [
      "KNN",
      "Distance Metrics",
      "Feature Scaling"
    ]
  },
  {
    "id": 55,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "Which algorithm is generally less sensitive to monotonic changes in individual feature scales?",
    "options": {
      "A": "KNN",
      "B": "K-means",
      "C": "A decision tree",
      "D": "K-means with Euclidean distance"
    },
    "correctAnswer": "C",
    "explanation": "Decision trees evaluate one feature at a time using orthogonal threshold splits (e.g. x_i > threshold). Because splits depend only on the rank order of values, strictly monotonic rescaling does not alter the split choice.",
    "solution": null,
    "distractors": {
      "A": "KNN uses Euclidean distance across all features, making it highly scale-sensitive.",
      "B": "K-means relies on Euclidean distance to cluster centroids, heavily distorted by unscaled features.",
      "D": "K-means with Euclidean distance is identically sensitive to scale distortions."
    },
    "keyTakeaway": "Tree-based models (Decision Trees, Random Forests, XGBoost) are scale-invariant to monotonic transformations.",
    "difficulty": "Medium",
    "tags": [
      "Decision Trees",
      "Scale Invariance"
    ]
  },
  {
    "id": 56,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "How can missing numerical values commonly be handled during preprocessing?",
    "options": {
      "A": "By automatically replacing every missing value with 999",
      "B": "By imputation using a suitable statistic, such as the median",
      "C": "By converting the entire dataset into an image",
      "D": "By duplicating all incomplete rows"
    },
    "correctAnswer": "B",
    "explanation": "Statistical imputation replaces missing entries with an estimated value such as the column median (robust to outliers), mean, or model-based KNN/iterative imputation.",
    "solution": null,
    "distractors": {
      "A": "Filling with 999 introduces severe artificial outliers that distort mean, variance, and model weights.",
      "C": "Converting tabular data to images does not resolve missing numerical data.",
      "D": "Duplicating incomplete rows magnifies the missingness problem."
    },
    "keyTakeaway": "Numerical missing values are commonly handled by median/mean imputation or advanced model-based methods (KNN/MICE).",
    "difficulty": "Easy",
    "tags": [
      "Missing Data",
      "Imputation"
    ]
  },
  {
    "id": 57,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "Why is median imputation sometimes preferred to mean imputation?",
    "options": {
      "A": "The median is always equal to zero",
      "B": "The median is less affected by extreme outliers",
      "C": "The median eliminates every missing value from the original source",
      "D": "The median works only with categorical features"
    },
    "correctAnswer": "B",
    "explanation": "The median is a robust statistic resistant to skewed distributions and extreme outliers. When a feature has heavy tails or extreme values (e.g., Income), the mean is pulled toward the extremes, making the median a much more representative central tendency.",
    "solution": null,
    "distractors": {
      "A": "The median depends on the data distribution and is rarely zero in non-zero datasets.",
      "C": "Imputation estimates values for modeling, it does not alter source database history.",
      "D": "The median requires ordered numerical data; mode imputation is used for nominal categories."
    },
    "keyTakeaway": "Median imputation is preferred over mean imputation when numerical data contains extreme outliers or skewness.",
    "difficulty": "Easy",
    "tags": [
      "Imputation",
      "Median",
      "Outliers"
    ]
  },
  {
    "id": 58,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "What is one-hot encoding used for?",
    "options": {
      "A": "Converting categorical values into binary indicator columns",
      "B": "Scaling all numerical features to [0,1]",
      "C": "Compressing images",
      "D": "Encrypting database records"
    },
    "correctAnswer": "A",
    "explanation": "One-hot encoding converts categorical variables with k distinct levels into k separate binary indicator columns (0 or 1), where each column signifies the presence or absence of that specific category.",
    "solution": null,
    "distractors": {
      "B": "Scaling numerical features to [0, 1] is Min-Max normalization.",
      "C": "Compressing images is done via codecs like JPEG/WebP.",
      "D": "Encrypting records uses cryptographic algorithms."
    },
    "keyTakeaway": "One-hot encoding creates binary (0/1) indicator columns for each unique categorical category.",
    "difficulty": "Easy",
    "tags": [
      "One-Hot Encoding",
      "Categorical Data"
    ]
  },
  {
    "id": 59,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "A column contains the categories Red, Blue, and Green. How many columns will standard one-hot encoding produce if all three categories are represented?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "correctAnswer": "C",
    "explanation": "Standard full one-hot encoding creates one binary column per unique category. With 3 distinct categories (Red, Blue, Green), it creates exactly 3 columns: is_Red, is_Blue, and is_Green.",
    "solution": "Calculation:\nDistinct categories = {Red, Blue, Green} = 3\nStandard full one-hot columns = 3",
    "distractors": {
      "A": "1 column would be simple integer/label encoding.",
      "B": "2 columns occurs when dropping one dummy column (k - 1) to avoid multicollinearity in linear models.",
      "D": "4 columns would exceed the number of distinct categories."
    },
    "keyTakeaway": "k distinct categories produce k binary columns under standard full one-hot encoding (or k-1 under dummy encoding).",
    "difficulty": "Easy",
    "tags": [
      "One-Hot Encoding",
      "Encoding Calculations"
    ]
  },
  {
    "id": 60,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "What is ordinal encoding?",
    "options": {
      "A": "Assigning integer codes to categorical values",
      "B": "Converting a table into a histogram",
      "C": "Removing all rows with categories",
      "D": "Encrypting numerical data"
    },
    "correctAnswer": "A",
    "explanation": "Ordinal encoding maps discrete categories to integer codes (e.g., Low = 1, Medium = 2, High = 3), preserving the inherent natural ordering among the categorical levels.",
    "solution": null,
    "distractors": {
      "B": "Converting a table into a histogram is graphical visualization.",
      "C": "Discarding categorical rows loses valuable observations.",
      "D": "Encrypting numerical data is a security measure."
    },
    "keyTakeaway": "Ordinal encoding converts ordered categories (e.g. Small, Medium, Large) into ranked integers (0, 1, 2).",
    "difficulty": "Easy",
    "tags": [
      "Ordinal Encoding",
      "Categorical Encoding"
    ]
  },
  {
    "id": 61,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "Why can arbitrary integer encoding be problematic for nominal categories?",
    "options": {
      "A": "It may imply a numerical order or distance that does not actually exist",
      "B": "It always increases the number of categories",
      "C": "It automatically removes the target variable",
      "D": "It makes every model nonlinear"
    },
    "correctAnswer": "A",
    "explanation": "Nominal categories have no intrinsic hierarchy (e.g., Red, Blue, Green). Arbitrarily assigning integer values (Red = 1, Blue = 2, Green = 3) leads algorithms to assume false arithmetic relationships (such as Green > Red or Blue is the average of Red and Green).",
    "solution": null,
    "distractors": {
      "B": "Integer encoding compresses categories into a single column; it does not increase category count.",
      "C": "Encoding applies to feature columns and does not delete target variables.",
      "D": "Linear models remain linear regardless of integer assignment."
    },
    "keyTakeaway": "Arbitrary integer encoding on nominal data creates fictitious numerical order and distance relationships.",
    "difficulty": "Medium",
    "tags": [
      "Encoding Traps",
      "Nominal vs Ordinal"
    ]
  },
  {
    "id": 62,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "What is a lag feature in time-series feature engineering?",
    "options": {
      "A": "A value taken from a previous time step",
      "B": "A random number generated for each row",
      "C": "A feature that contains only missing values",
      "D": "A variable removed during model training"
    },
    "correctAnswer": "A",
    "explanation": "A lag feature takes the observed value of a time series at an earlier timestamp (e.g., sales at t-1 or t-7) and uses it as a predictor for the current or future time step (t).",
    "solution": null,
    "distractors": {
      "B": "Random values add noise and contain no temporal predictive signal.",
      "C": "Features with only missing values carry zero information.",
      "D": "Lag features are actively created and preserved to capture auto-regressive dynamics."
    },
    "keyTakeaway": "Lag Feature = Past observation y(t-k) used as an input feature to forecast y(t).",
    "difficulty": "Easy",
    "tags": [
      "Time Series",
      "Lag Features"
    ]
  },
  {
    "id": 63,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "If daily sales are 100, 120, 150, what is the lag-1 feature for the third day's observation?",
    "options": {
      "A": "100",
      "B": "120",
      "C": "150",
      "D": "370"
    },
    "correctAnswer": "B",
    "explanation": "Lag-1 refers to the value from exactly one time step prior (t - 1). For Day 3 (value = 150), the immediately preceding observation from Day 2 is 120.",
    "solution": "Time-series sequence:\nDay 1: 100\nDay 2: 120\nDay 3: 150\n\nFor Day 3:\nLag-1 (Day 3 - 1 = Day 2) = 120",
    "distractors": {
      "A": "100 is the lag-2 observation (Day 1).",
      "C": "150 is the current day's observation (Day 3), not a past lag.",
      "D": "370 is the sum of all three days (100 + 120 + 150)."
    },
    "keyTakeaway": "Lag-1 of observation t is observation t-1. For day 3, lag-1 is day 2 (120).",
    "difficulty": "Easy",
    "tags": [
      "Time Series",
      "Lag Calculations"
    ]
  },
  {
    "id": 64,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "What does a rolling mean feature calculate?",
    "options": {
      "A": "The average of observations over a specified moving window",
      "B": "The sum of every feature name",
      "C": "The mean of all possible target classes",
      "D": "The difference between database indexes"
    },
    "correctAnswer": "A",
    "explanation": "A rolling (moving) mean calculates the arithmetic average of observations contained within a sliding historical window of fixed length (e.g. 7-day rolling mean), smoothing short-term fluctuations and highlighting trends.",
    "solution": null,
    "distractors": {
      "B": "Feature names are metadata strings, not summable numbers.",
      "C": "Class labels in classification are not continuous historical rolling windows.",
      "D": "Database indexes are system lookup structures unrelated to statistical rolling windows."
    },
    "keyTakeaway": "Rolling mean calculates average values across a moving historical window to smooth noise and highlight trends.",
    "difficulty": "Easy",
    "tags": [
      "Rolling Mean",
      "Time Series"
    ]
  },
  {
    "id": 65,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "What is data leakage in time-series predictive modeling?",
    "options": {
      "A": "Using future information that would not have been available at prediction time",
      "B": "Saving data in cloud storage",
      "C": "Converting timestamps to dates",
      "D": "Creating lag features using past observations only"
    },
    "correctAnswer": "A",
    "explanation": "Data leakage (lookahead bias) occurs when information from the future (which could not have existed at the actual moment of prediction) is mistakenly incorporated into the training features or preprocessing pipeline, producing artificially high validation scores that fail in production.",
    "solution": null,
    "distractors": {
      "B": "Cloud storage is standard modern data engineering infrastructure.",
      "C": "Timestamp conversion is routine date-time feature engineering.",
      "D": "Lag features using strictly past observations is valid and leakage-free."
    },
    "keyTakeaway": "Data leakage in time series occurs when future data infiltrates historical training features.",
    "difficulty": "Medium",
    "tags": [
      "Data Leakage",
      "Time Series"
    ]
  },
  {
    "id": 66,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "How should time-series data generally be split for forecasting evaluation?",
    "options": {
      "A": "Randomly shuffle every observation in all cases",
      "B": "Train on later observations and test on earlier observations",
      "C": "Train on earlier observations and test on later observations",
      "D": "Use only the test set for training"
    },
    "correctAnswer": "C",
    "explanation": "Time-series data must be split chronologically (e.g. train on 2021-2023, test on 2024). Shuffling violates the temporal sequence and leaks future information into past predictions.",
    "solution": null,
    "distractors": {
      "A": "Random shuffling destroys temporal order and causes severe data leakage.",
      "B": "Training on future data to test on past data reverses chronological reality.",
      "D": "Training only on the test set leaves zero data for out-of-sample validation."
    },
    "keyTakeaway": "Time-series validation requires chronological splits: Train on past data -> Test on future data.",
    "difficulty": "Easy",
    "tags": [
      "Time Series",
      "Train-Test Split",
      "Validation"
    ]
  },
  {
    "id": 67,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "What is dimensionality reduction?",
    "options": {
      "A": "Reducing the number of variables or dimensions used to represent data",
      "B": "Increasing every feature's magnitude",
      "C": "Encrypting a dataset twice",
      "D": "Adding duplicate columns to a table"
    },
    "correctAnswer": "A",
    "explanation": "Dimensionality reduction transforms a high-dimensional dataset into a lower-dimensional representation while preserving as much meaningful statistical variance and structure as possible.",
    "solution": null,
    "distractors": {
      "B": "Increasing magnitude is multiplying by a scalar, not reducing dimension count.",
      "C": "Double encryption is a security operation.",
      "D": "Adding duplicate columns increases dimensionality and causes multicollinearity."
    },
    "keyTakeaway": "Dimensionality reduction compresses the feature space (number of columns) while minimizing information loss.",
    "difficulty": "Easy",
    "tags": [
      "Dimensionality Reduction",
      "PCA"
    ]
  },
  {
    "id": 68,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "What does PCA stand for?",
    "options": {
      "A": "Predictive Classification Algorithm",
      "B": "Principal Component Analysis",
      "C": "Primary Cloud Architecture",
      "D": "Process Control Automation"
    },
    "correctAnswer": "B",
    "explanation": "PCA stands for Principal Component Analysis — an unsupervised linear technique that transforms correlated variables into a set of linearly uncorrelated orthogonal variables called principal components.",
    "solution": null,
    "distractors": {
      "A": "'Predictive Classification Algorithm' is a fabricated acronym.",
      "C": "'Primary Cloud Architecture' relates to cloud infrastructure.",
      "D": "'Process Control Automation' relates to industrial engineering."
    },
    "keyTakeaway": "PCA = Principal Component Analysis, the standard linear technique for dimensionality reduction.",
    "difficulty": "Easy",
    "tags": [
      "PCA",
      "Definition"
    ]
  },
  {
    "id": 69,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "Which statement about PCA is correct?",
    "options": {
      "A": "It always preserves every original feature unchanged",
      "B": "It is a dimensionality reduction technique based on directions of variance",
      "C": "It is exclusively a database encryption method",
      "D": "It requires every input feature to be categorical"
    },
    "correctAnswer": "B",
    "explanation": "PCA finds orthogonal axes (eigenvectors of the covariance matrix) that maximize the variance of the projected data. The first principal component captures the largest possible variance, with each succeeding component capturing the largest remaining variance orthogonal to the previous ones.",
    "solution": null,
    "distractors": {
      "A": "PCA creates new synthetic linear combinations of features; it does not keep original features unchanged.",
      "C": "PCA is a linear algebra ML algorithm, not a database encryption tool.",
      "D": "PCA requires continuous numerical features; categorical variables must be encoded or analyzed via MCA."
    },
    "keyTakeaway": "PCA identifies orthogonal directions of maximum variance to construct lower-dimensional component projections.",
    "difficulty": "Medium",
    "tags": [
      "PCA",
      "Variance",
      "Dimensionality Reduction"
    ]
  },
  {
    "id": 70,
    "sectionId": "B",
    "sectionTitle": "Section B: Feature Engineering & Dimensionality Reduction",
    "question": "What is the primary purpose of a train-test split during preprocessing and model development?",
    "options": {
      "A": "To evaluate generalization on data not used to fit the model",
      "B": "To guarantee 100% prediction accuracy",
      "C": "To ensure that every feature has equal importance",
      "D": "To remove the need for model validation"
    },
    "correctAnswer": "A",
    "explanation": "A train-test split holds out a portion of data strictly for testing. The model and preprocessing scalers/imputers are fitted ONLY on the training split, and the test split provides an unbiased evaluation of generalization performance on unseen real-world data.",
    "solution": null,
    "distractors": {
      "B": "Splitting data cannot guarantee 100% accuracy; it prevents overfitting overestimation.",
      "C": "Feature importance varies based on true relationships, not the train-test split.",
      "D": "The train-test split IS a core methodology of model validation."
    },
    "keyTakeaway": "Train-test splits provide unbiased estimates of model generalization on unseen data and prevent data leakage.",
    "difficulty": "Easy",
    "tags": [
      "Train-Test Split",
      "Validation",
      "Generalization"
    ]
  },
  {
    "id": 71,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "What is the primary purpose of data visualization in predictive analytics?",
    "options": {
      "A": "To replace all statistical calculations",
      "B": "To communicate patterns, trends, relationships, and model results",
      "C": "To encrypt sensitive records",
      "D": "To increase the number of observations"
    },
    "correctAnswer": "B",
    "explanation": "Data visualization translates complex quantitative data into graphical representations, enabling analysts, stakeholders, and data scientists to easily understand patterns, distributions, correlations, outliers, and model diagnostics.",
    "solution": null,
    "distractors": {
      "A": "Visualizations complement statistical calculations rather than replacing them.",
      "C": "Encrypting records is a cryptographic security task.",
      "D": "Charts visualize existing records; they do not generate additional observations."
    },
    "keyTakeaway": "Data visualization communicates complex patterns, distributions, and predictive results effectively to human interpreters.",
    "difficulty": "Easy",
    "tags": [
      "Visualization",
      "Foundations"
    ]
  },
  {
    "id": 72,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "Which chart is most suitable for examining the relationship between two numerical variables?",
    "options": {
      "A": "Scatter plot",
      "B": "Pie chart",
      "C": "Word cloud",
      "D": "Organizational chart"
    },
    "correctAnswer": "A",
    "explanation": "A scatter plot plots individual observation pairs along Cartesian coordinates (X and Y), making it the premier chart for observing bivariate relationships, linear/nonlinear correlation, clustering, and bivariate outliers.",
    "solution": null,
    "distractors": {
      "B": "Pie charts show proportions of a whole for categorical slices.",
      "C": "Word clouds display word frequencies in unstructured text.",
      "D": "Organizational charts show reporting hierarchies in an enterprise."
    },
    "keyTakeaway": "Scatter plots are optimal for inspecting correlation, patterns, and relationships between two continuous variables.",
    "difficulty": "Easy",
    "tags": [
      "Scatter Plot",
      "Bivariate Analysis"
    ]
  },
  {
    "id": 73,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "Which visualization is most suitable for comparing sales across different product categories?",
    "options": {
      "A": "Histogram",
      "B": "Bar chart",
      "C": "Scatter plot only",
      "D": "Box plot only"
    },
    "correctAnswer": "B",
    "explanation": "A bar chart compares quantitative magnitudes (e.g. Total Revenue or Sales Count) across distinct discrete categories (e.g. Electronics, Clothing, Groceries).",
    "solution": null,
    "distractors": {
      "A": "Histograms show frequency distributions of continuous variables, not discrete categories.",
      "C": "Scatter plots require two continuous numerical dimensions.",
      "D": "Box plots compare summary distributions (quartiles), whereas total sales comparisons use bar lengths."
    },
    "keyTakeaway": "Bar charts are best for comparing aggregated values across discrete categorical groups.",
    "difficulty": "Easy",
    "tags": [
      "Bar Chart",
      "Categorical Comparison"
    ]
  },
  {
    "id": 74,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "Which chart is most suitable for displaying the frequency distribution of a continuous numerical variable?",
    "options": {
      "A": "Histogram",
      "B": "Network diagram",
      "C": "Pie chart",
      "D": "Flowchart"
    },
    "correctAnswer": "A",
    "explanation": "A histogram bins continuous numerical observations into successive non-overlapping intervals and displays the frequency (count or density) of observations falling into each bin.",
    "solution": null,
    "distractors": {
      "B": "Network diagrams display graph nodes and edges.",
      "C": "Pie charts display fractional compositions of a whole across few categories.",
      "D": "Flowcharts map sequential process steps."
    },
    "keyTakeaway": "Histograms partition continuous data into bins to visualize distribution shape, skewness, and modality.",
    "difficulty": "Easy",
    "tags": [
      "Histogram",
      "Univariate Analysis"
    ]
  },
  {
    "id": 75,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "What is the primary purpose of a heatmap in predictive analytics?",
    "options": {
      "A": "To display values using color intensity",
      "B": "To store records permanently",
      "C": "To execute an ETL pipeline",
      "D": "To encode categories into integers"
    },
    "correctAnswer": "A",
    "explanation": "A heatmap represents numerical 2D matrix values (such as feature correlation matrices or confusion matrices) using color gradients and color intensities, highlighting hot-spots, high correlations, and pattern clusters.",
    "solution": null,
    "distractors": {
      "B": "Heatmaps are visualization rendering charts, not database storage systems.",
      "C": "ETL execution is handled by workflow orchestrators (Airflow, Dataform).",
      "D": "Encoding categories into integers is ordinal/label encoding."
    },
    "keyTakeaway": "Heatmaps represent 2D numeric matrices (e.g., correlation matrices) using color intensity.",
    "difficulty": "Easy",
    "tags": [
      "Heatmap",
      "Correlation Matrix"
    ]
  },
  {
    "id": 76,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "Which chart is particularly suitable for showing the distribution, median, quartiles, and potential outliers of a numerical variable?",
    "options": {
      "A": "Box plot",
      "B": "Pie chart",
      "C": "Flowchart",
      "D": "Stacked area chart only"
    },
    "correctAnswer": "A",
    "explanation": "A box plot (box-and-whisker plot) displays Tukey's five-number summary: minimum, first quartile (Q1), median (Q2), third quartile (Q3), and maximum, with individual outlier points plotted beyond the whiskers (1.5 * IQR).",
    "solution": null,
    "distractors": {
      "B": "Pie charts cannot show quartiles, medians, or outlier fences.",
      "C": "Flowcharts map procedural logic, not statistical distributions.",
      "D": "Stacked area charts show part-to-whole trends over time."
    },
    "keyTakeaway": "Box plots provide a concise 5-number summary (Min, Q1, Median, Q3, Max) and pinpoint outliers beyond 1.5*IQR.",
    "difficulty": "Easy",
    "tags": [
      "Box Plot",
      "IQR",
      "Outliers"
    ]
  },
  {
    "id": 77,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "Which Python library is primarily used for creating general-purpose static plots?",
    "options": {
      "A": "Matplotlib",
      "B": "NumPy only",
      "C": "Requests",
      "D": "SQLite"
    },
    "correctAnswer": "A",
    "explanation": "Matplotlib (specifically the pyplot module) is the foundational Python library for generating publication-quality static 2D figures, line charts, bar plots, histograms, and scatter plots.",
    "solution": null,
    "distractors": {
      "B": "NumPy is a numerical computation library providing multidimensional array operations.",
      "C": "Requests is an HTTP client library for sending network requests.",
      "D": "SQLite is an embedded relational database engine."
    },
    "keyTakeaway": "Matplotlib is the core plotting library in the Python scientific data stack.",
    "difficulty": "Easy",
    "tags": [
      "Python",
      "Matplotlib"
    ]
  },
  {
    "id": 78,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "Which Python visualization library is built on Matplotlib and provides a high-level interface for statistical graphics?",
    "options": {
      "A": "Seaborn",
      "B": "Flask",
      "C": "TensorFlow",
      "D": "Beautiful Soup"
    },
    "correctAnswer": "A",
    "explanation": "Seaborn is a high-level Python statistical data visualization library built on top of Matplotlib that integrates closely with Pandas DataFrames to generate sophisticated statistical graphics (heatmaps, violin plots, pair plots) with concise code.",
    "solution": null,
    "distractors": {
      "B": "Flask is a lightweight Python web framework.",
      "C": "TensorFlow is an open-source deep learning framework.",
      "D": "Beautiful Soup is an HTML parsing and web scraping library."
    },
    "keyTakeaway": "Seaborn wraps Matplotlib to provide high-level statistical graphics and aesthetically pleasing defaults.",
    "difficulty": "Easy",
    "tags": [
      "Python",
      "Seaborn",
      "Statistical Graphics"
    ]
  },
  {
    "id": 79,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "Which tool is widely used for interactive business intelligence dashboards and visual analytics?",
    "options": {
      "A": "Tableau",
      "B": "Notepad",
      "C": "GCC",
      "D": "pip"
    },
    "correctAnswer": "A",
    "explanation": "Tableau is an industry-leading visual business intelligence and dashboard platform that allows business analysts and data teams to build interactive dashboards, drill-downs, filters, and reports.",
    "solution": null,
    "distractors": {
      "B": "Notepad is a plain text editor with no plotting or dashboard capabilities.",
      "C": "GCC is the GNU Compiler Collection for compiling C/C++ code.",
      "D": "pip is the package installer for Python."
    },
    "keyTakeaway": "Tableau is widely adopted in enterprise business intelligence for drag-and-drop interactive dashboards.",
    "difficulty": "Easy",
    "tags": [
      "Tableau",
      "Business Intelligence",
      "Dashboards"
    ]
  },
  {
    "id": 80,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "Which visualization is most appropriate for showing how a numerical variable changes over time?",
    "options": {
      "A": "Line chart",
      "B": "Pie chart",
      "C": "Static organizational chart",
      "D": "One-hot encoding table"
    },
    "correctAnswer": "A",
    "explanation": "A line chart plots sequential data points connected by straight line segments along a chronological x-axis, making it ideal for visualizing trends, seasonality, and fluctuations over time.",
    "solution": null,
    "distractors": {
      "B": "Pie charts cannot convey chronological progression.",
      "C": "Organizational charts display administrative reporting structures.",
      "D": "A one-hot encoding table is a matrix of 0s and 1s, not a temporal plot."
    },
    "keyTakeaway": "Line charts connect time-ordered points to show temporal trends and patterns clearly.",
    "difficulty": "Easy",
    "tags": [
      "Line Chart",
      "Time Series"
    ]
  },
  {
    "id": 81,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "Which chart is commonly used to visualize the correlation coefficients among multiple numerical features?",
    "options": {
      "A": "Correlation heatmap",
      "B": "Pie chart",
      "C": "Flowchart",
      "D": "Gantt chart"
    },
    "correctAnswer": "A",
    "explanation": "A correlation heatmap displays pairwise Pearson or Spearman correlation coefficients between all numerical variables as a color-coded matrix (typically ranging from -1 in red to +1 in blue).",
    "solution": null,
    "distractors": {
      "B": "Pie charts show proportions of a single category.",
      "C": "Flowcharts represent decision flows and procedural algorithms.",
      "D": "Gantt charts schedule project timelines and task milestones."
    },
    "keyTakeaway": "Correlation heatmaps visualize pairwise feature correlation matrices using intuitive color gradients.",
    "difficulty": "Easy",
    "tags": [
      "Correlation Heatmap",
      "Multivariate Analysis"
    ]
  },
  {
    "id": 82,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "The correlation coefficient between two variables is approximately +0.95. What does this usually indicate?",
    "options": {
      "A": "A strong positive linear association",
      "B": "A strong negative linear association",
      "C": "No linear association",
      "D": "Proof that one variable causes the other"
    },
    "correctAnswer": "A",
    "explanation": "A Pearson correlation coefficient of +0.95 is very close to +1.0, signifying a very strong positive linear relationship (as one variable increases, the other increases proportionally). It does NOT prove causal direction.",
    "solution": null,
    "distractors": {
      "B": "A strong negative linear association would have an r value near -0.95.",
      "C": "No linear association corresponds to an r value near 0.0.",
      "D": "Correlation never proves causation; latent confounding variables could drive both."
    },
    "keyTakeaway": "r near +1 = Strong positive linear association. Correlation != Causation.",
    "difficulty": "Easy",
    "tags": [
      "Correlation",
      "Pearson r"
    ]
  },
  {
    "id": 83,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "Which visualization is useful for examining whether a regression model's errors vary across predicted values?",
    "options": {
      "A": "Residual plot",
      "B": "Pie chart of feature names",
      "C": "Database schema diagram",
      "D": "Network topology diagram"
    },
    "correctAnswer": "A",
    "explanation": "A residual plot displays residuals (e = y - y_hat) on the vertical axis against predicted values (y_hat) on the horizontal axis. It reveals non-linearity, heteroscedasticity (non-constant variance), and systematic prediction biases.",
    "solution": null,
    "distractors": {
      "B": "A pie chart of feature names shows no model performance information.",
      "C": "A database schema diagram shows table relationships, not regression residuals.",
      "D": "A network topology diagram shows computer hardware connections."
    },
    "keyTakeaway": "Residual plots (residual vs predicted) detect non-linearity, heteroscedasticity, and systematic regression error patterns.",
    "difficulty": "Medium",
    "tags": [
      "Regression Diagnostics",
      "Residual Plot"
    ]
  },
  {
    "id": 84,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "What does a confusion matrix summarize in classification?",
    "options": {
      "A": "Correct and incorrect predictions by actual and predicted class",
      "B": "The amount of cloud storage used",
      "C": "The number of columns in a CSV file",
      "D": "The correlation of every numerical feature only"
    },
    "correctAnswer": "A",
    "explanation": "A confusion matrix is an N x N contingency table summarizing classification predictions, crossing Actual Classes against Predicted Classes to display True Positives (TP), True Negatives (TN), False Positives (FP), and False Negatives (FN).",
    "solution": null,
    "distractors": {
      "B": "Cloud storage usage is an infrastructure hosting metric.",
      "C": "CSV column counts describe dataset schema width.",
      "D": "Correlation matrices measure feature correlations, not classification outcome counts."
    },
    "keyTakeaway": "A confusion matrix tabulates True Positives, True Negatives, False Positives, and False Negatives.",
    "difficulty": "Easy",
    "tags": [
      "Confusion Matrix",
      "Classification Evaluation"
    ]
  },
  {
    "id": 85,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "Which visualization is particularly useful for evaluating a binary classifier across different classification thresholds?",
    "options": {
      "A": "ROC curve",
      "B": "Histogram of database sizes",
      "C": "Pie chart of programming languages",
      "D": "Bar chart of server names only"
    },
    "correctAnswer": "A",
    "explanation": "The Receiver Operating Characteristic (ROC) curve evaluates a binary classifier by plotting the True Positive Rate (Sensitivity / Recall) against the False Positive Rate (1 - Specificity) across every possible classification probability threshold from 0 to 1.",
    "solution": null,
    "distractors": {
      "B": "Database size histograms measure storage capacity.",
      "C": "A pie chart of programming languages describes developer tooling.",
      "D": "Server names describe infrastructure topology."
    },
    "keyTakeaway": "The ROC curve plots TPR vs FPR across all probability decision thresholds.",
    "difficulty": "Easy",
    "tags": [
      "ROC Curve",
      "Classification",
      "Model Evaluation"
    ]
  },
  {
    "id": 86,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "What does the area under the ROC curve (ROC-AUC) measure?",
    "options": {
      "A": "The model's disk space",
      "B": "The classifier's ability to distinguish between classes across thresholds",
      "C": "The total number of training records",
      "D": "The average feature magnitude"
    },
    "correctAnswer": "B",
    "explanation": "ROC-AUC (Area Under the ROC Curve) quantifies the classifier's discriminative ability. An AUC of 1.0 represents perfect discrimination, 0.5 represents performance no better than random guessing, and AUC represents the probability that a randomly chosen positive instance is ranked higher than a randomly chosen negative instance.",
    "solution": null,
    "distractors": {
      "A": "Disk space is measured in megabytes/gigabytes, not AUC area.",
      "C": "Total training records is sample size N.",
      "D": "Feature magnitude is evaluated via feature summary statistics."
    },
    "keyTakeaway": "ROC-AUC quantifies class separability: 1.0 = Perfect, 0.5 = Random guessing.",
    "difficulty": "Easy",
    "tags": [
      "ROC-AUC",
      "Classification Metrics"
    ]
  },
  {
    "id": 87,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "Which metric is most appropriate for summarizing the balance between precision and recall?",
    "options": {
      "A": "F1-score",
      "B": "Mean squared error",
      "C": "Database latency",
      "D": "Standard deviation of storage size"
    },
    "correctAnswer": "A",
    "explanation": "The F1-score is the harmonic mean of precision and recall: F1 = 2 * (Precision * Recall) / (Precision + Recall). It provides a balanced single metric especially on imbalanced datasets.",
    "solution": "Formula:\nF1 = 2 * (Precision * Recall) / (Precision + Recall)",
    "distractors": {
      "B": "Mean Squared Error (MSE) is a regression evaluation metric for continuous outcomes.",
      "C": "Database latency measures query response time in milliseconds.",
      "D": "Storage standard deviation is a physical infrastructure metric."
    },
    "keyTakeaway": "F1-score is the harmonic mean of precision and recall, penalizing extreme trade-offs between the two.",
    "difficulty": "Easy",
    "tags": [
      "F1-Score",
      "Precision",
      "Recall"
    ]
  },
  {
    "id": 88,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "Which visualization can help compare actual and predicted values in a regression problem?",
    "options": {
      "A": "Actual-versus-predicted scatter plot",
      "B": "Pie chart of database tables",
      "C": "Network security diagram",
      "D": "Bar chart of file extensions only"
    },
    "correctAnswer": "A",
    "explanation": "An actual-versus-predicted scatter plot plots ground truth values (y) on one axis against model predictions (y_hat) on the other. A reference 45-degree diagonal line (y = y_hat) represents perfect predictions; points clustered tightly along the line indicate high accuracy.",
    "solution": null,
    "distractors": {
      "B": "Pie chart of database tables shows schema entity counts.",
      "C": "Network security diagrams map firewalls and subnets.",
      "D": "Bar charts of file extensions show directory file types."
    },
    "keyTakeaway": "Actual vs Predicted plots display y vs y_hat against the 45-degree identity line (y = y_hat).",
    "difficulty": "Easy",
    "tags": [
      "Regression Diagnostics",
      "Actual vs Predicted"
    ]
  },
  {
    "id": 89,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "What is the main advantage of an interactive data visualization?",
    "options": {
      "A": "It always guarantees correct conclusions",
      "B": "It allows users to explore data using filters, zooming, selections, or tooltips",
      "C": "It eliminates the need for clean data",
      "D": "It automatically removes all model bias"
    },
    "correctAnswer": "B",
    "explanation": "Interactive visualizations (e.g. built with Plotly, D3.js, Tableau) empower users to dynamically filter dimensions, hover for exact data tooltips, zoom into high-density regions, and drill down into sub-cohorts.",
    "solution": null,
    "distractors": {
      "A": "Interactivity does not prevent human misinterpretation or cognitive confirmation bias.",
      "C": "Interactive charts built on corrupt data display misleading interactive visuals.",
      "D": "Algorithmic bias must be addressed through fair sampling and auditing, not visualization interaction."
    },
    "keyTakeaway": "Interactive visualizations enable user-driven exploratory analysis through filtering, hover tooltips, and zooming.",
    "difficulty": "Easy",
    "tags": [
      "Interactive Visualization",
      "UX"
    ]
  },
  {
    "id": 90,
    "sectionId": "C",
    "sectionTitle": "Section C: Data Visualization for Predictive Analysis",
    "question": "Which practice generally improves the clarity of a predictive analytics visualization?",
    "options": {
      "A": "Removing axis labels from every chart",
      "B": "Using as many colors as possible without meaning",
      "C": "Adding meaningful titles, labels, units, and an appropriate scale",
      "D": "Hiding important outliers in every case"
    },
    "correctAnswer": "C",
    "explanation": "Clear, effective data visualization requires descriptive titles, clearly labeled axes with measurement units (e.g. 'Revenue ($ in Millions)'), non-distorted baseline scales, legible typography, and a purposeful color palette.",
    "solution": null,
    "distractors": {
      "A": "Removing axis labels makes charts incomprehensible and ambiguous.",
      "B": "Rainbow or excessive unmapped colors create visual cognitive overload.",
      "D": "Arbitrarily hiding outliers distorts analytical reality and masks critical anomalies."
    },
    "keyTakeaway": "Visual clarity requires clear titles, labeled axes with units, unmanipulated scales, and intentional color usage.",
    "difficulty": "Easy",
    "tags": [
      "Visualization Best Practices",
      "Clarity"
    ]
  },
  {
    "id": 91,
    "sectionId": "D",
    "sectionTitle": "Section D: Fundamentals, Evaluation & Responsible AI",
    "question": "Which of the following best describes the typical predictive analytics workflow?",
    "options": {
      "A": "Visualization -> deletion -> storage only",
      "B": "Data collection -> preprocessing -> feature engineering -> model training -> evaluation",
      "C": "Model training -> data collection -> deletion",
      "D": "Encryption -> visualization -> hardware replacement"
    },
    "correctAnswer": "B",
    "explanation": "A standard predictive analytics and machine learning lifecycle follows an orderly progression: 1) Problem definition & Data Collection, 2) Data Preprocessing & Cleaning, 3) Feature Engineering & Selection, 4) Model Training & Hyperparameter Tuning, and 5) Model Evaluation & Deployment.",
    "solution": null,
    "distractors": {
      "A": "Visualization alone without modeling cannot perform predictive forecasting.",
      "C": "Models cannot be trained before data has even been collected.",
      "D": "Hardware replacement is IT infrastructure maintenance, not an analytical workflow."
    },
    "keyTakeaway": "Predictive Analytics Lifecycle: Collection -> Preprocessing -> Feature Engineering -> Training -> Evaluation -> Deployment.",
    "difficulty": "Easy",
    "tags": [
      "Predictive Analytics Workflow",
      "ML Lifecycle"
    ]
  },
  {
    "id": 92,
    "sectionId": "D",
    "sectionTitle": "Section D: Fundamentals, Evaluation & Responsible AI",
    "question": "Which metric is commonly used to evaluate regression models by averaging squared prediction errors?",
    "options": {
      "A": "Precision",
      "B": "Recall",
      "C": "Mean Squared Error (MSE)",
      "D": "ROC-AUC"
    },
    "correctAnswer": "C",
    "explanation": "Mean Squared Error (MSE) is a foundational regression metric calculated as the average of the squared differences between actual values (y_i) and predicted values (y_hat_i): MSE = (1/n) * sum((y_i - y_hat_i)^2).",
    "solution": "Formula:\nMSE = (1/n) * sum_{i=1}^n (y_i - y_hat_i)^2",
    "distractors": {
      "A": "Precision evaluates positive predictive value in classification.",
      "B": "Recall measures true positive capture rate in classification.",
      "D": "ROC-AUC evaluates ranking and threshold trade-offs in binary classification."
    },
    "keyTakeaway": "MSE = (1/n) * sum((y - y_hat)^2). Squares errors, penalizing large residual deviations heavily.",
    "difficulty": "Easy",
    "tags": [
      "MSE",
      "Regression Metrics"
    ]
  },
  {
    "id": 93,
    "sectionId": "D",
    "sectionTitle": "Section D: Fundamentals, Evaluation & Responsible AI",
    "question": "A classification model correctly identifies 90 out of 100 observations. What is its accuracy?",
    "options": {
      "A": "9%",
      "B": "90%",
      "C": "10%",
      "D": "100%"
    },
    "correctAnswer": "B",
    "explanation": "Accuracy is the ratio of correct predictions to the total number of predictions: Accuracy = (Correct Predictions / Total Predictions) * 100% = (90 / 100) * 100% = 90%.",
    "solution": "Given:\n- Correct Predictions = 90\n- Total Predictions = 100\n\nCalculation:\nAccuracy = (90 / 100) * 100% = 90%",
    "distractors": {
      "A": "9% is 90 divided by 1000.",
      "C": "10% is the error rate (100% - 90%).",
      "D": "100% would require all 100 observations to be predicted correctly."
    },
    "keyTakeaway": "Accuracy = (Correct / Total) * 100 = (90/100) * 100 = 90%.",
    "difficulty": "Easy",
    "tags": [
      "Accuracy",
      "Classification Metrics"
    ]
  },
  {
    "id": 94,
    "sectionId": "D",
    "sectionTitle": "Section D: Fundamentals, Evaluation & Responsible AI",
    "question": "In classification, what does precision measure?",
    "options": {
      "A": "The proportion of actual positives identified correctly",
      "B": "The proportion of predicted positives that are actually positive",
      "C": "The proportion of all predictions that are incorrect",
      "D": "The average squared prediction error"
    },
    "correctAnswer": "B",
    "explanation": "Precision (Positive Predictive Value) measures the proportion of positive predictions that are truly positive: Precision = TP / (TP + FP). It answers: 'Out of all instances the model predicted as positive, how many were correct?'",
    "solution": "Formula:\nPrecision = TP / (TP + FP)",
    "distractors": {
      "A": "The proportion of actual positives identified correctly is Recall (Sensitivity).",
      "C": "The proportion of incorrect predictions is the Error Rate (1 - Accuracy).",
      "D": "The average squared error is Mean Squared Error (MSE)."
    },
    "keyTakeaway": "Precision = TP / (TP + FP) -> Focuses on minimizing False Positives (FP).",
    "difficulty": "Easy",
    "tags": [
      "Precision",
      "Classification Metrics"
    ]
  },
  {
    "id": 95,
    "sectionId": "D",
    "sectionTitle": "Section D: Fundamentals, Evaluation & Responsible AI",
    "question": "What does recall measure in a classification problem?",
    "options": {
      "A": "The proportion of actual positive cases correctly identified",
      "B": "The proportion of predicted positive cases that are correct",
      "C": "The storage space used by the model",
      "D": "The time required to load a database"
    },
    "correctAnswer": "A",
    "explanation": "Recall (Sensitivity or True Positive Rate) measures the proportion of actual ground-truth positive cases that were correctly captured by the model: Recall = TP / (TP + FN). It answers: 'Out of all actual positives, how many did the model find?'",
    "solution": "Formula:\nRecall = TP / (TP + FN)",
    "distractors": {
      "B": "The proportion of predicted positive cases that are correct is Precision.",
      "C": "Model storage space is measured in file size (e.g. MB of pickle/ONNX file).",
      "D": "Time to load a database is database latency."
    },
    "keyTakeaway": "Recall = TP / (TP + FN) -> Focuses on minimizing False Negatives (FN).",
    "difficulty": "Easy",
    "tags": [
      "Recall",
      "Sensitivity",
      "Classification Metrics"
    ]
  },
  {
    "id": 96,
    "sectionId": "D",
    "sectionTitle": "Section D: Fundamentals, Evaluation & Responsible AI",
    "question": "What is overfitting in predictive modeling?",
    "options": {
      "A": "The model performs poorly on both training and test data in every case",
      "B": "The model learns training data too closely and generalizes poorly to unseen data",
      "C": "The model uses no training data",
      "D": "The model always produces identical predictions"
    },
    "correctAnswer": "B",
    "explanation": "Overfitting occurs when a statistical or machine learning model memorizes idiosyncratic noise and random fluctuations in the training dataset rather than true underlying patterns, resulting in near-perfect training scores but poor generalization on unseen validation/test data.",
    "solution": null,
    "distractors": {
      "A": "Performing poorly on both training and test sets is underfitting (high bias).",
      "C": "Supervised models require training data to fit parameters.",
      "D": "Producing identical predictions is extreme underfitting or mode collapse."
    },
    "keyTakeaway": "Overfitting = High Training Performance + Poor Test/Generalization Performance (High Variance).",
    "difficulty": "Easy",
    "tags": [
      "Overfitting",
      "Bias-Variance Tradeoff"
    ]
  },
  {
    "id": 97,
    "sectionId": "D",
    "sectionTitle": "Section D: Fundamentals, Evaluation & Responsible AI",
    "question": "Why is cross-validation used during model development?",
    "options": {
      "A": "To estimate model performance across multiple data splits",
      "B": "To encrypt training data",
      "C": "To guarantee zero prediction error",
      "D": "To eliminate the need for feature engineering"
    },
    "correctAnswer": "A",
    "explanation": "Cross-validation (such as K-Fold CV) splits the dataset into K subsets, iteratively training on K-1 folds and validating on the remaining fold. Averaging performance across all K folds yields a much more stable, reliable, and lower-variance estimate of generalization performance than a single random split.",
    "solution": null,
    "distractors": {
      "B": "Cross-validation is a statistical evaluation technique, not a cryptographic encryption tool.",
      "C": "No validation technique can eliminate irreducible error or guarantee zero error.",
      "D": "Proper feature engineering remains essential regardless of validation strategy."
    },
    "keyTakeaway": "Cross-validation assesses model stability and generalization by evaluating performance across multiple data partitions.",
    "difficulty": "Easy",
    "tags": [
      "Cross-Validation",
      "K-Fold",
      "Model Evaluation"
    ]
  },
  {
    "id": 98,
    "sectionId": "D",
    "sectionTitle": "Section D: Fundamentals, Evaluation & Responsible AI",
    "question": "Which of the following is an important ethical concern in predictive analytics?",
    "options": {
      "A": "Using clear chart titles",
      "B": "Reducing unnecessary storage costs",
      "C": "Algorithmic bias and unfair treatment of certain groups",
      "D": "Correctly calculating mean squared error"
    },
    "correctAnswer": "C",
    "explanation": "Algorithmic bias—where models perpetuate, amplify, or encode historical systemic biases leading to disparate impact and unfair treatment of protected demographic groups in credit, hiring, healthcare, or criminal justice—is a paramount ethical concern in AI and predictive analytics.",
    "solution": null,
    "distractors": {
      "A": "Chart titles are visual presentation practices.",
      "B": "Storage cost reduction is a FinOps/IT efficiency goal.",
      "D": "Metric computation correctness is a mathematical verification task."
    },
    "keyTakeaway": "Responsible AI mandates proactively mitigating algorithmic bias to ensure fairness, accountability, and equity.",
    "difficulty": "Easy",
    "tags": [
      "Ethics",
      "Algorithmic Bias",
      "Responsible AI"
    ]
  },
  {
    "id": 99,
    "sectionId": "D",
    "sectionTitle": "Section D: Fundamentals, Evaluation & Responsible AI",
    "question": "Which practice is most appropriate when handling sensitive personal data for predictive analysis?",
    "options": {
      "A": "Sharing identifiable data publicly",
      "B": "Collecting all possible personal information regardless of need",
      "C": "Applying data minimization, appropriate security, and privacy safeguards",
      "D": "Removing access controls to simplify collaboration"
    },
    "correctAnswer": "C",
    "explanation": "Responsible data governance mandates applying data minimization (limiting collection strictly to what is necessary), robust encryption (at rest and in transit), role-based access restrictions, and privacy-preserving techniques (anonymization, differential privacy).",
    "solution": null,
    "distractors": {
      "A": "Publicly leaking sensitive personal data is an illegal privacy breach.",
      "B": "Hoarding unnecessary personal information violates data minimization principles.",
      "D": "Removing access controls creates critical security vulnerabilities."
    },
    "keyTakeaway": "Sensitive data demands rigorous data minimization, encryption, anonymization, and access controls.",
    "difficulty": "Easy",
    "tags": [
      "Privacy",
      "Data Governance",
      "Ethics"
    ]
  },
  {
    "id": 100,
    "sectionId": "D",
    "sectionTitle": "Section D: Fundamentals, Evaluation & Responsible AI",
    "question": "After deploying a predictive model, why should its performance be monitored regularly?",
    "options": {
      "A": "Because deployed models never change",
      "B": "To detect changes in data patterns, model performance, or fairness over time",
      "C": "To avoid collecting any new data",
      "D": "To guarantee that the original model remains optimal forever"
    },
    "correctAnswer": "B",
    "explanation": "Real-world environments evolve, causing data drift (shifts in feature distributions P(X)) and concept drift (shifts in the statistical relationship between features and target P(Y|X)). Regular monitoring detects performance degradation, ensuring models are recalibrated or retrained in a timely manner.",
    "solution": null,
    "distractors": {
      "A": "While model code may be static, input data distributions constantly evolve.",
      "C": "Monitoring requires telemetry on newly ingested inference data.",
      "D": "No static model remains optimal indefinitely without monitoring and retraining."
    },
    "keyTakeaway": "Model monitoring detects data drift and concept drift to trigger timely model recalibration and retraining.",
    "difficulty": "Easy",
    "tags": [
      "Model Monitoring",
      "Data Drift",
      "MLOps"
    ]
  }
],
      revisionSheet: [
  {
    "topic": "Data warehouse",
    "keyPoint": "Integrated historical data for reporting, analytical queries, and business intelligence."
  },
  {
    "topic": "ETL",
    "keyPoint": "Extract -> Transform -> Load (transforms data before loading into warehouse)."
  },
  {
    "topic": "ELT",
    "keyPoint": "Extract -> Load -> Transform (loads raw data first, leverages warehouse compute)."
  },
  {
    "topic": "Encryption",
    "keyPoint": "Protects data confidentiality by making data unreadable without decryption keys (TLS in transit, AES at rest)."
  },
  {
    "topic": "Indexing",
    "keyPoint": "Dramatically improves analytical query retrieval speed by reducing full table scans."
  },
  {
    "topic": "Feature selection",
    "keyPoint": "Chooses a subset of relevant input variables, eliminating redundant/irrelevant noise."
  },
  {
    "topic": "Filter method",
    "keyPoint": "Uses statistical criteria (correlation, chi-square, mutual info) independent of ML model."
  },
  {
    "topic": "Wrapper method",
    "keyPoint": "Evaluates feature subsets iteratively using predictive model performance (e.g., RFE)."
  },
  {
    "topic": "Embedded method",
    "keyPoint": "Performs feature selection intrinsically during model training (e.g., Lasso L1 regularization)."
  },
  {
    "topic": "Min-max scaling",
    "keyPoint": "Maps values to [0, 1] range: x' = (x - x_min) / (x_max - x_min)."
  },
  {
    "topic": "Standardization",
    "keyPoint": "Transforms feature to zero mean (mu = 0) and unit standard deviation (sigma = 1): z = (x - mu) / sigma."
  },
  {
    "topic": "One-hot encoding",
    "keyPoint": "Creates separate binary indicator columns (0/1) for categorical levels."
  },
  {
    "topic": "Lag feature",
    "keyPoint": "Uses a previous time-step value (t - k) as an input variable for time-series forecasting."
  },
  {
    "topic": "PCA",
    "keyPoint": "Principal Component Analysis reduces dimensionality by projecting data along orthogonal directions of maximal variance."
  },
  {
    "topic": "Matplotlib",
    "keyPoint": "Foundational general-purpose Python library for creating static 2D plots and visualizations."
  },
  {
    "topic": "Seaborn",
    "keyPoint": "High-level statistical visualization library built on Matplotlib for elegant distribution plots and heatmaps."
  },
  {
    "topic": "Tableau",
    "keyPoint": "Industry-standard interactive business intelligence tool for drag-and-drop dashboards."
  },
  {
    "topic": "Scatter plot",
    "keyPoint": "Best for examining pairwise relationships, clusters, and correlation between two numerical variables."
  },
  {
    "topic": "Histogram",
    "keyPoint": "Displays the frequency distribution of a single continuous numerical variable using binned intervals."
  },
  {
    "topic": "Heatmap",
    "keyPoint": "Visualizes numerical 2D grids (such as correlation matrices) using color gradients and intensity."
  },
  {
    "topic": "Confusion matrix",
    "keyPoint": "Summarizes classification performance: True Positives (TP), True Negatives (TN), False Positives (FP), False Negatives (FN)."
  },
  {
    "topic": "ROC-AUC",
    "keyPoint": "Measures classifier discrimination ability across all possible classification probability thresholds."
  },
  {
    "topic": "Precision",
    "keyPoint": "Precision = TP / (TP + FP) — proportion of predicted positives that are truly positive."
  },
  {
    "topic": "Recall",
    "keyPoint": "Recall = TP / (TP + FN) — proportion of actual positives successfully captured."
  },
  {
    "topic": "F1-score",
    "keyPoint": "Harmonic mean of precision and recall: 2 * (Precision * Recall) / (Precision + Recall)."
  },
  {
    "topic": "MSE",
    "keyPoint": "Mean Squared Error: (1/n) * sum((y_i - y_hat_i)^2) — measures average squared prediction error in regression."
  },
  {
    "topic": "Overfitting",
    "keyPoint": "Model memorizes training noise; performs exceptionally on training data but generalizes poorly to unseen data."
  },
  {
    "topic": "Data leakage",
    "keyPoint": "Inadvertently using future or test information unavailable at actual prediction time during training."
  },
  {
    "topic": "Ethical analytics",
    "keyPoint": "Ensuring algorithmic fairness, privacy (data minimization), transparency, accountability, and regular drift monitoring."
  }
]
    },
    unit3: {
      id: "unit3",
      number: 3,
      title: "Unit 3: Advanced Predictive Modeling & AI",
      shortTitle: "Unit 3: Advanced AI",
      subtitle: "100 MCQs • Coming Soon",
      description: "Upcoming university syllabus covering Deep Neural Networks, Time-Series Forecasting (ARIMA, LSTM, GRU), Natural Language Processing for Predictive Analytics, and Cloud MLOps Model Deployment.",
      badge: "Coming Soon",
      status: "coming_soon",
      sections: [],
      questions: [],
      revisionSheet: []
    }
  },

  // Helper method to switch active unit
  setUnit: function(unitId) {
    const key = (unitId === 'unit2' || unitId === '2') ? 'unit2' : ((unitId === 'unit3' || unitId === '3') ? 'unit3' : 'unit1');
    if (this.units[key]) {
      this.activeUnit = key;
    }
    return this.getUnitData();
  },

  // Helper method to retrieve current unit bundle
  getUnitData: function(unitId) {
    const key = unitId ? ((unitId === 'unit2' || unitId === '2') ? 'unit2' : ((unitId === 'unit3' || unitId === '3') ? 'unit3' : 'unit1')) : this.activeUnit;
    return this.units[key] || this.units.unit1;
  }
};

// Backward-compatibility getters so existing references to .sections and .questions work seamlessly
Object.defineProperty(window.PREDICTIVE_ANALYTICS_DATA, 'sections', {
  get: function() {
    return this.units[this.activeUnit].sections;
  },
  set: function(val) {
    this.units[this.activeUnit].sections = val;
  }
});

Object.defineProperty(window.PREDICTIVE_ANALYTICS_DATA, 'questions', {
  get: function() {
    return this.units[this.activeUnit].questions;
  },
  set: function(val) {
    this.units[this.activeUnit].questions = val;
  }
});
