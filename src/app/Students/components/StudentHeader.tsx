import React from 'react'

const StudentHeader: React.FC = () =>{
    return (
        <div className='flex flex-row justify-between'>
            <h1 className="text-black font-bold text-lg">Students Portal</h1>
            <div>Search bar</div>
            <div className='flex flex-wrap gap-3'>
                <section>filter</section>
                <section>sort</section>
            </div>
        </div>
    )
}

export default StudentHeader
