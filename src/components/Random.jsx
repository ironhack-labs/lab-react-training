import React from 'react';

const Random = ({ min, max }) => {
  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div className="random">
      Random value between {min} and {max} => {randomNum}
    </div>
  );
};

export default Random;