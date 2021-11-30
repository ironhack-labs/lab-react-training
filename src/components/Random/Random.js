import React from 'react';
import './Random.css';

const Random = (props) => {
  const { min, max } = props;
  let randomNumber = Math.floor((Math.random() * (max-min+1)) + min);

  return (
    <div className="random-text">
      <p>
        Random value between {min} and {max} => {randomNumber}
      </p>
    </div>
  );
};

export default Random;
