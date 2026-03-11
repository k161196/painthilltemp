import type { Metadata } from "next";
import { buildMetadata } from "../utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Paint Hill for wall painting, texture work, and interior styling. Get a free consultation and quote.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
