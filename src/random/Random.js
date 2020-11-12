import React from 'react';
import './Random.css';

function Random(props) {
  let valueMin = Math.floor(Math.random() * props.max) + 1;
  return (
    <div className="random">
      <h1>
        Random value between {props.min} and {props.max} ={'>'} {valueMin}
      </h1>
    </div>
  );
}

export default Random;
