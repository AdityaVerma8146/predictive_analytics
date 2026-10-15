// Data file for Unit 2: Predictive Analytics (100 MCQs)
// Sections:
// Section A: Data Storage and Management for Predictive Analysis (Q1–Q35)
// Section B: Feature Engineering (Q36–Q70)
// Section C: Data Visualization for Predictive Analysis (Q71–Q90)
// Section D: Predictive Analytics Fundamentals, Evaluation and Ethics (Q91–Q100)
// + Final Revision Sheet

const unit2Sections = [
  {
    id: "A",
    title: "Section A: Data Storage & Management for Predictive Analysis",
    description: "Data storage, warehousing, relational/NoSQL DBMS, ETL vs ELT pipelines, cloud architecture, encryption, access control, indexing, partitioning, Parquet, data lakes, and query latency.",
    count: 35,
    range: "Q1 - Q35",
    color: "#6366f1"
  },
  {
    id: "B",
    title: "Section B: Feature Engineering & Dimensionality Reduction",
    description: "Feature importance, filter/wrapper/embedded methods (RFE, Lasso), min-max scaling, standardization (z-score), imputation, one-hot/ordinal encoding, lag & rolling features, data leakage, and PCA.",
    count: 35,
    range: "Q36 - Q70",
    color: "#06b6d4"
  },
  {
    id: "C",
    title: "Section C: Data Visualization for Predictive Analysis",
    description: "Scatter plots, histograms, bar charts, heatmaps, box plots (IQR), Matplotlib, Seaborn, Tableau, residual plots, confusion matrix, ROC curves, ROC-AUC, and actual vs predicted plots.",
    count: 20,
    range: "Q71 - Q90",
    color: "#10b981"
  },
  {
    id: "D",
    title: "Section D: Fundamentals, Evaluation & Responsible AI",
    description: "Predictive analytics workflow, regression metrics (MSE), classification metrics (Accuracy, Precision, Recall, F1-score), overfitting, cross-validation, algorithmic bias, privacy, and model drift.",
    count: 10,
    range: "Q91 - Q100",
    color: "#f59e0b"
  }
];

const unit2RevisionSheet = [
  { topic: "Data warehouse", keyPoint: "Integrated historical data for reporting, analytical queries, and business intelligence." },
  { topic: "ETL", keyPoint: "Extract -> Transform -> Load (transforms data before loading into warehouse)." },
  { topic: "ELT", keyPoint: "Extract -> Load -> Transform (loads raw data first, leverages warehouse compute)." },
  { topic: "Encryption", keyPoint: "Protects data confidentiality by making data unreadable without decryption keys (TLS in transit, AES at rest)." },
  { topic: "Indexing", keyPoint: "Dramatically improves analytical query retrieval speed by reducing full table scans." },
  { topic: "Feature selection", keyPoint: "Chooses a subset of relevant input variables, eliminating redundant/irrelevant noise." },
  { topic: "Filter method", keyPoint: "Uses statistical criteria (correlation, chi-square, mutual info) independent of ML model." },
  { topic: "Wrapper method", keyPoint: "Evaluates feature subsets iteratively using predictive model performance (e.g., RFE)." },
  { topic: "Embedded method", keyPoint: "Performs feature selection intrinsically during model training (e.g., Lasso L1 regularization)." },
  { topic: "Min-max scaling", keyPoint: "Maps values to [0, 1] range: x' = (x - x_min) / (x_max - x_min)." },
  { topic: "Standardization", keyPoint: "Transforms feature to zero mean (mu = 0) and unit standard deviation (sigma = 1): z = (x - mu) / sigma." },
  { topic: "One-hot encoding", keyPoint: "Creates separate binary indicator columns (0/1) for categorical levels." },
  { topic: "Lag feature", keyPoint: "Uses a previous time-step value (t - k) as an input variable for time-series forecasting." },
  { topic: "PCA", keyPoint: "Principal Component Analysis reduces dimensionality by projecting data along orthogonal directions of maximal variance." },
  { topic: "Matplotlib", keyPoint: "Foundational general-purpose Python library for creating static 2D plots and visualizations." },
  { topic: "Seaborn", keyPoint: "High-level statistical visualization library built on Matplotlib for elegant distribution plots and heatmaps." },
  { topic: "Tableau", keyPoint: "Industry-standard interactive business intelligence tool for drag-and-drop dashboards." },
  { topic: "Scatter plot", keyPoint: "Best for examining pairwise relationships, clusters, and correlation between two numerical variables." },
  { topic: "Histogram", keyPoint: "Displays the frequency distribution of a single continuous numerical variable using binned intervals." },
  { topic: "Heatmap", keyPoint: "Visualizes numerical 2D grids (such as correlation matrices) using color gradients and intensity." },
  { topic: "Confusion matrix", keyPoint: "Summarizes classification performance: True Positives (TP), True Negatives (TN), False Positives (FP), False Negatives (FN)." },
  { topic: "ROC-AUC", keyPoint: "Measures classifier discrimination ability across all possible classification probability thresholds." },
  { topic: "Precision", keyPoint: "Precision = TP / (TP + FP) — proportion of predicted positives that are truly positive." },
  { topic: "Recall", keyPoint: "Recall = TP / (TP + FN) — proportion of actual positives successfully captured." },
  { topic: "F1-score", keyPoint: "Harmonic mean of precision and recall: 2 * (Precision * Recall) / (Precision + Recall)." },
  { topic: "MSE", keyPoint: "Mean Squared Error: (1/n) * sum((y_i - y_hat_i)^2) — measures average squared prediction error in regression." },
  { topic: "Overfitting", keyPoint: "Model memorizes training noise; performs exceptionally on training data but generalizes poorly to unseen data." },
  { topic: "Data leakage", keyPoint: "Inadvertently using future or test information unavailable at actual prediction time during training." },
  { topic: "Ethical analytics", keyPoint: "Ensuring algorithmic fairness, privacy (data minimization), transparency, accountability, and regular drift monitoring." }
];

