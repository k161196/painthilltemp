//"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

//function useWindowSize() {
//  // Initialize state with undefined width/height so server and client renders match
//  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
//  const [windowSize, setWindowSize] = useState({
//    //width: undefined,
//    //height: undefined,
//  });
//
//  useEffect(() => {
//    // only execute all the code below in client side
//    // Handler to call on window resize
//    function handleResize() {
//      // Set window width/height to state
//      setWindowSize({
//        width: window.innerWidth,
//        height: window.innerHeight,
//      });
//    }
//
//    // Add event listener
//    window.addEventListener("resize", handleResize);
//
//    // Call handler right away so state gets updated with initial window size
//    handleResize();
//
//    // Remove event listener on cleanup
//    return () => window.removeEventListener("resize", handleResize);
//  }, []); // Empty array ensures that effect is only run on mount
//  return windowSize;
//}

const Banner = () => {
  const bannerTexts:string[] =  ["Transform Your Walls, Elevate Your Space.",
    "Bringing Life to Your Walls with Colors & Creativity.",
    "Your Vision, Our Art – Stunning Wall Transformations!",
    "Let Your Walls Tell a Story with Our Paintings.",
    "From Imagination to Reality – We Paint Your Dreams."]
  let bannerText: string = bannerTexts[Math.floor(Math.random() * bannerTexts.length)];
  //const size:any = useWindowSize();

  return (
    <div>

      <video className="hidden md:block" width="100%" autoPlay loop playsInline muted preload="auto" poster="/images/team/teamimg.png">
        <source src="https://videos.pexels.com/video-files/8293133/8293133-hd_1920_1080_30fps.mp4" type="video/mp4" />
        <Image src="/images/team/teamimg.png" alt="office-image" height={684} width={1296} />
      </video>
      {/*     <div>
      {size.width}px / {size.height}px
    </div>*/}

       <div className='mx-auto max-w-7xl  sm:py-10 px-6 lg:px-8'>
        <div className='grid grid-rows-1 my-16 md:my-0'>

          <div className="mx-auto sm:mx-0">
            <div className='py-3 text-center lg:text-start'>
              <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>Wall Painting.</button>
            </div>
            <div className="py-3 text-center lg:text-start">
              <h1 className='text-6xl lg:text-80xl font-bold text-darkpurple'>
                {bannerText}
              </h1>
            </div>
            <div className='text-center lg:text-start'>
              <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                Get A Free Quote
              </button>
            </div>
          </div>



        </div>
      </div>

      {/*<div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

          <div className="mx-auto sm:mx-0">
            <div className='py-3 text-center lg:text-start'>
              <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>Wall Painting.</button>
            </div>
            <div className="py-3 text-center lg:text-start">
              <h1 className='text-6xl lg:text-80xl font-bold text-darkpurple'>
                {bannerText}
              </h1>
            </div>
            <div className='my-7 text-center lg:text-start'>
              <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                Get Started
              </button>
            </div>
          </div>


          <div className='lg:pt-20 hidden lg:block'>
            <Image src="/images/banner/banner1.svg" alt="hero-image" width={800} height={642} />
          </div>

        </div>
      </div>
      */}
    </div>
  )
}

export default Banner;
