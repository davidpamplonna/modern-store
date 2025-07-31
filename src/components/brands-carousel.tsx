'use client';

import { useEffect, useState } from "react";

export function BrandsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);


  const brands = [
    {
      name: "Nike",
      logo: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    },
    {
      name: "Adidas",
      logo: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
    },
    {
      name: "Zara",
      logo: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
    },
    {
      name: "H&M",
      logo: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg",
    },
    {
      name: "Gucci",
      logo: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg",
    },
    {
      name: "Prada",
      logo: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    },
  ];


  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [brands.length]);

  return (

    <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
            <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Marcas Parceiras</h3>
            </div>
            <div className="relative overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 transition-transform duration-500 ease-out "
                style={{ transform: `transformX(-${currentIndex * (100 / 6)}%)` }}
                >
                    {brands.concat(brands).map((brand, index) => (
                        <div key={index} className="w-full flex-shrink-0 px-4 text-center">
                            <div className="bg-white  rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex-items-center justify-center h-20">
                                <span className="text-xl font-bold text-shadow-gray-800">{brand.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
