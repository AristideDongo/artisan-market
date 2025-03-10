'use client'
import React from 'react';

interface UserTypeSelectionProps {
  userType: 'client' | 'vendeur';
  setUserType: React.Dispatch<React.SetStateAction<'client' | 'vendeur'>>;
}

const UserTypeSelection: React.FC<UserTypeSelectionProps> = ({ userType, setUserType }) => {
  return (
    <div className="flex justify-center space-x-4">
      <button
        type="button"
        onClick={() => setUserType('client')}
        className={`px-6 py-2 text-sm font-medium rounded-md ${
          userType === 'client'
            ? 'bg-amber-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Client
      </button>
      <button
        type="button"
        onClick={() => setUserType('vendeur')}
        className={`px-6 py-2 text-sm font-medium rounded-md ${
          userType === 'vendeur'
            ? 'bg-amber-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Artisan Vendeur
      </button>
    </div>
  );
};

export default UserTypeSelection;
