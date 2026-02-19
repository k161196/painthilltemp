import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const services = [
  {
    title: "Wall Painting",
    desc: "Fast refresh. Clean finish. Ideal for moving in/out.",
    href: "/services#wall-painting",
    img: "/images/services/wall-painting.jpg",
  },
  {
    title: "Texture Painting",
    desc: "Subtle textures, statement walls, premium surfaces.",
    href: "/services#texture-painting",
    img: "/images/services/texture-painting.jpg",
  },
  {
    title: "Interior Design",
    desc: "Layout, lighting, and styling — a cohesive space, end to end.",
    href: "/services#interior-design",
    img: "/images/services/interior-design.jpg",
  },
  {
    title: "Commercial Projects",
    desc: "Offices, retail, restaurants — clean, quick, and branded.",
    href: "/services#commercial-projects",
    img: "/images/services/commercial-projects.jpg",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.18em] uppercase text-slate-600">Services</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-950">
            Built for real homes — and real timelines.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-700">
            Pick the finish you want. We’ll handle prep, materials, and a clean handover.
          </p>
        </div>
        <Link
          href="/services"
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          View all <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className="group ph-glass rounded-3xl overflow-hidden transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              {s.img.startsWith("/images/") ? (
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-tr from-slate-200 to-white" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-white/85">{s.desc}</p>
              </div>
            </div>
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-sm font-semibold text-slate-900">Learn more</span>
              <ArrowRightIcon className="h-5 w-5 text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
