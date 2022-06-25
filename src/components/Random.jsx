import React from 'react';

const Random = (props) => {
  const rgn = Math.floor(props.min + Math.random() * (props.max - props.min));
  return (
    <div className="container">
      <p>{`A random number between ${props.min} and ${props.max} => ${rgn}`}</p>
    </div>
  );
};

export default Random;
