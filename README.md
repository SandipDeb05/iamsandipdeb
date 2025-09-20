# I am Sandip Deb, Software Engineer.

A minimal, professional personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS.

## Features

- 🚀 **Next.js 14** with App Router
- 💻 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- 🌙 **Dark/Light Mode** toggle with persistence
- 📱 **Responsive Design** mobile-first approach
- 🔍 **SEO Optimized** with metadata

## Pages

- **Home** (`/`): Hero section, bio, featured projects, recent blog posts
- **About** (`/about`): Detailed bio, skills, experience, education
- **Projects** (`/projects`): Grid of all projects with tech stack and links

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Theme**: next-themes for dark/light mode
- **Icons**: Heroicons

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/            # About page
│   ├── projects/         # Projects page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer component
│   └── theme-provider.tsx # Theme context
└── data/                 # Static data
    ├── projects.ts       # Project information
```
