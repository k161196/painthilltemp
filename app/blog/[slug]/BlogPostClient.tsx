"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetQuoteModal from "../../components/GetQuoteModal";
import type { BlogPost } from "../posts";

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

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
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-blue-600">{post.category}</span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">{post.author}</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight text-gray-900">{post.title}</h1>
          <p className="mt-4 text-lg text-gray-600">{post.excerpt}</p>
        </div>

        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
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

        <div className="mt-12 rounded-2xl bg-blue-50 p-8">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Want a quote for your space?
          </h2>
          <p className="mb-6 text-gray-700">
            Share your location and requirements — we&apos;ll help you pick
            finishes that look great and last.
          </p>
          <button
            type="button"
            onClick={() => setIsQuoteModalOpen(true)}
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Contact Paint Hill
          </button>
        </div>
      </div>

      <GetQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
