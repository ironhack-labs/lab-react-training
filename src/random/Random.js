import React from 'react';

const Random = ({ min, max }) => {
  const randNum = min + Math.floor(Math.random() * Math.floor(max - min));
  return (
    <p>
      Random value between {min} and {max} : {randNum}
    </p>
  );
};

export default Random;
