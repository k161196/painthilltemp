import { CheckBadgeIcon } from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Inspect + estimate",
    desc: "We inspect surfaces, measure scope, and share a clear quote with timeline and material plan.",
  },
  {
    title: "Prep + protect",
    desc: "Masking, crack repair, sanding, and primer. Preparation gets the same attention as final coats.",
  },
  {
    title: "Paint + handover",
    desc: "Layered application, edge detailing, cleanup, and walkthrough before sign-off.",
  },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_16px_48px_rgba(2,6,23,0.1)]">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="bg-slate-950 px-6 py-10 text-white sm:px-10 lg:col-span-4 lg:py-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/80">
              <CheckBadgeIcon className="h-4 w-4" />
              Process
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Structured workflow.
              <span className="block text-[#F8F4EE]">Premium outcome.</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
              Every project follows a fixed sequence so quality does not depend on guesswork.
            </p>
          </div>

          <div className="bg-[#F8F4EE] px-6 py-10 sm:px-10 lg:col-span-8 lg:py-12">
            <div className="space-y-5">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-[0_8px_24px_rgba(2,6,23,0.08)]"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ph-primary)] text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
                  </div>
                  <p className="text-sm text-slate-700 sm:text-base">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
