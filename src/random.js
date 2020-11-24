import React from 'react';

export default function Random(props) {
  let randomNum =
    Math.floor(Math.random() * (props.max - props.min)) + props.min;
  return (
    <div className="container">
      <p>
        Random value between {props.min} and {props.max} => {randomNum}
      </p>
    </div>
  );
}
