import React from 'react';
import './Random.css';

const Random = (props) => {

  const getRandom = (max) => {
    let randomnr = Math.floor(Math.random() * max);
    if (randomnr < 1) {
      return `Random Value between 1 and 6 => 1`;
    } else {
      return `Random Value between 1 and 100 => ${randomnr}`;
    }
  };

  return <div className="randombox">{getRandom(props.max)}</div>;
};

export default Random;
