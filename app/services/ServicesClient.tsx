"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetQuoteModal from "../components/GetQuoteModal";

type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  image: string;
};

interface ServicesClientProps {
  services: Service[];
}

export default function ServicesClient({ services }: ServicesClientProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-gray-600 transition-colors hover:text-gray-900"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Our Services</h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Professional painting and interior design services to transform your
            space into something extraordinary
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`scroll-mt-24 flex flex-col gap-12 lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full flex-1">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  {service.title}
                </h2>
                <p className="mb-6 text-gray-600">{service.description}</p>

                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    What&apos;s Included:
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-2xl font-semibold text-gray-900">
                    {service.price}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Get Quote
                </button>
              </div>

              <div className="w-full flex-1">
                <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-lightgrey shadow-lg sm:h-96">
                  <Image
                    src={service.image}
                    alt={`${service.title} service`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(min-width: 1150px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <GetQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
