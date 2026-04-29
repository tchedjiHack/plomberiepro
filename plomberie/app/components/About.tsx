'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Shield, Clock, ThumbsUp, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    {
      src: "/images/plumb.jpg",
      alt: "Notre équipe de plombiers"
    },
    {
      src: "/images/pl2.jpg",
      alt: "Intervention rapide"
    },
    {
      src: "/images/pl3.jpg",
      alt: "Travaux de qualité"
    },
    {
      src: "/images/pl1.jpg",
      alt: "Satisfaction client"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section id="apropos" className="bg-gray-100 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">À propos de nous</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Depuis 1995, nous offrons des services de plomberie de qualité supérieure avec des artisans passionnés et dévoués.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Carousel avec auto-défilement */}
          <div className="relative">
            <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-cover transition-all duration-500"
              />
              
              {/* Légende */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3">
              </div>
            </div>
            
            {/* Boutons de navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Bouton Play/Pause */}
            <button
              onClick={toggleAutoPlay}
              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            
            {/* Indicateurs */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-white w-4' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Texte à droite - inchangé */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Artisans certifiés</h3>
                  <p className="text-gray-600 dark:text-gray-400">Tous nos plombiers sont certifiés RGE et régulièrement formés aux dernières technologies.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Intervention rapide</h3>
                  <p className="text-gray-600 dark:text-gray-400">Nous nous engageons à intervenir sous 1h maximum en cas d'urgence dans toute l'Île-de-France.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <ThumbsUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Satisfaction garantie</h3>
                  <p className="text-gray-600 dark:text-gray-400">Avec plus de 500 avis positifs, notre priorité est votre entière satisfaction.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}