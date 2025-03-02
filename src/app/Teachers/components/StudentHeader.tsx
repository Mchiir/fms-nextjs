import React from 'react'
import FilterC from './tools/FilterC'
import SortC from './tools/SortC'
import SearchC from './tools/SearchC'

const TeacherHeader: React.FC = () =>{    
    return (
        <div className='flex flex-row justify-between'>
            <h1 className="text-black font-bold text-lg">General Dashboard</h1>
            <div className='flex flex-wrap gap-10'>
            <div>
                <SearchC />
            </div>

                <FilterC />
                <SortC />
            </div>
        </div>
    )
}

export default TeacherHeader
