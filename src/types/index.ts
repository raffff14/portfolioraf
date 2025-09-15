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
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}