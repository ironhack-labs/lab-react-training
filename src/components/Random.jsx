import React from 'react';

function Random({ min, max }) {
  return (
    <div className="random">
      Random value between {min} and {max} => {' '}
      {Math.round(Math.random() * (max - min) + min)}
    </div>
  );
}

export default Random;
