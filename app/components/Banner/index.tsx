
'use client';

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import GetQuoteModal from "../GetQuoteModal";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bannerText, setBannerText] = useState("Transform Your Walls, Elevate Your Space.");

  const bannerTexts = useMemo(() => ["Transform Your Walls, Elevate Your Space.",
    "Bringing Walls to Life with Colors And Creativity.",
    "Your Vision, Our Art – Stunning Wall Transformations!",
    "Let Your Walls Tell a Story with Our Paintings.",
    "From Imagination to Reality – We Paint Your Dreams."], []);

  useEffect(() => {
    // Set random text only on client side
    setBannerText(bannerTexts[Math.floor(Math.random() * bannerTexts.length)]);
  }, [bannerTexts]);

  return (
    <div className="relative bg-blue">
      <div className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          playsInline
          muted
          preload="auto"
          poster="/images/team/teamimg.png"
        >
          <source src="https://videos.pexels.com/video-files/8293133/8293133-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-blue/70 z-0"></div>

        <div className='relative z-10 mx-auto max-w-7xl min-h-screen flex items-center px-6 lg:px-8'>
          <div className='w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8'>
            <div className="text-white w-full lg:max-w-2xl relative z-10">
              <div className='py-3 text-center lg:text-start'>
                <p className='text-sm md:text-base uppercase tracking-wider'>WHO WE ARE</p>
              </div>
              <div className="py-3 text-center lg:text-start">
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                  {bannerText}
                </h1>
              </div>
              <div className='mt-8 text-center lg:text-start relative z-20'>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className='relative z-30 inline-block text-sm md:text-lg font-semibold hover:shadow-xl bg-white text-blue py-3 px-8 md:py-4 md:px-10 rounded-full hover:bg-lightgrey transition-colors cursor-pointer pointer-events-auto'
                >
                  Get a Free Quote
                </button>
              </div>
            </div>

            <div className="hidden lg:block flex-shrink-0">
              <Image src="/images/banner/1.png" alt="Wall painting illustration" width={600} height={600} />
            </div>
          </div>
        </div>
      </div>

      {/* Get Quote Modal */}
      <GetQuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default Banner;
