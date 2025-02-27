import Link from "next/link";
import React from "react";

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/product", label: "Boutique" },
  { href: "/about", label: "A propos" },
  { href: "/contact", label: "Contact" },
  { href: "/auth/login", label: "Se connecter" },
];

export default function Navlinks() {
  return (
    <div className="flex items-center space-x-1">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-lg hover:text-amber-600 font-medium transition-all duration-300"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
