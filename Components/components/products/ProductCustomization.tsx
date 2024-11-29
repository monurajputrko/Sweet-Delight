import React from 'react';

interface CustomizationOption {
  id: string;
  name: string;
  options: string[];
  price?: number;
}

interface ProductCustomizationProps {
  options: CustomizationOption[];
  onOptionChange: (optionId: string, value: string) => void;
}

export function ProductCustomization({ options, onOptionChange }: ProductCustomizationProps) {
  return (
    <div className="space-y-6">
      {options.map((option,index) => (
        <div key={index}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {option.name}
            {option.price && ` (+$${option.price})`}
          </label>
          <select
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500"
            onChange={(e) => onOptionChange(option.id, e.target.value)}
          >
            {option.options.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}