import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='p-2 col-span-8'>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer