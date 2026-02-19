import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Wall painting, texture finishes, interior styling, and commercial painting services by Paint Hill in Mumbai & Navi Mumbai.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    id: 'wall-painting',
    title: 'Wall Painting',
    description: 'Transform your space with our professional wall painting services. We provide complete painting solutions for homes and offices.',
    features: [
      'Surface preparation and crack filling',
      'Premium quality paints from top brands',
      'Professional color consultation',
      'Clean and timely execution',
      '1-year service warranty'
    ],
    price: 'Starting from ₹12/sq ft',
    image: '/images/services/wall-painting.jpg'
  },
  {
    id: 'texture-painting',
    title: 'Texture Painting',
    description: 'Add depth and character to your walls with our premium texture painting services. Create stunning visual effects that make your space unique.',
    features: [
      'Wide range of texture designs',
      'Customizable patterns and finishes',
      'Durable and long-lasting',
      'Expert craftsmen',
      'Premium texture materials'
    ],
    price: 'Starting from ₹80/sq ft',
    image: '/images/services/texture-painting.jpg'
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    description: 'Complete interior design solutions to transform your space into a beautiful and functional environment.',
    features: [
      'Space planning and layout',
      'Furniture selection and placement',
      'Color scheme development',
      'Lighting design',
      '3D visualization'
    ],
    price: 'Custom pricing based on project',
    image: '/images/services/interior-design.jpg'
  },
  {
    id: 'commercial-projects',
    title: 'Commercial Projects',
    description: 'Professional painting and design services for commercial spaces including offices, retail stores, and restaurants.',
    features: [
      'Minimal business disruption',
      'After-hours execution available',
      'Large-scale project management',
      'Corporate branding integration',
      'Quick turnaround times'
    ],
    price: 'Get a custom quote',
    image: '/images/services/commercial-projects.jpg'
  }
];

export default function Services() {
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
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional painting and interior design services to transform your space into something extraordinary
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`scroll-mt-24 flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What&apos;s Included:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <p className="text-2xl font-semibold text-gray-900">{service.price}</p>
                </div>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue text-white px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Get Quote
                </Link>
              </div>
              
              <div className="flex-1">
                <div className="relative h-96 overflow-hidden rounded-2xl bg-lightgrey shadow-lg">
                  <Image
                    src={service.image}
                    alt={`${service.title} service`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(min-width: 1150px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
