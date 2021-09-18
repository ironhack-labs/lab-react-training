import React from 'react';

const Random = (props) => {
  const randomNumber = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );

  return (
    <h3>
      {' '}
      The random value between
      {props.min} and
      {props.max} is
      {randomNumber}
    </h3>
  );
};

export default Random;
