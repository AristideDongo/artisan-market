import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { allCategories } from '@/data/filter';
import { Label } from '@/components/ui/label';

interface FilterBarProps {
  filters: {
    category: string;
    minPrice: string;
    maxPrice: string;
  };
  onFilterChange: (name: string, value: string | boolean) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resetFilters = () => {
    onFilterChange('category', '');
    onFilterChange('minPrice', '');
    onFilterChange('maxPrice', '');
  };

  return (
    <aside
      className={`w-full bg-white mt-2 shadow-md px-4 py-3 transition-transform duration-300 z-40 
      ${isSticky ? 'fixed top-[64px] left-0 right-0 border-b' : 'relative'}`}
    >

      <div className="grid grid-cols-3 gap-4">
        {/* Categories */}
        <div>
          <Label htmlFor="category" className="block text-xs text-gray-600 mb-1">Catégorie</Label>
          <select
            id="category"
            value={filters.category}
            onChange={(e) => onFilterChange('category', e.target.value)}
            className="w-full px-3 py-2 border-2 border-black rounded-md text-sm bg-white focus:ring-indigo-500"
          >
            <option value="">Toutes les catégories</option>
            {allCategories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="flex space-x-4">
          <div>
            <label htmlFor="minPrice" className="block text-xs text-gray-600">Min</label>
            <input
              type="number"
              id="minPrice"
              min='0'
              step='100'
              value={filters.minPrice}
              onChange={(e) => onFilterChange('minPrice', e.target.value)}
              className="w-full px-2 py-2 border-2 border-black rounded-md text-sm focus:ring-indigo-500"
              placeholder="0"
            />
          </div>
          <div>
            <label htmlFor="maxPrice" className="block text-xs text-gray-600">Max</label>
            <input
              type="number"
              id="maxPrice"
              step='100'
              value={filters.maxPrice}
              onChange={(e) => onFilterChange('maxPrice', e.target.value)}
              className="w-full px-2 py-2 border-2 border-black rounded-md text-sm focus:ring-indigo-500"
              placeholder="1000"
            />
          </div>
        </div>

        {/* Reset Button */}
        <div className="flex items-end">
          <button
            onClick={resetFilters}
            className="w-full px-4 py-2 bg-amber-50 text-gray-800 border-2 border-black rounded-md hover:text-white hover:bg-amber-600 transition duration-300 flex items-center justify-center"
          >
            <X className="mr-2" size={25} /> Reset
          </button>
        </div>
      </div>
    </aside>
  );
};

export default FilterBar;