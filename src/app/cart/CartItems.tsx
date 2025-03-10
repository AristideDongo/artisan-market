'use client'
import React from 'react';
import Image from 'next/image';


export default function CartItems({ items }) {
  return (
    <div className="bg-amber-50 rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Détails des articles</h2>
      </div>
      
      <ul className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="px-6 py-4 flex items-center">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <div className="relative h-full w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                /> 
              </div>
            </div>

            <div className="ml-4 flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">Artisan: {item.userName}</p>
                </div>
                <p className="text-base font-medium text-gray-900">{item.price} €</p>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center border rounded-md">
                  <button className="px-3 py-1 text-gray-600 hover:text-gray-800">-</button>
                  <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
                  <button className="px-3 py-1 text-gray-600 hover:text-gray-800">+</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      
      <div className="px-6 py-4 border-t border-gray-200">
        <button className="text-sm text-amber-600 hover:text-amber-800 transition-all duration-300 font-medium">
          Vider le panier
        </button>
      </div>
    </div>
  );
}