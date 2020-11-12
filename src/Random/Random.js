import React from 'react';

function Random(props) {
  function randomNum(props) {
    return Math.floor(Math.random() * (props.max - props.min) + 1);
  }

  return (
    <div>
      <p>
        Random value between {props.min} and {props.max} {'=>'}
        {randomNum(props)}
      </p>
    </div>
  );
}

export default Random;
