import React from 'react';
import './Random.css';

export default function Random(props) {
  return (
    <div className="random">
      Random value between {props.min} and {props.max} is =
      {Math.floor(Math.random() * props.max) + props.min}
    </div>
  );
}
