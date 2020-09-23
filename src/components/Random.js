import React from 'react';

export default function Random(props) {
  const { min, max } = props;
  const randomNumber = Math.floor(Math.random() * (max - 1) + min);

  return (
    <div>
      <p>
        Random value between {min} and {max} = {randomNumber}
      </p>
    </div>
  );
}
