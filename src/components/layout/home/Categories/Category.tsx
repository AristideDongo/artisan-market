import React from "react";
import CategoryCarousel from "./CategoryCarousel";
import { CircleArrowRight } from "lucide-react";

export default function Category() {
  return (
    <div className="py-12 w-full">
      <div className="w-full px-4">
        <h2 className="text-3xl font-semibold text-center mb-2">
          Catégories
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Découvrez notre savoir-faire artisanal
        </p>

        <div className="relative w-full overflow-hidden mb-10">
          <div className="flex items-center justify-center">
            <div className="relative w-full overflow-hidden mx-[50px]">
            <CategoryCarousel/>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition duration-300 flex items-center justify-center shadow-md text-lg font-medium"
          >
            <span>Aller à la boutique</span>
            <CircleArrowRight className="ml-2 mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
