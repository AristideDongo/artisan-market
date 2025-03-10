'use client'
import { CiLock } from "react-icons/ci";
import React from 'react';

export default function CartSummary({ items }) {
  // Calcul des montants
  const subtotal = items.reduce((total, item) => total + ((item.price) * item.quantity), 0);
  const shipping = 4.95;
  const total = subtotal + shipping

  return (
    <div className="bg-amber-50 rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Récapitulatif de la commande</h2>
      </div>
      
      <div className="px-6 py-4 space-y-4">
        <div className="flex justify-between">
          <p className="text-gray-600">Sous-total</p>
          <p className="text-gray-900 font-medium">{subtotal.toFixed(2)} €</p>
        </div>
        
        <div className="flex justify-between">
          <p className="text-gray-600">Frais de livraison</p>
          <p className="text-gray-900 font-medium">{shipping.toFixed(2)} €</p>
        </div>
        
        
        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between">
            <p className="text-lg font-bold text-gray-900">Total</p>
            <p className="text-lg font-bold text-gray-900">{total.toFixed(2)} €</p>
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4">
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-md transition-colors">
          Procéder au paiement
        </button>
        
        <div className="mt-4 flex items-center justify-center space-x-2">
          <CiLock size={20} />
          <span className="text-sm text-gray-500">Paiement sécurisé</span>
        </div>
      </div>
    </div>
  );
}