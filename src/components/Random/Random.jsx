import React from 'react';
import './Random.css';

function getRandomNumber(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

const Random = (props) => {
  return (
    <div className="random-box">
      Random value between 1 and {props.max} : {getRandomNumber(props.max)}
    </div>
  );
};

export default Random;
