'use client'
import React from 'react';
import CartItems from './CartItems';
import CartSummary from './CartSummary';
import RelatedProducts from './RelatedProducts';
import { products } from '@/data/products';
import MainLayout from '@/components/layout/GlobalLayout';

export default function Cart() {

  return (
    <MainLayout>
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900">Votre Panier</h1>
        <div className="mt-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <CartItems items={products.slice(0, 4)} />
          </div>
          
          <div className="mt-8 lg:mt-0 lg:col-span-4">
            <CartSummary items={products.slice(0, 2)} />
          </div>
        </div>
        
        <div className="mt-16">
          <RelatedProducts products={products.slice(0, 8)} />
        </div>
      </div>
    </div>
    </MainLayout>
  );
}