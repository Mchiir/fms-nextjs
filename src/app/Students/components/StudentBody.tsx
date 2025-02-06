import React from 'react'
import profileImage from './assets/boy.png'
import StudentC from './Student'
import Image from 'next/image'
import FilterC from './tools/FilterC'
import SortC from './tools/SortC'
import SearchC from './tools/SearchC'

const StudentBody: React.FC = () =>{

    return (
        <div className='flex flex-row gap-5'>
            {/* Student list and nav elements */}
            <div className='w-[70%]'>
                {/* navigation elements */}
                <div className='flex flex-row justify-between mb-3'>
                <section>
                    <SearchC />
                </section>

                    <div className='flex flex-row gap-5'>
                    <FilterC />
                    <SortC />
                    </div>
                </div>

                <div className='flex justify-between m-5'>
                    <p className='font-bold text-xl'>Students List</p>
                    <button type='button'
                    className='bg-[#1782CF] rounded-lg px-3 py-1 text-white'
                    >+ Add Student</button>
                </div>

                <section className='flex flex-col gap-2 border-[1px] border-[#C1C1C1] rounded-md py-[20px] px-[20px] overflow-y-scroll max-h-[10cm]'>
                    <StudentC />
                    <StudentC />
                    <StudentC />
                    <StudentC />
                    <StudentC />
                    <StudentC />
                </section>
            </div>

            {/* profile */}
            <div className='w-[30%] flex flex-col gap-10 items-center'>
                <p className='mb-4 text-center font-bold'>Student Profile</p>
                <Image src={profileImage.src} alt="boy" width={130} height={130} priority className='rounded-full object-cover'/>
                <p className='font-bold'>John Doe <span className="text-gray-500 italic font-normal">Musician</span></p>
                <p>
                  ChatJS Graph
                </p>

                <div className="w-full flex flex-col gap-3">
                    <div className="flex justify-between w-full">
                        <p className="font-bold text-[#1782CF]">Field</p>
                        <p className="text-gray-700">: Music & Dancing</p>
                    </div>

                    <div className="flex justify-between w-full">
                        <p className="font-bold text-[#1782CF]">Name</p>
                        <p className="text-gray-700">: John Doe</p>
                    </div>
                </div>

                <div className='flex flex-row gap-5'>
                    <button type='button' className='rounded-lg bg-[#1782CF] px-3 py-1 text-white'>Message</button>
                    <button type='button' className='rounded-lg bg-[red] px-3 py-1 text-white'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default StudentBody