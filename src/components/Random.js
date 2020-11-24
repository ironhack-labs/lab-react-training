import React from 'react';

const Random = (props) => {
  return (
    <div className="border border-dark px-2 my-2">
      Random value between {props.min} and {props.max} =>
      {~~(Math.random() * (props.max - props.min) + props.min)}
    </div>
  );
};

export default Random;
