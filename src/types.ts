export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  image: string;
}

export interface Skill {
  name: string;
  category: 'Programming' | 'Frontend' | 'Backend' | 'Cloud' | 'Testing' | 'Soft Skills' | 'Interests';
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  certificateUrl?: string;
}

export interface Certification {
  provider: string;
  title: string;
  session?: string;
  duration?: string;
  result?: string;
  score?: string;
  credits?: number;
  learningOutcomes?: string[];
  certificateUrl?: string;
}
