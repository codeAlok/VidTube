import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='grid grid-flow-col p-4 shadow-lg'>
            <div className='flex items-center col-span-1'>
                <RxHamburgerMenu
                    className='ml-2 text-2xl shrink-0 cursor-pointer'
                    onClick={() => toggleMenuHandler()}
                />
                <img className='ml-2 w-20' src="/images/youtube_logo.png" alt='youtube-logo' />
            </div>

            <div className='col-span-3 self-center'>
                <input
                    type="text"
                    placeholder='search'
                    className='border-[1px] border-gray-300 w-1/2 ml-2 px-4 p-1 rounded-l-full outline-1 outline-blue-600'
                />

                <button className='py-1 px-5 border-l-0 border-[1px] border-gray-300 bg-gray-100 rounded-r-full'>
                    <LuSearch className='text-xl inline-block ' />
                </button>
            </div>

            <div className='flex items-center justify-end col-span-1'>
                <IoMdNotificationsOutline className='text-xl mx-2' />
                <FaUserCircle className='text-xl mx-2' />
            </div>
        </div>
    )
}

export default Header;