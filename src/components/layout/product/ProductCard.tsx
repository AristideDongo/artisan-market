'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, Star, Eye } from 'lucide-react';
import Image from 'next/image';
import { Product } from '@/types/product';
import Link from 'next/link';


const ProductCard: React.FC<Product> = ({
    id, 
  name, 
  description, 
  price, 
  rating,
  userName, 
  imgSrc,
}) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden border border-amber-200 bg-amber-50">
      {/* Image du produit */}
      <div className="relative h-64 overflow-hidden bg-amber-100">
        <Image 
          src={imgSrc} 
          alt={name}
          width={500}
          height={500}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <button 
          className="absolute top-3 right-3 p-1.5 bg-white rounded-full text-amber-700 hover:text-amber-500 transition-colors"
        >
          <Heart size={20} />
        </button>
        <Link 
          className="absolute bottom-3 right-3 p-1.5 bg-amber-800 bg-opacity-70 rounded-full text-white hover:bg-amber-700 transition-colors"
          href={`product/${id}`}
        >
          <Eye size={20} />
        </Link>
      </div>
      
      {/* Informations sur le produit */}
      <CardHeader className="pb-2 pt-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-serif line-clamp-1 text-amber-900">{name}</CardTitle>
            <CardDescription className="text-amber-700 italic">
              par {userName}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        <p className="text-sm text-amber-800 line-clamp-2 mb-2">{description}</p>
        
        {/* Évaluation */}
        <div className="flex items-center mt-2 mb-3">
          <div className="flex gap-0.5 mr-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className={`${i < Math.floor(rating) ? 'fill-amber-500 text-amber-500' : 'text-gray-300'}`} />
            ))}
          </div>
        </div>
        
        {/* Prix */}
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-[16px] font-semibold text-amber-900">{price}Fcfa</span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 pb-4">
        <Button 
          className="w-full bg-amber-700 hover:bg-amber-800 text-white border-none"
        >
          <ShoppingCart size={18} className="mr-2" />
          Ajouter au panier
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard