import React from 'react';
import './Random.css';

const Random = (props) => {
  const randomInteger = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="card-random">
      <h5>
        Random value between {props.min} and {props.max} {'=> '}
        {randomInteger(props.min, props.max)}
      </h5>
    </div>
  );
};

export default Random;
