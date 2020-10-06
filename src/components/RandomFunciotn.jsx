import React from 'react';

function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default randomizer;
