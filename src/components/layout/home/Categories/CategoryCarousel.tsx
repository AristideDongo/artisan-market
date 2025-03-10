'use client'
import { categories } from "@/data/categories";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function CategoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimate, setIsAnimate] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  //Gestion du defilement
  const startAutoSlide = () => {
    if(timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setIsAnimate(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 2000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null
      }
    };
  }, [currentIndex]);

  const transitionEnd = () => {
    setIsAnimate(false);
    startAutoSlide();
  };

  //fluidifié le defilement
  const transformValue = () => {
    const itemWidth = 272;
    return `translateX(-${currentIndex * itemWidth}px)`;
  };
  return (
    <div>

    <div
      className={`flex gap-4 transition-transform duration-700 ease-in-out ${isAnimate ? 'animate-slide' : ''}`}
      style={{ transform: transformValue() }}
      onTransitionEnd={transitionEnd}
    >
      {categories.map((category) => (
        <div
          key={category.id}
          className="w-64 flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden transition-all transform duration-300 hover:shadow-lg"
        >
          <div className="h-40 overflow-hidden">
            <Image
              src={category.image}
              alt={category.name}
              width={500}
              height={500}
              className="w-full h-full object-cover transition duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-800">
              {category.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{category.description}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-center mt-6 space-x-2">
        {categories.map((cat, index) => (
            <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 
                ${index === currentIndex ? 'w-6 bg-amber-600' : 'bg-gray-300'}`}
                aria-label="suivant"
                onClick={() => {
                    setCurrentIndex(index)
                    startAutoSlide()
                    setIsAnimate(true)
                }}
            />
        ))}
    </div>
    </div>
  );
}
