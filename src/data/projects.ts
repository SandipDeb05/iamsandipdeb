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
    title: "ClarityAI - Chrome Extension",
    description:
      "An AI-powered Chrome extension that delivers instant summaries, clarifications, and answers from active web pages.",
    techStack: ["React", "TypeScript", "Gemini 1.5 Flash-8B"],
    githubUrl: "https://github.com/SandipDeb05/clarityai",
    // liveUrl: "https://clarityai-demo.com",
    featured: true,
  },
  {
    id: "2",
    title: "DatacoreJS - NPM Package",
    description:
      "An NPM package featuring essential data structures built in JavaScript. Supporting both Node.js and browser environments.",
    techStack: ["JavaScript", "Rollup", "Node", "NPM"],
    githubUrl: "https://github.com/SandipDeb05/datacorejs",
    liveUrl: "https://www.npmjs.com/package/datacorejs",
    featured: true,
  },
  {
    id: "3",
    title: "Gaming Dice - Web App",
    description:
      "An e-commerce app built with Next, Sanity CMS, and Stripe, featuring real-time product management and secure payments.",
    techStack: ["Next", "Sanity CMS", "Stripe"],
    githubUrl: "https://github.com/SandipDeb05/gamingdice",
    liveUrl: "https://gamingdice.vercel.app/",
    featured: true,
  },
  {
    id: "4",
    title: "The Movie Tone",
    description:
      "A fully responsive movie finder app built with React, featuring modern design, best practices, and clean architecture.",
    techStack: ["React", "OMDB API", "Javascript"],
    githubUrl: "https://github.com/SandipDeb05/the-movie-tone",
    liveUrl: "https://themovietone.netlify.app/",
    featured: false,
  },
];

export const featuredProjects = allProjects.filter(
  (project) => project.featured
);
