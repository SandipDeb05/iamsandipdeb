export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
}

export const allProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    githubUrl: "https://github.com/username/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.com",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    techStack: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/username/task-manager",
    liveUrl: "https://task-manager-demo.com",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful visualizations.",
    techStack: ["React", "TypeScript", "Chart.js", "OpenWeatherMap API"],
    githubUrl: "https://github.com/username/weather-dashboard",
    liveUrl: "https://weather-demo.com",
    featured: true,
  },
  {
    id: "4",
    title: "Blog CMS",
    description:
      "A content management system for blogs with markdown support, user authentication, and admin dashboard.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/username/blog-cms",
    featured: false,
  },
  {
    id: "5",
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with modern web technologies and featuring dark/light mode toggle.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/username/portfolio",
    featured: false,
  },
  {
    id: "6",
    title: "API Gateway",
    description:
      "A microservices API gateway with rate limiting, authentication, and request routing capabilities.",
    techStack: ["Node.js", "Express", "Redis", "JWT", "Docker"],
    githubUrl: "https://github.com/username/api-gateway",
    featured: false,
  },
];

export const featuredProjects = allProjects.filter(
  (project) => project.featured
);
