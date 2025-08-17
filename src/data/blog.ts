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
    slug: "real-time-data-streaming-in-react-with-server-sent-envents-sse",
    title: "Real-Time Data Streaming in React with Server-Sent Events (SSE)",
    description:
      "Server-Sent Events (SSE) is a technology that allows servers to send real-time updates to web clients over a single HTTP connection",
    date: "2024-12-15",
    tags: ["React", "Web Development", "Artificial Intelligence", "SSE"],
    content: `# Getting Started with Server-Sent Events (SSE) in React

In the world of modern web apps, real-time updates have become a necessity. Whether it's live notifications, chat applications, or dashboards, real-time data enriches user experience.

In this post, I'll walk you through implementing Server-Sent Events (SSE) in a React app to handle real-time data streaming effectively.

## What are Server-Sent Events (SSE)?

SSE is a browser-based API allowing servers to push client updates over HTTP in a one-way communication channel. Unlike WebSockets, SSE is lightweight, easy to use, and works seamlessly with HTTP/1.1.

## How SSE Works

- The client establishes a persistent connection to the server using EventSource.
- The server pushes data as a stream to the client in the form of text-based events.
- The client listens for these updates and processes them in real time.

## When to Use SSE?

SSE is perfect for:
- Live notifications
- Streaming logs
- Real-time dashboards
- Event updates (e.g., ticketing systems)

## Building a React App with SSE

### The Problem

We want to create a real-time patient diagnosis stream based on live server updates. The server sends:
- Patient's diagnosis list
- Suggestions based on the diagnosis
- Patient's gender details

Our goal: Build a React component to handle this live stream of data.

### Key Features of the Code

- **Auto-Scrolling:** Automatically scrolls to the bottom of the container when new data arrives.
- **Graceful Error Handling:** Closes the connection on errors to prevent memory leaks.
- **Real-Time UI Updates:** The diagnoses and suggestions update seamlessly as new data streams in.

## Why Choose SSE?

- **Simple to Implement:** No third-party libraries are required.
- **Built-in Reliability:** Automatically retries connections when interrupted.
- **Lightweight:** Ideal for streaming plain text updates.

## What I Learned

- SSE is a game-changer for real-time, one-way communication.
- It's perfect for scenarios where server → client updates dominate.
- With proper state management and UI design, SSE makes real-time apps effortless to build.

## Conclusion

SSE is a lightweight and powerful tool for building real-time applications in React. Whether it's live notifications, dashboards, or data streams, SSE simplifies the development process while ensuring reliability.

If you're looking to build a scalable, real-time React app, give SSE a try.`,
  },
  {
    slug: "optimizing-react-performance-with-usememo-and-usecallback",
    title: "Optimizing React Performance with useMemo and useCallback",
    description:
      "Learn how to optimize React applications using useMemo and useCallback to prevent unnecessary re-renders and boost performance.",
    date: "2024-06-05",
    tags: ["React", "Performance", "Optimization", "JavaScript"],
    content: `# Optimizing React Performance with useMemo and useCallback

When building modern React applications, performance issues often arise due to unnecessary re-renders. Thankfully, React provides two hooks — \`useMemo\` and \`useCallback\` — to help optimize performance.

## Why Re-renders Happen
React components re-render when props or state change. While this is the expected behavior, excessive re-renders can slow down apps, especially with complex UIs.

## useMemo
\`useMemo\` memoizes the result of an expensive calculation. React will only recompute the value when dependencies change.

\`\`\`tsx
const memoizedValue = useMemo(() => expensiveCalculation(data), [data]);
\`\`\`

## useCallback
\`useCallback\` memoizes a function, ensuring that the function reference remains the same unless dependencies change.

\`\`\`tsx
const handleClick = useCallback(() => {
  console.log("Clicked!");
}, []);
\`\`\`

## Best Practices
- Use these hooks for expensive calculations or stable function references.
- Avoid over-optimizing — they should not be used everywhere.

## Conclusion
\`useMemo\` and \`useCallback\` are powerful tools to prevent unnecessary re-renders and improve performance. With thoughtful usage, they can significantly enhance user experience in React apps.`,
  },
  {
    slug: "nextjs-image-optimization-guide",
    title: "A Complete Guide to Image Optimization in Next.js",
    description:
      "Boost performance and SEO in your Next.js apps with built-in Image Optimization features, including responsive and lazy-loaded images.",
    date: "2024-03-10",
    tags: ["Next.js", "Performance", "SEO", "Web Development"],
    content: `# A Complete Guide to Image Optimization in Next.js

Images are often the largest assets in a web app, directly affecting load time and SEO. Next.js simplifies image optimization with the \`next/image\` component.

## Why Optimize Images?
- Faster page loads
- Better SEO ranking
- Reduced bandwidth usage

## Using the Image Component
- Automatic resizing
- Lazy loading
- Responsive images

\`\`\`tsx
import Image from "next/image";

<Image 
  src="/profile.jpg" 
  alt="Profile picture" 
  width={500} 
  height={500} 
/>
\`\`\`

## Supported Features
- **Responsive Images:** Automatically generates multiple sizes.
- **Lazy Loading:** Loads images as they enter the viewport.
- **CDN Support:** Integrates with external image providers.

## Conclusion
Optimizing images in Next.js requires minimal setup but provides maximum benefits. By leveraging the built-in \`Image\` component, developers can deliver faster, more SEO-friendly applications.`,
  },
  {
    slug: "react-query-data-fetching-and-caching",
    title: "Data Fetching and Caching in React with React Query",
    description:
      "Learn how to simplify data fetching, caching, and synchronization in React using React Query.",
    date: "2024-01-02",
    tags: ["React", "React Query", "Data Fetching", "API"],
    content: `# Data Fetching and Caching in React with React Query

Fetching data in React often involves managing loading states, caching, and error handling. React Query solves these challenges with a declarative and efficient API.

## Why React Query?
- Simplifies data fetching
- Built-in caching
- Automatic re-fetching on window focus
- Background updates

## Example Usage
\`\`\`tsx
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const res = await fetch("/api/users");
  return res.json();
};

function Users() {
  const { data, isLoading, error } = useQuery(["users"], fetchUsers);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching users</p>;

  return (
    <ul>
      {data.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Conclusion
React Query abstracts away complex data-fetching logic, making React apps more efficient and developer-friendly. It’s a must-have tool for modern frontend development.`,
  },
];

export const recentPosts = allPosts.slice(0, 3);
