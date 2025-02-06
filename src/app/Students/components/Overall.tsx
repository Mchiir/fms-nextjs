import React from 'react'
import SliderBar from './SliderBar'

interface OverallPercentage {
    progress: number
}

const Overall: React.FC<OverallPercentage> = ({ progress }) =>{
    return(
        <div>
            <p className="text-0.5xl mb-2">Overall progress</p>
            <SliderBar progress={progress}/>
        </div>
    )
}

export default Overall