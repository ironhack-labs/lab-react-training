import React from 'react';

function Random(props) {
  const { min, max } = props;
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  return (
    <div className='random-card'>
      <p>Random value between {min} and {max} -- {randomNumber} </p>
    </div>
  );
}

export default Random;
