import React from 'react'
import { Slider } from '@mui/material'
import SliderBar from './SliderBar'

interface OverallPercentage {
    progress: number
}

const Overall: React.FC<OverallPercentage> = ({ progress }) =>{
    return(
        <div>
            <p className="text-0.5xl mb-2">Overall progress</p>
            <SliderBar />
        </div>
    )
}

export default Overall