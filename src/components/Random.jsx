import React from 'react';

import './GreetingsAndRandom.css'

const Random = (props) => {
  const getRandomNumber = (min, max) => {
    return min + Math.floor(Math.random() * max);
  };
  return (
    <div className='greeting-random'>
      Random value between {props.min} and {props.max} =>{' '}
      {getRandomNumber(props.min, props.max)}
    </div>
  );
};

export default Random;

// min: A number
// max: A number
