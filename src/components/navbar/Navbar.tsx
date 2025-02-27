'use client'
import React, { useState } from 'react';
import NavLinks from './Navlinks';
import MobileNav from './MobileNav';
import CallAction from '../common/CallActionButtonNavbar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Desktop Navbar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-amber-600">ArtisanMarket</span>
          </a>

          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:block">
            <NavLinks />
          </div>

          {/* Button Call-to-action */}
          <CallAction menuOpen={menuOpen} />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={menuOpen}></div>
      )}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 
      ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}	`}>
        <MobileNav onClose={menuOpen} />
      </div>
    </header>
  );
};

export default Navbar;