import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { Button } from '../components/Button';

export function Projects() {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'primary' : 'ghost'}
                size="md"
                onClick={() => setFilter(category)}
                className={filter === category ? '' : 'hover:bg-blue-50 dark:hover:bg-blue-900/20'}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}

          {/* Koala AI Internship Gallery */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">AI Prompting Engineering Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                '/portfolioraf/KoalaAiGeneratedImages-Internship/KoalaAiGeneratedImages-Internship/best_adventure_brands_in_singapore.jpg',
                '/portfolioraf/KoalaAiGeneratedImages-Internship/KoalaAiGeneratedImages-Internship/best_afternoon_tea_spots_in_singapore.jpg',
                '/portfolioraf/KoalaAiGeneratedImages-Internship/KoalaAiGeneratedImages-Internship/best_alteration_services_in_singapore.jpg',
                '/portfolioraf/KoalaAiGeneratedImages-Internship/KoalaAiGeneratedImages-Internship/best_apple_cider_vinegar_brands_in_singapore.jpg',
                '/portfolioraf/KoalaAiGeneratedImages-Internship/KoalaAiGeneratedImages-Internship/best_brunch_spots_in_singapore.jpg',
                '/portfolioraf/KoalaAiGeneratedImages-Internship/KoalaAiGeneratedImages-Internship/best_cafes_in_the_east_of_singapore.jpg',
                '/portfolioraf/KoalaAiGeneratedImages-Internship/KoalaAiGeneratedImages-Internship/best_clinics_for_lasik_eye_surgery_in_singapore.jpg',
                '/portfolioraf/KoalaAiGeneratedImages-Internship/KoalaAiGeneratedImages-Internship/best_cupcake_bakeries_in_singapore.jpg'
              ].map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt={`Koala AI Internship ${idx+1}`}
                  className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
                  onClick={() => window.open(img, '_blank')}
                />
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <a
                href="/gallery"
                className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow hover:from-blue-700 hover:to-purple-700 transition-colors duration-200"
              >
                View All
              </a>
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 mt-4">Click any image to view full size. More available on the gallery page.</p>
          </div>

          {/* Graphics and Designs Made */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">BlogPost and Designs Made</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="https://kaizenaire.com/sg/best-alteration-services-in-singapore-tailoring-your-style-with-precision" target="_blank" rel="noopener noreferrer">
                <img src="/portfolioraf/KoalaAiGeneratedImages-Internship/KoalaAiGeneratedImages-Internship/best_alteration_services_in_singapore.jpg" alt="Best Alteration Services in Singapore" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-200 w-full" />
              </a>
              <a href="https://kaizenaire.com/sg/best-adventure-brands-in-singapore-explore-thrilling-experiences-and-gear" target="_blank" rel="noopener noreferrer">
                <img src="/portfolioraf/KoalaAiGeneratedImages-Internship/KoalaAiGeneratedImages-Internship/best_adventure_brands_in_singapore.jpg" alt="Best Adventure Brands in Singapore" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-200 w-full" />
              </a>
              <a href="https://kaizenaire.com/sg/best-place-to-buy-window-tint-films-in-singapore-your-go-to-guide-for-quality-and-value" target="_blank" rel="noopener noreferrer">
                <img src="/portfolioraf/KoalaAiGeneratedImages-Internship/KoalaAiGeneratedImages-Internship/best_place_to_buy_window_tint_films_in_singapore.jpg" alt="Best Place to Buy Window Tint Films in Singapore" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-200 w-full" />
              </a>
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 mt-4">Click any graphic to view the related blog post.</p>
          </div>
        </div>
      </div>
    </section>
  );
}