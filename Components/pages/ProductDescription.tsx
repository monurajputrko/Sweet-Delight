"use client"
import React, { useState } from 'react';
import { ProductCarousel } from '../components/products/ProductCarousel';
import { ProductCustomization } from '../components/products/ProductCustomization';
import { ProductReviews } from '../components/products/ProductReviews';
import { DeliveryInfo } from '../components/products/DeliveryInfo';
import { Heart } from 'lucide-react';

// Mock data - In a real app, this would come from an API
const product = {
  id: 1,
  name: 'Classic Red Velvet',
  price: 49.99,
  description: 'Our signature red velvet cake features layers of moist, crimson-colored cake filled with smooth cream cheese frosting. Each bite delivers the perfect balance of rich cocoa and vanilla flavors, making it an ideal choice for any special occasion.',
  images: [
    'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  ],
  customizationOptions: [
    {
      id: 'size',
      name: 'Size',
      options: ['6" (serves 8-10)', '8" (serves 12-15)', '10" (serves 18-22)'],
    },
    {
      id: 'frosting',
      name: 'Frosting Type',
      options: ['Classic Cream Cheese', 'Vanilla Buttercream', 'Chocolate Ganache'],
    },
    {
      id: 'message',
      name: 'Custom Message',
      options: ['No message', 'Happy Birthday', 'Congratulations', 'Custom Text (+$5)'],
      price: 5,
    },
  ],
  reviews: [
    {
      id: 1,
      author: 'Emily Thompson',
      date: 'March 15, 2024',
      rating: 5,
      comment: 'This cake was absolutely perfect for my daughter\'s birthday! The red velvet was moist and delicious, and the cream cheese frosting was divine.',
    },
    {
      id: 2,
      author: 'James Wilson',
      date: 'March 10, 2024',
      rating: 4,
      comment: 'Great taste and beautiful presentation. Delivery was right on time.',
    },
  ],
};

export function ProductDescription() {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

  const handleOptionChange = (optionId: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionId]: value,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ProductCarousel images={product.images} productName={product.name} />

        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-2xl font-semibold text-pink-500 mt-2">${product.price}</p>
          </div>

          <p className="text-gray-700">{product.description}</p>

          <ProductCustomization
            options={product.customizationOptions}
            onOptionChange={handleOptionChange}
          />

          <div className="flex space-x-4">
            <button className="flex-1 bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors">
              Add to Cart
            </button>
            <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <Heart className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* <DeliveryInfo /> */}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
        <ProductReviews reviews={product.reviews} />
      </div>
    </div>
  );
}