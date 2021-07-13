import React from 'react';

function Random({ max, min }) {
  return <p>The random number is: {Math.random() * (max - min + 1) + min} </p>;
}

export default Random;
