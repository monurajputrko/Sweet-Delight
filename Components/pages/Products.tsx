"use client"
import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/products/ProductCard';
import { ProductFilters } from '../components/products/ProductFilters';

const categories = [
  { label: 'Popular', value: 'Popular' },
  { label: 'Classic', value: 'Classic' },
  { label: 'Chocolate', value: 'Chocolate' },
  { label: 'Premium', value: 'Premium' },
  { label: 'Wedding', value: 'Wedding' },
  { label: 'Fruity', value: 'Fruity' },
  { label: 'Healthy', value: 'Healthy' },
  { label: 'Kids', value: 'Kids' },
];

const occasions = [
  { label: 'Birthday', value: 'Birthday' },
  { label: 'Wedding', value: 'Wedding' },
  { label: 'Anniversary', value: 'Anniversary' },
  { label: 'Celebration', value: 'Celebration' },
  { label: 'Children Party', value: 'Children Party' },
  { label: 'Summer Party', value: 'Summer Party' },
  { label: 'Casual', value: 'Casual' },
];

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter((product) =>
        product.category.includes(selectedCategory)
      );
    }

    if (selectedOccasion) {
      filtered = filtered.filter((product) =>
        product.occasion.includes(selectedOccasion)
      );
    }

    switch (sortBy) {
      case 'price-asc':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return filtered.sort((a, b) => b.price - a.price);
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      default:
        return filtered.sort((a, b) => b.review - a.review);
    }
  }, [selectedCategory, selectedOccasion, sortBy]);

  const handleProductClick = (productId: number) => {
    // In a real app, this would navigate to the product description page
    console.log('Navigate to product:', productId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Our Cakes</h1>
        <p className="text-gray-600">
          Showing {filteredAndSortedProducts.length} results
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProductFilters
            categories={categories}
            occasions={occasions}
            selectedCategory={selectedCategory}
            selectedOccasion={selectedOccasion}
            sortBy={sortBy}
            onCategoryChange={setSelectedCategory}
            onOccasionChange={setSelectedOccasion}
            onSortChange={setSortBy}
          />
        </div>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProducts.map((product: any) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => window.location.href = `/products/${product.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}