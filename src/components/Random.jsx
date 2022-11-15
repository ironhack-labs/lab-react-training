import React from 'react';

function Random(props) {
  const { min, max } = props;
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + 1);
  }
  return (
    <div className='random'>
      <p>
        Random value between {min} and {max}: {randomNumber(min, max)}
      </p>
    </div>
  );
}

export default Random;
