import React from 'react'
import Button from './Button';

const ButtonList = () => {
  const buttonListName = ["Javascript", "React", "TED", "Software Engeneering","movies", "Cricket", "DSA", "Web Development", "travel", "meditation", "bike"];

  return (
    <div className='p-2 flex items-center whitespace-nowrap overflow-x-hidden'>
      {
        buttonListName.map((name, index) => {
          return <Button key={index} name={name}/>
        })
      }
    </div>
  )
}

export default ButtonList