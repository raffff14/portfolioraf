import React from 'react';
import { Code, Database, Cloud, Palette, Terminal, Globe, Layers, Zap, BarChart3, FileSpreadsheet, Table, GitBranch, Container, Server, Figma, Monitor } from 'lucide-react';
import { skills } from '../data/skills';

export function Skills() {
  const skillsByCategory = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools')
  };

  const categoryTitles = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    tools: 'Tools & Technologies'
  };

  const categoryColors = {
    frontend: 'text-blue-600 dark:text-blue-400',
    backend: 'text-green-600 dark:text-green-400',
    tools: 'text-orange-600 dark:text-orange-400'
  };

  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'React': <Code className="w-8 h-8" />,
      'TypeScript': <Terminal className="w-8 h-8" />,
      'Tailwind CSS': <Palette className="w-8 h-8" />,
      'Next.js': <Globe className="w-8 h-8" />,
      'Vue.js': <Layers className="w-8 h-8" />,
      'Node.js': <Server className="w-8 h-8" />,
      'Python': <Zap className="w-8 h-8" />,
      'PostgreSQL': <Database className="w-8 h-8" />,
      'MongoDB': <Database className="w-8 h-8" />,
      'GraphQL': <BarChart3 className="w-8 h-8" />,
      'Git': <GitBranch className="w-8 h-8" />,
      'Docker': <Container className="w-8 h-8" />,
      'AWS': <Cloud className="w-8 h-8" />,
      'Figma': <Figma className="w-8 h-8" />,
      'VS Code': <Monitor className="w-8 h-8" />,
      'Power BI': <BarChart3 className="w-8 h-8" />,
      'Excel': <FileSpreadsheet className="w-8 h-8" />,
      'Tableau': <Table className="w-8 h-8" />
    };
    return iconMap[skillName] || <Code className="w-8 h-8" />;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                <h3 className={`text-xl font-semibold ${categoryColors[category as keyof typeof categoryColors]} mb-6 text-center`}>
                  {categoryTitles[category as keyof typeof categoryTitles]}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                      <div className={`${categoryColors[category as keyof typeof categoryColors]} mb-2`}>
                        {getSkillIcon(skill.name)}
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}