import React from 'react'
import { Slider } from '@mui/material'

interface IProgress {
    progress: number
}

const SliderBar: React.FC<IProgress> = ({ progress }) =>{
    return(
        <Slider
                disabled
                defaultValue={30}
                aria-label="Disabled slider"
                sx={{   
                        width: `${progress}%`,
                        height: 6, // Adjusts stroke size
                        "& .MuiSlider-track": {
                        backgroundColor: "#006FFD", // Covered part (progress bar)
                        border: "none",
                        },
                        "& .MuiSlider-rail": {
                        backgroundColor: "#E8E9F1", // Uncovered part
                        opacity: 1,
                        },
                        "& .MuiSlider-thumb": {
                        display: "true", // Hide thumb if not needed
                        backgroundColor: "#006FFD"
                        },
            }}
        />
    )
}

export default SliderBar