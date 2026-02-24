"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const faqs = [
  {
    q: "How long does a typical painting project take?",
    a: "Based on scope: 1BHK usually 3-5 days, 2BHK 5-7 days, 3BHK 7-10 days including prep, primer, and two coats. Texture surfaces may add 2-3 days.",
  },
  {
    q: "What is included in your painting service?",
    a: "Wall inspection, minor repairs, crack filling, surface prep, primer, two coats, furniture/floor protection, cleanup, and final quality walkthrough.",
  },
  {
    q: "Do you provide a warranty on your work?",
    a: "Yes. We provide a 1-year workmanship warranty. Paint product warranty from the manufacturer (typically 5-7 years) also applies.",
  },
  {
    q: "Can I stay in my home during the painting process?",
    a: "Yes. We usually work room-by-room to reduce disruption. We still recommend strong ventilation and avoiding freshly painted rooms for a few hours.",
  },
  {
    q: "Do you help with color selection?",
    a: "Yes. We suggest palettes based on light, room size, and furniture context, and can share swatch guidance before final choice.",
  },
];

export default function FAQ() {
  return (
    <section id="faq-section" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-24">
      <div className="overflow-hidden rounded-3xl border border-black/10 bg-[#F8F4EE] p-6 sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-600">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Clear answers before work begins.
          </h2>
          <p className="mt-3 text-base text-slate-700">
            Short, practical responses to timelines, process, and what to expect.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-3">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-black/10 bg-white">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full cursor-pointer items-start justify-between gap-4 px-5 py-4 text-left sm:px-6">
                      <span className="text-base font-semibold text-slate-950 sm:text-lg">{faq.q}</span>
                      <ChevronUpIcon
                        className={`h-5 w-5 text-[var(--ph-primary)] transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 pb-5 text-sm text-slate-700 sm:px-6 sm:text-base">
                      {faq.a}
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
