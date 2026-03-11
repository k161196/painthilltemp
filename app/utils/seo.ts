import type { Metadata } from "next";

const SITE_URL = "https://painthill.in";
const DEFAULT_OG_IMAGE = "/images/blog/blog-1.jpg";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({ title, description, path, keywords }: BuildMetadataInput): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalPath = normalizedPath === "/" ? "/" : normalizedPath;
  const pageUrl = `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
      languages: {
        "en-IN": canonicalPath,
        "x-default": canonicalPath,
      },
    },
    openGraph: {
      type: "website",
      url: pageUrl,
      siteName: "Paint Hill",
      title,
      description,
      locale: "en_IN",
      images: [{ url: DEFAULT_OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
