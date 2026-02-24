import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const shots = ["gallery1", "gallery2", "gallery3", "gallery4", "gallery5", "gallery6"];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-600">Gallery</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Crafted rooms. Real client homes.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-700">
            Browse selected projects to see finish quality, color balance, and detailing.
          </p>
        </div>
        <Link
          href="/gallery"
          className="hidden cursor-pointer items-center gap-2 rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-95 sm:inline-flex"
        >
          Open full gallery <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
        {shots.map((shot, index) => {
          const isFeature = index === 0;
          return (
            <div
              key={shot}
              className={`relative overflow-hidden rounded-3xl border border-black/10 bg-white ${
                isFeature ? "md:col-span-3 md:row-span-2" : "md:col-span-3"
              }`}
            >
              <div className={`relative ${isFeature ? "aspect-[16/13] md:h-full" : "aspect-[16/10]"}`}>
                <Image
                  src={`/images/gallery/${shot}.jpg`}
                  alt="Paint Hill project gallery sample"
                  fill
                  sizes={isFeature ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                {isFeature ? (
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/30 px-3 py-1 text-xs text-white backdrop-blur-sm">
                    Featured transformation
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 sm:hidden">
        <Link
          href="/gallery"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-95"
        >
          Open full gallery <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
