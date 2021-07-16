import React from 'react';
import './Random.css';

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

function Random(props) {
  return (
    <p>Random value between {props.min} and {props.max} => {getRandomArbitrary(props.min, props.max)}</p>
  )
};

export default Random;