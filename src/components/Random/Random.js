import React from 'react';

function Random(props) {
  let min = props.min;
  let max = props.max;
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div>
      <p>
        Random value between {min} and {max} =>{randomNumber}
      </p>
    </div>
  );
}

export default Random;
