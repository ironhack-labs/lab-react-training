import React from 'react';

const Random = (props) => {
  return Math.floor(Math.random() * (props.max - props.min)) + props.min;
};

export default Random;
