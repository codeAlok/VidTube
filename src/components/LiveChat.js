import React, { useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName } from '../utils/helper';

const LiveChat = () => {

  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const i = setInterval(() => {
      // API polling (recall api again with new data in a timeInterval)

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "this is what is live chat",
        })
      );

    }, 500);

    return () => clearInterval(i);
  }, []);


  return (
    <>
      <div
        className='w-full h-full p-2 rounded-xl border border-gray-400 bg-gray-100 overflow-y-scroll flex flex-col-reverse'
      >
        {
          chatMessages.map((c, idx) => (
            <ChatMessage
              key={idx}
              name={c.name}
              message="I'm learning reactJs"
            />
          ))
        }
      </div>
    </>
  )
}

export default LiveChat;