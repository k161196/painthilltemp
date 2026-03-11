"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CheckBadgeIcon,
  MapPinIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import GetQuoteModal from "../GetQuoteModal";

const heroLines = [
  "Premium finishes. Zero drama. Clean edges, sharp lines, spotless cleanup.",
  "Texture work that feels bespoke, measured, balanced, never loud.",
  "A fresh coat, done right: prep, prime, paint, polish.",
];

const trustItems = [
  { label: "Project planning", value: "48-hour quote" },
  { label: "Execution quality", value: "Protected prep" },
  { label: "Aftercare", value: "1-year workmanship" },
];

const highlights = [
  {
    icon: MapPinIcon,
    title: "On-site visit",
    desc: "Mumbai + Navi Mumbai coverage with locality-aware scheduling.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Protected process",
    desc: "Masking, surface prep, and final cleanup are always included.",
  },
  {
    icon: SparklesIcon,
    title: "Premium finish",
    desc: "Texture and paint combinations curated to match your space.",
  },
];

export default function Hero() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [tagline, setTagline] = useState(heroLines[0]);

  useEffect(() => {
    setTagline(heroLines[Math.floor(Math.random() * heroLines.length)]);
  }, []);

  return (
    <section className="ph-hero-bg relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-[#F8F4EE]/70 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pb-14 pt-10 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-700">
              <span className="h-2 w-2 rounded-full bg-[var(--ph-accent)]" />
              Premium residential painting
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Homes that feel
              <span className="block text-[var(--ph-primary)]">crafted, not just painted.</span>
            </h1>

            <p className="mt-4 max-w-xl text-base text-slate-700 sm:text-lg">{tagline}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="inline-flex items-center justify-center rounded-full bg-[var(--ph-accent)] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-opacity duration-200 hover:opacity-95"
              >
                Get a free quote
              </button>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/80 px-7 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-white"
              >
                See recent work
              </Link>
              <Link
                href="tel:+918767520926"
                className="inline-flex items-center justify-center text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-slate-900"
              >
                Call: +91 8767520926
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {trustItems.map((item) => (
                <div key={item.label} className="rounded-2xl border border-black/10 bg-white/80 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-600">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.25rem] bg-gradient-to-tr from-[var(--ph-primary)]/20 via-transparent to-[var(--ph-accent)]/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-3 shadow-[0_24px_60px_rgba(2,6,23,0.2)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/images/gallery/gallery1.jpg"
                    alt="Paint Hill premium interior painting finish"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="w-full max-w-xl rounded-2xl border border-white/20 bg-black/35 p-4 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.14em] text-white/80">Featured finish</p>
                      <p className="mt-1 text-base font-semibold text-white">Warm matte palette with texture accent wall</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  {["gallery2", "gallery3", "gallery4"].map((g) => (
                    <div key={g} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10 bg-white">
                      <Image
                        src={`/images/gallery/${g}.jpg`}
                        alt="Paint Hill project detail"
                        fill
                        sizes="(max-width: 1024px) 33vw, 12vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.title} className="ph-glass rounded-2xl px-4 py-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-[var(--ph-primary)]/12 p-2">
                        <item.icon className="h-6 w-6 text-[var(--ph-primary)]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="mt-1 text-xs text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-xs text-slate-700">
                <CheckBadgeIcon className="h-4 w-4 text-[var(--ph-primary)]" />
                Trusted by homeowners across Mumbai and Navi Mumbai
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetQuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </section>
  );
}
