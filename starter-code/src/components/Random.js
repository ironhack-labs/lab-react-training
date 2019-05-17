import React from 'react';

const Random = (props) => {
  return (
    <div className="app-div-black-border-box">
      <span>Random value between {props.min} and {props.max} => {getRandomNr(props)}</span>
    </div>
  )
}

const getRandomNr = (numbers) => {
  return Math.floor(Math.random() * Math.abs(numbers.max, numbers.min) + numbers.min);
}

export default Random;