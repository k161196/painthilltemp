"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const faqData = [
  {
    question: "How long does a typical painting project take?",
    answer: "The duration depends on the size and scope of the project. A 1BHK apartment typically takes 3-5 days, 2BHK takes 5-7 days, and 3BHK takes 7-10 days. This includes surface preparation, primer application, and two coats of paint. Texture painting may add 2-3 additional days."
  },
  {
    question: "What is included in your painting service?",
    answer: "Our comprehensive service includes: wall inspection and repair, crack filling, surface preparation, primer application, two coats of premium paint, cleaning of the work area, and a final quality check. We also move and cover your furniture to protect it during the painting process."
  },
  {
    question: "Do you provide a warranty on your work?",
    answer: "Yes, we provide a 1-year warranty on our workmanship. This covers any defects in application, peeling, or flaking due to poor workmanship. The paint manufacturer's warranty (usually 5-7 years) is also passed on to you for the paint products used."
  },
  {
    question: "What's the difference between rental and texture painting?",
    answer: "Rental painting is a standard paint job perfect for refreshing your space with smooth, uniform colors. Texture painting involves creating patterns and designs on walls using special tools and techniques, adding depth and visual interest. Texture painting costs more but creates a unique, luxurious look."
  },
  {
    question: "How much does painting cost per square foot?",
    answer: "Our pricing typically ranges from ₹12-25 per sq ft for rental painting and ₹80-200 per sq ft for texture painting, depending on the paint brand, type of paint (premium, economy), and surface condition. We provide detailed quotes after a free site inspection."
  },
  {
    question: "Can I stay in my home during the painting process?",
    answer: "Yes, you can stay in your home. We work room by room to minimize disruption. We use low-odor, eco-friendly paints that are safe for families. However, we recommend staying away from freshly painted rooms for 2-4 hours to allow proper ventilation."
  },
  {
    question: "Do you help with color selection?",
    answer: "Absolutely! Our team includes color consultants who can help you choose the perfect color scheme for your space. We consider factors like room size, lighting, existing furniture, and your personal preferences. We can also provide color samples for you to test."
  },
  {
    question: "What brands of paint do you use?",
    answer: "We work with all major paint brands including Asian Paints, Berger, Nerolac, Dulux, and Nippon. You can choose your preferred brand and product range (economy, premium, or luxury). We can also recommend the best options based on your budget and requirements."
  },
  {
    question: "How do you protect my furniture and belongings?",
    answer: "We take furniture protection seriously. Our team carefully moves lightweight furniture to the center of the room and covers everything with plastic sheets. Floors are protected with cloth and plastic covering. We ensure your belongings are safe throughout the painting process."
  },
  {
    question: "Do you handle commercial painting projects?",
    answer: "Yes, we handle both residential and commercial projects. Our commercial services include offices, retail stores, restaurants, and other business spaces. We can work during off-hours to minimize disruption to your business operations."
  }
];

const FAQ = () => {
  return (
    <div id="faq-section" className='mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg'>
      <h3 className='text-xl font-normal text-white text-center mb-6'>FAQ</h3>
      <h2 className='text-4xl lg:text-6xl font-semibold text-center text-white'>Frequently Asked <br /> Questions</h2>
      <div className="w-full px-4 pt-16">
        {faqData.map((faq, index) => (
          <div key={index} className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-xl lg:text-2xl font-medium">
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-purple-500 flex-shrink-0 ml-2`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-70">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ;