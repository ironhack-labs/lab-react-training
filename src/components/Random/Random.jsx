import React from 'react';

function Random(props) {
  let { min, max } = props;
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div>
      <p>{random}</p>
    </div>
  );
}

export default Random;
