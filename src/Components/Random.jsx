import React from 'react';

const Random = ({ min, max }) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return <p>Random number: {randomNumber}</p>;
};

export default Random;
