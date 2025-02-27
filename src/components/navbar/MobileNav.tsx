import { X } from 'lucide-react'
import React from 'react'
import { navLinks } from './Navlinks'
import Link from 'next/link'


export default function MobileNav({onClose}) {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300">
      <button 
        className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition-all duration-300"
        onClick={onClose}
        >
         <X size={24} /> 
      </button>

      <div className="mt-12 px-4 py-3">
        <div className="flex flex-col space-y-2">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-gray-800 hover:text-amber-600 rounded-lg hover:bg-gray-100 px-2 py-2 font-medium transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}