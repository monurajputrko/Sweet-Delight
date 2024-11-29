import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-64">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.category.includes('Popular') && (
          <span className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 rounded-full text-sm">
            Popular
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <p className="text-lg font-bold text-pink-500">${product.price}</p>
        </div>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">
              {product.rating} ({product.review})
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {product.category.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}