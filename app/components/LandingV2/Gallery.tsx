import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const shots = ["gallery1", "gallery2", "gallery3", "gallery4", "gallery5", "gallery6"];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.18em] uppercase text-slate-600">Gallery</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-950">
            Recent work. Real finishes.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-700">
            A quick peek at texture, color palettes, and clean edge work.
          </p>
        </div>
        <Link
          href="/gallery"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white hover:opacity-95"
        >
          Open full gallery <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
        {shots.map((s, idx) => (
          <div
            key={s}
            className={`relative overflow-hidden rounded-2xl border border-black/10 bg-white ${
              idx === 0 ? "col-span-2 md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <div className={`${idx === 0 ? "aspect-[16/10]" : "aspect-[4/3]"} relative`}>
              <Image
                src={`/images/gallery/${s}.jpg`}
                alt="Paint Hill work sample"
                fill
                sizes={idx === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 sm:hidden">
        <Link
          href="/gallery"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
        >
          Open full gallery <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

