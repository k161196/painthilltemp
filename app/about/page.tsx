import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Paint Hill — trusted wall painting and texture experts serving Mumbai since 1993.",
  alternates: { canonical: "/about" },
};

const stats = [
  { value: "30+", label: "Years of Experience" },
  { value: "5000+", label: "Happy Customers" },
  { value: "15000+", label: "Projects Completed" },
  { value: "50+", label: "Expert Painters" }
];

const values = [
  {
    title: "Quality First",
    description: "We never compromise on the quality of materials or workmanship, ensuring lasting results.",
    icon: "✨"
  },
  {
    title: "Customer Satisfaction",
    description: "Your happiness is our priority. We work closely with you to bring your vision to life.",
    icon: "😊"
  },
  {
    title: "Timely Delivery",
    description: "We respect your time and ensure projects are completed within the promised timeframe.",
    icon: "⏰"
  },
  {
    title: "Transparency",
    description: "Clear communication, honest pricing, and no hidden costs - that's our promise.",
    icon: "🤝"
  }
];

const milestones = [
  { year: "1993", event: "Paint Hill (previously Shahikant Painters) founded with a vision to transform spaces" },
  { year: "2000", event: "Expanded services to include texture painting" },
  { year: "2005", event: "Reached 1000+ satisfied customers milestone" },
  { year: "2010", event: "Introduced modern painting techniques and equipment" },
  { year: "2015", event: "Launched interior design consultation services" },
  { year: "2020", event: "Expanded operations across Mumbai and Navi Mumbai" },
  { year: "2023", event: "Celebrated 30 years of excellence in painting services" }
];

export default function About() {
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
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Paint Hill</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming spaces with colors and creativity since 1993
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Paint Hill began with a simple vision: to make professional painting services accessible, 
                reliable, and exceptional for everyone. What started as a small team of passionate painters 
                in Mumbai in 1993 has grown into one of the city&apos;s most trusted painting service providers.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we&apos;ve painted thousands of homes, offices, and commercial spaces, 
                each project strengthening our commitment to quality and customer satisfaction. 
                Our journey has been colorful, quite literally, and we&apos;re proud of the trust our 
                customers have placed in us.
              </p>
              <p className="text-gray-600">
                Today, Paint Hill stands for excellence in painting services, innovative design solutions, 
                and a customer-first approach that has made us the preferred choice for property owners 
                across Mumbai and beyond.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Our Team at Work</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-50 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Paint Hill by Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20">
                  <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Space?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have trusted Paint Hill with their painting needs
          </p>
          <Link 
            href="/#contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}
