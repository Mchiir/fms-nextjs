import React from 'react';
import { FaSearch, FaFilter, FaSort } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="flex items-center space-x-4 w-full max-w-xl"> {/* Wider container */}
      {/* Search Bar */}
      <div className="relative flex-grow">
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full px-10 py-2 border rounded-full bg-gray-100 focus:outline-none pr-10" 
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
      </div>
      
      {/* Filter Button */}
      <button className="flex items-center px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700">
        <FaFilter className="mr-2" /> Filter
      </button>

      {/* Sort Button */}
      <button className="flex items-center px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700">
        <FaSort className="mr-2" /> Sort
      </button>
    </div>
  );
};

export default SearchBar;
