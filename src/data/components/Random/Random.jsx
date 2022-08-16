import React from 'react'

function Random(props) {

    const {min, max} = props;

    let randomNumber;

    randomNumber = Math.floor(Math.random() * (max - min) + min);
  return (
    <div className='Random'>{randomNumber}</div>
  )
}

export default Random