import React from 'react';
import '../assets/css/Random.css';
import { getRandomInt } from '../assets/misc/getRandomInt';

const Random = ({ min, max }) => {
  const randomInt = getRandomInt(min, max);

  return (
    <div className="Random">
      Random value between {min} and {max} => {randomInt}
    </div>
  );
};

export default Random;
