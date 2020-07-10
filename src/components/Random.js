import React from 'react';

function Random(props) {
  const randomNum =
    props.min + Math.floor(Math.random() * (props.max - props.min));
  return (
    <h1 className="card">
      Random value between {props.min} and {props.max} {'=> '}
      {randomNum}
    </h1>
  );
}
export default Random;
