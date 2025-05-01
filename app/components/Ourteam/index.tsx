import Image from "next/image";


const index = () => {
    return (
      <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 m-32'>
        <h2 className="text-4xl sm:text-65xl font-bold text-center">Bringing Colors to Life,<br /> One Wall at a Time.</h2>
        <h3 className="text-2xl font-medium text-center pt-10 opacity-50">Your space deserves the perfect blend of color, texture, and creativity. Let us transform your walls into a masterpiece.</h3>
      <div className='grid grid-cols-1 my-4 md:my-16 mx-2  lg:mx-0 overflow-hidden rounded-xl'>
          <video width="1296" height="684" autoPlay loop playsInline muted preload="auto">
            <source src="https://videos.pexels.com/video-files/8293133/8293133-hd_1920_1080_30fps.mp4" type="video/mp4" />
            <Image src="/images/team/teamimg.png" alt="office-image" height={684} width={1296} />
          </video>
        </div>
      </div>
    )
}

export default index;
