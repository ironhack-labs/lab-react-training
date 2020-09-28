import React from 'react';
import './Random.css';

const RandomNum = (props) => {
  return (
    <div>
      <h1> Random Value </h1>
      <div className="random-number">
        Random value between {props.min} and {props.max} {'=>'}{' '}
        {Math.floor(
          Math.random() * (parseInt(props.max) - parseInt(props.min)) + 1
        ) + parseInt(props.min)}
      </div>
    </div>
  );
};

export default RandomNum;
