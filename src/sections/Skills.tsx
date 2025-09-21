import React from 'react';
import { Code, Database, Cloud, Palette, Terminal, Globe, Layers, Zap, BarChart3, FileSpreadsheet, Table, GitBranch, Container, Server, Figma, Monitor, Image } from 'lucide-react';
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
      'Java': <Code className="w-8 h-8" />,
      'JavaScript': <Terminal className="w-8 h-8" />,
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
      'Tableau': <Table className="w-8 h-8" />,
      'PhotoShop': <Image className="w-8 h-8" />
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

          <div className="space-y-16">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category}>
                <h3 className={`text-2xl font-bold mb-8 ${categoryColors[category as keyof typeof categoryColors]} text-left`}>
                  {categoryTitles[category as keyof typeof categoryTitles]}
                </h3>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-4 sm:gap-6">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="relative flex flex-col items-center p-4 sm:p-5 rounded-2xl bg-white dark:bg-blue-950 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-purple-500 shadow-md hover:shadow-xl transition-all duration-200 group w-full sm:w-auto min-w-[180px] max-w-xs mb-2 sm:mb-0"
                      style={{ overflow: 'visible' }}
                    >
                      <div className="absolute -inset-0.5 rounded-2xl pointer-events-none z-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-orange-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 flex flex-col items-center w-full">
                        <div className={`mb-2 ${categoryColors[category as keyof typeof categoryColors]}`}>{getSkillIcon(skill.name)}</div>
                        <span className="text-base font-semibold text-gray-800 dark:text-gray-100 text-center">
                          {skill.name}
                          {skill.name === 'AI Prompting Engineer' && (
                            <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md align-middle">Featured</span>
                          )}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1 mb-2">
                          {skill.description}
                        </span>
                      </div>
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