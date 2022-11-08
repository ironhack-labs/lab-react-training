import React from 'react'

function generateRandom(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const Random = ({min, max}) => {
  const randomNumber=generateRandom(min,max);
  return (
    <div>Random value between {min} and {max} {'=>'} {randomNumber}</div>
  )
}
