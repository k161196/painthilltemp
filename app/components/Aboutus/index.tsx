import Image from "next/image";

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    paragraph2?: string;
    points?: string[];
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "About us.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: `"Bringing Walls to Life with Colors & Creativity!"`,
    paragraph2: `"At Paint Hill, we specialize in transforming dull walls into artistic masterpieces. Our team of skilled painters and designers ensures that every stroke adds beauty, elegance, and uniqueness to your space. Whether it’s your home or office, we believe walls should inspire and tell a story.`,
    points: [`🔹 Experienced professionals`, `🔹 High-quality, durable paints`, `🔹 Personalized designs`],
    link: 'Learn more'
    },
    {
        heading: "Services.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: '"Expert Wall Painting Solutions for Every Space!"',
    paragraph2:'We offer a range of wall painting services tailored to your needs:',
    points:['🎨 Custom Wall Art – Murals, textures, and unique hand-painted designs.','🏠 Residential Painting – Freshen up your home with vibrant, long-lasting colors.','🏢 Commercial Painting – Stylish walls for offices, restaurants, and retail spaces.','✨ Texture & Stencil Painting – Modern and trendy patterns to elevate your interiors.'],
        link: 'Learn more'
    },
    {
        heading: "Our Works.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: '"See Our Stunning Transformations!"',
    paragraph2:'A picture is worth a thousand words! Check out our portfolio of beautifully painted walls that have redefined interiors. We take pride in our:',
    points:['✅ Unique customized designs','✅ High-end wall textures and murals','✅ Before & after transformations'],
        link: 'Learn more'
    },
]

const Aboutus = () => {
    return (

    <div id="aboutus-section" className="overflow-x-hidden">
      <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative overflow-x-hidden'>
        <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-10 md:-left-20" />
        <h3 className='text-center text-blue text-lg tracking-widest'>ABOUT US</h3>
        <h4 className='text-center text-4xl lg:text-65xl font-bold'>Know more about us.</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-1 gap-x-8'>
          {Aboutdata.map((item, i) => (
            <div key={i} className='bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl border border-gray-100 group transition-all hover:-translate-y-2 hover:shadow-2xl hover:bg-navyblue'>
              <h4 className='text-3xl font-semibold text-black mb-5 group-hover:text-white'>{item.heading}</h4>
              <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
              <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
              <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph2}</h4>
              {item.points?.map((point,index) => (

                <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5' key={index}>{point}</h4>
              ))}
              {/*<Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                {item.link}
                <ChevronRightIcon width={20} height={20} />
              </Link>*/}
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Aboutus;
