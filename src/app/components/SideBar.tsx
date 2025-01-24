// SideBar.tsx
import React from 'react';
import Image from 'next/image';
import Logo from '../components/assets/Edupath.png'
import { sideItems } from './assets/sideItems';
import SideItem from './SideItem';

const SideBar: React.FC = () => {
  return (
    <aside className="lg:w-72 w-auto md:w-24 h-full bg-white p-4">
      <h2 className="text-2xl font-bold mb-4">
        <Image src={Logo} alt='Edupath Logo'/>
      </h2>
      <nav>
        <ul className="space-y-2">
          {sideItems.slice(0, -1).map((item) => (
            <SideItem key={item.name} {...item} />
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <SideItem key={sideItems[sideItems.length - 1].name} {...sideItems[sideItems.length - 1]} />
      </div>
    </aside>
  );
};

export default SideBar;
