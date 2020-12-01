import React from 'react';

export default function Random(props) {
  const randomValue = Math.random() * (props.max - props.min) + props.min;
  return (
    <div>
      <h1>
        Random value between {props.min} and {props.max} is {randomValue}
      </h1>
    </div>
  );
}
