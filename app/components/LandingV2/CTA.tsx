"use client";

import Link from "next/link";
import { useState } from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";
import GetQuoteModal from "../GetQuoteModal";

export default function CTA() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="ph-glass rounded-3xl px-6 py-12 sm:px-10 overflow-hidden relative">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--ph-primary)]/15 blur-2xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[var(--ph-accent)]/15 blur-2xl" />

        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-slate-600">Next step</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-950">
              Get a quote in minutes.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-700">
              Share your property type and timeline. We’ll recommend the right finish and schedule a visit or call.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[var(--ph-accent)] px-7 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Get free quote
            </button>
            <Link
              href="tel:+918767520926"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-black/15 bg-white/70 px-7 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
            >
              <PhoneIcon className="h-4 w-4" />
              Call now
            </Link>
            <Link
              href="https://wa.me/918767520926"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-black/15 bg-white/70 px-7 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>

      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}

