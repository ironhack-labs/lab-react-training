import React from 'react';
import './../App.css';

const Random = (props) => {
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <div className="random">
      Random value between 1 and 6 =>
      {randomIntFromInterval(props.min, props.max)}
    </div>
  );
};
export default Random;
