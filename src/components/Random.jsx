import React from 'react';


// two props: min and max

const Random = ({ min, max }) => {

 // The formula calculates a random number within the desired range.
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

  // Rendering the answer

  return <div>{randomInt}</div>;
};

export default Random;
    