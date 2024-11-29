import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Freshly Baked Happiness Delivered!
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Indulge in our handcrafted cakes made with love and the finest ingredients.
          Perfect for any celebration or special moment.
        </p>
        <button className="bg-pink-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-pink-600 transition-colors">
          Browse Our Cakes
        </button>
      </div>
    </div>
  );
}