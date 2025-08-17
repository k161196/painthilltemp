import Link from "next/link";
import Image from "next/image";

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
    image: '/images/Banner/banner.png'
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
    image: '/images/Banner/banner.png'
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
    image: '/images/Banner/banner.png'
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
    image: '/images/Banner/banner.png'
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
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h3>
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
                  href="/#contact" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Get Quote
                </Link>
              </div>
              
              <div className="flex-1">
                <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                  <p className="text-gray-500">Service Image</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}