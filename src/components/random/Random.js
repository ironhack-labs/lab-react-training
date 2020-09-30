import React from 'react';
import './Random.css';

function Random(props) {
  const randomNum = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );
  return (
    <div className="randomNum-container">
      <p>
        Random value between {props.min} and {props.max} => {randomNum}
      </p>
    </div>
  );
}

export default Random;
