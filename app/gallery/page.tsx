'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const galleryCategories = [
  { id: 'all', name: 'All Projects' },
  { id: 'residential', name: 'Residential' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'texture', name: 'Texture Work' },
  { id: 'interior', name: 'Interior Design' }
];

const galleryItems = [
  { id: 1, category: 'residential', title: 'Modern Living Room', description: '2BHK apartment in Santacruz', image: '/images/gallery/gallery1.jpg' },
  { id: 2, category: 'texture', title: 'Textured Feature Wall', description: 'Royal texture design in master bedroom', image: '/images/gallery/gallery2.jpg' },
  { id: 3, category: 'commercial', title: 'Corporate Office', description: 'Tech company office in BKC', image: '/images/gallery/gallery3.jpg' },
  { id: 4, category: 'residential', title: 'Kids Bedroom', description: 'Colorful theme for children', image: '/images/gallery/gallery4.jpg' },
  { id: 5, category: 'interior', title: 'Complete Home Interior', description: '3BHK villa interior design', image: '/images/gallery/gallery5.jpg' },
  { id: 6, category: 'texture', title: 'Moroccan Texture', description: 'Exotic texture patterns', image: '/images/gallery/gallery6.jpg' },
  { id: 7, category: 'commercial', title: 'Restaurant Interior', description: 'Fine dining restaurant', image: '/images/gallery/gallery6.jpg' },
  { id: 8, category: 'residential', title: 'Master Bedroom', description: 'Elegant bedroom design', image: '/images/gallery/gallery4.jpg' },
  { id: 9, category: 'texture', title: 'Geometric Patterns', description: 'Modern geometric wall art', image: '/images/gallery/gallery2.jpg' },
  { id: 10, category: 'interior', title: 'Kitchen Design', description: 'Modular kitchen with paint accents', image: '/images/gallery/gallery5.jpg' },
  { id: 11, category: 'commercial', title: 'Retail Store', description: 'Fashion boutique interiors', image: '/images/gallery/gallery3.jpg' },
  { id: 12, category: 'residential', title: 'Studio Apartment', description: 'Compact living solutions', image: '/images/gallery/gallery1.jpg' }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Work Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of completed projects and get inspired for your next transformation
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all hover:-translate-y-0.5 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1150px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Want to see your space transformed like these?</p>
          <Link 
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
