import React from 'react';

const Random = ({ min, max }) => {
  const randomValue = (min, max) => {
    return Math.floor((max - min + 1) * Math.random() + min);
  };

  return (
    <div className="random-container">
      <h3>
        Random value between {min} and {max} ={`>`} {randomValue(min, max)}
      </h3>
    </div>
  );
};

export default Random;
