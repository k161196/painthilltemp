import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "../posts";
import BlogPostClient from "./BlogPostClient";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Blog" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://painthill.in/blog/${post.slug}`,
      images: [{ url: post.image }],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
          <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
            ← Back to Blog
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-6">Post not found</h1>
        </div>
      </div>
    );
  }

  return <BlogPostClient post={post} />;
}
