export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'Web Dev' | 'AI' | 'Data';
  demoUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  description: string;
  company?: string; // Optional: company or context where skill was used
  experience?: string; // Optional: details about experience or role
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}