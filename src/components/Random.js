import React from 'react';

const Random = (props) => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  return (
    <div>
      <p>
        Random value between {props.min} and {props.max} =>{' '}
        {getRandomInt(props.min, props.max)}
      </p>
    </div>
  );
};
export default Random;
