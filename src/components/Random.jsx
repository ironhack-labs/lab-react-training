import React from 'react'

function Random({min, max}) {
    const calculation = (min, max) => {
        return Math.floor((Math.random() * max) + min)
    }

  return (
        <div className='greetings-container'>
            Random value between {min} and {max} ={'>'} {calculation(min, max)}
        </div>
  )
}

export default Random