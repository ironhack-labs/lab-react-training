import React from 'react'

const Random = ({max, min}) => {
  return (
    <div>
      <p>Random value between {min} and {max} => {Math.floor(Math.random()* max) + min } </p>
    </div>
  )
}

export default Random
