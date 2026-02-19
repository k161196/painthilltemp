import type { Metadata } from "next";
import {
  BuildingOffice2Icon,
  CubeTransparentIcon,
  DevicePhoneMobileIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  HandRaisedIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import PageHero from "../components/SitePages/PageHero";
import Section from "../components/SitePages/Section";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with Paint Hill for reliable painting and interior project execution across Mumbai & Navi Mumbai.",
  alternates: { canonical: "/partners" },
};

const partners = [
  {
    category: "Paint Manufacturers",
    icon: BuildingOffice2Icon,
    companies: [
      { name: "Asian Paints", description: "Trusted paint quality and finishes" },
      { name: "Berger Paints", description: "Premium ranges for durable results" },
      { name: "Nerolac", description: "Reliable products for everyday projects" },
      { name: "Dulux", description: "International paint brand options" }
    ]
  },
  {
    category: "Material Suppliers",
    icon: CubeTransparentIcon,
    companies: [
      { name: "UltraTech", description: "Cement and building materials" },
      { name: "JK Putty", description: "Surface prep and putty solutions" },
      { name: "Birla White", description: "White cement for smooth surfaces" }
    ]
  },
  {
    category: "Technology Partners",
    icon: DevicePhoneMobileIcon,
    companies: [
      { name: "Color Visualization", description: "Palette preview and color matching tools" },
      { name: "Estimations", description: "Faster measurements and quote workflows" }
    ]
  }
];

const partnerBenefits = [
  {
    title: "Mutual Growth",
    description: "We believe in growing together with our partners through collaborative efforts",
    icon: ArrowTrendingUpIcon
  },
  {
    title: "Quality Assurance",
    description: "Partners who share our commitment to excellence and quality standards",
    icon: ShieldCheckIcon
  },
  {
    title: "Innovation",
    description: "Working together to bring innovative solutions to our customers",
    icon: LightBulbIcon
  },
  {
    title: "Trust & Reliability",
    description: "Building long-term relationships based on trust and mutual respect",
    icon: HandRaisedIcon
  }
];

export default function Partners() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Partners"
        title="Reliable materials. Reliable execution."
        lead="We work with trusted brands and suppliers to keep finishes consistent — and project timelines predictable."
      />

      <Section title="Why partner with Paint Hill" desc="Simple: we respect quality, timelines, and long-term relationships.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerBenefits.map((b) => (
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

      <Section title="Trusted partners" desc="Brands and suppliers we commonly work with.">
        <div className="space-y-8">
          {partners.map((cat) => (
            <div key={cat.category} className="ph-glass rounded-3xl p-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-[var(--ph-primary)]/12 flex items-center justify-center">
                  <cat.icon className="h-6 w-6 text-[var(--ph-primary)]" />
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{cat.category}</h3>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.companies.map((c) => (
                  <div key={c.name} className="rounded-2xl border border-black/10 bg-white/70 p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-slate-950 text-white flex items-center justify-center text-sm font-semibold">
                        {c.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-950">{c.name}</p>
                        <p className="mt-1 text-sm text-slate-700">{c.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Partnership impact" desc="What consistent supply and reliable execution unlocks.">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { v: "15+", l: "Partner companies" },
            { v: "20+", l: "Years collaborating" },
            { v: "5000+", l: "Projects delivered" },
            { v: "98%", l: "Customer satisfaction" },
          ].map((s) => (
            <div key={s.l} className="ph-glass rounded-3xl p-6">
              <div className="text-3xl font-semibold tracking-tight text-slate-950">{s.v}</div>
              <div className="mt-1 text-sm text-slate-600">{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="ph-glass rounded-3xl p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-slate-600">Partner with us</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-950">
              Want to collaborate?
            </h2>
            <p className="mt-3 text-base text-slate-700 max-w-2xl">
              If you share our standard for quality and reliability, we’d love to talk.
            </p>
          </div>
          <a
            href="tel:+918767520926"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white/70 px-7 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
          >
            <PhoneIcon className="h-4 w-4" />
            Call us
          </a>
        </div>
      </section>
    </div>
  );
}
