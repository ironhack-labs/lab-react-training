import React from 'react'

function Random(props) {
    const {min, max} = props;

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
  return (
    <div>Random value between {min} and  {max} => {randomNumber(min, max)}</div>
  )
}

export default Random