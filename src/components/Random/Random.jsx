import React from 'react';
import classes from './Random.module.css';

const Random = (props) => {
  const returnRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <div className={classes.container}>
      <h3>{returnRandom(props.min, props.max)}</h3>
    </div>
  );
};

export default Random;
