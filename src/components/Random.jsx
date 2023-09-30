import React from 'react'

function Random(props) {
    const {min, max} = props;
    const randomValue = Math.floor(Math.random()* (max - min + 1)) + min
  return (
    <div>
        <h3>Random value between {min} and {max} is {randomValue}</h3>
    </div>
  )
}

export default Random