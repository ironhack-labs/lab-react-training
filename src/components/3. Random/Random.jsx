import React from 'react';
import '../3. Random/Random.css';

const Random = (props) => {
  const { min, max } = props;
  let randomNumber = Math.floor(Math.random() * max) + min;
  return (
    <div className="RandomBox">
      <p className="Random">
        Random number between {min} and {max} --> {randomNumber}
      </p>
    </div>
  );
};

export default Random;
