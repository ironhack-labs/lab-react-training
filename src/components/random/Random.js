import React from 'react';
import './random.css';

function Random(props) {
  return (
    <div className="the-border random">
      Random value between {props.min} and {props.max} =>
      {Math.floor(Math.random() * props.max + props.min)}
    </div>
  );
}

export default Random;
