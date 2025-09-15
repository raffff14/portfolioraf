import React from 'react';
import { Code, Coffee, Globe, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I’m Rafhael Malabanan, an aspiring front-end developer with additional experience in back-end development and data analysis. During my internship and role as an AI Specialist at Kaizenaire, I worked on projects involving SEO optimization, leveraging tools like Ahrefs and SEMrush to improve online visibility.<br /><br />
              I also have experience with Power BI, where I analyzed and visualized data to support business decisions, including insights from our family business. My passion lies in building user-friendly, responsive web applications and exploring how AI and data can enhance digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <Code className="text-blue-600 dark:text-blue-400" size={24} />
                  <span className="text-gray-700 dark:text-gray-300">Clean Code</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="text-purple-600 dark:text-purple-400" size={24} />
                  <span className="text-gray-700 dark:text-gray-300">Coffee Lover</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-emerald-600 dark:text-emerald-400" size={24} />
                  <span className="text-gray-700 dark:text-gray-300">Remote Work</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="text-red-500 dark:text-red-400" size={24} />
                  <span className="text-gray-700 dark:text-gray-300">Open Source</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                  alt="Developer workspace"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl -z-10"></div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Problem Solver
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I love tackling complex challenges and finding elegant solutions that are both efficient and maintainable.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Team Player
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Collaboration is key to great software. I thrive in team environments and enjoy mentoring others.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Lifelong Learner
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Technology evolves rapidly, and I'm committed to continuous learning and staying current with trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}