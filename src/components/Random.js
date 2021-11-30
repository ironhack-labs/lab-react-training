import React from 'react';

export default function Random(props) {
  let randomNum = Math.floor(
    Math.random() * (props.max - props.min + 1) + props.min
  );

  return (
    <div className="container">
      <h3 className="card">
        Random value between {props.min} & {props.max} => {randomNum}
      </h3>
    </div>
  );
}
