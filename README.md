# Personal Portfolio Website

A minimal, professional personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and MDX support.

## Features

- 🚀 **Next.js 14** with App Router
- 💻 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- 🌙 **Dark/Light Mode** toggle with persistence
- 📝 **MDX Support** for blog posts
- ✨ **Syntax Highlighting** with Prism.js
- 📱 **Responsive Design** mobile-first approach
- 🔍 **SEO Optimized** with metadata

## Pages

- **Home** (`/`): Hero section, bio, featured projects, recent blog posts
- **About** (`/about`): Detailed bio, skills, experience, education
- **Projects** (`/projects`): Grid of all projects with tech stack and links
- **Blog** (`/blog`): Blog index with all posts
- **Individual Blog Posts** (`/blog/[slug]`): MDX content with syntax highlighting

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Theme**: next-themes for dark/light mode
- **Icons**: Heroicons
- **Syntax Highlighting**: Prism.js
- **Content**: MDX with custom markdown parser

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/            # About page
│   ├── blog/             # Blog pages
│   ├── projects/         # Projects page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer component
│   ├── BlogPostContent.tsx # MDX content renderer
│   └── theme-provider.tsx # Theme context
└── data/                 # Static data
    ├── projects.ts       # Project information
    └── blog.ts           # Blog post data
```

## Customization

### Personal Information

Update the following files with your information:

- `src/app/page.tsx` - Hero section and bio
- `src/app/about/page.tsx` - About page content
- `src/data/projects.ts` - Your projects
- `src/data/blog.ts` - Your blog posts
- `src/components/Header.tsx` - Logo/brand name
- `src/components/Footer.tsx` - Social links

### Styling

- Modify `src/app/globals.css` for custom styles
- Update `tailwind.config.js` for theme customization
- Adjust color schemes in components

### Adding Blog Posts

1. Add new posts to `src/data/blog.ts`
2. Follow the existing structure with title, description, date, tags, and content
3. Use markdown syntax in the content field
4. Code blocks will automatically get syntax highlighting

### Adding Projects

1. Add new projects to `src/data/projects.ts`
2. Include title, description, tech stack, and links
3. Set `featured: true` for projects to appear on the home page

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help, please open an issue on GitHub.