const unit2Questions = [
  // SECTION A: Q1 - Q35
  {
    id: 1,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "What is the primary objective of predictive analytics?",
    options: {
      A: "To store data permanently",
      B: "To predict future outcomes using historical data",
      C: "To create graphical user interfaces",
      D: "To eliminate all uncertainty"
    },
    correctAnswer: "B",
    explanation: "Predictive analytics uses historical data, statistical techniques, and machine learning to estimate future outcomes, probabilities, and trends.",
    solution: null,
    distractors: {
      A: "Permanent data storage is the function of databases and archival systems, not predictive modeling.",
      C: "Creating graphical user interfaces is front-end software development.",
      D: "No statistical model can eliminate all uncertainty; predictive analytics estimates probabilities rather than guaranteeing certainty."
    },
    keyTakeaway: "Predictive Analytics = Historical Data + Statistical/ML Modeling -> Future Outcome Estimation.",
    difficulty: "Easy",
    tags: ["Fundamentals", "Objectives"]
  },
  {
    id: 2,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Which storage system is specifically designed for reporting and analytical queries?",
    options: {
      A: "Data warehouse",
      B: "Text editor",
      C: "Compiler",
      D: "Operating system"
    },
    correctAnswer: "A",
    explanation: "A data warehouse integrates historical data from multiple heterogeneous sources and optimizes schema design (star/snowflake) specifically for reporting, analytical queries, and business intelligence (OLAP).",
    solution: null,
    distractors: {
      B: "A text editor is software for editing plain text files (e.g. VS Code, Notepad).",
      C: "A compiler translates source code into machine code.",
      D: "An operating system manages computer hardware and system resources."
    },
    keyTakeaway: "Data warehouses are read-optimized analytical repositories (OLAP) consolidating multi-source historical data.",
    difficulty: "Easy",
    tags: ["Data Warehouse", "Storage"]
  },
  {
    id: 3,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Which of the following is a characteristic of a traditional data warehouse?",
    options: {
      A: "It stores only images",
      B: "It is designed primarily for gaming",
      C: "It organizes integrated data for analytical processing",
      D: "It cannot store historical information"
    },
    correctAnswer: "C",
    explanation: "Traditional data warehouses organize integrated, subject-oriented, non-volatile, and time-variant data to support complex analytical processing (OLAP) and strategic decision-making.",
    solution: null,
    distractors: {
      A: "Data warehouses primarily store structured alphanumeric tabular business data.",
      B: "Data warehouses are enterprise business intelligence systems, not gaming engines.",
      D: "Storing historical information over years is one of the foundational capabilities of data warehouses."
    },
    keyTakeaway: "Inmon & Kimball define data warehouses as subject-oriented, integrated, time-variant, and non-volatile analytical systems.",
    difficulty: "Easy",
    tags: ["Data Warehouse", "OLAP"]
  },
  {
    id: 4,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "What is the primary purpose of a database management system (DBMS)?",
    options: {
      A: "To design charts only",
      B: "To manage, retrieve, update, and organize data",
      C: "To train neural networks exclusively",
      D: "To encrypt every file automatically"
    },
    correctAnswer: "B",
    explanation: "A Database Management System (DBMS) provides systematic mechanisms for creating, storing, retrieving, updating, securing, and managing structured collections of data.",
    solution: null,
    distractors: {
      A: "Designing charts is the domain of data visualization and reporting tools.",
      C: "Training neural networks is performed by machine learning frameworks (e.g., PyTorch, TensorFlow).",
      D: "Encryption is an optional security feature, not the primary foundational definition of a DBMS."
    },
    keyTakeaway: "A DBMS serves as the software interface between databases and end-users/applications to manage data integrity and CRUD operations.",
    difficulty: "Easy",
    tags: ["DBMS", "Data Management"]
  },
  {
    id: 5,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Which of the following is an example of a relational database?",
    options: {
      A: "MySQL",
      B: "Matplotlib",
      C: "Tableau",
      D: "Scikit-learn"
    },
    correctAnswer: "A",
    explanation: "MySQL is an open-source Relational Database Management System (RDBMS) that stores structured data in related tables using rows, columns, primary keys, and foreign keys.",
    solution: null,
    distractors: {
      B: "Matplotlib is a Python visualization library for 2D graphics.",
      C: "Tableau is a visual analytics and business intelligence tool.",
      D: "Scikit-learn is a Python machine learning library."
    },
    keyTakeaway: "Relational databases (MySQL, PostgreSQL, Oracle, SQL Server) organize structured tables linked via relational constraints.",
    difficulty: "Easy",
    tags: ["RDBMS", "SQL", "Database"]
  },
  {
    id: 6,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Which storage approach is particularly useful for scalable, on-demand infrastructure without maintaining physical servers?",
    options: {
      A: "Local notebook storage only",
      B: "Cloud-based storage",
      C: "Paper records",
      D: "A single USB drive"
    },
    correctAnswer: "B",
    explanation: "Cloud-based storage (such as AWS S3, Google Cloud Storage, or Azure Blob) provides elastic, scalable, on-demand infrastructure with high availability and redundancy without needing on-premise hardware maintenance.",
    solution: null,
    distractors: {
      A: "Local notebook storage is tied to a single machine with constrained capacity.",
      C: "Paper records cannot support automated querying or scalable digital computing.",
      D: "A single USB drive has physical limits, single point of failure risk, and no elastic scaling."
    },
    keyTakeaway: "Cloud storage offers on-demand elasticity, pay-per-use economics, and zero on-premise physical hardware maintenance.",
    difficulty: "Easy",
    tags: ["Cloud Storage", "Scalability"]
  },
  {
    id: 7,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "What does ETL stand for?",
    options: {
      A: "Extract, Transfer, Link",
      B: "Evaluate, Train, Learn",
      C: "Extract, Transform, Load",
      D: "Encode, Test, Launch"
    },
    correctAnswer: "C",
    explanation: "ETL stands for Extract, Transform, Load — the standard three-phase data integration pipeline used to consolidate data from source systems into analytical repositories.",
    solution: null,
    distractors: {
      A: "'Transfer, Link' are not standard ETL pipeline stages.",
      B: "'Evaluate, Train, Learn' are steps in a machine learning workflow.",
      D: "'Encode, Test, Launch' are software deployment or ML development phrases."
    },
    keyTakeaway: "ETL: Extract (source retrieval) -> Transform (cleaning & mapping) -> Load (writing to destination).",
    difficulty: "Easy",
    tags: ["ETL", "Pipelines"]
  },
  {
    id: 8,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Which is the correct sequence of traditional ETL operations?",
    options: {
      A: "Load -> Transform -> Extract",
      B: "Extract -> Transform -> Load",
      C: "Transform -> Load -> Extract",
      D: "Extract -> Load -> Transform"
    },
    correctAnswer: "B",
    explanation: "Traditional ETL extracts data from sources, transforms it in a staging area (cleaning, standardizing, validating), and finally loads the clean data into the target analytical warehouse.",
    solution: null,
    distractors: {
      A: "You cannot load data before extracting it from the source.",
      C: "You cannot transform data before it has been extracted.",
      D: "Extract -> Load -> Transform is ELT, common in modern cloud warehouses, not traditional ETL."
    },
    keyTakeaway: "ETL Sequence: First Extract from sources, then Transform in staging, finally Load into storage.",
    difficulty: "Easy",
    tags: ["ETL", "Data Pipeline"]
  },
  {
    id: 9,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Which ETL stage involves collecting data from source systems?",
    options: {
      A: "Extraction",
      B: "Transformation",
      C: "Loading",
      D: "Visualization"
    },
    correctAnswer: "A",
    explanation: "Extraction is the first stage of ETL, where data is read and pulled from various source systems such as operational databases, ERP/CRM platforms, flat files, or APIs.",
    solution: null,
    distractors: {
      B: "Transformation alters and standardizes data formats after it has already been extracted.",
      C: "Loading writes the transformed data into the target warehouse.",
      D: "Visualization is the reporting layer downstream of the ETL pipeline."
    },
    keyTakeaway: "Extraction pulls raw data from source systems into an ingestion or staging area.",
    difficulty: "Easy",
    tags: ["ETL", "Extraction"]
  },
  {
    id: 10,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Removing duplicate records and correcting inconsistent date formats are examples of which ETL stage?",
    options: {
      A: "Extraction",
      B: "Transformation",
      C: "Loading",
      D: "Archiving"
    },
    correctAnswer: "B",
    explanation: "Transformation includes data cleaning, deduplication, standardizing date/time formats, converting data types, filtering invalid records, and computing derived attributes.",
    solution: null,
    distractors: {
      A: "Extraction simply reads the raw data from source systems without modifying it.",
      C: "Loading inserts clean records into the destination database tables.",
      D: "Archiving moves cold, inactive data to long-term storage tiers."
    },
    keyTakeaway: "Transformation is where data cleansing, standardization, and schema conformity take place.",
    difficulty: "Easy",
    tags: ["ETL", "Transformation", "Data Cleaning"]
  },
  {
    id: 11,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "In ETL, what does the loading stage do?",
    options: {
      A: "Deletes all historical data",
      B: "Creates predictions without a model",
      C: "Writes processed data into a target system",
      D: "Automatically selects the best algorithm"
    },
    correctAnswer: "C",
    explanation: "The load operation commits and writes the transformed, validated dataset into the target storage system, such as an enterprise data warehouse or operational data store.",
    solution: null,
    distractors: {
      A: "Loading appends or upserts data; it preserves historical records rather than deleting them.",
      B: "Loading is a data engineering step and does not generate predictive ML outputs.",
      D: "Algorithm selection is part of automated machine learning (AutoML), not ETL loading."
    },
    keyTakeaway: "Loading writes transformed, analytics-ready datasets into target storage tables.",
    difficulty: "Easy",
    tags: ["ETL", "Loading"]
  },
  {
    id: 12,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "What is the primary difference between ETL and ELT?",
    options: {
      A: "ELT does not involve data extraction",
      B: "ETL transforms before loading, while ELT transforms after loading",
      C: "ETL is only for images",
      D: "ELT cannot use cloud storage"
    },
    correctAnswer: "B",
    explanation: "In ETL, transformations occur on a separate processing server prior to loading into the warehouse. In ELT, raw data is loaded directly into the destination warehouse first, leveraging the massive parallel processing (MPP) compute power of the modern cloud warehouse (Snowflake, BigQuery, Redshift) to transform data in place.",
    solution: null,
    distractors: {
      A: "Both ETL and ELT begin with data extraction from sources.",
      C: "ETL is universally used for structured and semi-structured business data, not just images.",
      D: "ELT was specifically popularized by modern cloud data warehouses."
    },
    keyTakeaway: "ETL transforms in a middle tier before loading; ELT loads raw data first and transforms inside the target database.",
    difficulty: "Medium",
    tags: ["ETL", "ELT", "Architecture"]
  },
  {
    id: 13,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Which of the following is an example of structured data?",
    options: {
      A: "A relational table containing student marks",
      B: "An unorganized collection of audio recordings",
      C: "A folder of unrelated video files",
      D: "A collection of free-form voice messages"
    },
    correctAnswer: "A",
    explanation: "Structured data follows a rigid, predefined schema composed of tabular rows and columns with explicit data types (e.g., student ID, subject name, exam marks).",
    solution: null,
    distractors: {
      B: "Audio recordings are unstructured binary multimedia data.",
      C: "Video files lack a tabular relational schema and are unstructured.",
      D: "Voice messages are unstructured acoustic audio signals."
    },
    keyTakeaway: "Structured data conforms to a formal schema with strict tabular rows and columns (RDBMS, CSV, spreadsheets).",
    difficulty: "Easy",
    tags: ["Data Types", "Structured Data"]
  },
  {
    id: 14,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Which of the following is generally considered unstructured data?",
    options: {
      A: "A table of employee IDs and salaries",
      B: "A relational customer table",
      C: "A collection of free-form text documents",
      D: "A table of product codes"
    },
    correctAnswer: "C",
    explanation: "Free-form text documents (such as customer reviews, legal contracts, or emails) lack a predefined relational schema or tabular layout, classifying them as unstructured data.",
    solution: null,
    distractors: {
      A: "A table of employee IDs and salaries is structured tabular data.",
      B: "A relational customer table has predefined columns and data types (structured).",
      D: "A table of product codes follows an explicit tabular schema (structured)."
    },
    keyTakeaway: "Unstructured data includes text, audio, images, and video which cannot be represented directly in fixed tabular schemas without parsing.",
    difficulty: "Easy",
    tags: ["Data Types", "Unstructured Data"]
  },
  {
    id: 15,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "What is the main purpose of data encryption?",
    options: {
      A: "To increase the number of features",
      B: "To protect data confidentiality by making it unreadable without appropriate decryption",
      C: "To visualize missing values",
      D: "To remove duplicate observations"
    },
    correctAnswer: "B",
    explanation: "Encryption transforms plaintext data into unintelligible ciphertext using cryptographic algorithms and keys, ensuring confidentiality so unauthorized parties cannot read the data.",
    solution: null,
    distractors: {
      A: "Feature creation is part of feature engineering, not cryptographic security.",
      C: "Visualizing missing values is done through EDA tools (e.g. heatmap, missingno).",
      D: "Removing duplicate records is data cleaning (ETL transformation)."
    },
    keyTakeaway: "Encryption converts plaintext to ciphertext using mathematical algorithms, safeguarding data confidentiality.",
    difficulty: "Easy",
    tags: ["Security", "Encryption"]
  },
  {
    id: 16,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Which encryption approach is commonly used to protect data transmitted between a client and a server?",
    options: {
      A: "TLS",
      B: "PCA",
      C: "K-means",
      D: "Min-max scaling"
    },
    correctAnswer: "A",
    explanation: "Transport Layer Security (TLS, the successor to SSL) provides cryptographic security and data privacy for communications over computer networks (HTTPS).",
    solution: null,
    distractors: {
      B: "PCA (Principal Component Analysis) is a linear dimensionality reduction technique.",
      C: "K-means is an unsupervised clustering algorithm.",
      D: "Min-max scaling is a feature scaling normalization technique."
    },
    keyTakeaway: "TLS (Transport Layer Security) encrypts and authenticates data in transit across client-server network connections.",
    difficulty: "Easy",
    tags: ["Security", "TLS", "Network"]
  },
  {
    id: 17,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Which security principle grants users only the permissions necessary to perform their jobs?",
    options: {
      A: "Data duplication",
      B: "Least privilege",
      C: "Feature extraction",
      D: "Data normalization"
    },
    correctAnswer: "B",
    explanation: "The Principle of Least Privilege (PoLP) dictates that a user, service, or program should possess only the minimum privileges and access permissions strictly required to perform their intended duties.",
    solution: null,
    distractors: {
      A: "Data duplication increases redundancy and storage overhead.",
      C: "Feature extraction creates new features from raw inputs in machine learning.",
      D: "Data normalization scales values to a standard range in statistics or eliminates database redundancy."
    },
    keyTakeaway: "Least privilege minimizes security attack surfaces by restricting user and service permissions to the bare operational necessity.",
    difficulty: "Easy",
    tags: ["Security", "Least Privilege"]
  },
  {
    id: 18,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "What is the purpose of access control in a predictive analytics system?",
    options: {
      A: "To let every user access all records",
      B: "To restrict data and system operations according to permissions",
      C: "To increase the dataset's size",
      D: "To replace data preprocessing"
    },
    correctAnswer: "B",
    explanation: "Access control implements authentication and authorization mechanisms (RBAC/ABAC) to determine which users can view, modify, export, or administer sensitive data and modeling assets.",
    solution: null,
    distractors: {
      A: "Unrestricted access violates compliance, confidentiality, and data privacy principles.",
      C: "Access control is a security boundary and does not modify dataset row counts.",
      D: "Data preprocessing is an ML data preparation step that cannot be replaced by security policies."
    },
    keyTakeaway: "Access control regulates who can access, query, modify, or export data based on defined security policies.",
    difficulty: "Easy",
    tags: ["Security", "Access Control"]
  },
  {
    id: 19,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "What is a database index primarily used for?",
    options: {
      A: "Improving the speed of data retrieval",
      B: "Encrypting every database column",
      C: "Generating histograms",
      D: "Removing the need for backups"
    },
    correctAnswer: "A",
    explanation: "A database index (e.g. B-tree or Hash index) creates an auxiliary lookup structure that allows the query engine to locate matching rows quickly without performing a slow full table scan.",
    solution: null,
    distractors: {
      B: "Column-level encryption is achieved using cryptographic mechanisms, not index trees.",
      C: "Histograms summarize numerical distributions in exploratory data analysis.",
      D: "Indexes do not protect against data corruption or system failure; backups remain essential."
    },
    keyTakeaway: "Indexes speed up SELECT queries by enabling fast lookup paths, trading write overhead for read performance.",
    difficulty: "Easy",
    tags: ["Database", "Indexing", "Performance"]
  },
  {
    id: 20,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Which action can improve the performance of a frequently executed analytical query?",
    options: {
      A: "Removing all relevant indexes",
      B: "Storing every value as free-form text",
      C: "Optimizing the query and using appropriate indexes",
      D: "Duplicating every record repeatedly"
    },
    correctAnswer: "C",
    explanation: "Query optimization (e.g. avoiding SELECT *, filtering early in WHERE clauses, eliminating unnecessary joins) and adding appropriate indexes dramatically accelerate analytical query throughput.",
    solution: null,
    distractors: {
      A: "Removing indexes forces expensive full table scans and degrades query performance.",
      B: "Storing everything as free-form text prevents numeric optimizations and index efficiency.",
      D: "Duplicating records inflates storage size and increases I/O overhead without benefit."
    },
    keyTakeaway: "Query tuning + targeted indexing minimize I/O and CPU overhead for analytical workloads.",
    difficulty: "Easy",
    tags: ["Performance", "Query Optimization"]
  },
  {
    id: 21,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "What is the purpose of database partitioning?",
    options: {
      A: "To divide a large dataset into smaller manageable sections",
      B: "To convert all data into images",
      C: "To eliminate database security",
      D: "To guarantee that every query is instantaneous"
    },
    correctAnswer: "A",
    explanation: "Database partitioning divides large tables into smaller, distinct physical subsets (e.g. by date range or region) while presenting a single logical table to users, enabling partition pruning to speed up queries.",
    solution: null,
    distractors: {
      B: "Partitioning splits tables logically/physically, it does not convert data to images.",
      C: "Partitioning has no adverse effect on database security controls.",
      D: "No database technique can guarantee instantaneous queries under all network and data volumes."
    },
    keyTakeaway: "Partitioning splits massive tables into smaller chunks (e.g., by month/year), enabling query engines to scan only relevant subsets (partition pruning).",
    difficulty: "Easy",
    tags: ["Partitioning", "Performance", "Storage"]
  },
  {
    id: 22,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "What is data compression in storage management?",
    options: {
      A: "Converting every dataset into a prediction",
      B: "Reducing the space needed to represent data",
      C: "Deleting every repeated feature",
      D: "Encrypting data with a password"
    },
    correctAnswer: "B",
    explanation: "Data compression encodes information using fewer bits than the original representation, reducing physical disk storage consumption and lowering network data transfer times.",
    solution: null,
    distractors: {
      A: "Generating predictions is machine learning inference, not data compression.",
      C: "Deleting features is feature selection, not storage compression.",
      D: "Password protection is authentication/encryption, not storage volume reduction."
    },
    keyTakeaway: "Compression encodes data into fewer bytes (e.g., Snappy, GZIP, ZSTD), cutting storage footprint and I/O costs.",
    difficulty: "Easy",
    tags: ["Compression", "Storage Management"]
  },
  {
    id: 23,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Which storage format is generally well suited to analytical workloads that read selected columns from large datasets?",
    options: {
      A: "Parquet",
      B: "Plain handwritten notes",
      C: "An executable program",
      D: "A screenshot of a table"
    },
    correctAnswer: "A",
    explanation: "Apache Parquet is an open-source, columnar storage format optimized for analytical queries. It allows analytical engines to read only the specific columns needed by a query, skipping unrequested columns and applying high compression ratios.",
    solution: null,
    distractors: {
      B: "Handwritten notes are physical records with no digital query capability.",
      C: "An executable program is compiled binary code, not a data storage format.",
      D: "A screenshot of a table is a static raster image that cannot be queried with columnar efficiency."
    },
    keyTakeaway: "Apache Parquet is the industry standard columnar format for big data analytics, enabling efficient column projection and predicate pushdown.",
    difficulty: "Medium",
    tags: ["Parquet", "Columnar Storage", "Big Data"]
  },
  {
    id: 24,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "What is the main purpose of a data lake?",
    options: {
      A: "To store only relational tables with fixed schemas",
      B: "To store large amounts of data in various formats, often in raw form",
      C: "To execute only SQL transactions",
      D: "To replace all machine-learning algorithms"
    },
    correctAnswer: "B",
    explanation: "A data lake is a centralized storage repository that holds vast volumes of raw data in its native format, including structured, semi-structured (JSON, XML), and unstructured (logs, audio, video) data at massive scale.",
    solution: null,
    distractors: {
      A: "Fixed schema relational storage is the definition of a traditional data warehouse, not a data lake.",
      C: "Executing ACID transactions is typical of transactional databases (OLTP).",
      D: "Data lakes supply data to train ML algorithms; they do not replace the algorithms themselves."
    },
    keyTakeaway: "Data Lake = Scalable raw repository for structured, semi-structured, and unstructured data (schema-on-read).",
    difficulty: "Easy",
    tags: ["Data Lake", "Big Data Architecture"]
  },
  {
    id: 25,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Which of the following is an example of semi-structured data?",
    options: {
      A: "JSON records",
      B: "A relational table with a fixed schema only",
      C: "A printed paper form",
      D: "An unrecorded conversation"
    },
    correctAnswer: "A",
    explanation: "JSON (JavaScript Object Notation) organizes information using self-describing key-value pairs and nested hierarchies without requiring a rigid, predefined tabular relational schema, making it semi-structured.",
    solution: null,
    distractors: {
      B: "A relational table with fixed columns and schema is structured data.",
      C: "A printed paper form is a physical document requiring OCR or manual entry.",
      D: "An unrecorded conversation represents transient, uncaptured information."
    },
    keyTakeaway: "Semi-structured data (JSON, XML, YAML) contains internal markers and tags without conforming to a rigid relational schema.",
    difficulty: "Easy",
    tags: ["Data Types", "JSON", "Semi-Structured"]
  },
  {
    id: 26,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "What is data integrity?",
    options: {
      A: "The ability to make charts interactive",
      B: "The accuracy, consistency, and reliability of data",
      C: "The total number of database users",
      D: "The amount of RAM installed"
    },
    correctAnswer: "B",
    explanation: "Data integrity refers to the overall accuracy, completeness, consistency, and validity of data across its entire lifecycle, maintained via database constraints, validation rules, and transactional guarantees.",
    solution: null,
    distractors: {
      A: "Chart interactivity is a feature of visualization libraries like Plotly or Tableau.",
      C: "User concurrency is a database capacity metric, not data integrity.",
      D: "Installed RAM is a physical server hardware metric."
    },
    keyTakeaway: "Data integrity ensures that stored data remains accurate, complete, and trustworthy across its lifecycle.",
    difficulty: "Easy",
    tags: ["Data Integrity", "Quality"]
  },
  {
    id: 27,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Why are regular data backups important?",
    options: {
      A: "They guarantee that a model has no bias",
      B: "They help recover data after accidental deletion, corruption, or system failure",
      C: "They eliminate the need for access controls",
      D: "They automatically improve model accuracy"
    },
    correctAnswer: "B",
    explanation: "Data backups create copies of operational and historical data to ensure business continuity, disaster recovery, and data restoration in the event of accidental deletion, ransomware attacks, hardware failure, or corruption.",
    solution: null,
    distractors: {
      A: "Backups store exact copies of data; they do not eliminate statistical or algorithmic bias.",
      C: "Access controls are still required to secure both primary systems and backup archives.",
      D: "Backups safeguard data preservation, but do not alter machine learning model weights or accuracy."
    },
    keyTakeaway: "Backups ensure disaster recovery, data durability, and business continuity.",
    difficulty: "Easy",
    tags: ["Backup", "Disaster Recovery", "Operations"]
  },
  {
    id: 28,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Which database property ensures that a transaction is completed entirely or not at all?",
    options: {
      A: "Consistency",
      B: "Isolation",
      C: "Atomicity",
      D: "Durability"
    },
    correctAnswer: "C",
    explanation: "Atomicity is the 'all-or-nothing' property of ACID database transactions. If any operation within a transaction fails, the entire transaction is rolled back, leaving the database in its original state.",
    solution: null,
    distractors: {
      A: "Consistency ensures the database transitions only between valid states conforming to constraints.",
      B: "Isolation ensures concurrent transactions execute without interfering with one another.",
      D: "Durability guarantees that once a transaction commits, its changes survive system crashes."
    },
    keyTakeaway: "ACID Properties: Atomicity (all-or-nothing), Consistency (rules maintained), Isolation (independent execution), Durability (persisted permanently).",
    difficulty: "Easy",
    tags: ["ACID", "Transactions", "Atomicity"]
  },
  {
    id: 29,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "What does scalability mean in data storage?",
    options: {
      A: "The ability to handle increasing workloads or data volumes",
      B: "The ability to remove every feature",
      C: "The ability to make data confidential without encryption",
      D: "The ability to guarantee perfect predictions"
    },
    correctAnswer: "A",
    explanation: "Scalability is the capability of a data system, infrastructure, or network to handle growing amounts of work, data volumes, or concurrent users gracefully without degradation of performance.",
    solution: null,
    distractors: {
      B: "Feature removal is feature selection, not system scalability.",
      C: "Confidentiality without encryption is impossible in open storage architectures.",
      D: "Predictive perfection is unattainable in empirical real-world statistical modeling."
    },
    keyTakeaway: "Scalability is the capacity to expand throughput and storage as workloads and datasets increase.",
    difficulty: "Easy",
    tags: ["Scalability", "Architecture"]
  },
  {
    id: 30,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Which is an example of horizontal scaling?",
    options: {
      A: "Increasing the RAM of one server",
      B: "Adding more servers to a distributed storage system",
      C: "Deleting half of a database",
      D: "Compressing a single image"
    },
    correctAnswer: "B",
    explanation: "Horizontal scaling (scaling out) increases system capacity by adding more machines or nodes to a distributed cluster, sharing the processing and storage load across multiple computers.",
    solution: null,
    distractors: {
      A: "Upgrading the RAM or CPU of a single server is vertical scaling (scaling up).",
      C: "Deleting data reduces database size but does not scale infrastructure.",
      D: "Compressing an image saves local disk space, not distributed cluster scaling."
    },
    keyTakeaway: "Horizontal Scaling (Scale Out) = Adding more machines to a cluster. Vertical Scaling (Scale Up) = Adding more RAM/CPU to an existing machine.",
    difficulty: "Easy",
    tags: ["Horizontal Scaling", "Distributed Systems"]
  },
  {
    id: 31,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Which is an example of vertical scaling?",
    options: {
      A: "Adding more independent servers",
      B: "Increasing the CPU or RAM of an existing server",
      C: "Splitting a dataset among multiple regions",
      D: "Adding more database replicas across machines"
    },
    correctAnswer: "B",
    explanation: "Vertical scaling (scaling up) involves upgrading the physical hardware resources (such as adding more CPU cores, larger RAM, or faster NVMe SSDs) of an individual existing server.",
    solution: null,
    distractors: {
      A: "Adding independent nodes to a cluster is horizontal scaling.",
      C: "Multi-region data distribution is geo-sharding/replication.",
      D: "Adding read replicas across separate hosts is horizontal database scaling."
    },
    keyTakeaway: "Vertical scaling increases hardware capacity on a single node (CPU/RAM upgrades) up to physical machine limits.",
    difficulty: "Easy",
    tags: ["Vertical Scaling", "Hardware"]
  },
  {
    id: 32,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Why is data lineage important in predictive analytics?",
    options: {
      A: "It records where data originated and how it was transformed",
      B: "It guarantees that the target variable is correct",
      C: "It replaces model evaluation",
      D: "It converts numerical features into images"
    },
    correctAnswer: "A",
    explanation: "Data lineage tracks the entire lifecycle of data: its origin (provenance), every transformation step it underwent, pipeline dependencies, and its final destination, ensuring auditability and reproducibility.",
    solution: null,
    distractors: {
      B: "Data lineage documents transformation history, but cannot mathematically guarantee data correctness.",
      C: "Model evaluation (cross-validation, testing) remains strictly necessary to evaluate ML models.",
      D: "Feature visualization or image conversion is separate from pipeline provenance tracking."
    },
    keyTakeaway: "Data lineage provides auditability, compliance traceability, and root-cause debugging across data pipelines.",
    difficulty: "Medium",
    tags: ["Data Lineage", "Governance", "Auditing"]
  },
  {
    id: 33,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Which practice best supports privacy when using personal data for predictive analysis?",
    options: {
      A: "Publishing all customer records",
      B: "Collecting unlimited personal information",
      C: "Applying appropriate access restrictions and data minimization",
      D: "Sharing passwords among analysts"
    },
    correctAnswer: "C",
    explanation: "Data minimization (collecting only the minimum data required for the specific analytical purpose) combined with role-based access restrictions and pseudonymization/anonymization best protects user privacy.",
    solution: null,
    distractors: {
      A: "Publicly exposing personal customer records violates privacy regulations (GDPR/CCPA/HIPAA).",
      B: "Collecting excessive personal information violates the data minimization principle.",
      D: "Sharing credentials compromises account accountability and breaches security best practices."
    },
    keyTakeaway: "Privacy protection relies on data minimization (collect only what is needed) and strict access controls.",
    difficulty: "Easy",
    tags: ["Privacy", "Data Governance", "Ethics"]
  },
  {
    id: 34,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "What is a data retention policy?",
    options: {
      A: "A rule specifying how long data is kept and when it is deleted or archived",
      B: "A method for selecting model features",
      C: "A chart showing class frequencies",
      D: "A technique for training neural networks"
    },
    correctAnswer: "A",
    explanation: "A data retention policy defines established corporate and legal rules determining the duration for which different categories of data are retained in active storage and when they must be archived or permanently purged.",
    solution: null,
    distractors: {
      B: "Feature selection methods (e.g. RFE, Lasso) select input variables for machine learning models.",
      C: "A chart showing class frequencies is a bar chart or histogram.",
      D: "Backpropagation and gradient descent are techniques for training neural networks."
    },
    keyTakeaway: "Data retention policies establish legal and operational schedules for retaining, archiving, and purging data.",
    difficulty: "Easy",
    tags: ["Data Governance", "Compliance", "Retention"]
  },
  {
    id: 35,
    sectionId: "A",
    sectionTitle: "Section A: Data Storage & Management for Predictive Analysis",
    question: "Which metric is most directly useful for measuring the time taken to retrieve a database query result?",
    options: {
      A: "Precision",
      B: "Recall",
      C: "Query latency",
      D: "F1-score"
    },
    correctAnswer: "C",
    explanation: "Query latency measures the elapsed time (usually in milliseconds or seconds) from when a query is submitted to the database engine until the result set is returned to the client.",
    solution: null,
    distractors: {
      A: "Precision evaluates the proportion of true positives among positive classification predictions.",
      B: "Recall measures the proportion of actual positive cases detected by a classification model.",
      D: "F1-score is the harmonic mean of precision and recall."
    },
    keyTakeaway: "Query latency measures retrieval execution delay in database systems.",
    difficulty: "Easy",
    tags: ["Query Latency", "Database Performance"]
  },

  // SECTION B: Q36 - Q70
  {
    id: 36,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "What is feature engineering?",
    options: {
      A: "Designing database hardware",
      B: "Creating, transforming, or selecting input variables to improve machine-learning models",
      C: "Deleting the target variable from every dataset",
      D: "Creating charts without using data"
    },
    correctAnswer: "B",
    explanation: "Feature engineering is the process of using domain knowledge and mathematical transformations to create, extract, scale, encode, and select informative input variables (features) that help machine learning algorithms learn patterns more effectively.",
    solution: null,
    distractors: {
      A: "Designing hardware is computer engineering.",
      C: "Deleting the target variable prevents supervised learning altogether.",
      D: "Charts require underlying numerical or categorical data to be rendered."
    },
    keyTakeaway: "Feature Engineering = Domain Knowledge + Transformations to turn raw data into optimal model inputs.",
    difficulty: "Easy",
    tags: ["Feature Engineering", "Fundamentals"]
  },
  {
    id: 37,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "In a predictive model, what is a feature?",
    options: {
      A: "An input variable used by the model",
      B: "The final prediction only",
      C: "The model's source code",
      D: "A database password"
    },
    correctAnswer: "A",
    explanation: "A feature (independent variable, explanatory attribute, or predictor) is an individual measurable property or characteristic of a phenomenon being observed, supplied as an input to the machine learning model.",
    solution: null,
    distractors: {
      B: "The final prediction is the output (y_hat) produced by the model.",
      C: "Source code is the programming implementation of the algorithm.",
      D: "A database password is an authentication credential."
    },
    keyTakeaway: "Features are the independent input variables (X) fed into models to generate predictions (y).",
    difficulty: "Easy",
    tags: ["Feature", "Terminology"]
  },
  {
    id: 38,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "What is the target variable in supervised learning?",
    options: {
      A: "The variable used only to label the x-axis",
      B: "The variable the model is trained to predict",
      C: "The variable used to store passwords",
      D: "The variable that must always be categorical"
    },
    correctAnswer: "B",
    explanation: "In supervised learning, the target variable (dependent variable, response, or label, often denoted as y) is the outcome attribute that the predictive model is trained to forecast.",
    solution: null,
    distractors: {
      A: "Chart axis labeling is a graphic design setting in visualization.",
      C: "Security credentials are never used as model target variables.",
      D: "Target variables can be continuous in regression (e.g. house price) or categorical in classification (e.g. churn)."
    },
    keyTakeaway: "Target Variable (y) = Ground-truth label or response variable that the model learns to predict.",
    difficulty: "Easy",
    tags: ["Supervised Learning", "Target Variable"]
  },
  {
    id: 39,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "What is feature selection?",
    options: {
      A: "Choosing a subset of relevant features from the original dataset",
      B: "Generating random target values",
      C: "Increasing the number of records without limit",
      D: "Converting every feature into a string"
    },
    correctAnswer: "A",
    explanation: "Feature selection is the technique of selecting a subset of the most relevant and non-redundant features to use in model construction, reducing overfitting, improving training speed, and simplifying interpretability.",
    solution: null,
    distractors: {
      B: "Generating random target values destroys statistical relationships.",
      C: "Increasing records is data collection or synthetic oversampling (e.g. SMOTE), not feature selection.",
      D: "Converting numerical features into strings prevents mathematical model fitting."
    },
    keyTakeaway: "Feature selection isolates the most informative predictors, reducing the curse of dimensionality and overfitting.",
    difficulty: "Easy",
    tags: ["Feature Selection", "Preprocessing"]
  },
  {
    id: 40,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "Which of the following is a filter-based feature selection method?",
    options: {
      A: "Recursive Feature Elimination (RFE)",
      B: "Forward feature selection using model performance",
      C: "Chi-square test",
      D: "Decision tree-based feature importance"
    },
    correctAnswer: "C",
    explanation: "Filter methods evaluate features using statistical properties independent of any machine learning model. The Chi-square test (testing independence between categorical features and target) is a classic filter method.",
    solution: null,
    distractors: {
      A: "Recursive Feature Elimination (RFE) is a wrapper method that iteratively trains models.",
      B: "Forward feature selection using model validation error is a wrapper method.",
      D: "Decision tree importance is an embedded method built into tree construction."
    },
    keyTakeaway: "Filter methods (Chi-Square, Pearson correlation, ANOVA F-test, Mutual Information) score features using statistics without training an ML model.",
    difficulty: "Medium",
    tags: ["Filter Methods", "Chi-Square", "Feature Selection"]
  },
  {
    id: 41,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "Filter methods generally evaluate features using:",
    options: {
      A: "Statistical properties independent of a specific predictive model",
      B: "Only the execution speed of a computer",
      C: "Only the size of the dataset on disk",
      D: "The visual appearance of a chart"
    },
    correctAnswer: "A",
    explanation: "Filter methods assess feature relevance based on intrinsic statistical characteristics (e.g., variance, correlation with the target, mutual information) prior to and completely independent of any predictive modeling algorithm.",
    solution: null,
    distractors: {
      B: "Compute execution speed is a hardware performance benchmark, not feature relevance.",
      C: "File size on disk does not reflect statistical predictability.",
      D: "Visual appearance is subjective and does not provide algorithmic selection."
    },
    keyTakeaway: "Filter methods rely purely on statistical criteria (correlation, variance, hypothesis tests) independent of model training.",
    difficulty: "Easy",
    tags: ["Filter Methods", "Statistical Properties"]
  },
  {
    id: 42,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "Which feature selection approach repeatedly trains or evaluates models to find a useful subset of features?",
    options: {
      A: "Filter method",
      B: "Wrapper method",
      C: "Data compression",
      D: "Data encryption"
    },
    correctAnswer: "B",
    explanation: "Wrapper methods treat feature selection as a search problem, using a chosen machine learning algorithm as a 'black box' wrapper to evaluate subsets of features based on their validation performance scores.",
    solution: null,
    distractors: {
      A: "Filter methods do not train predictive models to evaluate features.",
      C: "Data compression reduces byte storage size.",
      D: "Data encryption protects data confidentiality."
    },
    keyTakeaway: "Wrapper methods (Forward selection, Backward elimination, RFE) wrap an ML model to score and select feature subsets.",
    difficulty: "Easy",
    tags: ["Wrapper Methods", "Feature Selection"]
  },
  {
    id: 43,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "Which of the following is a wrapper method?",
    options: {
      A: "Pearson correlation ranking",
      B: "Chi-square test",
      C: "Recursive Feature Elimination (RFE)",
      D: "Variance thresholding"
    },
    correctAnswer: "C",
    explanation: "Recursive Feature Elimination (RFE) is a wrapper method that iteratively trains a model (e.g. SVM or linear regression), ranks features by importance or weights, and prunes the least important features until the target number is reached.",
    solution: null,
    distractors: {
      A: "Pearson correlation ranking is a filter method.",
      B: "Chi-square test is a filter method.",
      D: "Variance thresholding removes low-variance features using a simple statistical filter."
    },
    keyTakeaway: "RFE is a quintessential wrapper method that iteratively fits models and eliminates the weakest features.",
    difficulty: "Medium",
    tags: ["Wrapper Methods", "RFE"]
  },
  {
    id: 44,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "What is a major disadvantage of wrapper-based feature selection?",
    options: {
      A: "It can be computationally expensive",
      B: "It cannot use model performance",
      C: "It never uses a learning algorithm",
      D: "It always selects every feature"
    },
    correctAnswer: "A",
    explanation: "Because wrapper methods require repeatedly training and cross-validating the predictive model for dozens or hundreds of candidate feature subsets (2^N search space), they are computationally intensive and slow on large datasets.",
    solution: null,
    distractors: {
      B: "Wrapper methods explicitly use model performance as their evaluation criteria.",
      C: "Wrapper methods fundamentally depend on a learning algorithm.",
      D: "Wrapper methods select a subset of features rather than retaining all of them."
    },
    keyTakeaway: "Wrapper methods yield high performance tailored to specific models, but suffer from high computational expense.",
    difficulty: "Easy",
    tags: ["Wrapper Methods", "Computational Complexity"]
  },
  {
    id: 45,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "Which method performs feature selection as part of model training?",
    options: {
      A: "Embedded method",
      B: "Manual data entry",
      C: "Data encryption",
      D: "Data archiving"
    },
    correctAnswer: "A",
    explanation: "Embedded methods perform feature selection internally during the mathematical optimization process of training the algorithm itself (e.g. LASSO regularization, Decision Tree splits).",
    solution: null,
    distractors: {
      B: "Manual data entry is human typing of data.",
      C: "Data encryption secures data confidentiality.",
      D: "Data archiving moves inactive data to secondary storage."
    },
    keyTakeaway: "Embedded methods (Lasso, Ridge, Elastic Net, Decision Trees) perform feature selection as an intrinsic step of model fitting.",
    difficulty: "Easy",
    tags: ["Embedded Methods", "Feature Selection"]
  },
  {
    id: 46,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "Which of the following is an example of an embedded feature selection method?",
    options: {
      A: "Lasso regression",
      B: "A simple histogram",
      C: "A database backup",
      D: "Min-max scaling alone"
    },
    correctAnswer: "A",
    explanation: "Lasso (L1-regularized) regression incorporates an L1 penalty on the absolute magnitude of coefficients (lambda * sum(|w_i|)). This forces coefficients of non-informative features to become exactly zero, naturally selecting features during model fitting.",
    solution: null,
    distractors: {
      B: "A histogram is a descriptive visualization of distribution frequencies.",
      C: "A database backup is a system recovery operation.",
      D: "Min-max scaling rescales feature ranges but does not select or discard features."
    },
    keyTakeaway: "Lasso (L1) regression drives irrelevant feature coefficients to exactly zero, making it an embedded feature selector.",
    difficulty: "Medium",
    tags: ["Lasso", "L1 Regularization", "Embedded Methods"]
  },
  {
    id: 47,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "In a decision tree, feature importance can be estimated using:",
    options: {
      A: "The number of database backups",
      B: "The reduction in impurity contributed by a feature",
      C: "The length of a feature's name",
      D: "The number of charts in a report"
    },
    correctAnswer: "B",
    explanation: "In decision trees and tree ensembles (Random Forest, Gradient Boosting), feature importance is calculated by summing the total reduction in criterion impurity (Gini impurity, Entropy, or Variance/MSE) brought about by splits on that feature across the trees.",
    solution: null,
    distractors: {
      A: "Database backups have zero connection to decision tree splits.",
      C: "The character length of variable names is completely irrelevant to mathematical split criteria.",
      D: "Report charts are reporting artifacts outside model mechanics."
    },
    keyTakeaway: "Tree Feature Importance = Total weighted reduction in split impurity (Gini/Entropy/MSE) contributed by that feature.",
    difficulty: "Easy",
    tags: ["Decision Trees", "Feature Importance", "Impurity"]
  },
  {
    id: 48,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "What does feature importance indicate?",
    options: {
      A: "How useful a feature is to a particular model under a particular importance measure",
      B: "That a feature necessarily causes the target outcome",
      C: "That a feature contains no missing values",
      D: "That a feature must be measured in meters"
    },
    correctAnswer: "A",
    explanation: "Feature importance scores indicate the relative utility or predictive contribution of a feature within a specific trained model under a chosen metric (e.g. MDI, permutation importance). It reflects statistical association, NOT causation.",
    solution: null,
    distractors: {
      B: "Association does not imply causation; high importance does not prove causal influence.",
      C: "Features with missing values can still be ranked as important if imputed or handled by tree splits.",
      D: "Measurement units do not define feature importance."
    },
    keyTakeaway: "Feature importance reflects model reliance and statistical utility, not causal ground-truth.",
    difficulty: "Medium",
    tags: ["Feature Importance", "Model Interpretation"]
  },
  {
    id: 49,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "What is the main objective of feature scaling?",
    options: {
      A: "To put numerical features on comparable scales",
      B: "To convert all numerical values into text",
      C: "To increase the number of target classes",
      D: "To remove every categorical variable automatically"
    },
    correctAnswer: "A",
    explanation: "Feature scaling transforms numerical variables onto a comparable range, preventing features with large numerical magnitudes (e.g., Annual Salary: 80,000) from dominating distance calculations or gradient updates over smaller features (e.g., Age: 25).",
    solution: null,
    distractors: {
      B: "Converting numbers into text destroys arithmetic relationships required for modeling.",
      C: "Target classes depend on the problem formulation, not feature scaling.",
      D: "Scaling applies to numerical columns; categorical columns require encoding (e.g. one-hot)."
    },
    keyTakeaway: "Feature scaling equalizes feature magnitudes so algorithms sensitive to distance or gradients treat all dimensions fairly.",
    difficulty: "Easy",
    tags: ["Feature Scaling", "Normalization"]
  },
  {
    id: 50,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "Which formula represents min-max normalization to the range [0,1]?",
    options: {
      A: "x' = (x - mu) / sigma",
      B: "x' = x^2",
      C: "x' = (x - x_min) / (x_max - x_min)",
      D: "x' = x + mu"
    },
    correctAnswer: "C",
    explanation: "Min-Max normalization scales a feature linearly into the bounded interval [0, 1] using the formula: x' = (x - x_min) / (x_max - x_min), where x_min maps to 0 and x_max maps to 1.",
    solution: "Formula: x' = (x - x_min) / (x_max - x_min)",
    distractors: {
      A: "x' = (x - mu) / sigma represents standardization (z-score scaling).",
      B: "x' = x^2 is a quadratic polynomial transformation.",
      D: "x' = x + mu simply shifts values by the mean."
    },
    keyTakeaway: "Min-Max Formula: x' = (x - x_min) / (x_max - x_min). Resulting range is bounded between 0 and 1.",
    difficulty: "Easy",
    tags: ["Min-Max Scaling", "Formulas"]
  },
  {
    id: 51,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "A feature has a minimum value of 10, a maximum value of 50, and an observation of 30. What is its min-max scaled value?",
    options: {
      A: "0.25",
      B: "0.50",
      C: "0.75",
      D: "1.00"
    },
    correctAnswer: "B",
    explanation: "Applying the min-max formula: x' = (x - x_min) / (x_max - x_min) = (30 - 10) / (50 - 10) = 20 / 40 = 0.50.",
    solution: "Given:\n- x = 30\n- x_min = 10\n- x_max = 50\n\nCalculation:\nx' = (30 - 10) / (50 - 10)\nx' = 20 / 40 = 0.50",
    distractors: {
      A: "0.25 would result if x = 20: (20 - 10)/40 = 10/40 = 0.25.",
      C: "0.75 would result if x = 40: (40 - 10)/40 = 30/40 = 0.75.",
      D: "1.00 is the scaled value of the maximum observation (50)."
    },
    keyTakeaway: "Substitute directly into x' = (x - x_min)/(x_max - x_min). Here, 20/40 = 0.50.",
    difficulty: "Easy",
    tags: ["Min-Max Scaling", "Calculations"]
  },
  {
    id: 52,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "Which formula represents standardization using a z-score?",
    options: {
      A: "z = (x - mu) / sigma",
      B: "z = x + mu + sigma",
      C: "z = x_max / x_min",
      D: "z = x^2 - mu"
    },
    correctAnswer: "A",
    explanation: "Standardization (z-score normalization) transforms observations by subtracting the sample mean (mu) and dividing by the standard deviation (sigma): z = (x - mu) / sigma.",
    solution: "Formula: z = (x - mu) / sigma",
    distractors: {
      B: "Summing x, mu, and sigma has no statistical standardization meaning.",
      C: "Dividing maximum by minimum is an extreme value ratio.",
      D: "Squaring x and subtracting the mean is a non-linear shift."
    },
    keyTakeaway: "Z-score Formula: z = (x - mu) / sigma. Measures how many standard deviations an observation lies from the mean.",
    difficulty: "Easy",
    tags: ["Standardization", "Z-Score", "Formulas"]
  },
  {
    id: 53,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "After standardization, a feature generally has which properties on the data used to calculate its mean and standard deviation?",
    options: {
      A: "Mean 1 and standard deviation 0",
      B: "Mean 0 and standard deviation 1",
      C: "Minimum 0 and maximum 1 in every dataset",
      D: "Mean 100 and standard deviation 10"
    },
    correctAnswer: "B",
    explanation: "Standardization centers the feature at a mean of zero (mu = 0) and scales it to unit variance with a standard deviation of one (sigma = 1).",
    solution: null,
    distractors: {
      A: "Standardization yields mean 0, not mean 1, and standard deviation 1, not 0.",
      C: "Minimum 0 and maximum 1 describes Min-Max scaling, not Z-score standardization.",
      D: "Mean 100 and standard deviation 10 is standard IQ test scaling, not standard ML z-score."
    },
    keyTakeaway: "Standardized features have Mean = 0 and Standard Deviation (Variance) = 1.",
    difficulty: "Easy",
    tags: ["Standardization", "Z-Score", "Properties"]
  },
  {
    id: 54,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "Which algorithm is particularly sensitive to feature scales because it relies on distances between observations?",
    options: {
      A: "K-Nearest Neighbors (KNN)",
      B: "A fixed database lookup",
      C: "A simple file copy",
      D: "A password manager"
    },
    correctAnswer: "A",
    explanation: "K-Nearest Neighbors (KNN) classifies or predicts outcomes based on Euclidean or Manhattan distance metrics between data points. Features with larger unscaled numeric magnitudes will overwhelmingly dominate the distance calculation.",
    solution: null,
    distractors: {
      B: "Database lookups check exact keys or equality, not Euclidean distance metrics.",
      C: "File copying is an OS file operation.",
      D: "Password managers store hashed credentials."
    },
    keyTakeaway: "Distance-based algorithms (KNN, K-Means, SVM with RBF, PCA) strictly require feature scaling.",
    difficulty: "Easy",
    tags: ["KNN", "Distance Metrics", "Feature Scaling"]
  },
  {
    id: 55,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "Which algorithm is generally less sensitive to monotonic changes in individual feature scales?",
    options: {
      A: "KNN",
      B: "K-means",
      C: "A decision tree",
      D: "K-means with Euclidean distance"
    },
    correctAnswer: "C",
    explanation: "Decision trees evaluate one feature at a time using orthogonal threshold splits (e.g. x_i > threshold). Because splits depend only on the rank order of values, strictly monotonic rescaling does not alter the split choice.",
    solution: null,
    distractors: {
      A: "KNN uses Euclidean distance across all features, making it highly scale-sensitive.",
      B: "K-means relies on Euclidean distance to cluster centroids, heavily distorted by unscaled features.",
      D: "K-means with Euclidean distance is identically sensitive to scale distortions."
    },
    keyTakeaway: "Tree-based models (Decision Trees, Random Forests, XGBoost) are scale-invariant to monotonic transformations.",
    difficulty: "Medium",
    tags: ["Decision Trees", "Scale Invariance"]
  },
  {
    id: 56,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "How can missing numerical values commonly be handled during preprocessing?",
    options: {
      A: "By automatically replacing every missing value with 999",
      B: "By imputation using a suitable statistic, such as the median",
      C: "By converting the entire dataset into an image",
      D: "By duplicating all incomplete rows"
    },
    correctAnswer: "B",
    explanation: "Statistical imputation replaces missing entries with an estimated value such as the column median (robust to outliers), mean, or model-based KNN/iterative imputation.",
    solution: null,
    distractors: {
      A: "Filling with 999 introduces severe artificial outliers that distort mean, variance, and model weights.",
      C: "Converting tabular data to images does not resolve missing numerical data.",
      D: "Duplicating incomplete rows magnifies the missingness problem."
    },
    keyTakeaway: "Numerical missing values are commonly handled by median/mean imputation or advanced model-based methods (KNN/MICE).",
    difficulty: "Easy",
    tags: ["Missing Data", "Imputation"]
  },
  {
    id: 57,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "Why is median imputation sometimes preferred to mean imputation?",
    options: {
      A: "The median is always equal to zero",
      B: "The median is less affected by extreme outliers",
      C: "The median eliminates every missing value from the original source",
      D: "The median works only with categorical features"
    },
    correctAnswer: "B",
    explanation: "The median is a robust statistic resistant to skewed distributions and extreme outliers. When a feature has heavy tails or extreme values (e.g., Income), the mean is pulled toward the extremes, making the median a much more representative central tendency.",
    solution: null,
    distractors: {
      A: "The median depends on the data distribution and is rarely zero in non-zero datasets.",
      C: "Imputation estimates values for modeling, it does not alter source database history.",
      D: "The median requires ordered numerical data; mode imputation is used for nominal categories."
    },
    keyTakeaway: "Median imputation is preferred over mean imputation when numerical data contains extreme outliers or skewness.",
    difficulty: "Easy",
    tags: ["Imputation", "Median", "Outliers"]
  },
  {
    id: 58,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "What is one-hot encoding used for?",
    options: {
      A: "Converting categorical values into binary indicator columns",
      B: "Scaling all numerical features to [0,1]",
      C: "Compressing images",
      D: "Encrypting database records"
    },
    correctAnswer: "A",
    explanation: "One-hot encoding converts categorical variables with k distinct levels into k separate binary indicator columns (0 or 1), where each column signifies the presence or absence of that specific category.",
    solution: null,
    distractors: {
      B: "Scaling numerical features to [0, 1] is Min-Max normalization.",
      C: "Compressing images is done via codecs like JPEG/WebP.",
      D: "Encrypting records uses cryptographic algorithms."
    },
    keyTakeaway: "One-hot encoding creates binary (0/1) indicator columns for each unique categorical category.",
    difficulty: "Easy",
    tags: ["One-Hot Encoding", "Categorical Data"]
  },
  {
    id: 59,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "A column contains the categories Red, Blue, and Green. How many columns will standard one-hot encoding produce if all three categories are represented?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    correctAnswer: "C",
    explanation: "Standard full one-hot encoding creates one binary column per unique category. With 3 distinct categories (Red, Blue, Green), it creates exactly 3 columns: is_Red, is_Blue, and is_Green.",
    solution: "Calculation:\nDistinct categories = {Red, Blue, Green} = 3\nStandard full one-hot columns = 3",
    distractors: {
      A: "1 column would be simple integer/label encoding.",
      B: "2 columns occurs when dropping one dummy column (k - 1) to avoid multicollinearity in linear models.",
      D: "4 columns would exceed the number of distinct categories."
    },
    keyTakeaway: "k distinct categories produce k binary columns under standard full one-hot encoding (or k-1 under dummy encoding).",
    difficulty: "Easy",
    tags: ["One-Hot Encoding", "Encoding Calculations"]
  },
  {
    id: 60,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "What is ordinal encoding?",
    options: {
      A: "Assigning integer codes to categorical values",
      B: "Converting a table into a histogram",
      C: "Removing all rows with categories",
      D: "Encrypting numerical data"
    },
    correctAnswer: "A",
    explanation: "Ordinal encoding maps discrete categories to integer codes (e.g., Low = 1, Medium = 2, High = 3), preserving the inherent natural ordering among the categorical levels.",
    solution: null,
    distractors: {
      B: "Converting a table into a histogram is graphical visualization.",
      C: "Discarding categorical rows loses valuable observations.",
      D: "Encrypting numerical data is a security measure."
    },
    keyTakeaway: "Ordinal encoding converts ordered categories (e.g. Small, Medium, Large) into ranked integers (0, 1, 2).",
    difficulty: "Easy",
    tags: ["Ordinal Encoding", "Categorical Encoding"]
  },
  {
    id: 61,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "Why can arbitrary integer encoding be problematic for nominal categories?",
    options: {
      A: "It may imply a numerical order or distance that does not actually exist",
      B: "It always increases the number of categories",
      C: "It automatically removes the target variable",
      D: "It makes every model nonlinear"
    },
    correctAnswer: "A",
    explanation: "Nominal categories have no intrinsic hierarchy (e.g., Red, Blue, Green). Arbitrarily assigning integer values (Red = 1, Blue = 2, Green = 3) leads algorithms to assume false arithmetic relationships (such as Green > Red or Blue is the average of Red and Green).",
    solution: null,
    distractors: {
      B: "Integer encoding compresses categories into a single column; it does not increase category count.",
      C: "Encoding applies to feature columns and does not delete target variables.",
      D: "Linear models remain linear regardless of integer assignment."
    },
    keyTakeaway: "Arbitrary integer encoding on nominal data creates fictitious numerical order and distance relationships.",
    difficulty: "Medium",
    tags: ["Encoding Traps", "Nominal vs Ordinal"]
  },
  {
    id: 62,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "What is a lag feature in time-series feature engineering?",
    options: {
      A: "A value taken from a previous time step",
      B: "A random number generated for each row",
      C: "A feature that contains only missing values",
      D: "A variable removed during model training"
    },
    correctAnswer: "A",
    explanation: "A lag feature takes the observed value of a time series at an earlier timestamp (e.g., sales at t-1 or t-7) and uses it as a predictor for the current or future time step (t).",
    solution: null,
    distractors: {
      B: "Random values add noise and contain no temporal predictive signal.",
      C: "Features with only missing values carry zero information.",
      D: "Lag features are actively created and preserved to capture auto-regressive dynamics."
    },
    keyTakeaway: "Lag Feature = Past observation y(t-k) used as an input feature to forecast y(t).",
    difficulty: "Easy",
    tags: ["Time Series", "Lag Features"]
  },
  {
    id: 63,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "If daily sales are 100, 120, 150, what is the lag-1 feature for the third day's observation?",
    options: {
      A: "100",
      B: "120",
      C: "150",
      D: "370"
    },
    correctAnswer: "B",
    explanation: "Lag-1 refers to the value from exactly one time step prior (t - 1). For Day 3 (value = 150), the immediately preceding observation from Day 2 is 120.",
    solution: "Time-series sequence:\nDay 1: 100\nDay 2: 120\nDay 3: 150\n\nFor Day 3:\nLag-1 (Day 3 - 1 = Day 2) = 120",
    distractors: {
      A: "100 is the lag-2 observation (Day 1).",
      C: "150 is the current day's observation (Day 3), not a past lag.",
      D: "370 is the sum of all three days (100 + 120 + 150)."
    },
    keyTakeaway: "Lag-1 of observation t is observation t-1. For day 3, lag-1 is day 2 (120).",
    difficulty: "Easy",
    tags: ["Time Series", "Lag Calculations"]
  },
  {
    id: 64,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "What does a rolling mean feature calculate?",
    options: {
      A: "The average of observations over a specified moving window",
      B: "The sum of every feature name",
      C: "The mean of all possible target classes",
      D: "The difference between database indexes"
    },
    correctAnswer: "A",
    explanation: "A rolling (moving) mean calculates the arithmetic average of observations contained within a sliding historical window of fixed length (e.g. 7-day rolling mean), smoothing short-term fluctuations and highlighting trends.",
    solution: null,
    distractors: {
      B: "Feature names are metadata strings, not summable numbers.",
      C: "Class labels in classification are not continuous historical rolling windows.",
      D: "Database indexes are system lookup structures unrelated to statistical rolling windows."
    },
    keyTakeaway: "Rolling mean calculates average values across a moving historical window to smooth noise and highlight trends.",
    difficulty: "Easy",
    tags: ["Rolling Mean", "Time Series"]
  },
  {
    id: 65,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "What is data leakage in time-series predictive modeling?",
    options: {
      A: "Using future information that would not have been available at prediction time",
      B: "Saving data in cloud storage",
      C: "Converting timestamps to dates",
      D: "Creating lag features using past observations only"
    },
    correctAnswer: "A",
    explanation: "Data leakage (lookahead bias) occurs when information from the future (which could not have existed at the actual moment of prediction) is mistakenly incorporated into the training features or preprocessing pipeline, producing artificially high validation scores that fail in production.",
    solution: null,
    distractors: {
      B: "Cloud storage is standard modern data engineering infrastructure.",
      C: "Timestamp conversion is routine date-time feature engineering.",
      D: "Lag features using strictly past observations is valid and leakage-free."
    },
    keyTakeaway: "Data leakage in time series occurs when future data infiltrates historical training features.",
    difficulty: "Medium",
    tags: ["Data Leakage", "Time Series"]
  },
  {
    id: 66,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "How should time-series data generally be split for forecasting evaluation?",
    options: {
      A: "Randomly shuffle every observation in all cases",
      B: "Train on later observations and test on earlier observations",
      C: "Train on earlier observations and test on later observations",
      D: "Use only the test set for training"
    },
    correctAnswer: "C",
    explanation: "Time-series data must be split chronologically (e.g. train on 2021-2023, test on 2024). Shuffling violates the temporal sequence and leaks future information into past predictions.",
    solution: null,
    distractors: {
      A: "Random shuffling destroys temporal order and causes severe data leakage.",
      B: "Training on future data to test on past data reverses chronological reality.",
      D: "Training only on the test set leaves zero data for out-of-sample validation."
    },
    keyTakeaway: "Time-series validation requires chronological splits: Train on past data -> Test on future data.",
    difficulty: "Easy",
    tags: ["Time Series", "Train-Test Split", "Validation"]
  },
  {
    id: 67,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "What is dimensionality reduction?",
    options: {
      A: "Reducing the number of variables or dimensions used to represent data",
      B: "Increasing every feature's magnitude",
      C: "Encrypting a dataset twice",
      D: "Adding duplicate columns to a table"
    },
    correctAnswer: "A",
    explanation: "Dimensionality reduction transforms a high-dimensional dataset into a lower-dimensional representation while preserving as much meaningful statistical variance and structure as possible.",
    solution: null,
    distractors: {
      B: "Increasing magnitude is multiplying by a scalar, not reducing dimension count.",
      C: "Double encryption is a security operation.",
      D: "Adding duplicate columns increases dimensionality and causes multicollinearity."
    },
    keyTakeaway: "Dimensionality reduction compresses the feature space (number of columns) while minimizing information loss.",
    difficulty: "Easy",
    tags: ["Dimensionality Reduction", "PCA"]
  },
  {
    id: 68,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "What does PCA stand for?",
    options: {
      A: "Predictive Classification Algorithm",
      B: "Principal Component Analysis",
      C: "Primary Cloud Architecture",
      D: "Process Control Automation"
    },
    correctAnswer: "B",
    explanation: "PCA stands for Principal Component Analysis — an unsupervised linear technique that transforms correlated variables into a set of linearly uncorrelated orthogonal variables called principal components.",
    solution: null,
    distractors: {
      A: "'Predictive Classification Algorithm' is a fabricated acronym.",
      C: "'Primary Cloud Architecture' relates to cloud infrastructure.",
      D: "'Process Control Automation' relates to industrial engineering."
    },
    keyTakeaway: "PCA = Principal Component Analysis, the standard linear technique for dimensionality reduction.",
    difficulty: "Easy",
    tags: ["PCA", "Definition"]
  },
  {
    id: 69,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "Which statement about PCA is correct?",
    options: {
      A: "It always preserves every original feature unchanged",
      B: "It is a dimensionality reduction technique based on directions of variance",
      C: "It is exclusively a database encryption method",
      D: "It requires every input feature to be categorical"
    },
    correctAnswer: "B",
    explanation: "PCA finds orthogonal axes (eigenvectors of the covariance matrix) that maximize the variance of the projected data. The first principal component captures the largest possible variance, with each succeeding component capturing the largest remaining variance orthogonal to the previous ones.",
    solution: null,
    distractors: {
      A: "PCA creates new synthetic linear combinations of features; it does not keep original features unchanged.",
      C: "PCA is a linear algebra ML algorithm, not a database encryption tool.",
      D: "PCA requires continuous numerical features; categorical variables must be encoded or analyzed via MCA."
    },
    keyTakeaway: "PCA identifies orthogonal directions of maximum variance to construct lower-dimensional component projections.",
    difficulty: "Medium",
    tags: ["PCA", "Variance", "Dimensionality Reduction"]
  },
  {
    id: 70,
    sectionId: "B",
    sectionTitle: "Section B: Feature Engineering & Dimensionality Reduction",
    question: "What is the primary purpose of a train-test split during preprocessing and model development?",
    options: {
      A: "To evaluate generalization on data not used to fit the model",
      B: "To guarantee 100% prediction accuracy",
      C: "To ensure that every feature has equal importance",
      D: "To remove the need for model validation"
    },
    correctAnswer: "A",
    explanation: "A train-test split holds out a portion of data strictly for testing. The model and preprocessing scalers/imputers are fitted ONLY on the training split, and the test split provides an unbiased evaluation of generalization performance on unseen real-world data.",
    solution: null,
    distractors: {
      B: "Splitting data cannot guarantee 100% accuracy; it prevents overfitting overestimation.",
      C: "Feature importance varies based on true relationships, not the train-test split.",
      D: "The train-test split IS a core methodology of model validation."
    },
    keyTakeaway: "Train-test splits provide unbiased estimates of model generalization on unseen data and prevent data leakage.",
    difficulty: "Easy",
    tags: ["Train-Test Split", "Validation", "Generalization"]
  },

  // SECTION C: Q71 - Q90
  {
    id: 71,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "What is the primary purpose of data visualization in predictive analytics?",
    options: {
      A: "To replace all statistical calculations",
      B: "To communicate patterns, trends, relationships, and model results",
      C: "To encrypt sensitive records",
      D: "To increase the number of observations"
    },
    correctAnswer: "B",
    explanation: "Data visualization translates complex quantitative data into graphical representations, enabling analysts, stakeholders, and data scientists to easily understand patterns, distributions, correlations, outliers, and model diagnostics.",
    solution: null,
    distractors: {
      A: "Visualizations complement statistical calculations rather than replacing them.",
      C: "Encrypting records is a cryptographic security task.",
      D: "Charts visualize existing records; they do not generate additional observations."
    },
    keyTakeaway: "Data visualization communicates complex patterns, distributions, and predictive results effectively to human interpreters.",
    difficulty: "Easy",
    tags: ["Visualization", "Foundations"]
  },
  {
    id: 72,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "Which chart is most suitable for examining the relationship between two numerical variables?",
    options: {
      A: "Scatter plot",
      B: "Pie chart",
      C: "Word cloud",
      D: "Organizational chart"
    },
    correctAnswer: "A",
    explanation: "A scatter plot plots individual observation pairs along Cartesian coordinates (X and Y), making it the premier chart for observing bivariate relationships, linear/nonlinear correlation, clustering, and bivariate outliers.",
    solution: null,
    distractors: {
      B: "Pie charts show proportions of a whole for categorical slices.",
      C: "Word clouds display word frequencies in unstructured text.",
      D: "Organizational charts show reporting hierarchies in an enterprise."
    },
    keyTakeaway: "Scatter plots are optimal for inspecting correlation, patterns, and relationships between two continuous variables.",
    difficulty: "Easy",
    tags: ["Scatter Plot", "Bivariate Analysis"]
  },
  {
    id: 73,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "Which visualization is most suitable for comparing sales across different product categories?",
    options: {
      A: "Histogram",
      B: "Bar chart",
      C: "Scatter plot only",
      D: "Box plot only"
    },
    correctAnswer: "B",
    explanation: "A bar chart compares quantitative magnitudes (e.g. Total Revenue or Sales Count) across distinct discrete categories (e.g. Electronics, Clothing, Groceries).",
    solution: null,
    distractors: {
      A: "Histograms show frequency distributions of continuous variables, not discrete categories.",
      C: "Scatter plots require two continuous numerical dimensions.",
      D: "Box plots compare summary distributions (quartiles), whereas total sales comparisons use bar lengths."
    },
    keyTakeaway: "Bar charts are best for comparing aggregated values across discrete categorical groups.",
    difficulty: "Easy",
    tags: ["Bar Chart", "Categorical Comparison"]
  },
  {
    id: 74,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "Which chart is most suitable for displaying the frequency distribution of a continuous numerical variable?",
    options: {
      A: "Histogram",
      B: "Network diagram",
      C: "Pie chart",
      D: "Flowchart"
    },
    correctAnswer: "A",
    explanation: "A histogram bins continuous numerical observations into successive non-overlapping intervals and displays the frequency (count or density) of observations falling into each bin.",
    solution: null,
    distractors: {
      B: "Network diagrams display graph nodes and edges.",
      C: "Pie charts display fractional compositions of a whole across few categories.",
      D: "Flowcharts map sequential process steps."
    },
    keyTakeaway: "Histograms partition continuous data into bins to visualize distribution shape, skewness, and modality.",
    difficulty: "Easy",
    tags: ["Histogram", "Univariate Analysis"]
  },
  {
    id: 75,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "What is the primary purpose of a heatmap in predictive analytics?",
    options: {
      A: "To display values using color intensity",
      B: "To store records permanently",
      C: "To execute an ETL pipeline",
      D: "To encode categories into integers"
    },
    correctAnswer: "A",
    explanation: "A heatmap represents numerical 2D matrix values (such as feature correlation matrices or confusion matrices) using color gradients and color intensities, highlighting hot-spots, high correlations, and pattern clusters.",
    solution: null,
    distractors: {
      B: "Heatmaps are visualization rendering charts, not database storage systems.",
      C: "ETL execution is handled by workflow orchestrators (Airflow, Dataform).",
      D: "Encoding categories into integers is ordinal/label encoding."
    },
    keyTakeaway: "Heatmaps represent 2D numeric matrices (e.g., correlation matrices) using color intensity.",
    difficulty: "Easy",
    tags: ["Heatmap", "Correlation Matrix"]
  },
  {
    id: 76,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "Which chart is particularly suitable for showing the distribution, median, quartiles, and potential outliers of a numerical variable?",
    options: {
      A: "Box plot",
      B: "Pie chart",
      C: "Flowchart",
      D: "Stacked area chart only"
    },
    correctAnswer: "A",
    explanation: "A box plot (box-and-whisker plot) displays Tukey's five-number summary: minimum, first quartile (Q1), median (Q2), third quartile (Q3), and maximum, with individual outlier points plotted beyond the whiskers (1.5 * IQR).",
    solution: null,
    distractors: {
      B: "Pie charts cannot show quartiles, medians, or outlier fences.",
      C: "Flowcharts map procedural logic, not statistical distributions.",
      D: "Stacked area charts show part-to-whole trends over time."
    },
    keyTakeaway: "Box plots provide a concise 5-number summary (Min, Q1, Median, Q3, Max) and pinpoint outliers beyond 1.5*IQR.",
    difficulty: "Easy",
    tags: ["Box Plot", "IQR", "Outliers"]
  },
  {
    id: 77,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "Which Python library is primarily used for creating general-purpose static plots?",
    options: {
      A: "Matplotlib",
      B: "NumPy only",
      C: "Requests",
      D: "SQLite"
    },
    correctAnswer: "A",
    explanation: "Matplotlib (specifically the pyplot module) is the foundational Python library for generating publication-quality static 2D figures, line charts, bar plots, histograms, and scatter plots.",
    solution: null,
    distractors: {
      B: "NumPy is a numerical computation library providing multidimensional array operations.",
      C: "Requests is an HTTP client library for sending network requests.",
      D: "SQLite is an embedded relational database engine."
    },
    keyTakeaway: "Matplotlib is the core plotting library in the Python scientific data stack.",
    difficulty: "Easy",
    tags: ["Python", "Matplotlib"]
  },
  {
    id: 78,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "Which Python visualization library is built on Matplotlib and provides a high-level interface for statistical graphics?",
    options: {
      A: "Seaborn",
      B: "Flask",
      C: "TensorFlow",
      D: "Beautiful Soup"
    },
    correctAnswer: "A",
    explanation: "Seaborn is a high-level Python statistical data visualization library built on top of Matplotlib that integrates closely with Pandas DataFrames to generate sophisticated statistical graphics (heatmaps, violin plots, pair plots) with concise code.",
    solution: null,
    distractors: {
      B: "Flask is a lightweight Python web framework.",
      C: "TensorFlow is an open-source deep learning framework.",
      D: "Beautiful Soup is an HTML parsing and web scraping library."
    },
    keyTakeaway: "Seaborn wraps Matplotlib to provide high-level statistical graphics and aesthetically pleasing defaults.",
    difficulty: "Easy",
    tags: ["Python", "Seaborn", "Statistical Graphics"]
  },
  {
    id: 79,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "Which tool is widely used for interactive business intelligence dashboards and visual analytics?",
    options: {
      A: "Tableau",
      B: "Notepad",
      C: "GCC",
      D: "pip"
    },
    correctAnswer: "A",
    explanation: "Tableau is an industry-leading visual business intelligence and dashboard platform that allows business analysts and data teams to build interactive dashboards, drill-downs, filters, and reports.",
    solution: null,
    distractors: {
      B: "Notepad is a plain text editor with no plotting or dashboard capabilities.",
      C: "GCC is the GNU Compiler Collection for compiling C/C++ code.",
      D: "pip is the package installer for Python."
    },
    keyTakeaway: "Tableau is widely adopted in enterprise business intelligence for drag-and-drop interactive dashboards.",
    difficulty: "Easy",
    tags: ["Tableau", "Business Intelligence", "Dashboards"]
  },
  {
    id: 80,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "Which visualization is most appropriate for showing how a numerical variable changes over time?",
    options: {
      A: "Line chart",
      B: "Pie chart",
      C: "Static organizational chart",
      D: "One-hot encoding table"
    },
    correctAnswer: "A",
    explanation: "A line chart plots sequential data points connected by straight line segments along a chronological x-axis, making it ideal for visualizing trends, seasonality, and fluctuations over time.",
    solution: null,
    distractors: {
      B: "Pie charts cannot convey chronological progression.",
      C: "Organizational charts display administrative reporting structures.",
      D: "A one-hot encoding table is a matrix of 0s and 1s, not a temporal plot."
    },
    keyTakeaway: "Line charts connect time-ordered points to show temporal trends and patterns clearly.",
    difficulty: "Easy",
    tags: ["Line Chart", "Time Series"]
  },
  {
    id: 81,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "Which chart is commonly used to visualize the correlation coefficients among multiple numerical features?",
    options: {
      A: "Correlation heatmap",
      B: "Pie chart",
      C: "Flowchart",
      D: "Gantt chart"
    },
    correctAnswer: "A",
    explanation: "A correlation heatmap displays pairwise Pearson or Spearman correlation coefficients between all numerical variables as a color-coded matrix (typically ranging from -1 in red to +1 in blue).",
    solution: null,
    distractors: {
      B: "Pie charts show proportions of a single category.",
      C: "Flowcharts represent decision flows and procedural algorithms.",
      D: "Gantt charts schedule project timelines and task milestones."
    },
    keyTakeaway: "Correlation heatmaps visualize pairwise feature correlation matrices using intuitive color gradients.",
    difficulty: "Easy",
    tags: ["Correlation Heatmap", "Multivariate Analysis"]
  },
  {
    id: 82,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "The correlation coefficient between two variables is approximately +0.95. What does this usually indicate?",
    options: {
      A: "A strong positive linear association",
      B: "A strong negative linear association",
      C: "No linear association",
      D: "Proof that one variable causes the other"
    },
    correctAnswer: "A",
    explanation: "A Pearson correlation coefficient of +0.95 is very close to +1.0, signifying a very strong positive linear relationship (as one variable increases, the other increases proportionally). It does NOT prove causal direction.",
    solution: null,
    distractors: {
      B: "A strong negative linear association would have an r value near -0.95.",
      C: "No linear association corresponds to an r value near 0.0.",
      D: "Correlation never proves causation; latent confounding variables could drive both."
    },
    keyTakeaway: "r near +1 = Strong positive linear association. Correlation != Causation.",
    difficulty: "Easy",
    tags: ["Correlation", "Pearson r"]
  },
  {
    id: 83,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "Which visualization is useful for examining whether a regression model's errors vary across predicted values?",
    options: {
      A: "Residual plot",
      B: "Pie chart of feature names",
      C: "Database schema diagram",
      D: "Network topology diagram"
    },
    correctAnswer: "A",
    explanation: "A residual plot displays residuals (e = y - y_hat) on the vertical axis against predicted values (y_hat) on the horizontal axis. It reveals non-linearity, heteroscedasticity (non-constant variance), and systematic prediction biases.",
    solution: null,
    distractors: {
      B: "A pie chart of feature names shows no model performance information.",
      C: "A database schema diagram shows table relationships, not regression residuals.",
      D: "A network topology diagram shows computer hardware connections."
    },
    keyTakeaway: "Residual plots (residual vs predicted) detect non-linearity, heteroscedasticity, and systematic regression error patterns.",
    difficulty: "Medium",
    tags: ["Regression Diagnostics", "Residual Plot"]
  },
  {
    id: 84,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "What does a confusion matrix summarize in classification?",
    options: {
      A: "Correct and incorrect predictions by actual and predicted class",
      B: "The amount of cloud storage used",
      C: "The number of columns in a CSV file",
      D: "The correlation of every numerical feature only"
    },
    correctAnswer: "A",
    explanation: "A confusion matrix is an N x N contingency table summarizing classification predictions, crossing Actual Classes against Predicted Classes to display True Positives (TP), True Negatives (TN), False Positives (FP), and False Negatives (FN).",
    solution: null,
    distractors: {
      B: "Cloud storage usage is an infrastructure hosting metric.",
      C: "CSV column counts describe dataset schema width.",
      D: "Correlation matrices measure feature correlations, not classification outcome counts."
    },
    keyTakeaway: "A confusion matrix tabulates True Positives, True Negatives, False Positives, and False Negatives.",
    difficulty: "Easy",
    tags: ["Confusion Matrix", "Classification Evaluation"]
  },
  {
    id: 85,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "Which visualization is particularly useful for evaluating a binary classifier across different classification thresholds?",
    options: {
      A: "ROC curve",
      B: "Histogram of database sizes",
      C: "Pie chart of programming languages",
      D: "Bar chart of server names only"
    },
    correctAnswer: "A",
    explanation: "The Receiver Operating Characteristic (ROC) curve evaluates a binary classifier by plotting the True Positive Rate (Sensitivity / Recall) against the False Positive Rate (1 - Specificity) across every possible classification probability threshold from 0 to 1.",
    solution: null,
    distractors: {
      B: "Database size histograms measure storage capacity.",
      C: "A pie chart of programming languages describes developer tooling.",
      D: "Server names describe infrastructure topology."
    },
    keyTakeaway: "The ROC curve plots TPR vs FPR across all probability decision thresholds.",
    difficulty: "Easy",
    tags: ["ROC Curve", "Classification", "Model Evaluation"]
  },
  {
    id: 86,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "What does the area under the ROC curve (ROC-AUC) measure?",
    options: {
      A: "The model's disk space",
      B: "The classifier's ability to distinguish between classes across thresholds",
      C: "The total number of training records",
      D: "The average feature magnitude"
    },
    correctAnswer: "B",
    explanation: "ROC-AUC (Area Under the ROC Curve) quantifies the classifier's discriminative ability. An AUC of 1.0 represents perfect discrimination, 0.5 represents performance no better than random guessing, and AUC represents the probability that a randomly chosen positive instance is ranked higher than a randomly chosen negative instance.",
    solution: null,
    distractors: {
      A: "Disk space is measured in megabytes/gigabytes, not AUC area.",
      C: "Total training records is sample size N.",
      D: "Feature magnitude is evaluated via feature summary statistics."
    },
    keyTakeaway: "ROC-AUC quantifies class separability: 1.0 = Perfect, 0.5 = Random guessing.",
    difficulty: "Easy",
    tags: ["ROC-AUC", "Classification Metrics"]
  },
  {
    id: 87,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "Which metric is most appropriate for summarizing the balance between precision and recall?",
    options: {
      A: "F1-score",
      B: "Mean squared error",
      C: "Database latency",
      D: "Standard deviation of storage size"
    },
    correctAnswer: "A",
    explanation: "The F1-score is the harmonic mean of precision and recall: F1 = 2 * (Precision * Recall) / (Precision + Recall). It provides a balanced single metric especially on imbalanced datasets.",
    solution: "Formula:\nF1 = 2 * (Precision * Recall) / (Precision + Recall)",
    distractors: {
      B: "Mean Squared Error (MSE) is a regression evaluation metric for continuous outcomes.",
      C: "Database latency measures query response time in milliseconds.",
      D: "Storage standard deviation is a physical infrastructure metric."
    },
    keyTakeaway: "F1-score is the harmonic mean of precision and recall, penalizing extreme trade-offs between the two.",
    difficulty: "Easy",
    tags: ["F1-Score", "Precision", "Recall"]
  },
  {
    id: 88,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "Which visualization can help compare actual and predicted values in a regression problem?",
    options: {
      A: "Actual-versus-predicted scatter plot",
      B: "Pie chart of database tables",
      C: "Network security diagram",
      D: "Bar chart of file extensions only"
    },
    correctAnswer: "A",
    explanation: "An actual-versus-predicted scatter plot plots ground truth values (y) on one axis against model predictions (y_hat) on the other. A reference 45-degree diagonal line (y = y_hat) represents perfect predictions; points clustered tightly along the line indicate high accuracy.",
    solution: null,
    distractors: {
      B: "Pie chart of database tables shows schema entity counts.",
      C: "Network security diagrams map firewalls and subnets.",
      D: "Bar charts of file extensions show directory file types."
    },
    keyTakeaway: "Actual vs Predicted plots display y vs y_hat against the 45-degree identity line (y = y_hat).",
    difficulty: "Easy",
    tags: ["Regression Diagnostics", "Actual vs Predicted"]
  },
  {
    id: 89,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "What is the main advantage of an interactive data visualization?",
    options: {
      A: "It always guarantees correct conclusions",
      B: "It allows users to explore data using filters, zooming, selections, or tooltips",
      C: "It eliminates the need for clean data",
      D: "It automatically removes all model bias"
    },
    correctAnswer: "B",
    explanation: "Interactive visualizations (e.g. built with Plotly, D3.js, Tableau) empower users to dynamically filter dimensions, hover for exact data tooltips, zoom into high-density regions, and drill down into sub-cohorts.",
    solution: null,
    distractors: {
      A: "Interactivity does not prevent human misinterpretation or cognitive confirmation bias.",
      C: "Interactive charts built on corrupt data display misleading interactive visuals.",
      D: "Algorithmic bias must be addressed through fair sampling and auditing, not visualization interaction."
    },
    keyTakeaway: "Interactive visualizations enable user-driven exploratory analysis through filtering, hover tooltips, and zooming.",
    difficulty: "Easy",
    tags: ["Interactive Visualization", "UX"]
  },
  {
    id: 90,
    sectionId: "C",
    sectionTitle: "Section C: Data Visualization for Predictive Analysis",
    question: "Which practice generally improves the clarity of a predictive analytics visualization?",
    options: {
      A: "Removing axis labels from every chart",
      B: "Using as many colors as possible without meaning",
      C: "Adding meaningful titles, labels, units, and an appropriate scale",
      D: "Hiding important outliers in every case"
    },
    correctAnswer: "C",
    explanation: "Clear, effective data visualization requires descriptive titles, clearly labeled axes with measurement units (e.g. 'Revenue ($ in Millions)'), non-distorted baseline scales, legible typography, and a purposeful color palette.",
    solution: null,
    distractors: {
      A: "Removing axis labels makes charts incomprehensible and ambiguous.",
      B: "Rainbow or excessive unmapped colors create visual cognitive overload.",
      D: "Arbitrarily hiding outliers distorts analytical reality and masks critical anomalies."
    },
    keyTakeaway: "Visual clarity requires clear titles, labeled axes with units, unmanipulated scales, and intentional color usage.",
    difficulty: "Easy",
    tags: ["Visualization Best Practices", "Clarity"]
  },

  // SECTION D: Q91 - Q100
  {
    id: 91,
    sectionId: "D",
    sectionTitle: "Section D: Fundamentals, Evaluation & Responsible AI",
    question: "Which of the following best describes the typical predictive analytics workflow?",
    options: {
      A: "Visualization -> deletion -> storage only",
      B: "Data collection -> preprocessing -> feature engineering -> model training -> evaluation",
      C: "Model training -> data collection -> deletion",
      D: "Encryption -> visualization -> hardware replacement"
    },
    correctAnswer: "B",
    explanation: "A standard predictive analytics and machine learning lifecycle follows an orderly progression: 1) Problem definition & Data Collection, 2) Data Preprocessing & Cleaning, 3) Feature Engineering & Selection, 4) Model Training & Hyperparameter Tuning, and 5) Model Evaluation & Deployment.",
    solution: null,
    distractors: {
      A: "Visualization alone without modeling cannot perform predictive forecasting.",
      C: "Models cannot be trained before data has even been collected.",
      D: "Hardware replacement is IT infrastructure maintenance, not an analytical workflow."
    },
    keyTakeaway: "Predictive Analytics Lifecycle: Collection -> Preprocessing -> Feature Engineering -> Training -> Evaluation -> Deployment.",
    difficulty: "Easy",
    tags: ["Predictive Analytics Workflow", "ML Lifecycle"]
  },
  {
    id: 92,
    sectionId: "D",
    sectionTitle: "Section D: Fundamentals, Evaluation & Responsible AI",
    question: "Which metric is commonly used to evaluate regression models by averaging squared prediction errors?",
    options: {
      A: "Precision",
      B: "Recall",
      C: "Mean Squared Error (MSE)",
      D: "ROC-AUC"
    },
    correctAnswer: "C",
    explanation: "Mean Squared Error (MSE) is a foundational regression metric calculated as the average of the squared differences between actual values (y_i) and predicted values (y_hat_i): MSE = (1/n) * sum((y_i - y_hat_i)^2).",
    solution: "Formula:\nMSE = (1/n) * sum_{i=1}^n (y_i - y_hat_i)^2",
    distractors: {
      A: "Precision evaluates positive predictive value in classification.",
      B: "Recall measures true positive capture rate in classification.",
      D: "ROC-AUC evaluates ranking and threshold trade-offs in binary classification."
    },
    keyTakeaway: "MSE = (1/n) * sum((y - y_hat)^2). Squares errors, penalizing large residual deviations heavily.",
    difficulty: "Easy",
    tags: ["MSE", "Regression Metrics"]
  },
  {
    id: 93,
    sectionId: "D",
    sectionTitle: "Section D: Fundamentals, Evaluation & Responsible AI",
    question: "A classification model correctly identifies 90 out of 100 observations. What is its accuracy?",
    options: {
      A: "9%",
      B: "90%",
      C: "10%",
      D: "100%"
    },
    correctAnswer: "B",
    explanation: "Accuracy is the ratio of correct predictions to the total number of predictions: Accuracy = (Correct Predictions / Total Predictions) * 100% = (90 / 100) * 100% = 90%.",
    solution: "Given:\n- Correct Predictions = 90\n- Total Predictions = 100\n\nCalculation:\nAccuracy = (90 / 100) * 100% = 90%",
    distractors: {
      A: "9% is 90 divided by 1000.",
      C: "10% is the error rate (100% - 90%).",
      D: "100% would require all 100 observations to be predicted correctly."
    },
    keyTakeaway: "Accuracy = (Correct / Total) * 100 = (90/100) * 100 = 90%.",
    difficulty: "Easy",
    tags: ["Accuracy", "Classification Metrics"]
  },
  {
    id: 94,
    sectionId: "D",
    sectionTitle: "Section D: Fundamentals, Evaluation & Responsible AI",
    question: "In classification, what does precision measure?",
    options: {
      A: "The proportion of actual positives identified correctly",
      B: "The proportion of predicted positives that are actually positive",
      C: "The proportion of all predictions that are incorrect",
      D: "The average squared prediction error"
    },
    correctAnswer: "B",
    explanation: "Precision (Positive Predictive Value) measures the proportion of positive predictions that are truly positive: Precision = TP / (TP + FP). It answers: 'Out of all instances the model predicted as positive, how many were correct?'",
    solution: "Formula:\nPrecision = TP / (TP + FP)",
    distractors: {
      A: "The proportion of actual positives identified correctly is Recall (Sensitivity).",
      C: "The proportion of incorrect predictions is the Error Rate (1 - Accuracy).",
      D: "The average squared error is Mean Squared Error (MSE)."
    },
    keyTakeaway: "Precision = TP / (TP + FP) -> Focuses on minimizing False Positives (FP).",
    difficulty: "Easy",
    tags: ["Precision", "Classification Metrics"]
  },
  {
    id: 95,
    sectionId: "D",
    sectionTitle: "Section D: Fundamentals, Evaluation & Responsible AI",
    question: "What does recall measure in a classification problem?",
    options: {
      A: "The proportion of actual positive cases correctly identified",
      B: "The proportion of predicted positive cases that are correct",
      C: "The storage space used by the model",
      D: "The time required to load a database"
    },
    correctAnswer: "A",
    explanation: "Recall (Sensitivity or True Positive Rate) measures the proportion of actual ground-truth positive cases that were correctly captured by the model: Recall = TP / (TP + FN). It answers: 'Out of all actual positives, how many did the model find?'",
    solution: "Formula:\nRecall = TP / (TP + FN)",
    distractors: {
      B: "The proportion of predicted positive cases that are correct is Precision.",
      C: "Model storage space is measured in file size (e.g. MB of pickle/ONNX file).",
      D: "Time to load a database is database latency."
    },
    keyTakeaway: "Recall = TP / (TP + FN) -> Focuses on minimizing False Negatives (FN).",
    difficulty: "Easy",
    tags: ["Recall", "Sensitivity", "Classification Metrics"]
  },
  {
    id: 96,
    sectionId: "D",
    sectionTitle: "Section D: Fundamentals, Evaluation & Responsible AI",
    question: "What is overfitting in predictive modeling?",
    options: {
      A: "The model performs poorly on both training and test data in every case",
      B: "The model learns training data too closely and generalizes poorly to unseen data",
      C: "The model uses no training data",
      D: "The model always produces identical predictions"
    },
    correctAnswer: "B",
    explanation: "Overfitting occurs when a statistical or machine learning model memorizes idiosyncratic noise and random fluctuations in the training dataset rather than true underlying patterns, resulting in near-perfect training scores but poor generalization on unseen validation/test data.",
    solution: null,
    distractors: {
      A: "Performing poorly on both training and test sets is underfitting (high bias).",
      C: "Supervised models require training data to fit parameters.",
      D: "Producing identical predictions is extreme underfitting or mode collapse."
    },
    keyTakeaway: "Overfitting = High Training Performance + Poor Test/Generalization Performance (High Variance).",
    difficulty: "Easy",
    tags: ["Overfitting", "Bias-Variance Tradeoff"]
  },
  {
    id: 97,
    sectionId: "D",
    sectionTitle: "Section D: Fundamentals, Evaluation & Responsible AI",
    question: "Why is cross-validation used during model development?",
    options: {
      A: "To estimate model performance across multiple data splits",
      B: "To encrypt training data",
      C: "To guarantee zero prediction error",
      D: "To eliminate the need for feature engineering"
    },
    correctAnswer: "A",
    explanation: "Cross-validation (such as K-Fold CV) splits the dataset into K subsets, iteratively training on K-1 folds and validating on the remaining fold. Averaging performance across all K folds yields a much more stable, reliable, and lower-variance estimate of generalization performance than a single random split.",
    solution: null,
    distractors: {
      B: "Cross-validation is a statistical evaluation technique, not a cryptographic encryption tool.",
      C: "No validation technique can eliminate irreducible error or guarantee zero error.",
      D: "Proper feature engineering remains essential regardless of validation strategy."
    },
    keyTakeaway: "Cross-validation assesses model stability and generalization by evaluating performance across multiple data partitions.",
    difficulty: "Easy",
    tags: ["Cross-Validation", "K-Fold", "Model Evaluation"]
  },
  {
    id: 98,
    sectionId: "D",
    sectionTitle: "Section D: Fundamentals, Evaluation & Responsible AI",
    question: "Which of the following is an important ethical concern in predictive analytics?",
    options: {
      A: "Using clear chart titles",
      B: "Reducing unnecessary storage costs",
      C: "Algorithmic bias and unfair treatment of certain groups",
      D: "Correctly calculating mean squared error"
    },
    correctAnswer: "C",
    explanation: "Algorithmic bias—where models perpetuate, amplify, or encode historical systemic biases leading to disparate impact and unfair treatment of protected demographic groups in credit, hiring, healthcare, or criminal justice—is a paramount ethical concern in AI and predictive analytics.",
    solution: null,
    distractors: {
      A: "Chart titles are visual presentation practices.",
      B: "Storage cost reduction is a FinOps/IT efficiency goal.",
      D: "Metric computation correctness is a mathematical verification task."
    },
    keyTakeaway: "Responsible AI mandates proactively mitigating algorithmic bias to ensure fairness, accountability, and equity.",
    difficulty: "Easy",
    tags: ["Ethics", "Algorithmic Bias", "Responsible AI"]
  },
  {
    id: 99,
    sectionId: "D",
    sectionTitle: "Section D: Fundamentals, Evaluation & Responsible AI",
    question: "Which practice is most appropriate when handling sensitive personal data for predictive analysis?",
    options: {
      A: "Sharing identifiable data publicly",
      B: "Collecting all possible personal information regardless of need",
      C: "Applying data minimization, appropriate security, and privacy safeguards",
      D: "Removing access controls to simplify collaboration"
    },
    correctAnswer: "C",
    explanation: "Responsible data governance mandates applying data minimization (limiting collection strictly to what is necessary), robust encryption (at rest and in transit), role-based access restrictions, and privacy-preserving techniques (anonymization, differential privacy).",
    solution: null,
    distractors: {
      A: "Publicly leaking sensitive personal data is an illegal privacy breach.",
      B: "Hoarding unnecessary personal information violates data minimization principles.",
      D: "Removing access controls creates critical security vulnerabilities."
    },
    keyTakeaway: "Sensitive data demands rigorous data minimization, encryption, anonymization, and access controls.",
    difficulty: "Easy",
    tags: ["Privacy", "Data Governance", "Ethics"]
  },
  {
    id: 100,
    sectionId: "D",
    sectionTitle: "Section D: Fundamentals, Evaluation & Responsible AI",
    question: "After deploying a predictive model, why should its performance be monitored regularly?",
    options: {
      A: "Because deployed models never change",
      B: "To detect changes in data patterns, model performance, or fairness over time",
      C: "To avoid collecting any new data",
      D: "To guarantee that the original model remains optimal forever"
    },
    correctAnswer: "B",
    explanation: "Real-world environments evolve, causing data drift (shifts in feature distributions P(X)) and concept drift (shifts in the statistical relationship between features and target P(Y|X)). Regular monitoring detects performance degradation, ensuring models are recalibrated or retrained in a timely manner.",
    solution: null,
    distractors: {
      A: "While model code may be static, input data distributions constantly evolve.",
      C: "Monitoring requires telemetry on newly ingested inference data.",
      D: "No static model remains optimal indefinitely without monitoring and retraining."
    },
    keyTakeaway: "Model monitoring detects data drift and concept drift to trigger timely model recalibration and retraining.",
    difficulty: "Easy",
    tags: ["Model Monitoring", "Data Drift", "MLOps"]
  }
];

module.exports = {
  unit2Sections,
  unit2RevisionSheet,
  unit2Questions
};
