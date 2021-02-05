
import React from 'react';

const Random = (props) => {
  const random = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );
  return (
    <div className="border border-dark m-2 p-1">
      <p>{`Random value between ${props.min} and ${props.max} => ${random}`}</p>
    </div>
  );
};

export default Random;