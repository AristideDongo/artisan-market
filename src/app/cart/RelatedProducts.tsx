'use client'
import React from 'react';
import ProductCard from '@/components/layout/product/ProductCard';

export default function RelatedProducts({ products }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-6">Vous pourriez aussi aimer</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
          key={product.id}
          {...product}
          />
        ))}
      </div>
    </div>
  );
}