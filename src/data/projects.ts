import { Project } from '@/types';

export const featuredProjects: Project[] = [
  {
    id: 'neurohr-ai',
    slug: 'neurohr-ai',
    title: 'NeuroHR AI',
    category: 'AI & Intelligence',
    tagline: 'AI-Powered Enterprise HR & Workforce Intelligence Platform',
    status: 'In Active Development',
    description:
      'An intelligent human resources and workforce analytics platform leveraging modern LLMs, semantic vector search, and Retrieval-Augmented Generation (RAG) to automate talent screening, policy synthesis, and organizational insights.',
    fullOverview:
      'NeuroHR AI bridges modern foundational AI capabilities with enterprise human resources workflows. The platform ingests candidate profiles, performance records, and company knowledge bases into a high-dimensional vector store, enabling HR teams to query internal policies, conduct multi-parameter talent matching, and generate objective evaluation summaries with minimal hallucination.',
    problemStatement:
      'Traditional HR operations face severe bottlenecks in resume screening volume, inconsistent candidate evaluation criteria, and delayed policy queries across extensive company handbooks.',
    solution:
      'Architected a RAG-backed intelligence platform using FastAPI and ChromaDB vector indexing. Implemented contextual document chunking, prompt orchestration via LangChain, and grounded semantic responses utilizing Hugging Face embeddings and the Gemini API.',
    technologies: [
      'Python',
      'FastAPI',
      'LangChain',
      'Hugging Face',
      'ChromaDB',
      'Gemini API',
      'PostgreSQL',
      'Docker',
    ],
    keyFeatures: [
      'Context-aware RAG engine for enterprise policy Q&A with source attribution',
      'Semantic candidate-job description matching with explainable scoring',
      'High-throughput vector indexing using ChromaDB and embedding models',
      'Role-based access control and strict enterprise data segregation',
      'Fast asynchronous API endpoints built with FastAPI and Pydantic validation',
    ],
    architecture: {
      summary:
        'Decoupled microservice architecture featuring an asynchronous FastAPI gateway, ChromaDB vector store, LangChain prompt orchestration, and Gemini API inference pipeline.',
      workflow: [
        'Document Ingestion: Resumes and HR documentation parsed and normalized into text chunks.',
        'Embedding Generation: Text representations encoded into vector embeddings via Hugging Face transformer models.',
        'Vector Storage: High-dimensional vectors indexed inside ChromaDB for similarity search.',
        'Query Orchestration: LangChain agent validates queries, performs hybrid retrieval, and injects context.',
        'Inference & Validation: Gemini API processes grounded context, returning structured analytical output.',
      ],
      aiMl: ['Hugging Face Embeddings', 'ChromaDB Vector Store', 'LangChain Agents', 'Gemini API LLM'],
      backend: ['FastAPI Asynchronous Gateway', 'Python 3.11', 'Pydantic V2', 'SQLAlchemy'],
      infrastructure: ['Docker Containerization', 'Automated Testing', 'Environment Isolation'],
    },
  },
  {
    id: 'gorush',
    slug: 'gorush',
    title: 'GoRush',
    category: 'Full-Stack & Mobility',
    tagline: 'Real-Time Multi-Tier Mobility & Ride-Hailing Platform',
    status: 'In Active Development',
    description:
      'An end-to-end urban mobility and ride-booking ecosystem featuring dedicated passenger and driver mobile applications, real-time geospatial tracking, dynamic surge pricing, and a centralized administrative dispatch console.',
    fullOverview:
      'GoRush was engineered to solve the complex coordination challenges of on-demand urban transportation. The ecosystem connects passenger booking requests, real-time driver telemetry, intelligent dispatch algorithms, and a comprehensive operations command center.',
    problemStatement:
      'Urban mobility systems require sub-second dispatch coordination, high-frequency location streaming, reliable pricing matrices, and fault-tolerant transaction handling under heavy peak loads.',
    solution:
      'Engineered a modular backend architecture leveraging Node.js/NestJS with WebSocket communication for live driver tracking, integrated Google Maps APIs for routing and ETA calculation, and designed a normalized PostgreSQL schema with geospatial indexing.',
    technologies: [
      'Flutter',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'WebSockets',
      'Redis',
      'Maps APIs',
      'Docker',
    ],
    keyFeatures: [
      'Bidirectional live geospatial vehicle tracking powered by WebSockets',
      'Intelligent driver-passenger dispatch matching based on proximity and ETA',
      'Dynamic fare calculation engine incorporating distance, duration, and demand zones',
      'Comprehensive Admin & Dispatch Dashboard for fleet management and trip monitoring',
      'Cross-platform mobile experience engineered with Flutter for iOS and Android',
    ],
    architecture: {
      summary:
        'Real-time event-driven mobility platform combining NestJS WebSocket gateways, Redis caching for active geospatial coordinates, and relational durability in PostgreSQL.',
      workflow: [
        'Location Telemetry: Driver apps broadcast latitude/longitude coordinates over persistent WebSockets.',
        'In-Memory Ingestion: Redis stores ephemeral driver locations with geospatial radius querying.',
        'Trip Lifecycle: Ride requests trigger state-machine transitions (Requested -> Accepted -> In Progress -> Completed).',
        'Routing & Geofencing: Integrated Maps APIs compute optimal route corridors and transit times.',
        'Administrative Audit: Real-time telemetry visualized on an interactive management console.',
      ],
      backend: ['NestJS Framework', 'WebSocket Gateway', 'Node.js', 'Redis Geo'],
      frontend: ['Flutter Mobile Applications (Client & Driver)', 'React.js Admin Dashboard'],
      database: ['PostgreSQL Relational Storage', 'PostGIS Geospatial Extension'],
    },
  },
  {
    id: 'climate-change-agricultural-modeling',
    slug: 'climate-change-agricultural-modeling',
    title: 'Climate Change Modeling for Agricultural Lands',
    category: 'Machine Learning & Predictive',
    tagline: 'Predictive Climate & Agro-Ecological Impact Analysis System',
    status: 'Completed Prototype',
    description:
      'A machine learning-driven analytical framework that models climatic anomalies, soil moisture variations, and precipitation trends to forecast agricultural yield risks and suggest adaptive crop management strategies.',
    fullOverview:
      'This research and predictive modeling project investigates the tangible effects of shifting meteorological variables on agricultural productivity. By consolidating historical climate telemetry and agronomic datasets, the system identifies stress zones and delivers visual spatial intelligence.',
    problemStatement:
      'Farmers and agrarian policy analysts lack accessible, data-backed predictive models to anticipate how micro-climate shifts and irregular precipitation patterns threaten localized crop output.',
    solution:
      'Developed a multi-stage machine learning pipeline utilizing Random Forest regression and gradient boosting models trained on meteorological datasets. Built an interactive Streamlit exploration suite featuring Folium geospatial overlays and Matplotlib/Seaborn trend analytics.',
    technologies: [
      'Python',
      'Streamlit',
      'Random Forest',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Folium',
      'Data Visualization',
    ],
    keyFeatures: [
      'Random Forest predictive modeling for agro-yield variance assessment',
      'Interactive spatial geospatial mapping of vulnerable land zones using Folium',
      'Exploratory data analysis (EDA) pipelines uncovering precipitation and temperature correlations',
      'Intuitive web exploration interface built with Streamlit for rapid scenario modeling',
      'Comprehensive feature importance breakdown evaluating soil metrics and weather factors',
    ],
    architecture: {
      summary:
        'Modular data science pipeline with exploratory analysis, feature engineering, model training/validation, and interactive Streamlit spatial dashboard.',
      workflow: [
        'Data Ingestion: Historical agro-meteorological records imported and cleaned with Pandas/NumPy.',
        'Feature Engineering: Rolling weather averages, temperature differentials, and soil indices calculated.',
        'Model Training: Scikit-learn Random Forest regressor optimized via hyperparameter grid tuning.',
        'Validation: Cross-validation performed to measure RMSE and R² predictive fidelity.',
        'Visualization: Interactive Folium tile maps and Streamlit controls rendered for end users.',
      ],
      aiMl: ['Random Forest Regressor', 'Scikit-learn', 'Feature Importance Analytics'],
      backend: ['Python 3.10', 'Pandas', 'NumPy'],
      frontend: ['Streamlit Dashboard', 'Folium Interactive Maps'],
    },
  },
  {
    id: 'return-order-verification-saas',
    slug: 'return-order-verification-saas',
    title: 'Return Order Verification SaaS',
    category: 'Enterprise SaaS & Cloud',
    tagline: 'Barcode/QR-Driven E-Commerce Reverse Logistics Platform',
    status: 'In Active Development',
    description:
      'An enterprise reverse-logistics platform designed to streamline e-commerce return verification, eliminate fraudulent customer returns, support bulk manifest imports, and automate tiered subscription billing.',
    fullOverview:
      'Return Order Verification SaaS tackles one of the highest-friction segments of e-commerce supply chains: return merchandise inspection. The solution synchronizes mobile scanner hardware with warehouse inventory records to ensure incoming returns match authentic order manifests.',
    problemStatement:
      'E-commerce merchants lose substantial margins to return fraud, manual barcode logging errors, and unverified package contents during high-volume warehouse intake.',
    solution:
      'Architected a cloud-connected verification service with an Android mobile scanning client communicating via authenticated REST APIs to a scalable Node.js backend. Integrated bulk CSV/Excel manifest ingestion, instant barcode verification logic, and automated tenancy management.',
    technologies: [
      'Android',
      'Node.js',
      'Express.js',
      'REST APIs',
      'Database Architecture',
      'QR / Barcode Scanning',
      'Docker',
    ],
    keyFeatures: [
      'High-speed optical QR and 1D/2D barcode scanning on native Android devices',
      'Instant verification engine validating return SKU against master fulfillment records',
      'Bulk manifest file import supporting massive order processing queues',
      'Multi-tenant subscription architecture with tier limits and merchant settings',
      'Audit log generation recording timestamped warehouse intake inspections',
    ],
    architecture: {
      summary:
        'Client-server architecture coupling native Android hardware scanner integration with a secured Node.js backend and relational database storage.',
      workflow: [
        'Manifest Ingestion: Merchant uploads bulk order manifests into the web management portal.',
        'Warehouse Scan: Warehouse personnel scan incoming package QR/barcode using the Android app.',
        'API Verification: Mobile app dispatches authenticated payload to the Node.js API.',
        'Status Validation: Backend matches SKU, order ID, and return authorization state in real-time.',
        'Intake Confirmation: Instant visual feedback returned to scanner and database state updated.',
      ],
      frontend: ['Android Native Scanner App', 'Responsive Merchant Web Portal'],
      backend: ['Node.js', 'Express.js', 'RESTful API Services', 'JWT Authentication'],
      database: ['Relational Database Architecture', 'Transaction Logs'],
    },
  },
];
