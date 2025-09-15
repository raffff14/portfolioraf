import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { NavBar } from './components/NavBar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'John Doe - Full Stack Developer & AI Enthusiast';
    
    // Add meta tags for SEO
    const metaTags = [
      { name: 'description', content: 'John Doe - Full Stack Developer specializing in React, Node.js, Python, and AI solutions. Building scalable web applications and innovative digital experiences.' },
      { name: 'keywords', content: 'full stack developer, web developer, react, node.js, python, AI, machine learning, portfolio' },
      { name: 'author', content: 'John Doe' },
      { property: 'og:title', content: 'John Doe - Full Stack Developer Portfolio' },
      { property: 'og:description', content: 'Explore my portfolio featuring web development, AI projects, and data analytics solutions.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'John Doe - Full Stack Developer' },
      { name: 'twitter:description', content: 'Full Stack Developer & AI Enthusiast crafting innovative digital solutions.' }
    ];

    metaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[name="${tag.name}"], meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const metaTag = document.createElement('meta');
        if (tag.name) metaTag.name = tag.name;
        if (tag.property) metaTag.setAttribute('property', tag.property);
        metaTag.content = tag.content;
        document.head.appendChild(metaTag);
      }
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <NavBar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;