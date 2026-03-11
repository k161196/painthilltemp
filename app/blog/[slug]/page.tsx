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
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
      languages: {
        "en-IN": `/blog/${post.slug}`,
        "x-default": `/blog/${post.slug}`,
      },
    },
    openGraph: {
      type: "article",
      siteName: "Paint Hill",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://painthill.in/blog/${post.slug}`,
      locale: "en_IN",
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
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

  const datePublished = new Date(post.date).toISOString();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: [`https://painthill.in${post.image}`],
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Paint Hill",
      logo: {
        "@type": "ImageObject",
        url: "https://painthill.in/icon.svg",
      },
    },
    mainEntityOfPage: `https://painthill.in/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://painthill.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://painthill.in/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://painthill.in/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogPostClient post={post} />
    </>
  );
}
