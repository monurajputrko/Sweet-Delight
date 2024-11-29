import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface FilterOption {
  label: string;
  value: string;
}

interface ProductFiltersProps {
  categories: FilterOption[];
  occasions: FilterOption[];
  selectedCategory: string;
  selectedOccasion: string;
  sortBy: string;
  onCategoryChange: (category: string) => void;
  onOccasionChange: (occasion: string) => void;
  onSortChange: (sort: string) => void;
}

export function ProductFilters({
  categories,
  occasions,
  selectedCategory,
  selectedOccasion,
  sortBy,
  onCategoryChange,
  onOccasionChange,
  onSortChange,
}: ProductFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <SlidersHorizontal className="w-5 h-5 text-gray-500 mr-2" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Occasion
          </label>
          <select
            value={selectedOccasion}
            onChange={(e) => onOccasionChange(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500"
          >
            <option value="">All Occasions</option>
            {occasions.map((occasion) => (
              <option key={occasion.value} value={occasion.value}>
                {occasion.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500"
          >
            <option value="popular">Most Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>
    </div>
  );
}