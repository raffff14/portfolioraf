import React from 'react';
import { GraduationCap, Briefcase, Award, Calendar, MapPin, ChevronRight } from 'lucide-react';

export function Experience() {
  const timeline = [
    {
      type: "education",
      degree: "High School Graduate",
      school: "Holy Family Academy",
      period: "2015 - 2021",
      location: "Angeles, Philippines",
      achievements: [],
      icon: <GraduationCap className="w-6 h-6" />,
      color: "blue"
    },
    {
      type: "education",
      degree: "Bachelor's Degree in Computer Science",
      school: "Holy Angel University",
      period: "2018 — 2025",
      location: "Angeles, Philippines",
      achievements: ["5x Dean's Lister"],
      icon: <GraduationCap className="w-6 h-6" />,
      color: "blue"
    },
    {
      type: "experience",
      title: "Member",
      company: "League of Outstanding Programmers",
      period: "2021 — 2024",
      location: "Holy Angel University",
      description: "Active member of the university's programming organization, participating in coding competitions and collaborative projects to improve technical skills.",
      icon: <Award className="w-6 h-6" />,
      color: "purple"
    },
    {
      type: "experience",
      title: "Member",
      company: "Google Student Developer Club (GDSC)",
      period: "2022 — 2024",
      location: "Holy Angel University",
      description: "Participated in Google's developer community, attending workshops, hackathons, and tech talks to enhance programming skills and stay updated with latest technologies.",
      icon: <Award className="w-6 h-6" />,
      color: "green"
    },
    {
      type: "experience",
      title: "AI & SEO Specialist",
      company: "Kaizenaire",
      period: "2024 — 2025",
      location: "Remote",
      description: "Developed advanced prompt engineering strategies for generative AI, improving automation and content quality for clients. Collaborated with cross-functional teams to integrate AI solutions into business workflows.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "orange",
      current: false
    }
  ];

  const getColorClasses = (color: string, type: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-500',
        gradient: 'from-blue-500 to-blue-600'
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-500',
        gradient: 'from-purple-500 to-purple-600'
      },
      green: {
        bg: 'bg-green-100 dark:bg-green-900',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-500',
        gradient: 'from-green-500 to-green-600'
      },
      orange: {
        bg: 'bg-orange-100 dark:bg-orange-900',
        text: 'text-orange-600 dark:text-orange-400',
        border: 'border-orange-500',
        gradient: 'from-orange-500 to-orange-600'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A timeline of my educational and professional journey
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => {
                const colors = getColorClasses(item.color, item.type);
                const isLast = index === timeline.length - 1;
                
                return (
                  <div key={index} className="relative flex items-start gap-6 group">
                    {/* Timeline Dot */}
                    <div className={`relative z-10 flex-shrink-0 w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center ${colors.text} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {item.icon}
                      {item.current && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                      )}
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${colors.border} group-hover:-translate-y-1`}>
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          {item.type === 'education' ? (
                            <>
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                {item.degree}
                              </h4>
                              <p className={`${colors.text} font-medium`}>
                                {item.school}
                              </p>
                            </>
                          ) : (
                            <>
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                {item.title}
                              </h4>
                              <p className={`${colors.text} font-medium`}>
                                {item.company}
                              </p>
                            </>
                          )}
                        </div>
                        {item.current && (
                          <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>

                      {item.achievements && item.achievements.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.achievements.map((achievement, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1 bg-gradient-to-r ${colors.gradient} text-white text-xs font-medium rounded-full`}
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      )}

                      {item.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Arrow for non-last items */}
                    {!isLast && (
                      <div className="absolute left-12 top-16 text-gray-400 dark:text-gray-600">
                        <ChevronRight className="w-4 h-4 rotate-90" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
