import React from 'react'

function Random({min, max}) {

    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div>{randomNum}</div>
  )
}

export default Random