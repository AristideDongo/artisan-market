import { StaticImageData } from "next/image";

export interface Product {
    id: string | number;
    name: string;
    description: string;
    price: number;
    rating: number;
    reviewCount: number;
    isFavorite: boolean;
    userName: string;
    imgSrc: StaticImageData | string
    onAddToCart: () => void;
    onToggleFavorite: () => void; 
    onQuickView: () => void;       
  }
  