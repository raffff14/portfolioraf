import { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { name: 'Next.js', level: 88, category: 'frontend' },
  { name: 'Vue.js', level: 75, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 90, category: 'backend' },
  { name: 'Python', level: 92, category: 'backend' },
  { name: 'PostgreSQL', level: 85, category: 'backend' },
  { name: 'MongoDB', level: 82, category: 'backend' },
  { name: 'GraphQL', level: 78, category: 'backend' },

  // Tools
  { name: 'Git', level: 95, category: 'tools' },
  { name: 'Docker', level: 80, category: 'tools' },
  { name: 'AWS', level: 75, category: 'tools' },
  { name: 'Figma', level: 85, category: 'tools' },
  { name: 'VS Code', level: 98, category: 'tools' }
];