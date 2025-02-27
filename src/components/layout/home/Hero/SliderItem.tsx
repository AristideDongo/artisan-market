import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SliderItem({ slide }) {
  const { image, title, subtitle, buttonText, buttonLink } = slide;

  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px]">
      <Image
        src={image}
        alt={title}
        className="object-cover w-full h-full"
        layout="fill"
        priority
      />
      
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-20 max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
          {subtitle}
        </p>
        <Link href={buttonLink}>
          <span className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-all duration-300">
            {buttonText}
          </span>
        </Link>
      </div>
    </div>
  );
}
