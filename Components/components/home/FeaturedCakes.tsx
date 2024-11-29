"use client"
import React from 'react';
import { Star } from 'lucide-react';

const featuredCakes = [
  {
    id: 1,
    name: 'Classic Red Velvet',
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 49.99,
    description: 'Rich and velvety cake with cream cheese frosting',
  },
  {
    id: 2,
    name: 'Chocolate Dream',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 54.99,
    description: 'Decadent chocolate layers with ganache filling',
  },
  {
    id: 3,
    name: 'Wedding Special',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 299.99,
    description: 'Elegant three-tier cake with fondant flowers',
  },
  {
    id: 1,
    name: 'Classic Red Velvet',
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 49.99,
    description: 'Rich and velvety cake with cream cheese frosting',
  },
  {
    id: 2,
    name: 'Chocolate Dream',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 54.99,
    description: 'Decadent chocolate layers with ganache filling',
  },
  {
    id: 3,
    name: 'Wedding Special',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 299.99,
    description: 'Elegant three-tier cake with fondant flowers',
  },
  {
    id: 1,
    name: 'Classic Red Velvet',
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 49.99,
    description: 'Rich and velvety cake with cream cheese frosting',
  },
  {
    id: 2,
    name: 'Chocolate Dream',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 54.99,
    description: 'Decadent chocolate layers with ganache filling',
  },
  {
    id: 3,
    name: 'Wedding Special',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 299.99,
    description: 'Elegant three-tier cake with fondant flowers',
  },
  {
    id: 1,
    name: 'Classic Red Velvet',
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 49.99,
    description: 'Rich and velvety cake with cream cheese frosting',
  },
  {
    id: 2,
    name: 'Chocolate Dream',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 54.99,
    description: 'Decadent chocolate layers with ganache filling',
  },
  {
    id: 3,
    name: 'Wedding Special',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 299.99,
    description: 'Elegant three-tier cake with fondant flowers',
  },
];

export function FeaturedCakes({ title }: { title: string }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCakes.map((cake,index) => (
            <div 
              key={index} 
              className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              onClick={() => window.location.href = `/products/${cake.id}`}
            >
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{cake.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">4.9</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{cake.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-pink-500">
                    ${cake.price}
                  </span>
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}