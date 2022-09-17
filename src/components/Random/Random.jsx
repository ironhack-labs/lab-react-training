import React from 'react';

function getRandomNumber(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

const Random = (props) => {
  return (
    <div>
      Random value between 1 and {props.max} : {getRandomNumber(props.max)}
    </div>
  );
};

export default Random;
