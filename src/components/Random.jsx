import React from 'react';

function Random({ min, max }) {
  const randomNumbers = Math.floor(Math.random() * (max - min));
  return (
    <div className="random">
      Random value between {min} and {max} =>{randomNumbers}
    </div>
  );
}

export default Random;
