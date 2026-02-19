import type { Metadata } from "next";
import { StarIcon } from "@heroicons/react/20/solid";
import PageHero from "../components/SitePages/PageHero";
import Section from "../components/SitePages/Section";
import QuoteCtaButton from "../components/QuoteCtaButton";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Real feedback from Paint Hill customers — wall painting, textures, and interior styling across Mumbai & Navi Mumbai.",
  alternates: { canonical: "/testimonials" },
};

const testimonials = [
  {
    name: "Aparna S.",
    location: "Powai, Mumbai",
    service: "Wall Painting",
    rating: 5,
    quote:
      "Clean prep, no mess, sharp edges. The team finished on time and the walls look brand new.",
  },
  {
    name: "Rohit K.",
    location: "Vashi, Navi Mumbai",
    service: "Texture Painting",
    rating: 5,
    quote:
      "The texture wall came out premium — not loud, just the right depth. Great suggestions on finishes.",
  },
  {
    name: "Neha P.",
    location: "Santacruz, Mumbai",
    service: "Interior Design",
    rating: 5,
    quote:
      "They helped us simplify choices and pulled everything together. Practical, tasteful, and budget-aware.",
  },
  {
    name: "Sameer D.",
    location: "Andheri, Mumbai",
    service: "Commercial Projects",
    rating: 5,
    quote:
      "Our office repaint was executed after-hours with minimal disruption. Clean handover and consistent finish.",
  },
  {
    name: "Kavita R.",
    location: "Chembur, Mumbai",
    service: "Wall Painting",
    rating: 5,
    quote:
      "Masking and cleanup were top-notch. No paint smell lingered for long and the coverage is excellent.",
  },
  {
    name: "Arjun M.",
    location: "Thane",
    service: "Texture Painting",
    rating: 5,
    quote:
      "Quality work, polite crew, and clear updates. The final look matches the samples exactly.",
  },
];

function Rating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <StarIcon
          key={idx}
          className={`h-4 w-4 ${idx < value ? "text-[var(--ph-accent)]" : "text-slate-200"}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Testimonials"
        title="Real projects. Real feedback."
        lead="Short, honest notes from customers — what went well, what felt premium, and why they’d recommend us."
      />

      <Section
        title="Customer stories"
        desc="Every home and site is different. Our process stays consistent: prep → protect → execute → clean handover."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={`${t.name}-${t.location}`} className="ph-glass rounded-3xl p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-950">{t.name}</p>
                  <p className="mt-1 text-xs text-slate-600">{t.location}</p>
                </div>
                <Rating value={t.rating} />
              </div>

              <p className="mt-5 text-sm text-slate-700 leading-relaxed">
                “{t.quote}”
              </p>

              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-900">
                  {t.service}
                </span>
                <span className="text-xs text-slate-600">Verified project</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="ph-glass rounded-3xl p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-slate-600">Next step</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-950">
              Want the same finish at your place?
            </h2>
            <p className="mt-3 text-base text-slate-700 max-w-2xl">
              Tell us your wall area, preferred timeline, and finish (paint / texture / interior). We’ll share an estimate and schedule a visit.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <QuoteCtaButton
              label="Get a quote"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[var(--ph-accent)] px-7 py-3 text-sm font-semibold text-white hover:opacity-95"
            />
            <a
              href="tel:+918767520926"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-black/15 bg-white/70 px-7 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
            >
              Call now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
