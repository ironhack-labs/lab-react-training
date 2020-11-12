import React from 'react';

function Random(props) {
  function randomValue(min, max) {
    return Math.round(Math.random() * max + min);
  }

  return (
    <div
      style={{
        border: 'solid 1px',
        margin: '0.8% auto',
        padding: '0.4%',
      }}
    >
      Random value between {props.min} and {props.max} =>
      {randomValue(props.min, props.max)}
    </div>
  );
}

export default Random;
