import Link from "next/link";

const openPositions = [
  {
    id: 1,
    title: "Senior Painter",
    department: "Operations",
    location: "Mumbai",
    type: "Full-time",
    experience: "5+ years",
    description: "Looking for experienced painters with expertise in texture and decorative painting techniques."
  },
  {
    id: 2,
    title: "Interior Design Consultant",
    department: "Design",
    location: "Mumbai",
    type: "Full-time",
    experience: "3+ years",
    description: "Creative designer to help clients visualize and plan their dream spaces."
  },
  {
    id: 3,
    title: "Project Manager",
    department: "Operations",
    location: "Mumbai",
    type: "Full-time",
    experience: "4+ years",
    description: "Manage painting projects from start to finish, ensuring quality and timely delivery."
  },
  {
    id: 4,
    title: "Sales Executive",
    department: "Sales",
    location: "Mumbai/Navi Mumbai",
    type: "Full-time",
    experience: "2+ years",
    description: "Drive business growth by connecting with potential clients and understanding their needs."
  },
  {
    id: 5,
    title: "Customer Support Representative",
    department: "Customer Service",
    location: "Mumbai",
    type: "Full-time",
    experience: "1+ years",
    description: "Be the voice of Paint Hill, helping customers with queries and ensuring satisfaction."
  }
];

const benefits = [
  {
    title: "Competitive Salary",
    description: "Industry-leading compensation packages",
    icon: "💰"
  },
  {
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and family",
    icon: "🏥"
  },
  {
    title: "Training & Development",
    description: "Regular skill enhancement programs",
    icon: "📚"
  },
  {
    title: "Work-Life Balance",
    description: "Flexible schedules and paid time off",
    icon: "⚖️"
  },
  {
    title: "Career Growth",
    description: "Clear path for advancement",
    icon: "📈"
  },
  {
    title: "Team Culture",
    description: "Supportive and inclusive work environment",
    icon: "🤝"
  }
];

export default function Careers() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join the Paint Hill Family</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build a colorful career with Mumbai's leading painting service company
          </p>
        </div>

        {/* Why Join Us Section */}
        <div className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Work at Paint Hill?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-gray-700 mb-4">
                  At Paint Hill, we believe our employees are our greatest asset. We've built a culture 
                  that values creativity, craftsmanship, and customer satisfaction. When you join our team, 
                  you're not just getting a job – you're becoming part of a family that's passionate about 
                  transforming spaces and lives.
                </p>
                <p className="text-gray-700">
                  We offer opportunities for growth, continuous learning, and the chance to work on exciting 
                  projects across Mumbai. Whether you're an experienced professional or just starting your 
                  career, Paint Hill provides the platform to showcase your skills and grow.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Stable employment with a growing company</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Opportunities to work on diverse projects</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Supportive team environment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Recognition and rewards for excellence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Employee Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions - Hidden for now */}
        {/* <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Current Openings</h2>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div key={position.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                    <p className="text-gray-600 mb-3">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-gray-500">
                        <strong>Department:</strong> {position.department}
                      </span>
                      <span className="text-gray-500">
                        <strong>Location:</strong> {position.location}
                      </span>
                      <span className="text-gray-500">
                        <strong>Type:</strong> {position.type}
                      </span>
                      <span className="text-gray-500">
                        <strong>Experience:</strong> {position.experience}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Application CTA */}
        <div className="border border-gray-300 rounded-lg p-12 text-center bg-white">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-base">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a 
            href="tel:+918767520926" 
            className="inline-block bg-white text-gray-900 border-2 border-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Call HR Team
          </a>
        </div>
      </div>
    </div>
  );
}