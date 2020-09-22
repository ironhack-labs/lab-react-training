import React from 'react';
import './Random.css';

const Random = (props) => {
  let min = props.min;
  let max = props.max;
  const random = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div className="random">
      <p>
        Random value between {props.min} and {props.max} = {random}
      </p>
    </div>
  );
};
export default Random;
