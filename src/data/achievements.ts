export interface Achievement {
  id: string;
  title: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
}

export const professionalAchievements: Achievement[] = [
  {
    id: 'lead-promotion',
    title: 'Rapid Promotion to Lead Software Developer',
    organization: 'Black Grapes Softech',
    period: '2026',
    summary:
      'Entrusted with full technical leadership of application architecture, guiding engineering teams, and establishing rigorous engineering standards.',
    highlights: [
      'Spearheading full-stack software development and system architecture across core enterprise projects',
      'Implementing modern CI/CD, code review standards, and microservice decoupling',
    ],
  },
  {
    id: 'zenvora-progression',
    title: 'Career Progression: Intern to Full-Time AI/ML Engineer',
    organization: 'Zenvora Pvt. Ltd.',
    period: '2026',
    summary:
      'Successfully converted from an AI/ML Intern to a full-time AI/ML Engineer through high-impact model delivery and technical problem solving.',
    highlights: [
      'Transitioned from exploratory model training into production AI systems engineering',
      'Delivered deep learning and NLP solutions for real-world enterprise applications',
    ],
  },
  {
    id: 'specialized-certifications',
    title: 'Professional Credentialing in Data Science & Analytics',
    organization: 'NPTEL, Accenture & Tata Group',
    period: 'Verified',
    summary:
      'Completed industry-recognized analytical certifications across data science mathematics, exploratory data analytics, and executive data visualization.',
    highlights: [
      'NPTEL Data Science for Engineers certification',
      'Accenture Data Analytics credential and Tata Data Visualization distinction',
    ],
  },
];

