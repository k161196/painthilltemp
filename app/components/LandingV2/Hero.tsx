"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MapPinIcon, ShieldCheckIcon, SparklesIcon } from "@heroicons/react/24/outline";
import GetQuoteModal from "../GetQuoteModal";

const heroLines = [
  "Premium finishes. Zero drama. Clean edges, sharp lines, spotless cleanup.",
  "Texture work that feels bespoke — measured, balanced, never loud.",
  "A fresh coat, done right: prep → prime → paint → polish.",
];

export default function Hero() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [tagline, setTagline] = useState(heroLines[0]);

  useEffect(() => {
    setTagline(heroLines[Math.floor(Math.random() * heroLines.length)]);
  }, []);

  return (
    <section className="ph-hero-bg relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs tracking-[0.18em] uppercase">
              <span className="h-2 w-2 rounded-full bg-[var(--ph-accent)]" />
              Mumbai + Navi Mumbai
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-950">
              Walls, but make them <span className="text-[var(--ph-primary)]">impeccable</span>.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-xl">
              {tagline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="inline-flex items-center justify-center rounded-full bg-[var(--ph-accent)] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:opacity-95 focus-visible:outline-none"
              >
                Get a free quote
              </button>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/70 px-7 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-white"
              >
                See recent work
              </Link>
              <Link
                href="tel:+918767520926"
                className="inline-flex items-center justify-center text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                Call: +91 8767520926
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="ph-glass rounded-2xl px-4 py-4 flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-[var(--ph-primary)] mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">On-site visit</p>
                  <p className="text-sm text-slate-600">Free inspection + detailed estimate.</p>
                </div>
              </div>
              <div className="ph-glass rounded-2xl px-4 py-4 flex items-start gap-3">
                <ShieldCheckIcon className="h-5 w-5 text-[var(--ph-primary)] mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Protected finish</p>
                  <p className="text-sm text-slate-600">Prep, masking, cleanup — included.</p>
                </div>
              </div>
              <div className="ph-glass rounded-2xl px-4 py-4 flex items-start gap-3">
                <SparklesIcon className="h-5 w-5 text-[var(--ph-primary)] mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Premium look</p>
                  <p className="text-sm text-slate-600">Texture + paint combos that last.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-[var(--ph-primary)]/20 via-transparent to-[var(--ph-accent)]/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-black/10 bg-white shadow-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/gallery/gallery1.jpg"
                    alt="Paint Hill wall painting work"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 p-3 bg-white">
                  {["gallery2", "gallery3", "gallery4"].map((g) => (
                    <div key={g} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10">
                      <Image
                        src={`/images/gallery/${g}.jpg`}
                        alt="Paint Hill wall painting detail"
                        fill
                        sizes="(max-width: 1024px) 33vw, 12vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetQuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </section>
  );
}
