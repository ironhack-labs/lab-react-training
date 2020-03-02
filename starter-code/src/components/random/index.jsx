import React from 'react';

const Random = props => {
  return (
    <p className="greetings">
      Random value between {props.min} and {props.max} =>{' '}
      {Math.floor(Math.random() * (props.max - props.min) + props.min)}
    </p>
  );
};

export default Random;
