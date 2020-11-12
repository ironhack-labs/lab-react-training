import React from 'react';

function Random(props) {
  return (
    <div
      style={{
        border: 'solid 1px',
        margin: '0.8% auto',
        padding: '0.4%',
      }}
    >
      Random value between {props.min} and {props.max} =>
      {Math.ceil(Math.random() * props.max - props.min) + props.min}
    </div>
  );
}

export default Random;
