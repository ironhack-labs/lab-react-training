// components/Random.js

import React from 'react';

const randomNumber = (min, max) => {
  const range = max - min;
  return min + Math.floor(Math.random() * range);
}

const Random = (props) => {
  const { min, max } = props;
  return (
    <div className='random'>
      Random value between {min} and {max} => {randomNumber(min, max)}
    </div>
  )
}

export default Random;
