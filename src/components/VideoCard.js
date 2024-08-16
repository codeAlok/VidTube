import React from 'react'

const VideoCard = ({info}) => {

    // console.log("info in videocard ", info);
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

  return (
    <div className='flex-grow basis-[300px] max-w-[400px] h-[320px] p-2 mb-2 cursor-pointer'>
        <img className='w-full mb-2 h-[65%] object-cover rounded-xl transition-all hover:rounded-none hover:scale-105' alt='thumbnail' src={thumbnails.medium.url} />

        <div className='h-[35%]'>
          <ul>
            <li className='line-clamp-2 font-semibold text-gray-800'>{title}</li>
            <li className='font-medium text-gray-700'>{channelTitle}</li>
            <li className='font-medium text-gray-700'>{statistics.viewCount} Views</li>
          </ul>

        </div>
    </div>
  )
}

export default VideoCard;