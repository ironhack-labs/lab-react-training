import React from 'react';
import './Random.css';

const Random = (prop) => {

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - (min - 1)) + min)
  };

  return (
  <h5 className='randomNumber'>Random value between {prop.min} and {prop.max} = {random(prop.min, prop.max)}</h5>
  )
}

export default Random;