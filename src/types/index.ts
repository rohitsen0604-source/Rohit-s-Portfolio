export interface PersonalInfo {
  name: string;
  primaryDesignation: string;
  professionalPositioning: string[];
  location: string;
  headline: string;
  heroDescription: string;
  bio: string[];
  primaryCTAs: {
    work: string;
    contact: string;
  };
  secondaryCTA: {
    resume: string;
  };
}

export interface ExperienceRole {
  title: string;
  employmentType: 'Full-time' | 'Internship' | 'Freelance' | 'Self-employed' | 'Contract';
  duration: string;
  location?: string;
  workMode?: 'On-site' | 'Remote' | 'Hybrid';
  description?: string;
  responsibilities?: string[];
  skills?: string[];
  focusAreas?: string[];
  isCurrent?: boolean;
}

export interface ExperienceCompany {
  id: string;
  companyName: string;
  companyLogoPlaceholder?: string;
  website?: string;
  location: string;
  workMode: 'On-site' | 'Remote' | 'Hybrid';
  roles: ExperienceRole[];
  displayGrouped?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    proficiency?: string;
    highlight?: boolean;
    icon?: string;
  }[];
}

export interface ProjectArchitecture {
  summary: string;
  frontend?: string[];
  backend?: string[];
  aiMl?: string[];
  database?: string[];
  infrastructure?: string[];
  workflow?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'AI & Intelligence' | 'Full-Stack & Mobility' | 'Machine Learning & Predictive' | 'Enterprise SaaS & Cloud';
  tagline: string;
  description: string;
  fullOverview: string;
  problemStatement: string;
  solution: string;
  status: 'In Active Development' | 'Production / Live' | 'Completed Prototype' | 'Ongoing Research';
  technologies: string[];
  keyFeatures: string[];
  architecture?: ProjectArchitecture;
  metrics?: { label: string; value: string }[];
  githubUrl?: string; // Verified only
  liveDemoUrl?: string; // Verified only
  previewImage?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  duration?: string;
  institution?: string;
  description?: string;
  highlight?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  verificationUrl?: string;
  issueDate?: string;
  badge?: string;
  skillsCovered: string[];
}

export interface EngineeringCapability {
  id: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  email: string;
  twitter?: string;
}

