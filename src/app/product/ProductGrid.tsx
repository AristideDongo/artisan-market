'use client'
import ProductCard from '@/components/layout/product/ProductCard'
import React from 'react'

export default function ProductGrid({products}) {
  return (
    <div className="mx-2 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </div>
  )
}