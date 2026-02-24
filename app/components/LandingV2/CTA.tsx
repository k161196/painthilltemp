"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircleIcon, PhoneIcon } from "@heroicons/react/24/outline";
import GetQuoteModal from "../GetQuoteModal";

const points = [
  "Free on-site inspection",
  "Material + labor quote clarity",
  "Project timeline before kickoff",
];

export default function CTA() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-slate-950 px-6 py-12 sm:px-10">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--ph-primary)]/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-[var(--ph-accent)]/20 blur-3xl" />

        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">Ready to start</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let’s design your finish plan.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-white/80">
              Share the basics and get a premium-grade painting quote with transparent timelines.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <div key={point} className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/90">
                  <CheckCircleIcon className="h-4 w-4 text-[#F8F4EE]" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-white/95 p-4 sm:p-5">
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-[var(--ph-accent)] px-7 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-95"
                >
                  Get free quote
                </button>

                <Link
                  href="tel:+918767520926"
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-50"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call now
                </Link>

                <Link
                  href="https://wa.me/918767520926"
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-black/15 bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-50"
                >
                  WhatsApp
                </Link>
              </div>

              <p className="mt-3 text-center text-xs text-slate-600">
                Response window: usually within 30-60 minutes during working hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}
