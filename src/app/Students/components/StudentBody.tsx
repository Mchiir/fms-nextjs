import React from 'react'
import profileImage from './assets/boy.png'

const StudentBody: React.FC = () =>{
    return (
        <div className='flex flex-row gap-5'>
            {/* Student list and nav elements */}
            <div className='w-[70%]'>
                {/* navigation elements */}
                <div className='flex flex-row justify-between mb-3'>
                    <section>Search bar</section>

                    <div className='flex flex-row gap-5 font-bold'>
                        <section>filter</section>
                        <section>sort</section>
                    </div>
                </div>

                <div className='flex justify-between mb-3'>
                    <p className='font-bold text-lg'>Students List</p>
                    <button type='button'
                    className='bg-[#1782CF] rounded-lg px-3 py-1 text-white'
                    >+ Add Student</button>
                </div>

                <section className='flex flex-col gap-2'>
                    <div><p className='text-lg'>Student1</p></div>
                    <div><p className='text-lg'>Student2</p></div>
                    <div><p className='text-lg'>Student3</p></div>
                    <div><p className='text-lg'>Student4</p></div>
                    <div><p className='text-lg'>Student5</p></div>
                    <div><p className='text-lg'>Student6</p></div>
                </section>
            </div>

            {/* profile */}
            <div className='w-[30%] flex flex-col gap-10 items-center'>
                <p className='mb-4 text-center font-bold'>Student Profile</p>
                <img src={profileImage.src} alt="boy" className='rounded-full w-20 h-20 object-cover'/>
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
                    <button type='button' className='rounded-lg bg-[#1782CF] px-3 py-1'>Message</button>
                    <button type='button' className='rounded-lg bg-red-600 px-3 py-1'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default StudentBody