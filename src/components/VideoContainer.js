import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();

    setVideos(json.items);
  }

  return (!videos || videos.length === 0) ? null : (
    <div className='flex flex-wrap justify-center'>
      {
        videos.map((video) => {
          return (
            <Link
              key={video.id}
              to={'/watch?v=' + video.id}
              className='flex-grow basis-[250px] max-w-[350px] h-[300px] cursor-pointer p-2 mb-2'
            >
              <VideoCard info={video} />
            </Link>
          )
        })
      }

    </div>
  )
}

export default VideoContainer