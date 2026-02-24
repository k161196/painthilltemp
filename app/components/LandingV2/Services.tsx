import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const services = [
  {
    title: "Wall Painting",
    desc: "Fast refresh with clean edges and consistent coverage.",
    href: "/services#wall-painting",
    img: "/images/services/wall-painting.jpg",
    meta: "Most booked",
  },
  {
    title: "Texture Painting",
    desc: "Statement walls with balanced depth and premium surface feel.",
    href: "/services#texture-painting",
    img: "/images/services/texture-painting.jpg",
    meta: "Premium finish",
  },
  {
    title: "Interior Design",
    desc: "Color, layout, and styling decisions unified for one visual language.",
    href: "/services#interior-design",
    img: "/images/services/interior-design.jpg",
    meta: "End-to-end",
  },
  {
    title: "Commercial Projects",
    desc: "Offices and retail spaces delivered with speed, order, and polish.",
    href: "/services#commercial-projects",
    img: "/images/services/commercial-projects.jpg",
    meta: "Team-ready",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-600">Services</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Premium execution across every service tier.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-700">
            One team, one quality bar, from quick repaint jobs to full interior upgrades.
          </p>
        </div>

        <Link
          href="/services"
          className="hidden cursor-pointer items-center gap-2 rounded-full border border-black/15 bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-50 sm:inline-flex"
        >
          View all services <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="group cursor-pointer overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_12px_40px_rgba(2,6,23,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(2,6,23,0.14)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={service.img}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/25 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {service.meta}
              </div>
            </div>

            <div className="bg-[#F8F4EE] px-6 py-5">
              <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{service.desc}</p>

              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                Learn more
                <ArrowRightIcon className="h-5 w-5 text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 sm:hidden">
        <Link
          href="/services"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-50"
        >
          View all services <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
