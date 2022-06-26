import React from 'react';

const Random = ({ min, max }) => {
  return (
    <div>
      <p>
        Random value between {min} and {max} {`=>`}{' '}
        {Math.floor(Math.random() * max) + min}
      </p>
    </div>
  );
};

export default Random;
