import React from 'react';

function Random(props) {
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <p>
      Random value between {props.min} and {props.max}:{' '}
      {getRandom(props.min, props.max)}
    </p>
  );
}

export default Random;
