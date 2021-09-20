import React from 'react';

const RandomNumber = (props) => {
  const randomNumber = Math.floor(Math.random() * props.max) + props.min;
  return (
    <div className="border-box">
      <h3>
        A random Number between {props.min} and {props.max} is {randomNumber}
      </h3>
    </div>
  );
};

export default RandomNumber;
