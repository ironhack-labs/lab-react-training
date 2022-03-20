import React from 'react';
import './Random.css';

const Random = ( {min , max }) => {
  return (
      <div>
        <h5 className="random-border">
          {`Random value between ${min} and ${max} =>`} 
          {Math.floor((Math.random() * (max-min)) +min)}
        </h5>
      </div>
  )
}

export default Random;
