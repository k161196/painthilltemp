import Image from "next/image";

const Digital = () => {
    return (
        <div className="mx-2">
            <div className='mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 bg-digital rounded-3xl bg-blue relative overflow-hidden'>
                <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div className="pt-24 lg:pl-24">
                        <h3 className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start">OUR PROCESS</h3>
                        <h4 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start">Professional Wall Painting Services</h4>
                        <p className="text-lg text-white/90 mb-8 text-center lg:text-start">
                            From consultation to completion, we deliver exceptional wall painting services with attention to detail and quality craftsmanship.
                        </p>
                        <div className="text-center lg:text-start">
                            <button className="text-xl font-semibold text-white bg-btnblue py-4 px-12 hover:bg-hoblue rounded-full">Learn More</button>
                        </div>
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative lg:absolute lg:right-0 lg:top-12">
                        <Image 
                            src="/images/digital/cleaning.svg" 
                            className="mt-10 lg:mt-0" 
                            alt="Professional painting service" 
                            width={600} 
                            height={500} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Digital;
