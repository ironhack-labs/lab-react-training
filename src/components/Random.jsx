import React from 'react';
import '../assets/css/Random.css';

const Random = ({min, max}) => {
  return Math.floor(Math.random() * max) + min;
};

export default Random;
