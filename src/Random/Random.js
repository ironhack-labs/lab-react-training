import React from 'react';
import './Random.css';

function Random(props) {
  function randomNum() {
    return Math.floor(Math.random() * (props.max - props.min)) + props.min;
  }

  return (
    <div className="random">
      <p>
        Random Value between {props.min} and {props.max}:{' '}
        <strong>{randomNum(props.max, props.min)}</strong>
      </p>
    </div>
  );
}

export default Random;
