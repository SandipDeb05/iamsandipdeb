export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

export const allPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs-13",
    title: "Getting Started with Next.js 13 App Router",
    description:
      "Learn how to build modern web applications using Next.js 13 with the new App Router and React Server Components.",
    date: "2024-01-15",
    tags: ["Next.js", "React", "Web Development"],
    content: `
# Getting Started with Next.js 13 App Router

Next.js 13 introduces the new App Router, which brings React Server Components and improved routing to the framework.

## What's New in Next.js 13?

- **App Router**: A new file-system based router
- **React Server Components**: Improved performance and SEO
- **Turbopack**: Faster bundling and development
- **Improved TypeScript Support**: Better type safety

## Getting Started

First, create a new Next.js project:

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind --app
\`\`\`

## Key Features

### Server Components
Server Components allow you to render components on the server, reducing the JavaScript bundle size sent to the client.

### File-based Routing
The App Router uses file-system based routing, making it intuitive to create new routes.

## Conclusion

Next.js 13 with the App Router is a significant step forward for the framework, offering better performance and developer experience.
    `,
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for React Developers",
    description:
      "Essential TypeScript patterns and best practices that every React developer should know to write more maintainable code.",
    date: "2024-01-10",
    tags: ["TypeScript", "React", "Best Practices"],
    content: `
# TypeScript Best Practices for React Developers

TypeScript has become the standard for building React applications. Here are some best practices to follow.

## Type Definitions

Always define proper types for your props and state:

\`\`\`typescript
interface UserProps {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

const UserCard: React.FC<UserProps> = ({ id, name, email, avatar }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};
\`\`\`

## Generic Types

Use generics for reusable components:

\`\`\`typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Conclusion

Following these TypeScript best practices will make your React code more maintainable and less prone to runtime errors.
    `,
  },
  {
    slug: "tailwind-css-tips",
    title: "Advanced Tailwind CSS Tips and Tricks",
    description:
      "Discover advanced Tailwind CSS techniques to create beautiful, responsive designs more efficiently.",
    date: "2024-01-05",
    tags: ["Tailwind CSS", "CSS", "Design"],
    content: `
# Advanced Tailwind CSS Tips and Tricks

Tailwind CSS is a utility-first CSS framework that makes styling components quick and consistent.

## Custom Utilities

Create custom utilities in your \`tailwind.config.js\`:

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
};
\`\`\`

## Responsive Design

Use responsive prefixes for mobile-first design:

\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Content -->
</div>
\`\`\`

## Dark Mode

Leverage Tailwind's dark mode support:

\`\`\`html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <!-- Content -->
</div>
\`\`\`

## Conclusion

These advanced Tailwind CSS techniques will help you build more sophisticated and maintainable designs.
    `,
  },
];

export const recentPosts = allPosts.slice(0, 3);
