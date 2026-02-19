import type { Metadata } from "next";
import {
  BriefcaseIcon,
  AcademicCapIcon,
  HeartIcon,
  ScaleIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  CheckIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import PageHero from "../components/SitePages/PageHero";
import Section from "../components/SitePages/Section";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Paint Hill in Mumbai. Explore current openings and build a career in painting and interior services.",
  alternates: { canonical: "/careers" },
};

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
    icon: BriefcaseIcon
  },
  {
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and family",
    icon: HeartIcon
  },
  {
    title: "Training & Development",
    description: "Regular skill enhancement programs",
    icon: AcademicCapIcon
  },
  {
    title: "Work-Life Balance",
    description: "Flexible schedules and paid time off",
    icon: ScaleIcon
  },
  {
    title: "Career Growth",
    description: "Clear path for advancement",
    icon: ArrowTrendingUpIcon
  },
  {
    title: "Team Culture",
    description: "Supportive and inclusive work environment",
    icon: UserGroupIcon
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Careers"
        title="Join a team that sweats the details."
        lead="From surface prep to final polish — we take pride in doing it right. If you’re serious about craft and clean execution, you’ll fit in."
      />

      <Section title="Why Paint Hill" desc="A steady pipeline of work, a clear standard, and space to grow.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="ph-glass rounded-3xl p-8">
            <p className="text-slate-700">
              At Paint Hill, we value craftsmanship, ownership, and respect for the customer’s home.
              You won’t be rushed into sloppy work — we optimize for quality that lasts.
            </p>
            <p className="mt-4 text-slate-700">
              Whether you’re experienced in texture and decorative finishes or you’re growing your skills,
              you’ll learn modern techniques and work with a team that has your back.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/70 p-8">
            <p className="text-base font-semibold text-slate-950">What we offer</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {[
                "Stable work with a growing company",
                "Diverse projects across Mumbai & Navi Mumbai",
                "Supportive team environment",
                "Recognition for high-quality execution",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/15 flex items-center justify-center">
                    <CheckIcon className="h-4 w-4 text-emerald-700" />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Benefits" desc="Designed for longevity — not burnout.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="ph-glass rounded-3xl p-7">
              <div className="h-11 w-11 rounded-2xl bg-[var(--ph-primary)]/12 flex items-center justify-center">
                <b.icon className="h-6 w-6 text-[var(--ph-primary)]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{b.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Open roles" desc="See something that fits? Apply via call — we’ll guide next steps.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openPositions.map((p) => (
            <div key={p.id} className="ph-glass rounded-3xl p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-slate-950">{p.title}</p>
                  <p className="mt-1 text-sm text-slate-700">{p.description}</p>
                </div>
                <span className="shrink-0 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
                  {p.type}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                {[
                  { k: "Dept", v: p.department },
                  { k: "Location", v: p.location },
                  { k: "Exp", v: p.experience },
                ].map((x) => (
                  <span
                    key={`${p.id}-${x.k}`}
                    className="rounded-full bg-slate-950/5 border border-black/5 px-3 py-1 font-semibold text-slate-700"
                  >
                    {x.k}: {x.v}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="tel:+918767520926"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ph-accent)] px-6 py-2.5 text-sm font-semibold text-white hover:opacity-95"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Apply via call
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="ph-glass rounded-3xl p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-slate-600">Apply</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-950">
              Send your resume. We’ll call when there’s a fit.
            </h2>
            <p className="mt-3 text-base text-slate-700 max-w-2xl">
              Even if openings aren’t listed, we’re always looking for strong painters, supervisors, and project leads.
            </p>
          </div>
          <a
            href="tel:+918767520926"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white/70 px-7 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
          >
            <PhoneIcon className="h-4 w-4" />
            Call HR
          </a>
        </div>
      </section>
    </div>
  );
}
