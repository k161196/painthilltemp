import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "../posts";

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

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
            ← Back to Blog
          </Link>
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>

        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-blue-600 text-sm font-medium">{post.category}</span>
            <span className="text-gray-500 text-sm">{post.readTime}</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">{post.author}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">{post.title}</h1>
          <p className="text-lg text-gray-600 mt-4">{post.excerpt}</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[16/9] shadow-lg mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 896px, 100vw"
            priority
          />
        </div>

        <article className="prose prose-gray max-w-none">
          {post.content.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </article>

        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Want a quote for your space?</h2>
          <p className="text-gray-700 mb-6">
            Share your location and requirements — we’ll help you pick finishes that look great and last.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Paint Hill
          </Link>
        </div>
      </div>
    </div>
  );
}

