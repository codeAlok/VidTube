import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='mr-2 px-4 py-2 bg-red-50 hover:bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button