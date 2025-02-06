import React from 'react'
import CircularProgress from './CircularProgress'

const StudentC: React.FC = () =>{
    return(
        <div className='flex flex-wrap gap-5 bg-[#ECF5FF] rounded-lg py-2 justify-between pl-5 box-border items-center'>
            <input type="checkbox"
              className="w-5 h-5"
            />
            <div className='rounded-lg w-6 h-6 border-[5px] bg-[#B4DBFF] border-none outline-none'></div>
            <article>
                <p className='font-bold'>john Doe
                    <br/>
                    <span className='italic text-gray-500'>Contact</span>
                </p>
                
            </article>
            <p className='text-[#1782CF]'>johndoe@gmail.com</p>
            <p className='font-bold text-blue-500'>Grammar</p>
            <p className='font-bold text-red-500'>38%</p>
            <CircularProgress progress={70}/>
        </div>
    )
}

export default StudentC