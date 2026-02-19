import Link from "next/link";
import type { Metadata } from "next";
import {
  CheckBadgeIcon,
  ClockIcon,
  HeartIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import PageHero from "../components/SitePages/PageHero";
import Section from "../components/SitePages/Section";

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
    icon: SparklesIcon,
  },
  {
    title: "Customer Satisfaction",
    description: "Your happiness is our priority. We work closely with you to bring your vision to life.",
    icon: HeartIcon,
  },
  {
    title: "Timely Delivery",
    description: "We respect your time and ensure projects are completed within the promised timeframe.",
    icon: ClockIcon,
  },
  {
    title: "Transparency",
    description: "Clear communication, honest pricing, and no hidden costs - that's our promise.",
    icon: ChatBubbleLeftRightIcon,
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
    <div className="min-h-screen">
      <PageHero
        eyebrow="About"
        title="Craft, prep, and finish — since 1993."
        lead="Paint Hill is a Mumbai-first team built on clean execution: strong prep, sharp edges, and a spotless handover. We’re obsessed with the details most people don’t notice — until they’re done wrong."
      />

      <Section title="Our story" desc="A small team, a clear standard, and three decades of repetition — done better each time.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="ph-glass rounded-3xl p-8">
            <p className="text-slate-700">
              Paint Hill began with a simple vision: make professional painting services reliable and
              genuinely premium. What started as a small team in Mumbai in 1993 has grown into a trusted
              partner for homes, offices, and commercial spaces across Mumbai & Navi Mumbai.
            </p>
            <p className="mt-4 text-slate-700">
              The finish is only as good as the prep. We plan, protect, repair, prime — then paint.
              That process is why our projects age well.
            </p>
            <p className="mt-4 text-slate-700">
              Want help choosing a palette or texture? We’ll recommend what works for your lighting,
              layout, and lifestyle.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/70 p-8">
            <div className="flex items-start gap-3">
              <CheckBadgeIcon className="h-6 w-6 text-[var(--ph-primary)] mt-0.5" />
              <div>
                <p className="text-base font-semibold text-slate-950">What you can expect</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Protection for floors and furniture</li>
                  <li>Surface repair + primer where needed</li>
                  <li>Clean edges, even coats, no patchiness</li>
                  <li>Daily cleanup + final walkthrough</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Paint Hill by numbers" desc="Not vanity metrics — proof we’ve done this a lot.">
        <div className="ph-glass rounded-3xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/70 border border-black/5 p-6">
                <div className="text-3xl font-semibold tracking-tight text-slate-950">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Core values" desc="How we work when nobody’s watching.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="ph-glass rounded-3xl p-7">
              <div className="h-11 w-11 rounded-2xl bg-[var(--ph-primary)]/12 flex items-center justify-center">
                <v.icon className="h-6 w-6 text-[var(--ph-primary)]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{v.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Journey" desc="Milestones that shaped the team and the standard.">
        <div className="ph-glass rounded-3xl p-8">
          <div className="grid grid-cols-1 gap-4">
            {milestones.map((m) => (
              <div key={`${m.year}-${m.event}`} className="rounded-2xl border border-black/10 bg-white/70 p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-xl bg-slate-950 px-3 py-1.5 text-sm font-semibold text-white">
                    {m.year}
                  </div>
                  <p className="text-sm text-slate-700">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="ph-glass rounded-3xl p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-slate-600">Next step</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-950">
              Ready to transform your space?
            </h2>
            <p className="mt-3 text-base text-slate-700 max-w-2xl">
              Tell us what you’re painting and your timeline. We’ll recommend a finish and share a clear quote.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--ph-accent)] px-7 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Get a free quote
          </Link>
        </div>
      </section>
    </div>
  );
}
