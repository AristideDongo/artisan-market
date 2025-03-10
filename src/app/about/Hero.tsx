"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import ImageArt1 from '@/images/about/art1.jpg'
import ImageArt2 from '@/images/about/art2.jpg'
import ImageArt3 from '@/images/about/art3.jpg'

export default function HeroSection() {
  const images = [ImageArt1, ImageArt2, ImageArt3];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Notre mission est de connecter les{" "}
              <span className="text-amber-600">artisans</span> au monde
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Chez ArtisanMarket, nous croyons au pouvoir de l&apos;artisanat
              traditionnel et à l&apos;importance de soutenir les créateurs
              indépendants. Notre plateforme permet aux artisans de partager
              leur passion et leur savoir-faire avec des clients qui valorisent
              l&apos;authenticité et la qualité.
            </p>
            <Link
              href="/boutique"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Découvrir nos artisans
            </Link>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
              className="h-full"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={src}
                    alt={`Artisan ${index + 1}`}
                    className="object-cover h-full w-full"
                    width={600}
                    height={600}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
