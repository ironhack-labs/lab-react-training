import React from 'react';
import './Random.css';

function Random(props) {
  let randomNumber = Math.floor(Math.random() * props.max) + 1;

  return (
    <h3>
      Random value between {props.min.toString()} and {props.max.toString()} ={' '}
      {randomNumber.toString()}
    </h3>
  );
}

export default Random;
