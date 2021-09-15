import React from 'react';

import './style.css';

const Random = ({ min, max }) => {
  console.log(min);
  console.log(max);
  return (
    <div className="random">
      {'Random value between ' +
        min +
        ' and ' +
        max +
        ' => ' +
        Math.floor(Math.random() * (max - min))}
    </div>
  );
};

export default Random;
