import React from 'react';

const Random = (props) => {
  const min = props.min;
  const max = props.max;
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="box">
      <h1>
        Random value between {props.min} and {props.max} =>
        {getRandomNumber(min, max)}
      </h1>
    </div>
  );
};

export default Random;
