"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-css";
// import "prismjs/components/prism-html";

interface BlogPostContentProps {
  content: string;
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  useEffect(() => {
    // Highlight all code blocks after component mounts
    Prism.highlightAll();
  }, [content]);

  // Simple markdown to HTML conversion
  const renderMarkdown = (markdown: string) => {
    return (
      markdown
        // Headers
        .replace(/^### (.*$)/gim, "<h3>$1</h3>")
        .replace(/^## (.*$)/gim, "<h2>$1</h2>")
        .replace(/^# (.*$)/gim, "<h1>$1</h1>")

        // Bold and italic
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")

        // Code blocks
        .replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
          const language = lang || "text";
          return `<pre class="language-${language}"><code class="language-${language}">${code.trim()}</code></pre>`;
        })

        // Inline code
        .replace(/`([^`]+)`/g, "<code>$1</code>")

        // Lists
        .replace(/^- (.*$)/gim, "<li>$1</li>")
        .replace(/(<li>.*<\/li>)/, "<ul>$1</ul>")

        // Paragraphs
        .replace(/\n\n/g, "</p><p>")
        .replace(/^(?!<[h|u|p|pre]).*/gm, "<p>$&</p>")

        // Clean up empty paragraphs
        .replace(/<p><\/p>/g, "")
        .replace(/<p>(<[h|u|p|pre])/g, "$1")
        .replace(/(<\/[h|u|p|pre]>)<\/p>/g, "$1")
    );
  };

  const htmlContent = renderMarkdown(content);

  return (
    <div
      className="prose prose-custom max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default BlogPostContent;
