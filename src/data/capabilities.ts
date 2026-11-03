import { EngineeringCapability } from '@/types';

export const engineeringCapabilities: EngineeringCapability[] = [
  {
    id: 'system-architecture',
    title: 'System Architecture & Scalability',
    tagline: 'Designing resilient, distributed, high-throughput digital backbones.',
    description:
      'Translating high-level business goals into robust software architectures. Designing asynchronous microservices, decoupling components, establishing event loops, and ensuring low-latency throughput under peak demands.',
    skills: ['Microservices Design', 'Event-Driven Architecture', 'RESTful API Standards', 'Scalability Patterns'],
    icon: 'Layers',
  },
  {
    id: 'fullstack-engineering',
    title: 'Full-Stack Web Engineering',
    tagline: 'Bridging modern frontends with performant server backends.',
    description:
      'Crafting clean, accessible, and reactive user interfaces using Next.js and TypeScript, wired to robust Python/Node.js backend microservices with strong typing, input sanitization, and state management.',
    skills: ['Next.js / React', 'TypeScript', 'State Management', 'Tailwind CSS', 'Responsive UI/UX'],
    icon: 'Layout',
  },
  {
    id: 'aiml-rag-integration',
    title: 'AI/ML & Intelligent Systems',
    tagline: 'Operationalizing LLMs, semantic search, and predictive models.',
    description:
      'Moving beyond toy AI scripts to production systems. Implementing Retrieval-Augmented Generation (RAG) pipelines, vector databases (ChromaDB), Hugging Face embeddings, and Scikit-learn predictive modeling.',
    skills: ['RAG Architectures', 'LangChain', 'Vector Search', 'Deep Learning', 'Prompt Engineering'],
    icon: 'Cpu',
  },
  {
    id: 'database-systems',
    title: 'Data & Database Architecture',
    tagline: 'Structuring performant relational models and scalable document stores.',
    description:
      'Designing normalized schema topologies, optimizing complex SQL queries, index tuning, and implementing Redis caching strategies to maximize query throughput and maintain ACID integrity.',
    skills: ['PostgreSQL', 'MongoDB', 'Redis Caching', 'Query Optimization', 'Schema Design'],
    icon: 'Database',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps',
    tagline: 'Automating continuous integration, containerization, and deployments.',
    description:
      'Setting up reproducible Docker environments, automating testing and linting pipelines with CI/CD, managing AWS/Azure cloud environments, and ensuring secure zero-downtime rollouts.',
    skills: ['Docker Containerization', 'CI/CD Pipelines', 'AWS / Azure', 'Git Workflow', 'Environment Isolation'],
    icon: 'Cloud',
  },
  {
    id: 'technical-leadership',
    title: 'Technical Leadership & Quality',
    tagline: 'Guiding engineering teams, enforcing best practices, and code reviews.',
    description:
      'Guiding developers, translating business requirements into clear technical specs, running comprehensive code reviews, establishing security and testing standards, and driving end-to-end execution.',
    skills: ['Code Reviews', 'Sprint Execution', 'Technical Mentorship', 'Client Collaboration'],
    icon: 'ShieldCheck',
  },
];
