import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms and conditions for Paint Hill’s painting and interior services.",
  alternates: { canonical: "/terms" },
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: January 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using Paint Hill&apos;s services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, then you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
            <p className="text-gray-700 mb-4">
              Paint Hill provides professional painting and interior design services including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Wall painting and finishing</li>
              <li>Texture painting and special effects</li>
              <li>Interior design consultation</li>
              <li>Commercial and residential projects</li>
              <li>Color consultation and selection</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Service Agreements</h2>
            <p className="text-gray-700 mb-4">
              <strong>3.1 Quotations:</strong> All quotations provided are valid for 30 days from the date of issue unless otherwise specified.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>3.2 Payment Terms:</strong> Payment terms will be specified in individual service agreements. Standard terms require a deposit before work commencement and final payment upon completion.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>3.3 Work Scope:</strong> The scope of work will be clearly defined in the service agreement. Any additional work requested will be subject to additional charges.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Customer Responsibilities</h2>
            <p className="text-gray-700 mb-4">Customers agree to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide accurate information about the project requirements</li>
              <li>Ensure access to the work site during agreed hours</li>
              <li>Clear the work area of valuable items before work commencement</li>
              <li>Make timely payments as per the agreed schedule</li>
              <li>Communicate any concerns or changes promptly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Quality Guarantee</h2>
            <p className="text-gray-700 mb-4">
              <strong>5.1 Workmanship:</strong> We guarantee our workmanship for a period of 12 months from completion date, subject to normal wear and tear.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>5.2 Materials:</strong> Material warranties are subject to manufacturer terms and conditions.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>5.3 Exclusions:</strong> Our guarantee does not cover damage due to structural defects, water seepage, or customer negligence.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cancellation Policy</h2>
            <p className="text-gray-700 mb-4">
              <strong>6.1 Customer Cancellation:</strong> Customers may cancel services with 48 hours notice. Cancellations with less notice may incur charges for materials already purchased.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>6.2 Company Rights:</strong> Paint Hill reserves the right to cancel or postpone services due to weather conditions, safety concerns, or other circumstances beyond our control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              Paint Hill&apos;s liability for any claim arising from our services shall not exceed the total amount paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All designs, concepts, and ideas created by Paint Hill remain our intellectual property unless specifically transferred in writing. Customers may not reproduce or use our designs without permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Dispute Resolution</h2>
            <p className="text-gray-700 mb-4">
              Any disputes arising from these terms or our services shall first be addressed through good faith negotiations. If unresolved, disputes shall be subject to the jurisdiction of courts in Mumbai, Maharashtra, India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Paint Hill</strong><br />
                Email: support@painthill.in<br />
                Phone: +91 8767520926<br />
                Address: Kalina, Santacruz East, Mumbai 400029
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
