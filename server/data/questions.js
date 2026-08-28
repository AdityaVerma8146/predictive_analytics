/**
 * Complete Question Bank: Unit-1 Predictive Analysis (100 MCQs)
 * Fully annotated with rich explanations, mathematical derivations, distractor breakdowns, and key takeaways.
 * Perfectly balanced across all options A, B, C, and D (25% each).
 */

const questions = [
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
];

const sections = [
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
];

module.exports = {
  questions,
  sections
};
