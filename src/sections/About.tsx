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
              Passionate developer with a love for creating innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                With over 3 years of experience in full-stack development, I specialize in creating 
                robust web applications using modern technologies like React, Node.js, and Python. 
                My journey in tech started with a curiosity about how things work, and it has evolved 
                into a passion for building solutions that make a real impact.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm particularly interested in the intersection of web development and artificial intelligence, 
                constantly exploring how AI can enhance user experiences and streamline business processes. 
                When I'm not coding, you'll find me contributing to open-source projects or mentoring 
                aspiring developers.
              </p>

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