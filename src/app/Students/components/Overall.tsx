import React from 'react'
import SliderBar from './SliderBar'

interface OverallPercentage {
    progress: number
}

const Overall: React.FC<OverallPercentage> = ({ progress }) =>{
    return(
        <div>
            <p className="text-0.5xl mb-2">Overall progress</p>
            <div className='flex flex-row justify-between pr-5 py-2'>
                <SliderBar progress={progress}/>
                <div>Last month</div>
            </div>
        </div>
    )
}

export default Overall