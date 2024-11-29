import React from 'react';
import { Truck, Clock, MapPin } from 'lucide-react';

export function DeliveryInfo() {
  return (
    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
      <h3 className="text-lg font-semibold mb-4">Delivery Information</h3>
      
      <div className="flex items-start space-x-3">
        <Truck className="w-5 h-5 text-pink-500 mt-1" />
        <div>
          <h4 className="font-medium">Free Delivery</h4>
          <p className="text-sm text-gray-600">On orders within 10 miles of our bakery</p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <Clock className="w-5 h-5 text-pink-500 mt-1" />
        <div>
          <h4 className="font-medium">Delivery Time</h4>
          <p className="text-sm text-gray-600">48 hours notice required for standard orders</p>
          <p className="text-sm text-gray-600">72 hours for custom designs</p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <MapPin className="w-5 h-5 text-pink-500 mt-1" />
        <div>
          <h4 className="font-medium">Delivery Area</h4>
          <p className="text-sm text-gray-600">We deliver to Manhattan, Brooklyn, and Queens</p>
        </div>
      </div>
    </div>
  );
}