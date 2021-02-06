import React from 'react';

const Random = ({ min, max }) => {
  const random = Math.floor(Math.random() * max) + min;
  return (
    <p>
      Random value between {min} and {max} =&gt; {random}
    </p>
  );
};

export default Random;
