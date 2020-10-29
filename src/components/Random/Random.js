import React from 'react';

import './Random.css';

const Random = ({ min, max }) => {

  const randomNum = (min, max) => Math.floor(Math.random()*max) + min;

  return (
    <div className="random-container">
      <h2>Random value between {min} and {max} => {randomNum(min, max)}</h2>
    </div>
  );
};

export default Random;
