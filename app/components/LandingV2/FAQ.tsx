"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const faqs = [
  {
    q: "How long does a typical painting project take?",
    a: "Depends on scope. A 1BHK is usually 3–5 days, 2BHK 5–7 days, 3BHK 7–10 days (prep + primer + two coats). Texture work can add 2–3 days.",
  },
  {
    q: "What is included in your painting service?",
    a: "Wall inspection, minor repairs, crack filling, surface prep, primer, two coats, protection for furniture/floors, cleanup, and a final quality check.",
  },
  {
    q: "Do you provide a warranty on your work?",
    a: "Yes — 1-year workmanship warranty. Paint manufacturer warranty (typically 5–7 years) applies to products used.",
  },
  {
    q: "Can I stay in my home during the painting process?",
    a: "Yes. We work room-by-room to minimize disruption. We recommend ventilation and avoiding freshly painted rooms for a few hours.",
  },
  {
    q: "Do you help with color selection?",
    a: "Yes. We suggest palettes based on lighting, room size, and your furniture — and can share sample swatches.",
  },
];

export default function FAQ() {
  return (
    <section id="faq-section" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="rounded-3xl border border-black/10 bg-slate-950 px-6 py-12 sm:px-10">
        <p className="text-xs tracking-[0.18em] uppercase text-white/70 text-center">FAQ</p>
        <h2 className="mt-4 text-center text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Quick answers. Clear expectations.
        </h2>

        <div className="mt-10 space-y-3">
          {faqs.map((f, idx) => (
            <div key={idx} className="rounded-2xl bg-white/95 border border-white/10">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left">
                      <span className="text-base sm:text-lg font-semibold text-slate-950">
                        {f.q}
                      </span>
                      <ChevronUpIcon
                        className={`h-5 w-5 text-[var(--ph-primary)] transition-transform ${open ? "rotate-180" : ""}`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 pb-5 text-sm text-slate-700">
                      {f.a}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
