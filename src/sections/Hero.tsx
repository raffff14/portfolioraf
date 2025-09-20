import React from 'react';
import { ChevronDown, Download, Mail, Users, Award, GraduationCap } from 'lucide-react';
import { Button } from '../components/Button';

export function Hero() {
  const handleScrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-55 mx-auto mb-6 mt-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
              <img
                src="/portfolioraf/ProfilePictureRafhael.jpg"
                alt="Rafhael Malabanan"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Rafhael Malabanan
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
              Full Stack Developer & AI Enthusiast
            </p>
            
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I craft beautiful, scalable web applications and intelligent solutions that make a difference. 
              Passionate about clean code, user experience, and cutting-edge technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay">
            <Button
              variant="primary"
              size="lg"
              icon={Mail}
              onClick={handleScrollToContact}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={Download}
              href="#"
            >
              Download Resume
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12 animate-fade-in-delay-2">
            {/* Organizations Card */}
            <div className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Organizations
                </h3>
                <div className="space-y-3 w-full">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-3 group-hover:from-blue-100 group-hover:to-blue-200 dark:group-hover:from-blue-900/30 dark:group-hover:to-blue-800/30 transition-colors">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">League of Outstanding Programmer</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Member 2021 – 2024</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">Angeles, Philippines</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-3 group-hover:from-blue-100 group-hover:to-blue-200 dark:group-hover:from-blue-900/30 dark:group-hover:to-blue-800/30 transition-colors">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Google Developer Student Clubs</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Member 2021 – 2024</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">Angeles, Philippines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificates Card */}
            <div className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Certificates
                </h3>
                <div className="grid grid-cols-2 gap-2 w-full">
                  {['AWS Academy Cloud Foundations', 'Introduction to Cybersecurity', 'Cyber Ops Associate', 'Introduction to IoT', 'Critical Thinking', 'Advance Python', 'SQL for Data Analysis', 'Communication Foundations'].map((cert, index) => (
                    <div key={index} className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-2 group-hover:from-purple-100 group-hover:to-purple-200 dark:group-hover:from-purple-900/30 dark:group-hover:to-purple-800/30 transition-colors">
                      <p className="text-xs font-medium text-gray-900 dark:text-white text-center leading-tight">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Education
                </h3>
                <div className="space-y-4 w-full">
                  <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-lg p-4 group-hover:from-emerald-100 group-hover:to-emerald-200 dark:group-hover:from-emerald-900/30 dark:group-hover:to-emerald-800/30 transition-colors">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Bachelor of Science in Computer Science</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Holy Angel University</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">5x Dean's Lister</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">2021 – 2025, Angeles, Philippines</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-lg p-3 group-hover:from-emerald-100 group-hover:to-emerald-200 dark:group-hover:from-emerald-900/30 dark:group-hover:to-emerald-800/30 transition-colors">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Holy Family Academy</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-500">2015 – 2021, Angeles, Philippines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleScrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >

      </button>
    </section>
  );
}