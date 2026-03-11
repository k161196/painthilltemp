import { blogPosts } from "../blog/posts";

const SITE_URL = "https://painthill.in";

function escapeXml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const items = blogPosts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();

      return `\n    <item>\n      <title>${escapeXml(post.title)}</title>\n      <link>${url}</link>\n      <guid>${url}</guid>\n      <pubDate>${pubDate}</pubDate>\n      <description>${escapeXml(post.excerpt)}</description>\n    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Paint Hill Blog</title>\n    <link>${SITE_URL}/blog</link>\n    <description>Paint Hill blog on painting services, finishes, and home improvement.</description>\n    <language>en-in</language>\n    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}\n  </channel>\n</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
