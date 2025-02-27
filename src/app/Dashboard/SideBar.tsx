// SideBar.tsx
import React from 'react';
import Image from 'next/image';
import Logo from './components/assets/Smart.png'
import { sideItems } from './components/assets/sideItems';
import SideItem from './components/SideItem';

const SideBar: React.FC = () => {
  return (
    <aside className="lg:w-72 w-screen md:w-24 md:h-full lg:h-full bg-white p-4">
      <h2 className="text-2xl hidden md:flex lg:flex font-bold mb-4">
        <Image src={Logo} alt='Edupath Logo'/>
      </h2>
      <nav className=''>
        <ul className="space-y-2 flex flex-row justify-between lg:items-start items-center lg:flex-col md:flex-col">
          {sideItems.slice(0, -1).map((item) => (
            <SideItem key={item.name} {...item} />
          ))}
                  <div className="mt-auto lg:w-full  flex flex-col">
        <SideItem key={sideItems[sideItems.length - 1].name} {...sideItems[sideItems.length - 1]} />
      </div>
        </ul>
      </nav>

    </aside>
  );
};

export default SideBar;
