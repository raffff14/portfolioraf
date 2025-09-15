import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and secure payments.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    category: "Web Dev",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "An AI-powered content generation tool that creates blog posts, social media content, and marketing copy using advanced language models and natural language processing.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    tags: ["Python", "TensorFlow", "OpenAI", "FastAPI", "React"],
    category: "AI",
    demoUrl: "https://ai-demo.example.com",
    githubUrl: "https://github.com/ai-example"
  },
  {
    id: 3,
    title: "Sales Analytics Dashboard",
    description: "Interactive data visualization dashboard for sales analytics with real-time metrics, forecasting, and customizable reports. Built with modern data visualization libraries.",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
    tags: ["Python", "Pandas", "Plotly", "Streamlit", "PostgreSQL"],
    category: "Data",
    demoUrl: "https://analytics.example.com",
    githubUrl: "https://github.com/analytics-example"
  }
];