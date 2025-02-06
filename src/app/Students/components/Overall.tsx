import React from 'react'
import SliderBar from './SliderBar'
import { FilterList } from '@mui/icons-material'

interface OverallPercentage {
    progress: number
}

const Overall: React.FC<OverallPercentage> = ({ progress }) =>{
    return(
        <div>
            <p className="text-0.5xl mb-2">Overall progress</p>
            <div className='flex flex-row justify-between pr-5 py-2 items-center'>
                <SliderBar progress={progress}/>
                <div>
                <section>
                    <button className="flex flex-row gap-20 pl-4 py-1 pr-2  items-center rounded-[12px] border-[1px] border-[#C5C6CC] hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400">
                       <div className='flex flex-row gap-1'>
                           <FilterList sx={{ color:"gray" }}/> <span className='text-[#1F2024]'>Last Month</span>
                       </div>
                       <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </section>
                </div>
            </div>
        </div>
    )
}


export default Overall