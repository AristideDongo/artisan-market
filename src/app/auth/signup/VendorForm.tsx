'use client'
import React from 'react';

interface VendorFormProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const VendorForm: React.FC<VendorFormProps> = ({ formData, handleChange }) => {
  return (
    <>
      <div className="md:col-span-2">
        <label htmlFor="nomBoutique" className="block text-sm font-medium text-gray-700">
          Nom de votre boutique
        </label>
        <input
          id="nomBoutique"
          name="nomBoutique"
          type="text"
          required
          value={formData.nomBoutique}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="categorieArtisanat" className="block text-sm font-medium text-gray-700">
          Catégorie d&apos;artisanat
        </label>
        <select
          id="categorieArtisanat"
          name="categorieArtisanat"
          required
          value={formData.categorieArtisanat}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Sélectionnez une catégorie</option>
          <option value="poterie">Poterie</option>
          <option value="bijoux">Bijoux</option>
          <option value="textiles">Textiles</option>
          <option value="bois">Travail du bois</option>
          <option value="cuir">Maroquinerie</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div className="md:col-span-2">
        <label htmlFor="descriptionBoutique" className="block text-sm font-medium text-gray-700">
          Description de votre boutique
        </label>
        <textarea
          id="descriptionBoutique"
          name="descriptionBoutique"
          rows={3}
          required
          value={formData.descriptionBoutique}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </>
  );
};

export default VendorForm;
