import Image from "next/image";

const index = () => {
    return (
      <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 m-32'>
        <h2 className="text-4xl sm:text-65xl font-bold text-center">Bringing Colors to Life,<br /> One Wall at a Time.</h2>
        <h3 className="text-2xl font-medium text-center pt-10 opacity-50">Your space deserves the perfect blend of color, texture, and creativity. Let us transform your walls into a masterpiece.</h3>
      <div className='grid grid-cols-1 my-4 md:my-16 mx-2 lg:mx-0 overflow-hidden rounded-2xl shadow-2xl relative group aspect-video'>
          <Image
            src="https://images.pexels.com/photos/6583363/pexels-photo-6583363.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900"
            alt="Hand selecting paint color swatches"
            fill
            sizes="(min-width: 1024px) 80vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    )
}

export default index;
