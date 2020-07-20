import React from 'react';

const Random = (props) => {
  function random(min, max) {
    return Math.floor(Math.random() * Math.floor(max - min)) + min;
  }

  return (
    <div className="random">
      Random value between {props.min} and {props.max} =>{' '}
      {random(props.min, props.max)}
    </div>
  );
};

export default Random;
