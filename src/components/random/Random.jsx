import React from 'react';
import './random.css';

// function randomBetweenTwoNUmber(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// } use destructuring

const Random = (props) => {
  return (
    <div className="random">
      <div min={props.min} max={props.max}>
        Random value between {props.min} and {props.max} {'=>'}{' '}
        {Math.floor(Math.random() * (props.max - props.min) + props.min)}
      </div>
    </div>
  );
};

export default Random;
