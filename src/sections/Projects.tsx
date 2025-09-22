import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

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
              <Link
                to="/gallery"
                className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow hover:from-blue-700 hover:to-purple-700 transition-colors duration-200"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                View All
              </Link>
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 mt-4">Click any image to view full size. More available on the gallery page.</p>
          </div>

          {/* Infographic Designs Made */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Internship Infographic Designs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <img 
                  src="/portfolioraf/InfoGraphic-Designs/FaceBook-Post.png" 
                  alt="Facebook Post Infographic" 
                  className="rounded-lg shadow-md hover:scale-105 transition-transform duration-200 w-full cursor-pointer" 
                  onClick={() => window.open('/portfolioraf/InfoGraphic-Designs/FaceBook-Post.png', '_blank')}
                />
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Facebook Post Design</p>
              </div>
              <div className="text-center">
                <img 
                  src="/portfolioraf/InfoGraphic-Designs/Twitter-Post.png" 
                  alt="Twitter Post Infographic" 
                  className="rounded-lg shadow-md hover:scale-105 transition-transform duration-200 w-full cursor-pointer" 
                  onClick={() => window.open('/portfolioraf/InfoGraphic-Designs/Twitter-Post.png', '_blank')}
                />
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Twitter Post Design</p>
              </div>
              <div className="text-center">
                <img 
                  src="/portfolioraf/InfoGraphic-Designs/LinkedIn-Post.png" 
                  alt="LinkedIn Post Infographic" 
                  className="rounded-lg shadow-md hover:scale-105 transition-transform duration-200 w-full cursor-pointer" 
                  onClick={() => window.open('/portfolioraf/InfoGraphic-Designs/LinkedIn-Post.png', '_blank')}
                />
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">LinkedIn Post Design</p>
              </div>
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 mt-4">Click any infographic to view full size. Professional designs created during my internship at Kaizenaire.</p>
          </div>

          {/* Sample SEO Blog Posts (WordPress) */}
          <div className="mt-20" aria-labelledby="seo-blog-posts-heading">
            <h3 id="seo-blog-posts-heading" className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Sample SEO Blog Posts (WordPress)</h3>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Curated long-form posts optimized for search intent with compelling visuals and clear information architecture. Below are a few featured pieces published on WordPress.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Post 1: Korean Chicken Restaurants */}
              <article className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden" itemScope itemType="https://schema.org/BlogPosting">
                <a
                  href="https://kaizenaire.com/sg/best-korean-chicken-restaurants-in-singapore-a-delightful-culinary-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/portfolioraf/KoalaAiGeneratedImages-Internship/KoalaAiGeneratedImages-Internship/best_korean_chicken_restaurants_in_singapore.jpg"
                    alt="Best Korean chicken restaurants in Singapore — crispy fried chicken and sides"
                    loading="lazy"
                    className="w-full h-48 object-cover"
                    itemProp="image"
                  />
                </a>
                <div className="p-5">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2" itemProp="headline">
                    <a
                      href="https://kaizenaire.com/sg/best-korean-chicken-restaurants-in-singapore-a-delightful-culinary-guide"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Best Korean Chicken Restaurants in Singapore
                    </a>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4" itemProp="description">
                    A comprehensive guide to top spots for double-fried Korean chicken, with notes on flavours, sides, ambience, and value.
                  </p>
                  <a
                    href="https://kaizenaire.com/sg/best-korean-chicken-restaurants-in-singapore-a-delightful-culinary-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700"
                  >
                    Read Article
                  </a>
                </div>
              </article>

              {/* Post 2: Nasi Ambeng */}
              <article className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden" itemScope itemType="https://schema.org/BlogPosting">
                <a
                  href="https://kaizenaire.com/sg/must-try-nasi-ambeng-in-singapore-a-delightful-feast-to-savour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/portfolioraf/KoalaAiGeneratedImages-Internship/KoalaAiGeneratedImages-Internship/must_try_nasi_ambeng_in_singapore.jpg"
                    alt="Must-try nasi ambeng in Singapore — communal platter with rich Malay dishes"
                    loading="lazy"
                    className="w-full h-48 object-cover"
                    itemProp="image"
                  />
                </a>
                <div className="p-5">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2" itemProp="headline">
                    <a
                      href="https://kaizenaire.com/sg/must-try-nasi-ambeng-in-singapore-a-delightful-feast-to-savour"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Must-Try Nasi Ambeng in Singapore
                    </a>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4" itemProp="description">
                    Explore authentic nasi ambeng sets, where to find them, price points, and tips for a satisfying communal feast.
                  </p>
                  <a
                    href="https://kaizenaire.com/sg/must-try-nasi-ambeng-in-singapore-a-delightful-feast-to-savour"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700"
                  >
                    Read Article
                  </a>
                </div>
              </article>

              {/* Post 3: Dance Classes */}
              <article className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden" itemScope itemType="https://schema.org/BlogPosting">
                <a
                  href="https://kaizenaire.com/sg/must-try-dance-classes-in-singapore-a-fun-guide-to-get-you-moving"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/portfolioraf/KoalaAiGeneratedImages-Internship/KoalaAiGeneratedImages-Internship/must_try_dance_classes_in_singapore.jpg"
                    alt="Dance classes in Singapore — energetic studio vibe and movement"
                    loading="lazy"
                    className="w-full h-48 object-cover"
                    itemProp="image"
                  />
                </a>
                <div className="p-5">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2" itemProp="headline">
                    <a
                      href="https://kaizenaire.com/sg/must-try-dance-classes-in-singapore-a-fun-guide-to-get-you-moving"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Must-Try Dance Classes in Singapore
                    </a>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4" itemProp="description">
                    A fun guide to beginner-friendly studios, styles, and schedules to get started with confidence.
                  </p>
                  <a
                    href="https://kaizenaire.com/sg/must-try-dance-classes-in-singapore-a-fun-guide-to-get-you-moving"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700"
                  >
                    Read Article
                  </a>
                </div>
              </article>
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
              Images sourced from my internship gallery. All posts are optimized with descriptive titles, meta descriptions, internal linking, and structured data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}