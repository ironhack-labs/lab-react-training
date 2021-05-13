import React from 'react';

function Random(props) {
  const { min, max } = props;
  return (
    <div>
      Random value between {min} and {max}{' '}
      {`=> ${Math.floor(Math.random() * (max - min) + min)}`};
    </div>
  );
}

export default Random;
