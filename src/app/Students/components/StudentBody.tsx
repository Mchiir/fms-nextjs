import React from 'react'
import profileImage from './assets/boy.png'
import StudentC from './Student'
import Image from 'next/image'

const StudentBody: React.FC = () =>{

    return (
        <div className='flex flex-row gap-5'>
            {/* Student list and nav elements */}
            <div className='w-[70%]'>
                {/* navigation elements */}
                <div className='flex flex-row justify-between mb-3'>
                    <section>
                    <div className="flex bg-[#F8F9FE] rounded-full overflow-hidden max-w-md mx-auto font-[sans-serif]">
                        <button type='button' className="flex items-center justify-center px-3 bg-black bg-opacity-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-black">
                            <path
                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"
                            stroke='black'
                            strokeWidth={4}
                            >
                            </path>
                        </svg>
                        </button>
                        <input type="email" placeholder="Search Something..."
                        className="w-full outline-none bg-[#F8F9FE] text-gray-600 text-sm px-4 py-2" />
                    </div>
                </section>

                    <div className='flex flex-row gap-5 font-bold'>
                    <section>
                    <button className="px-4 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span className="mr-2">Filter</span>
                            <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    </section>
                    <section>
                        <button className="px-4 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span className="mr-2">Sort</span>
                            <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>
                            </svg>
                        </button>
                    </section>
                    </div>
                </div>

                <div className='flex justify-between m-5'>
                    <p className='font-bold text-xl'>Students List</p>
                    <button type='button'
                    className='bg-[#1782CF] rounded-lg px-3 py-1 text-white'
                    >+ Add Student</button>
                </div>

                <section className='flex flex-col gap-2 border-[1px] border-[#C1C1C1] rounded-md py-[20px] px-[20px]'>
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
                <Image src={profileImage.src} alt="boy" className='rounded-full w-20 h-20 object-cover'/>
                <p className='font-bold'>John Doe <span className="text-gray-500 italic font-normal">Musician</span></p>
                <p>Chartjs graph</p>

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