"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroBanner() {
  const [currentSlider, setCurrentSlider] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Coleção Outono/Inverno 2024",
      subtitle: "Tendências que definem estilo",
      description:
        "Descubra as últimas tendências da moda com até 70% de desconto",
      image:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
      cta: "Ver Coleção",
      discount: "ATÉ 70% OFF",
    },
    {
      id: 2,
      title: "Moda Feminina Premium",
      subtitle: "Elegância em cada detalhe",
      description: "Peças exclusivas para mulheres que sabem o que querem",
      image: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg",
      cta: "Comprar Agora",
    },
    {
      id: 3,
      title: "Acessórios & Joias",
      subtitle: "Detalhes que fazem a diferença",
      description: "Complete seu look com nossa seleção de acessórios premium",
      image:
        "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg",
      cta: "Explorar",
      discount: "NOVIDADES",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlider((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlider((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlider((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
   <section className="relative min-h-[60vh] h-[80vh] sm:h-[90vh] py-16 sm:py-20 bg-white overflow-hidden">
  <div className="absolute inset-0">
    {slides.map((slide, index) => (
      <div
        key={slide.id}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlider ? "opacity-100 z-0" : "opacity-0 z-0"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Conteúdo */}
          <div className="flex items-center justify-center px-6 sm:px-10 md:px-16 py-8 bg-gray-50">
            <div className="max-w-lg text-center lg:text-left">
              {slide.discount && (
                <div className="inline-block px-3 py-1.5 bg-red-500 text-white text-xs sm:text-sm font-bold rounded-full mb-4 sm:mb-6">
                  {slide.discount}
                </div>
              )}
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 tracking-wider uppercase font-medium">
                {slide.subtitle}
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                {slide.description}
              </p>
              <Link href="/produtos">
                <Button className="text-sm sm:text-base">{slide.cta}</Button>
              </Link>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative w-full h-64 sm:h-full bg-white">
            <Image
              src={slide.image}
              alt={`Imagem do slide: ${slide.title}`}
              fill
              className="object-cover object-center sm:object-right"
              priority={index === currentSlider}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-50/20" />
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Botões de navegação */}
  <button
    onClick={prevSlide}
    aria-label="Slide anterior"
    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg z-10"
  >
    <ChevronLeft className="h-5 sm:h-6 w-5 sm:w-6 text-gray-800" />
  </button>
  <button
    onClick={nextSlide}
    aria-label="Próximo slide"
    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg z-10"
  >
    <ChevronRight className="h-5 sm:h-6 w-5 sm:w-6 text-gray-800" />
  </button>

  {/* Indicadores */}
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlider(index)}
        aria-label={`Ir para slide ${index + 1}`}
        className={`w-3 sm:w-7 h-1.5 sm:h-1.5 rounded-md transition-all duration-300 ${
          index === currentSlider ? "bg-black/80" : "bg-gray-400"
        }`}
      />
    ))}
  </div>
</section>

  );
}

export default HeroBanner;
