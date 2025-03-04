"use client";
import { products } from "@/data/products";
import ProductGrid from "./ProductGrid";
import FilterBar from "./Filter";
import { useState } from "react";
import Pagination from "@/components/common/Pagination";

export default function ProductPage() {
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const ProductPerPage = 30;
  const paginate = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(products.length / ProductPerPage)

  const handleFilterChange = (name: string, value: string | boolean) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredProducts = products.filter((product) => {
    // Filter by category
    if (filters.category && !product.categories.includes(filters.category)) {
      return false;
    }

    // Filter by price range
    if (filters.minPrice && product.price < parseFloat(filters.minPrice)) {
      return false;
    }

    if (filters.maxPrice && product.price > parseFloat(filters.maxPrice)) {
      return false;
    }

    return true;
  });

  const indexOfLastProduct = currentPage * ProductPerPage
  const indexOfFirstProdct = indexOfLastProduct - ProductPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProdct, indexOfLastProduct)

  return (
    <div className="min-h-screen bg-background">
      {/* Filter Bar */}
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />

      <div className="container mx-auto px-4 py-8 pt-">
        <h1 className="text-3xl text-center font-bold">Boutique</h1>
          <ProductGrid products={currentProducts} />
      </div>

      <Pagination 
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={paginate}
      />
    </div>
  );
}
