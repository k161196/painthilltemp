import { CheckBadgeIcon } from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Inspect + estimate",
    desc: "We visit, measure, and share a clear quote with timelines.",
  },
  {
    title: "Prep like pros",
    desc: "Masking, protection, crack filling, primer — the boring stuff done right.",
  },
  {
    title: "Paint + polish",
    desc: "Two coats, sharp edges, cleanup, final walkthrough — done.",
  },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <div className="ph-glass rounded-3xl px-6 py-10 sm:px-10">
        <div className="flex items-center gap-3">
          <CheckBadgeIcon className="h-6 w-6 text-[var(--ph-primary)]" />
          <p className="text-xs tracking-[0.18em] uppercase text-slate-600">How it works</p>
        </div>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-950">
          Predictable process. Beautiful finish.
        </h2>
        <p className="mt-3 text-base text-slate-700 max-w-2xl">
          No surprises. You always know what’s next — and what “done” looks like.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={s.title} className="rounded-2xl border border-black/10 bg-white/70 p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ph-primary)] text-white font-semibold">
                  {idx + 1}
                </span>
                <h3 className="text-lg font-semibold text-slate-950">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

