import React from 'react';
import { Button } from '@/components/ui/button';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mb-4 items-center mt-4 space-x-2">
      {/* Bouton Précédent */}
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='bg-amber-600 hover:bg-amber-700 transition duration-300'
      >
        Précédent
      </Button>

      {/* Boutons de page */}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? 'outline' : 'solid'}
          onClick={() => onPageChange(page)}
          className={`${currentPage === page ? 'bg-amber-600' : 'bg-amber-50'}`}
        >
          {page}
        </Button>
      ))}

      {/* Bouton Suivant */}
      <Button
        variant="outline"
        className='bg-amber-600 hover:bg-amber-700 transition duration-300'
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Suivant
      </Button>
    </div>
  );
};

export default Pagination;