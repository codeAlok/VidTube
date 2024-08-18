import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        // (Debouncing concept is used)
        // make api call after every key press
        // but if the diffrence b/w 2 API's calls is < 200ms, decline the api call
        const timer = setTimeout(() => getSearchSuggestions(), 200);

        // remove timer if other key-pressed && re-render && unmount component
        return () => {
            clearTimeout(timer);
        }

    }, [searchQuery]);

    // function to get suggestions on query
    const getSearchSuggestions = async () => {
        const data = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`);
        const json = await data.json();

        setSuggestions(json[1]);
    }

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

            <div className='col-span-3 self-center relative flex items-center'>
                <input
                    type="text"
                    placeholder='search'
                    className='border-[1px] border-gray-300 w-3/4 ml-2 px-4 p-2 rounded-l-full outline-1 outline-blue-600'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                />

                <button className='py-2 px-5 border-l-0 border-[1px] border-gray-300 bg-gray-100 rounded-r-full'>
                    <LuSearch className='text-xl inline-block ' />
                </button>

                {(showSuggestions && suggestions.length !== 0) && (
                    <div className=' absolute top-12 left-0 bg-white w-3/4 ml-2 mt-1 border-x-[1px] border-gray-300 rounded-lg shadow-neutral-400 shadow-md'>
                        <ul className='p-2'>
                            {suggestions.map((s) => (
                                <li
                                    key={s}
                                    className='p-2 cursor-pointer hover:bg-red-50 font-medium'
                                >
                                    <LuSearch className='inline-block mr-2' />{s}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className='flex items-center justify-end col-span-1'>
                <IoMdNotificationsOutline className='text-xl mx-2' />
                <FaUserCircle className='text-xl mx-2' />
            </div>
        </div>
    )
}

export default Header;