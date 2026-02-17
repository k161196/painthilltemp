import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support center for quotes, timelines, warranties, and after-service care from Paint Hill.",
  alternates: { canonical: "/support" },
};

const supportCategories = [
  {
    title: "Getting Started",
    icon: "🚀",
    items: [
      "How to request a quote",
      "Understanding our pricing",
      "Preparing for your consultation",
      "What to expect during painting"
    ]
  },
  {
    title: "Service Information",
    icon: "🎨",
    items: [
      "Types of painting services",
      "Texture painting options",
      "Paint brand comparisons",
      "Service area coverage"
    ]
  },
  {
    title: "Project Management",
    icon: "📋",
    items: [
      "Project timeline expectations",
      "Payment terms and options",
      "Warranty information",
      "Post-service care"
    ]
  },
  {
    title: "Troubleshooting",
    icon: "🔧",
    items: [
      "Common paint issues",
      "Maintenance guidelines",
      "Touch-up procedures",
      "Claim warranty service"
    ]
  }
];

const contactMethods = [
  {
    title: "Phone Support",
    description: "Talk to our experts",
    detail: "+91 8767520926",
    availability: "Mon-Sat: 9:00 AM - 7:00 PM",
    icon: "📞"
  },
  {
    title: "Email Support",
    description: "Get detailed assistance",
    detail: "support@painthill.in",
    availability: "24-48 hour response time",
    icon: "✉️"
  },
  {
    title: "WhatsApp",
    description: "Quick questions & updates",
    detail: "+91 8767520926",
    availability: "Mon-Sat: 9:00 AM - 7:00 PM",
    icon: "💬"
  },
  {
    title: "Visit Our Office",
    description: "Meet us in person",
    detail: "Kalina, Santacruz East, Mumbai 400029",
    availability: "Mon-Sat: 10:00 AM - 6:00 PM",
    icon: "🏢"
  }
];

export default function Support() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re here to help you with all your painting and interior design needs
          </p>
        </div>

        {/* Quick Help Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How can we help you?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contact Our Support Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{method.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                    <p className="text-blue-600 font-medium mb-1">{method.detail}</p>
                    <p className="text-gray-500 text-sm">{method.availability}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Link */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Check out our frequently asked questions for quick answers</p>
          <Link 
            href="/#faq-section" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
