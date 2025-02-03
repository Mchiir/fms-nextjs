import React from "react"
import PendingActionIcon from '@mui/icons-material/PendingActions'

export interface Item {
    count: number,
    label: string,
    timeFrame: string
}

const Progress: React.FC<{ item: Item }> = ({ item }) =>{    
    return(
        <>
        <div className="w-[230px] bg-[#E6F2F9] rounded-[8px] p-5 flex items-center justify-center space-x-4 shadow-md">
                <div className='flex flex-row gap-5'>
                    <PendingActionIcon fontSize="large" className="text-gray-600 text-7xl"/>

                    <article className="text-left">
                        <p className="text-orange-500 text-3xl font-bold">{item.count}</p>
                        <p className="text-blue-600 text-lg font-semibold">{item.label}</p>
                        <p className="text-gray-500 italic">{item.timeFrame}</p>
                    </article>
                </div>
        </div>
    </>
    )
}

export default Progress