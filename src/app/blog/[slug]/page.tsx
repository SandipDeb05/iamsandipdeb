import { notFound } from "next/navigation";
import { allPosts } from "@/data/blog";
import {
  CalendarIcon,
  TagIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import BlogPostContent from "@/components/BlogPostContent";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Post Header */}
        <header className="mb-12">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <CalendarIcon className="h-4 w-4 mr-2" />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {post.description}
          </p>

          {/* Tags */}
          <div className="flex items-center">
            <TagIcon className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Post Content */}
        <article className="prose prose-custom max-w-none">
          <BlogPostContent content={post.content} />
        </article>

        {/* Post Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Thanks for reading! If you found this helpful, consider sharing
              it.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  post.title
                )}&url=${encodeURIComponent(
                  `${
                    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
                  }/blog/${post.slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                Share on Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  `${
                    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
                  }/blog/${post.slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                Share on LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
