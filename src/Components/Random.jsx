import React from 'react';

const Random = (props) => {
  const { min, max } = props;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="random">
      Random value between {min} and {max} is {randomNum}.
    </div>
  );
};

export default Random;
