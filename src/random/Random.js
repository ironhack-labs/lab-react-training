import React from 'react';

const Random = ({ min, max }) => {
  // const randomNum = Math.floor(Math.random() * Math.floor(max))
  return (
    <>
      <p>
        Random value between {min} and {max} =>{' '}
        {Math.floor(Math.random() * max + min)}
      </p>
    </>
  );
};

export default Random;
