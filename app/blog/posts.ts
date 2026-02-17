export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "top-10-paint-colors-2025",
    title: "Top 10 Paint Colors for 2025",
    excerpt:
      "Discover the trending paint colors that will dominate home interiors this year — from calming neutrals to bold statements.",
    category: "Color Trends",
    date: "January 15, 2025",
    readTime: "5 min read",
    author: "Paint Hill Team",
    image: "/images/blog/blog-1.jpg",
    content: [
      "Color trends change fast, but great homes age slowly. In 2025, the most popular palettes balance warmth with clarity — softer whites, earthy neutrals, and deeper accents.",
      "When picking a wall color, start with the room’s natural light. North-facing rooms benefit from warmer undertones; south-facing rooms can handle cooler neutrals.",
      "If you want a bold look without making the room feel smaller, use a single accent wall or color-blocking around architectural details.",
      "Need help matching paint to textures and finishes? Request a consultation and we’ll share a palette tailored to your space.",
    ],
  },
  {
    slug: "texture-vs-regular-painting",
    title: "Texture vs Regular Painting: Which is Right for You?",
    excerpt:
      "Understanding the differences between texture and regular painting can help you choose the best finish for your space.",
    category: "Guide",
    date: "January 10, 2025",
    readTime: "7 min read",
    author: "Design Expert",
    image: "/images/blog/blog-2.jpg",
    content: [
      "Regular painting is the clean, timeless baseline — quick to refresh and easy to maintain.",
      "Texture finishes add depth and can hide minor wall imperfections, but they require more prep and are harder to repaint later.",
      "For living rooms and feature walls, texture can create a premium look. For rentals and high-change spaces, regular paint is often the smarter choice.",
      "We usually recommend starting with one feature wall, then scaling up if you love the result.",
    ],
  },
  {
    slug: "prepare-your-home-for-painting",
    title: "How to Prepare Your Home for Painting",
    excerpt:
      "Proper preparation is key to a successful paint job. Here are the essential steps before the team arrives.",
    category: "Tips",
    date: "January 5, 2025",
    readTime: "4 min read",
    author: "Paint Hill Team",
    image: "/images/blog/blog-3.jpg",
    content: [
      "Start by clearing fragile items and moving small furniture away from walls. We can help with larger pieces, but having space ready speeds everything up.",
      "Take photos of existing cable routes, shelves, and wall-mounted items so re-installation is painless.",
      "Confirm paint colors and finishes in advance. It’s the single biggest factor in avoiding delays and rework.",
      "If you have pets or kids, plan a safe zone during active painting hours for comfort and cleanliness.",
    ],
  },
  {
    slug: "paint-tricks-for-small-rooms",
    title: "Small Room, Big Impact: Paint Tricks for Compact Spaces",
    excerpt:
      "Learn how the right paint colors and techniques can make small rooms feel larger and more inviting.",
    category: "Design Tips",
    date: "December 28, 2024",
    readTime: "6 min read",
    author: "Interior Designer",
    image: "/images/blog/blog-4.jpg",
    content: [
      "Use lighter values on the largest surfaces to keep the room feeling open, then bring contrast via trims, furniture, or a single accent.",
      "A consistent color through connecting spaces reduces visual breaks and can make a compact home feel more expansive.",
      "Matte hides imperfections; satin can reflect light to brighten — pick based on wall condition and lighting.",
      "For ceilings, a slightly lighter shade than the walls often feels higher without looking stark.",
    ],
  },
  {
    slug: "psychology-of-colors-in-home-design",
    title: "The Psychology of Colors in Home Design",
    excerpt:
      "Colors affect mood and behavior. Choose the right tones for each room based on how you want the space to feel.",
    category: "Color Theory",
    date: "December 20, 2024",
    readTime: "8 min read",
    author: "Color Consultant",
    image: "/images/blog/blog-5.jpg",
    content: [
      "Warm tones (soft terracotta, warm beige) feel welcoming and social — great for living rooms and dining.",
      "Cool tones (muted blues/greens) can feel calm and restorative — often ideal for bedrooms.",
      "Neutrals aren’t “no color” — undertones matter. Test swatches at different times of day before committing.",
      "A balanced home uses a consistent neutral base and repeats 1–2 accents across rooms for cohesion.",
    ],
  },
  {
    slug: "maintaining-painted-walls",
    title: "Maintaining Your Painted Walls: A Complete Guide",
    excerpt:
      "Keep your walls looking fresh for years with simple maintenance tips and cleaning techniques for common paint finishes.",
    category: "Maintenance",
    date: "December 15, 2024",
    readTime: "5 min read",
    author: "Paint Hill Team",
    image: "/images/blog/blog-6.jpg",
    content: [
      "Dust regularly with a microfiber cloth. For marks, start with water and mild soap — avoid harsh chemicals unless necessary.",
      "High-touch areas (switchboards, hallways) benefit from a slightly higher-sheen finish for easier cleaning.",
      "For scuffs, use a soft sponge and gentle circular motion. Over-scrubbing can burnish matte paint.",
      "If you need touch-ups, keep labeled leftover paint. Even the same shade can vary slightly between batches.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

