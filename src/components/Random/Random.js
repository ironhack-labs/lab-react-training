import React from 'react';
import './Random.css';

const Random = (props) => {
  const randomNumber = Math.floor(Math.random() * props.max + props.min);
  return (
    <div className="random">
      <p>
        Random value between {props.min} and {props.max} = {randomNumber}
      </p>
    </div>
  );
};

export default Random;
