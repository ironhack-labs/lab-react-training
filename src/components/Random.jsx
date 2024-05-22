import React from 'react';
import './Random.css';

function Random(props) {
  const randomNumber = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;

  return (
    <div className="random">
      <p>Random value between {props.min} and {props.max} =&gt; {randomNumber}</p>
    </div>
  );
}

export default Random;
