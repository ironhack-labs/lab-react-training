import React from 'react';

const Random = (props) => {
  const random2Num = (value1, value2) => {
    return Math.floor(Math.random() * (value2 - value1 + 1) + value1);
  };

  return <div className="random-val" > <p>Random value between {props.min} and {props.max} => {random2Num(props.min, props.max)}</p></div>;
};

export default Random;
