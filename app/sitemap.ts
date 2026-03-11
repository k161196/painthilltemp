import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://painthill.in";
  const siteUpdatedAt = new Date("2026-03-11T00:00:00.000Z");

  const routes = [
    "",
    "/about",
    "/services",
    "/gallery",
    "/contact",
    "/partners",
    "/support",
    "/careers",
    "/testimonials",
    "/blog",
    "/rss.xml",
    "/privacy",
    "/terms",
  ];

  const staticUrls = routes.map((path) => ({
    url: `${baseUrl}${path || "/"}`,
    lastModified: siteUpdatedAt,
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticUrls, ...blogUrls];
}
