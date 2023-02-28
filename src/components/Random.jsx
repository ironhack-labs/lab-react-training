import React from 'react';

function Random(props) {
  const { min, max } = props;
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  return (
    <div>
      <h3>Random value between {min} and {max} -- {randomNumber} </h3>
    </div>
  );
}

export default Random;
