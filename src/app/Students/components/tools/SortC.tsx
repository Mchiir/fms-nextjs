import React from 'react'
import SliderBar from '../SliderBar'
import { UnfoldMore } from '@mui/icons-material'

const SortC: React.FC = () =>{
    return(
        <div>
            <button className="flex flex-row p-1  items-center rounded-lg border-[1px] border-[#C5C6CC] hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400">
                <div className='flex flex-row'>
                    <UnfoldMore sx={{ fontSize: 20, color: "gray" }} />
                </div>
                <span className="mr-2">Sort</span>
                <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
        </div>
    )
}

export default SortC