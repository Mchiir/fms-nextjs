import React from 'react'

const FilterC: React.FC = () =>{
    return(
        <div>
            <button className="border-[1px] border-[#C5C6CC] px-4 py-1 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400">
                <span className="mr-2">Filter</span>
                <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
        </div>
    )
}

export default FilterC