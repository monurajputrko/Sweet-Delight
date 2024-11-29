"use client"
import React, { useState } from 'react';
import { Cake, Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center justify-center">
          
           <Cake className="h-8 w-8 text-pink-500" />
           <span className="ml-2 text-xl font-semibold text-gray-900">Sweet Delights</span>
        
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/"><span className='text-gray-900 text-pink-500'>Home</span></Link>
            <Link href="/products"><span className='text-gray-900 hover:text-pink-500 active:text-pink-500'>Products</span></Link>
            <Link href="/about"><span className='text-gray-900 hover:text-pink-500 active:text-pink-500'>About Us</span></Link>
            <Link href="/contact"><span className='text-gray-900 hover:text-pink-500 active:text-pink-500'>Contact</span></Link>
            <button onClick={() => window.location.href = '/products'} className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors">
              Order Now
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <a
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-pink-500 hover:bg-gray-50"
              >
                Home
              </a>
              <a
                href="/products"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-500"
              >
                Products
              </a>
              <a
                href="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-500"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-500"
              >
                Contact
              </a>
              <button className="w-full mt-2 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}