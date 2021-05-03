import React from 'react';

const Random = ({ min, max }) => {
  let randomNum;
  const getRandom = () => {
    randomNum = Math.round(min + Math.random() * (max - min));
    return randomNum;
  };
  return (
    <div className="Random">
      <h2>
        Random value between {min} and {max} = {getRandom()}
      </h2>
    </div>
  );
};

export default Random;
