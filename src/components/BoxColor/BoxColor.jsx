import React from 'react';
import classes from './BoxColor.module.css';

const Random = (props) => {
  const { r, g, b } = props;

  const returnRgb = (r, g, b) => {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  };

  return (
    <div className={classes.container} style={{ backgroundColor: returnRgb(r, g, b) }}>
      <h3>{returnRgb(r, g, b)}</h3>
    </div>
  );
};

export default Random;
