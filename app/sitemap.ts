import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://painthill.in";
  const now = new Date();

  const routes = [
    "",
    "/about",
    "/services",
    "/gallery",
    "/contact",
    "/partners",
    "/support",
    "/careers",
    "/blog",
    "/privacy",
    "/terms",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path || "/"}`,
    lastModified: now,
  }));
}

