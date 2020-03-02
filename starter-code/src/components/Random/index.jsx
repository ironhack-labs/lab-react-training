import React from 'react';

function Random(data) {
  const random = Math.floor(Math.random() * data.max) + data.min;
  return (
    <h2>
      random value between {data.min} and {data.max} => {random}
    </h2>
  );
}

export default Random;
