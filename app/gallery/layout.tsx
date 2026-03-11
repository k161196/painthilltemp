import type { Metadata } from "next";
import { buildMetadata } from "../utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description:
    "Browse Paint Hill’s recent wall painting, texture, and interior transformation projects across Mumbai & Navi Mumbai.",
  path: "/gallery",
});

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
