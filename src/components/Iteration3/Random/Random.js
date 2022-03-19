import React from 'react';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const Random = ({ min, max }) => {
  return (
    <div className="alert alert-light" role="alert">
      {`Random value between ${min} and ${max} => ${getRandomNumber(min, max)}`}
    </div>
  );
};

export { Random };
