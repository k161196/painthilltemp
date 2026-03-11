import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";

export const metadata: Metadata = {
  metadataBase: new URL("https://painthill.in"),
  title: {
    default: "Paint Hill — Wall Painting & Texture in Mumbai",
    template: "%s — Paint Hill",
  },
  description:
    "Premium wall painting, texture work, and interior styling across Mumbai & Navi Mumbai. Get a free quote.",
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "x-default": "/",
    },
  },
    openGraph: {
      type: "website",
      url: "https://painthill.in/",
      siteName: "Paint Hill",
      title: "Paint Hill — Wall Painting & Texture in Mumbai",
    description:
      "Premium wall painting, texture work, and interior styling across Mumbai & Navi Mumbai. Get a free quote.",
    locale: "en_IN",
    images: [{ url: "/images/blog/blog-1.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paint Hill — Wall Painting & Texture in Mumbai",
    description:
      "Premium wall painting, texture work, and interior styling across Mumbai & Navi Mumbai. Get a free quote.",
    images: ["/images/blog/blog-1.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Paint Hill",
    url: "https://painthill.in",
    logo: "https://painthill.in/icon.svg",
    email: "support@painthill.in",
    telephone: "+91 8767520926",
    areaServed: ["Mumbai", "Navi Mumbai"],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Paint Hill",
    url: "https://painthill.in",
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: "Paint Hill",
    },
  };

  return (
    <html lang="en-IN">
      <body className="overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        <main className="overflow-x-hidden relative">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
