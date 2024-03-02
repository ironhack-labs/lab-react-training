import React from 'react';

function Random(props) {
  const min = props.min;
  const max = props.max;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div>
      <h1>
        Random value between {min} and {max} = {randomNum}
      </h1>
    </div>
  );
}

export default Random;