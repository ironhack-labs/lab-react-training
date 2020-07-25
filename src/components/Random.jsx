import React from 'react';

export default function Random(props) {
  const randomNumber = () =>
    Math.floor(Math.random() * (props.max - props.min + 1) + props.min);
  return (
    <h1>
      Random number between: {props.min} and {props.max} ={randomNumber()}
    </h1>
  );
}
