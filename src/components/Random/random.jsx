import React from 'react';

function random(props) {
  const { min, max } = props;

  let value = Math.floor(Math.random() * (max - min) + min);

  return (
    <div>
      <p>
        Random number between {min} and {max} =>> {value}
      </p>
    </div>
  );
}

export default random;
