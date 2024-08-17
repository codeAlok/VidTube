import React from 'react'

const VideoCard = ({info}) => {

    // console.log("info in videocard ", info);
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

  return (
    <div>
        <img className='w-full mb-2 h-[65%] object-cover rounded-xl transition-all hover:rounded-none hover:scale-105' alt='thumbnail' src={thumbnails.medium.url} />

        <div className='h-[35%]'>
          <ul>
            <li className='line-clamp-2 font-semibold text-[#0f0f0f]'>{title}</li>
            <li className='text-sm font-medium text-[#606060]'>{channelTitle}</li>
            <li className='text-sm font-medium text-[#606060]'>{statistics.viewCount} Views</li>
          </ul>

        </div>
    </div>
  )
}

export default VideoCard;