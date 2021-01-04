import React from 'react';

function Random(props) {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  return (
    <div className="random">
      Random value between {props.min} and {props.max} =>
      {getRandomIntInclusive(props.min, props.max)}
    </div>
  );
}

export default Random;
