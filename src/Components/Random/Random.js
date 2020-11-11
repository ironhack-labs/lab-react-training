import React from 'react';

const Random = (props) => {
  return (
    <div>
      <p class="container">
        Random value between {props.min} and {props.max} =>{' '}
        {Math.round(Math.random() * (props.max - props.min) + props.min)}
      </p>
    </div>
  );
};

export default Random;
