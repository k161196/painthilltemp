
'use client';

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import GetQuoteModal from "../GetQuoteModal";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bannerText, setBannerText] = useState(
    "Transform Your Walls, Elevate Your Space."
  );
  const [showVideo, setShowVideo] = useState(false);

  const bannerTexts = useMemo(() => ["Transform Your Walls, Elevate Your Space.",
    "Bringing Walls to Life with Colors And Creativity.",
    "Your Vision, Our Art – Stunning Wall Transformations!",
    "Let Your Walls Tell a Story with Our Paintings.",
    "From Imagination to Reality – We Paint Your Dreams."], []);

  useEffect(() => {
    // Set random text only on client side
    setBannerText(bannerTexts[Math.floor(Math.random() * bannerTexts.length)]);
  }, [bannerTexts]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    const connection = (navigator as any).connection as
      | undefined
      | { saveData?: boolean; effectiveType?: string };

    const saveData = Boolean(connection?.saveData);
    setShowVideo(!prefersReducedMotion && !saveData);
  }, []);

  return (
    <div className="relative bg-blue">
      <div className="relative min-h-screen overflow-hidden">
        {showVideo ? (
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            playsInline
            muted
            preload="metadata"
            poster="/images/team/teamimg.png"
          >
            <source
              src="https://videos.pexels.com/video-files/8293133/8293133-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            />
          </video>
        ) : (
          <div
            className="absolute inset-0 w-full h-full z-0 bg-center bg-cover"
            style={{ backgroundImage: "url(/images/team/teamimg.png)" }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue/60 to-black/80 z-0"></div>

        <div className='relative z-10 mx-auto max-w-7xl min-h-screen flex items-center px-6 lg:px-8'>
          <div className='w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8'>
            <div className="text-white w-full lg:max-w-2xl relative z-10">
              <div className='py-3 text-center lg:text-start reveal-up' style={{ animationDelay: "0ms" }}>
                <p className='text-xs md:text-sm uppercase tracking-[0.2em] text-white/80'>WHO WE ARE</p>
              </div>
              <div className="py-3 text-center lg:text-start reveal-up" style={{ animationDelay: "120ms" }}>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                  Premium Wall Painting & Texture Work
                </h1>
              </div>
              <p className="text-white/90 text-base md:text-lg mt-2 text-center lg:text-start reveal-up" style={{ animationDelay: "180ms" }}>
                {bannerText}
              </p>
              <p className="text-white/80 text-base md:text-lg mt-4 text-center lg:text-start reveal-up" style={{ animationDelay: "240ms" }}>
                Premium wall painting, texture work, and interior styling tailored to your space.
              </p>
              <div className='mt-8 text-center lg:text-start relative z-20 flex flex-col sm:flex-row gap-4 sm:items-center reveal-up' style={{ animationDelay: "360ms" }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className='relative z-30 inline-flex items-center justify-center text-sm md:text-lg font-semibold bg-[var(--ph-accent)] text-white py-3 px-8 md:py-4 md:px-10 rounded-full hover:opacity-95 transition-all hover:-translate-y-0.5 hover:shadow-2xl cursor-pointer pointer-events-auto'
                >
                  Get a Free Quote
                </button>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center text-sm md:text-lg font-semibold text-white/90 border border-white/40 py-3 px-8 md:py-4 md:px-10 rounded-full transition-all hover:bg-white/10 hover:border-white/70"
                >
                  View Gallery
                </Link>
              </div>
            </div>

            {/* Removed banner illustration image */}
          </div>
        </div>
      </div>

      {/* Get Quote Modal */}
      <GetQuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default Banner;
