import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-amber-50">
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section À propos */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/api/placeholder/50/50" 
                alt="Logo Artisanat" 
                width={500}
                height={500}
                className="h-10 w-10"
              />
              <h3 className="text-xl font-serif font-semibold text-amber-800">ArtisanMarché</h3>
            </div>
            <p className="text-amber-700">
              Découvrez notre sélection unique de produits artisanaux créés avec passion par des artisans locaux.
            </p>
            <div className="flex space-x-4 text-amber-700">
              <Link href="#" className="hover:text-amber-500 transition-colors">
                <BsInstagram size={30} />
              </Link>
              <Link href="#" className="hover:text-amber-500 transition-colors">
                <FaFacebook size={30} />
              </Link>
              <Link href="#" className="hover:text-amber-500 transition-colors">
                <FaXTwitter size={30} />
              </Link>
            </div>
          </div>
          
          {/* Section Liens utiles */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-amber-800 font-serif pb-2 border-b border-amber-200">
              Liens utiles
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-amber-700 hover:text-amber-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                  Nos artisans
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-700 hover:text-amber-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                  Découvrir nos produits
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-700 hover:text-amber-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                  Devenir artisan partenaire
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-700 hover:text-amber-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                  Blog & événements
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-700 hover:text-amber-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>
          
          {/* Section Contact et newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-amber-800 font-serif pb-2 border-b border-amber-200">
              Contact
            </h3>
            <div className="space-y-2">
              <p className="flex items-center text-amber-700">
                <MapPin size={18} className="mr-2 text-amber-500" />
                10 rue des Artisans, 75001 Paris
              </p>
              <p className="flex items-center text-amber-700">
                <Phone size={18} className="mr-2 text-amber-500" />
                +33 1 23 45 67 89
              </p>
              <p className="flex items-center text-amber-700">
                <Mail size={18} className="mr-2 text-amber-500" />
                contact@artisanmarche.fr
              </p>
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-medium text-amber-800 mb-2">Inscrivez-vous à notre newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="px-3 py-2 bg-white border border-amber-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm flex-grow"
                />
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-2 rounded-r-md text-sm transition-colors">
                  S&apos;inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-amber-700 text-sm pt-2">
          <p>© {new Date().getFullYear()} ArtisanMarché - Tous droits réservés</p>
          <p className="mt-1 text-xs font-serif italic">Fabriqué avec passion pour soutenir l&apos;artisanat local</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;