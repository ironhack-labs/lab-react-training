import React from 'react';

function Random(props) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className="box">
      Random value between {props.min} and {props.max} {'=>'}{' '}
      {getRandomInt(props.min, props.max)}
    </div>
  );
}

export default Random;
