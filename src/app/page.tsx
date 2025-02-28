'use client'
import Category from "@/components/layout/home/Categories/Category";
import ChooseUs from "@/components/layout/home/ChooseUs/ChooseUs";
import HeroSlider from "@/components/layout/home/Hero/HeroSlider";
import ProductGridHome from "@/components/layout/product/ProductGrid";
import { products } from "@/data/products";
import { sliderData } from "@/data/sliderData";

export default function Home() {



  return (
    <main>
      <HeroSlider slides={sliderData} />
      <Category />
      <ProductGridHome products={products} />
      <ChooseUs />
    </main>
  );
}
