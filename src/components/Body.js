import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='grid grid-cols-10'>
      <Sidebar />
      
      {/* <Outlet /> will be replaced from the children of body according to path in appRouter */}
      <Outlet />
    </div>
  )
}

export default Body