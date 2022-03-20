import React from 'react';

const Random = ( {min , max }) => {
  return (
      <div>
        <h5>
          {`Random value between ${min} and ${max} =>`} 
          {Math.floor((Math.random() * (max-min)) +min)}
        </h5>
      </div>
  )
}

export default Random;
