import React from 'react';
import './Random.css';

function Random(props) {
  // Random value between 1 and 6 => 6
  const randomInt = Math.floor(Math.random() * ((props.max+1) - props.min) + props.min);
  return (
    <div className='random'>
      <p>
        Random value between {props.min} and {props.max} ={'>'} {randomInt}
      </p>
    </div>
  );
}

export default Random;
