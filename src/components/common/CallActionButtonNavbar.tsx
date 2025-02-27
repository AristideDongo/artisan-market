import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { ShoppingBag, Search, User, X } from "lucide-react";
import Link from "next/link";

export default function CallAction({ menuOpen }) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const toggleMobileSearch = () => {
    setMobileSearchOpen(!mobileSearchOpen);
  };

  return (
    <div className="relative">
      {/* Search and Icons */}
      <div className="flex items-center space-x-6">
        <div className="hidden md:flex items-center relative">
          <input
            type="text"
            placeholder="Rechercher..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/compte" className="text-gray-700 hover:text-amber-600">
            <User className="h-6 w-6" />
          </Link>
          <Link href="/panier" className="text-gray-700 hover:text-amber-600 relative">
            <ShoppingBag className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        {/* Mobile search button */}
        <button className="md:hidden text-gray-700" onClick={toggleMobileSearch}>
          <Search className="h-6 w-6" />
        </button>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700" onClick={menuOpen}>
          <Hamburger />
        </button>
      </div>

      {/* Mobile search input */}
      {mobileSearchOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full bg-white p-4 shadow-md z-50 flex items-center">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
            />
          </div>
          {/* Close button */}
          <button onClick={toggleMobileSearch} className="ml-4 text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}
