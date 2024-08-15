import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className='grid grid-cols-10'>
      <Sidebar />
      <MainContainer />
    </div>
  )
}

export default Body