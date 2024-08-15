import React from 'react'
import { useSelector } from 'react-redux';
import { GoHome, GoVideo } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { 
  MdOutlineSubscriptions, 
  MdOutlineSwitchAccount, 
  MdOutlineWatchLater,
  MdOutlinePodcasts } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { CgPlayList } from "react-icons/cg";
import { BiLike } from "react-icons/bi";
import { PiScissors, PiMusicNoteLight } from "react-icons/pi";
import { BsFire, BsBroadcast } from "react-icons/bs";

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className='h-[90vh] px-4 col-span-2 shadow-lg text-gray-700 overflow-y-scroll'>
      <div className='border-b-[1px] border-gray-300 py-2'>
        <ul>
          <li className='p-2 rounded-lg hover:bg-red-50'><GoHome className='font-light inline-block mr-2 text-2xl'/>Home</li>
          <li className='p-2 rounded-lg hover:bg-red-50'><SiYoutubeshorts className='font-light inline-block mr-2 text-2xl' />Shorts</li>
          <li className='p-2 rounded-lg hover:bg-red-50'><MdOutlineSubscriptions className='font-light inline-block mr-2 text-2xl' />Subscriptions</li>
        </ul>
      </div>
      <div className='border-b-[1px] border-gray-300 py-2'>
        <h2 className='font-bold'>You</h2>
        <ul>
          <li className='p-2 rounded-lg hover:bg-red-50'><MdOutlineSwitchAccount className='inline-block mr-2 text-2xl' />Your Channel</li>
          <li className='p-2 rounded-lg hover:bg-red-50'><LuHistory className='inline-block mr-2 text-2xl' />History</li>
          <li className='p-2 rounded-lg hover:bg-red-50'><CgPlayList className='inline-block mr-2 text-2xl' />playlists</li>
          <li className='p-2 rounded-lg hover:bg-red-50'><GoVideo className='inline-block mr-2 text-2xl' />Your videos</li>
          <li className='p-2 rounded-lg hover:bg-red-50'><MdOutlineWatchLater className='inline-block mr-2 text-2xl' />Watch later</li>
          <li className='p-2 rounded-lg hover:bg-red-50'><BiLike className='inline-block mr-2 text-2xl' />Liked videos</li>
          <li className='p-2 rounded-lg hover:bg-red-50'><PiScissors className='inline-block mr-2 text-2xl' />Your clips</li>
        </ul>
      </div>
      <div className='border-b-[1px] border-gray-300 py-2'>
        <h2 className='font-bold'>Subscriptions</h2>
        <ul>
          <li className='p-2 rounded-lg hover:bg-red-50'>Akshay Saini</li>
          <li className='p-2 rounded-lg hover:bg-red-50'>Alok kumar</li>
          <li className='p-2 rounded-lg hover:bg-red-50'>KN Academy</li>
          <li className='p-2 rounded-lg hover:bg-red-50'>Hitesh choudhary</li>
          <li className='p-2 rounded-lg hover:bg-red-50'>Akshay Saini</li>
        </ul>
      </div>
      <div className='py-2'>
        <h2 className='font-bold'>Explore</h2>
        <ul>
          <li className='p-2 rounded-lg hover:bg-red-50'><BsFire className='inline-block mr-2 text-2xl' />Trending</li>
          <li className='p-2 rounded-lg hover:bg-red-50'><BsBroadcast className='inline-block mr-2 text-2xl' />Live</li>
          <li className='p-2 rounded-lg hover:bg-red-50'><PiMusicNoteLight className='inline-block mr-2 text-2xl' />Music</li>
          <li className='p-2 rounded-lg hover:bg-red-50'><MdOutlinePodcasts className='inline-block mr-2 text-2xl' />Podcasts</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar