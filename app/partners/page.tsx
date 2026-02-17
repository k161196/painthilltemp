import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with Paint Hill for reliable painting and interior project execution across Mumbai & Navi Mumbai.",
  alternates: { canonical: "/partners" },
};

const partners = [
  {
    category: "Paint Manufacturers",
    companies: [
      { name: "Asian Paints", description: "India's leading paint company", logo: "🎨" },
      { name: "Berger Paints", description: "Premium quality paints", logo: "🎨" },
      { name: "Nerolac", description: "Trusted paint solutions", logo: "🎨" },
      { name: "Dulux", description: "International paint brand", logo: "🎨" }
    ]
  },
  {
    category: "Material Suppliers",
    companies: [
      { name: "UltraTech Cement", description: "Quality cement products", logo: "🏗️" },
      { name: "JK Putty", description: "Wall putty solutions", logo: "🏗️" },
      { name: "Birla White", description: "Premium white cement", logo: "🏗️" }
    ]
  },
  {
    category: "Technology Partners",
    companies: [
      { name: "ColorSnap", description: "Color visualization tools", logo: "📱" },
      { name: "PaintCalc Pro", description: "Estimation software", logo: "💻" }
    ]
  }
];

const partnerBenefits = [
  {
    title: "Mutual Growth",
    description: "We believe in growing together with our partners through collaborative efforts",
    icon: "📈"
  },
  {
    title: "Quality Assurance",
    description: "Partners who share our commitment to excellence and quality standards",
    icon: "✅"
  },
  {
    title: "Innovation",
    description: "Working together to bring innovative solutions to our customers",
    icon: "💡"
  },
  {
    title: "Trust & Reliability",
    description: "Building long-term relationships based on trust and mutual respect",
    icon: "🤝"
  }
];

export default function Partners() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver exceptional painting services
          </p>
        </div>

        {/* Partner Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Partner with Paint Hill?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partner List */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Trusted Partners</h2>
          {partners.map((category, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.companies.map((company, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{company.logo}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{company.name}</h4>
                        <p className="text-gray-600">{company.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Stats */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Partnership Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Years of Collaboration</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Projects Completed Together</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Become a Partner CTA */}
        <div className="border border-gray-300 rounded-lg p-12 text-center bg-white">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Become a Partner</h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-base">
            Join our network of partners and let&apos;s create beautiful spaces together. We&apos;re always looking for 
            companies that share our vision of quality and excellence.
          </p>
          <a 
            href="tel:+918767520926" 
            className="inline-block bg-white text-gray-900 border-2 border-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}
