import React from 'react';

function RandomNumber({ min, max }) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div className="box">
      <p>
        {' '}
        Random number between {min} and {max}: {randomNumber}
      </p>
    </div>
  );
}

export default RandomNumber;
