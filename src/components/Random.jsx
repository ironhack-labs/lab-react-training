import React from 'react'

export default function Random({min, max}) {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    
    <div>
      <h3>Random value between {min} and {max} = {randomNum}</h3>
    </div>
  )
}

