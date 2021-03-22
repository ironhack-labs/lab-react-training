import React from 'react';
import '../assets/css/Random.css';
import { getRandomInt } from '../assets/misc/getRandomInt';

const Random = ({ min, max }) => {
  const randomInt = getRandomInt(min, max);
  const message = `Random value between ${min} and ${max} => ${randomInt}`;

  return <div className="Random">{message}</div>;
};

export default Random;
