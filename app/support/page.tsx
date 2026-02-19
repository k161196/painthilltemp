import type { Metadata } from "next";
import {
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  ClipboardDocumentCheckIcon,
  RocketLaunchIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import PageHero from "../components/SitePages/PageHero";
import Section from "../components/SitePages/Section";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support center for quotes, timelines, warranties, and after-service care from Paint Hill.",
  alternates: { canonical: "/support" },
};

const supportCategories = [
  {
    title: "Getting Started",
    icon: RocketLaunchIcon,
    items: [
      "How to request a quote",
      "Understanding our pricing",
      "Preparing for your consultation",
      "What to expect during painting"
    ]
  },
  {
    title: "Service Information",
    icon: PaintBrushIcon,
    items: [
      "Types of painting services",
      "Texture painting options",
      "Paint brand comparisons",
      "Service area coverage"
    ]
  },
  {
    title: "Project Management",
    icon: ClipboardDocumentCheckIcon,
    items: [
      "Project timeline expectations",
      "Payment terms and options",
      "Warranty information",
      "Post-service care"
    ]
  },
  {
    title: "Troubleshooting",
    icon: WrenchScrewdriverIcon,
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
    href: "tel:+918767520926",
    icon: PhoneIcon,
  },
  {
    title: "Email Support",
    description: "Get detailed assistance",
    detail: "support@painthill.in",
    availability: "24-48 hour response time",
    href: "mailto:support@painthill.in",
    icon: EnvelopeIcon,
  },
  {
    title: "WhatsApp",
    description: "Quick questions & updates",
    detail: "+91 8767520926",
    availability: "Mon-Sat: 9:00 AM - 7:00 PM",
    href: "https://wa.me/918767520926",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "Visit Our Office",
    description: "Meet us in person",
    detail: "Kalina, Santacruz East, Mumbai 400029",
    availability: "Mon-Sat: 10:00 AM - 6:00 PM",
    href: "/contact",
    icon: MapPinIcon,
  }
];

export default function Support() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Support"
        title="Quick help. Clear answers."
        lead="Need a quote, a timeline, warranty help, or after-service care? Start here — and contact us if you want a human."
      />

      <Section title="How can we help?" desc="Pick a topic. If something feels unclear, message us — we’ll guide you.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportCategories.map((c) => (
            <div key={c.title} className="ph-glass rounded-3xl p-7">
              <div className="h-11 w-11 rounded-2xl bg-[var(--ph-primary)]/12 flex items-center justify-center">
                <c.icon className="h-6 w-6 text-[var(--ph-primary)]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{c.title}</h3>
              <ul className="mt-4 space-y-2">
                {c.items.map((item) => (
                  <li key={item} className="text-sm text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Contact support" desc="Fastest routes to reach us.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((m) => (
            <a
              key={m.title}
              href={m.href}
              className="ph-glass rounded-3xl p-7 transition-transform hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-2xl bg-[var(--ph-primary)]/12 flex items-center justify-center">
                  <m.icon className="h-6 w-6 text-[var(--ph-primary)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-950">{m.title}</h3>
                  <p className="mt-1 text-sm text-slate-700">{m.description}</p>
                  <p className="mt-3 text-sm font-semibold text-slate-950">{m.detail}</p>
                  <p className="mt-1 text-xs text-slate-600">{m.availability}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="ph-glass rounded-3xl p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-slate-600">FAQ</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-950">
              Still have questions?
            </h2>
            <p className="mt-3 text-base text-slate-700 max-w-2xl">
              Our FAQ covers timelines, pricing ranges, warranties, and prep.
            </p>
          </div>
          <a
            href="/#faq-section"
            className="inline-flex items-center justify-center rounded-full bg-[var(--ph-accent)] px-7 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            View FAQ
          </a>
        </div>
      </section>
    </div>
  );
}
