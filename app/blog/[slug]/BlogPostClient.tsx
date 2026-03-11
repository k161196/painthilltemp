"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetQuoteModal from "../../components/GetQuoteModal";
import { blogPosts, type BlogPost } from "../posts";

interface BlogPostClientProps {
  post: BlogPost;
}

function renderFormattedContent(content: string[]) {
  const blocks: JSX.Element[] = [];
  let i = 0;

  while (i < content.length) {
    const line = content[i].trim();

    if (!line) {
      i += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={`h2-${i}`} className="mt-10 text-2xl font-semibold text-gray-900">
          {line.slice(3)}
        </h2>
      );
      i += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push(
        <h3 key={`h3-${i}`} className="mt-8 text-xl font-semibold text-gray-900">
          {line.slice(4)}
        </h3>
      );
      i += 1;
      continue;
    }

    if (line.startsWith("> ")) {
      blocks.push(
        <div
          key={`callout-${i}`}
          className="rounded-xl border-l-4 border-blue-500 bg-blue-50 px-5 py-4 text-blue-900"
        >
          {line.slice(2)}
        </div>
      );
      i += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < content.length && content[i].trim().startsWith("- ")) {
        items.push(content[i].trim().slice(2));
        i += 1;
      }
      blocks.push(
        <ul key={`ul-${i}`} className="list-disc space-y-2 pl-6 text-gray-700 marker:text-blue-600">
          {items.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ul>
      );
      continue;
    }

    blocks.push(
      <p key={`p-${i}`} className="text-[17px] leading-8 text-gray-700">
        {line}
      </p>
    );
    i += 1;
  }

  return blocks;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const relatedPosts = blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) return -1;
      if (a.category !== post.category && b.category === post.category) return 1;
      return 0;
    })
    .slice(0, 3);

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

        <section className="mb-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Quick Takeaways</h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-700 marker:text-blue-600">
            {post.takeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <article className="max-w-none space-y-6">
          {renderFormattedContent(post.content)}
        </article>

        <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {post.faq.map((item) => (
              <div key={item.question}>
                <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                <p className="mt-2 text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

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

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Related Reading</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="rounded-xl border border-gray-200 p-4 transition-colors hover:border-blue-400"
              >
                <p className="text-sm text-blue-600">{item.category}</p>
                <p className="mt-1 font-medium text-gray-900">{item.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <GetQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
