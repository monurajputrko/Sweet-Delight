import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export function Link({ href, children, active }: LinkProps) {
  return (
    <a
      href={href}
      className={`text-sm font-medium transition-colors hover:text-pink-500 ${
        active ? 'text-pink-500' : 'text-gray-700'
      }`}
    >
      {children}
    </a>
  );
}