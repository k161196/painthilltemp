import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Paint Colors for 2025",
    excerpt: "Discover the trending paint colors that will dominate home interiors this year. From calming neutrals to bold statements...",
    category: "Color Trends",
    date: "January 15, 2025",
    readTime: "5 min read",
    author: "Paint Hill Team",
    image: "/images/blog/blog-1.jpg"
  },
  {
    id: 2,
    title: "Texture vs Regular Painting: Which is Right for You?",
    excerpt: "Understanding the differences between texture and regular painting can help you make the best choice for your space...",
    category: "Guide",
    date: "January 10, 2025",
    readTime: "7 min read",
    author: "Design Expert",
    image: "/images/blog/blog-2.jpg"
  },
  {
    id: 3,
    title: "How to Prepare Your Home for Painting",
    excerpt: "Proper preparation is key to a successful paint job. Learn the essential steps to prepare your space before our team arrives...",
    category: "Tips",
    date: "January 5, 2025",
    readTime: "4 min read",
    author: "Paint Hill Team",
    image: "/images/blog/blog-3.jpg"
  },
  {
    id: 4,
    title: "Small Room, Big Impact: Paint Tricks for Compact Spaces",
    excerpt: "Learn how the right paint colors and techniques can make small rooms feel larger and more inviting...",
    category: "Design Tips",
    date: "December 28, 2024",
    readTime: "6 min read",
    author: "Interior Designer",
    image: "/images/blog/blog-4.jpg"
  },
  {
    id: 5,
    title: "The Psychology of Colors in Home Design",
    excerpt: "Colors affect our mood and behavior. Discover how to choose the right colors for each room based on color psychology...",
    category: "Color Theory",
    date: "December 20, 2024",
    readTime: "8 min read",
    author: "Color Consultant",
    image: "/images/blog/blog-5.jpg"
  },
  {
    id: 6,
    title: "Maintaining Your Painted Walls: A Complete Guide",
    excerpt: "Keep your walls looking fresh for years with these maintenance tips and cleaning techniques for different paint types...",
    category: "Maintenance",
    date: "December 15, 2024",
    readTime: "5 min read",
    author: "Paint Hill Team",
    image: "/images/blog/blog-6.jpg"
  }
];

const categories = ["All", "Color Trends", "Guide", "Tips", "Design Tips", "Color Theory", "Maintenance"];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Paint Hill Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert tips, design inspiration, and everything you need to know about painting and interior design
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Featured</span>
                <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-600 mb-6 text-lg">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4">
                <Link href="#" className="text-blue-600 font-medium hover:text-blue-700">
                  Read More →
                </Link>
                <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative h-64 overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(min-width: 1150px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1150px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{post.author}</span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get the latest painting tips, color trends, and design inspiration delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
