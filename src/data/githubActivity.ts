export interface GitHubHighlight {
  title: string;
  repo: string;
  description: string;
  language: string;
  languageColor: string;
  stars?: number;
  forks?: number;
  topics: string[];
  lastUpdated: string;
}

export const githubHighlights: GitHubHighlight[] = [
  {
    title: 'NeuroHR-AI-Core',
    repo: 'rohitsen0604-source/NeuroHR-AI-Core',
    description: 'FastAPI microservice implementing RAG pipelines, ChromaDB vector indexing, and Gemini API orchestration for HR intelligence.',
    language: 'Python',
    languageColor: '#3572A5',
    topics: ['fastapi', 'rag', 'langchain', 'chromadb', 'ai'],
    lastUpdated: 'Recent update',
  },
  {
    title: 'gorush-mobility-engine',
    repo: 'rohitsen0604-source/gorush-mobility-engine',
    description: 'Scalable NestJS dispatch service with WebSocket telemetry, geospatial Redis queries, and trip state management.',
    language: 'TypeScript',
    languageColor: '#3178C6',
    topics: ['nestjs', 'websockets', 'redis-geo', 'postgresql', 'mobility'],
    lastUpdated: 'Recent update',
  },
  {
    title: 'climate-agriculture-forecaster',
    repo: 'rohitsen0604-source/climate-agriculture-forecaster',
    description: 'Machine learning predictive models analyzing weather trends, soil telemetry, and crop yield risk metrics using Random Forest.',
    language: 'Python',
    languageColor: '#3572A5',
    topics: ['machine-learning', 'random-forest', 'streamlit', 'scikit-learn'],
    lastUpdated: 'Recent update',
  },
  {
    title: 'return-order-verifier-api',
    repo: 'rohitsen0604-source/return-order-verifier-api',
    description: 'Cloud API backend for high-volume QR/barcode return verification and warehouse inventory intake processing.',
    language: 'JavaScript',
    languageColor: '#F7DF1E',
    topics: ['nodejs', 'express', 'rest-api', 'logistics', 'saas'],
    lastUpdated: 'Recent update',
  },
];

export const developmentStats = {
  activeRepositories: '12+',
  primaryStack: ['Python', 'TypeScript', 'FastAPI', 'Next.js', 'PostgreSQL'],
  weeklyCommitFocus: 'Microservices & AI Workflows',
  codeQualityMetric: 'Strong Typing, Comprehensive Testing & Linting',
};

