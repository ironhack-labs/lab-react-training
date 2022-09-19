import React from 'react';
import '../styles/Random.css';

const Random = ({ min, max }) => {
  return (
    <div className="random">
      Random value between {min} and {max} =&gt;{' '}
      {Math.floor(Math.random() * max) + min}
    </div>
  );
};

export default Random;
