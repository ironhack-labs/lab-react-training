import React from 'react';
import './Random.css';

const Random = ({ min, max }) => {
   
  let random = Math.floor(Math.random() * max + min)

  return (
    <h3 className="Random">
      Random value between {min} and {max} : { random }
    </h3>
  )
}

export default Random;