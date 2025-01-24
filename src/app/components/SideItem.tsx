"use client"
import React from 'react';
import { usePathname } from 'next/navigation';

interface SideItemProps {
  name: string;
  icon: React.ReactNode;
  href: string;
}

const SideItem: React.FC<SideItemProps> = ({ name, icon, href }) => {
  const pathname = usePathname(); // Get the current pathname using usePathname hook
  const isActive = pathname === href; // Check if the current path matches the item's href

  return (
    <li className="relative group">
      <a
        href={href}
        className={`block text-black py-2 px-3 rounded flex items-center
          ${isActive ? 'bg-customLightBlue' : 'hover:bg-customLightBlue'}`} // Apply active styles
      >
        <span className="text-xl mr-3">{icon}</span>
        <span className="text-lg">{name}</span>
        <span className="absolute left-full ml-2 hidden group-hover:block text-sm bg-gray-700 text-white rounded p-1">
          {name}
        </span>
      </a>
    </li>
  );
};

export default SideItem;
