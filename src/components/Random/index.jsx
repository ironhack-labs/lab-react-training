import React from 'react'

const Random = ({min, max}) => {
    const randomNum = Math.floor(Math.random() * (max - min +1) + min)
  return (
    <div>Random Value Between {min} and {max} = {randomNum}</div>
  )
}

export default Random