import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomChat, generateRandomName } from '../utils/helper';
import { GoDotFill } from "react-icons/go";

const LiveChat = () => {

  const [liveMessage, setLiveMessage ] = useState('');
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const i = setInterval(() => {
      // API polling (recall api again with new data in a timeInterval)

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomChat(),
        })
      );

    }, 1500);

    return () => clearInterval(i);
  }, []);


  return (
    <>
      <div className='w-full h-full grid grid-flow-row rounded-xl border border-gray-300'>
        <div className='w-full row-span-1 p-2 border-b border-gray-300'>
          <span className='w-full font-bold text-red-600'>Live Chat</span>
          <GoDotFill className='inline-block mr-2 text-red-600 animate-pulse' />
        </div>

        <div
          className='w-full row-span-8 overflow-y-scroll flex flex-col-reverse'
        >
          {
            chatMessages.map((c, idx) => (
              <ChatMessage
                key={idx}
                name={c.name}
                message={c.message}
              />
            ))
          }
        </div>
        <form 
        className='p-2 row-span-1 border-t border-gray-300'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name: "Alok",
            message: liveMessage,
          }));

          setLiveMessage('');
        }}
        >
          <input
            className='p-1 px-2 w-[70%] rounded-full bg-red-50 outline-none'
            type='text'
            placeholder='Chat...'
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button 
          className='mx-2 p-1 px-2 rounded-full bg-gray-200 hover:bg-gray-300'
          type='submit'
          >send</button>
        </form>
      </div>
    </>
  )
}

export default LiveChat;