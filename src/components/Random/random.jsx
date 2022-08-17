import React from 'react';

function Random(props) {
  const { min, max } = props;

  let value = Math.floor(Math.random() * (max - min) + min);

  return (
    <div className="random">
      <p>
        Random number between {min} and {max} = {value}!
      </p>
    </div>
  );
}

export default Random;
