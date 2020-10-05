import React from 'react';

function Random(props) {
  function generateRandom({ min, max }) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="Card">
      {`Random Value between ${props.min} and ${props.max} => ${generateRandom({
        max: props.max,
        min: props.min,
      })}`}
    </div>
  );
}

export default Random;
