import React from 'react';
import './Random.css';

function Random(props) {
  let max = props.max;
  let min = props.min;
  let randomNumber = Math.floor(Math.random(props) * (max - min) + min);
  return (
    <div className="random__numbers">
      <p>
        Random value between {props.min} and {props.max} => {randomNumber}
      </p>
    </div>
  );
}

export default Random;
