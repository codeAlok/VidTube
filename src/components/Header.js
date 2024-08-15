import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuSearch } from "react-icons/lu";

const Header = () => {
    return (
        <div className='grid grid-cols-5 p-4 shadow-lg'>
            <div className='flex items-center col-span-1'>
                <RxHamburgerMenu className='text-2xl' />
                <img className='ml-2 w-20' src="/images/youtube_logo.png" alt='youtube-logo' />
            </div>

            <div className='col-span-3 self-center'>
                <input
                    type="text"
                    placeholder='search'
                    className='border-[1px] border-gray-300 w-1/2 ml-2 px-4 p-1 rounded-l-full outline-1 outline-blue-600'
                />

                <button className='py-1 px-5 border-l-0 border-[1px] border-gray-300 bg-gray-100 rounded-r-full'>
                    <LuSearch className='text-xl inline-block '/>
                </button>
            </div>

            <div className='flex items-center justify-end col-span-1'>
                <IoMdNotificationsOutline className='text-xl mx-2'/>
                <FaUserCircle className='text-xl mx-2'/>
            </div>
        </div>
    )
}

export default Header;