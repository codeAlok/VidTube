import React from 'react';
import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-start shadow-sm p-2 hover:bg-red-50'>
        <FaUserCircle className='text-xl w-[10%]' />
        
        <div className='w-[80%]'>
          <span className='font-semibold pr-2'>{name}</span>
          <span>{message}</span>
        </div>
    </div>
  )
}

export default ChatMessage;