import React from 'react';

function Random(props) {
  const { min, max } = props;
  const randomNumber = Math.ceil(Math.random() * (max - min + 1) + min);
  return (
    <div>
      <p>
        {' '}
        Random value between {min} and {max} => {randomNumber}
      </p>
    </div>
  );
}

export default Random;
