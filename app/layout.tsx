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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://painthill.in/",
    siteName: "Paint Hill",
    title: "Paint Hill — Wall Painting & Texture in Mumbai",
    description:
      "Premium wall painting, texture work, and interior styling across Mumbai & Navi Mumbai. Get a free quote.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paint Hill — Wall Painting & Texture in Mumbai",
    description:
      "Premium wall painting, texture work, and interior styling across Mumbai & Navi Mumbai. Get a free quote.",
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
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar />
        <main className="overflow-x-hidden relative">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
