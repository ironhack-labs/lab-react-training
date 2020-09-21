import React from 'react';
import './Random.css'
const Random = (props) => {
  const { min, max } = props;

  let number = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div className='random-card'>
      <p>
        Random number between {min} and {max} => {number}
      </p>
    </div>
  );
};

export default Random;
