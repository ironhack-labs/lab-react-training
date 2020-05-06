import React from 'react';

const Random = props => {
  return (
    <div style={{ border: '1px solid black', background: 'red', color: 'white' }}>
      Random value between {props.min} and {props.max} ={' '}
      {Math.floor(Math.random() * (props.max - props.min) + props.min)}
    </div>
  );
};

export default Random;
