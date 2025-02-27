'use client'
import React from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({products}) {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl text-amber-900 mb-8 text-center">Créations Artisanales De La Semaine</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {products.slice(0, 8).map(product => (
          <ProductCard 
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </div>
  )
}