import React from 'react';

const Random = (props) => {
  let randomNumber = Math.floor(Math.random() * props.max + props.min);

  return (
    <h2 className="greetings">
      Random value between {props.min} and {props.max} => {randomNumber}
    </h2>
  );
};

export default Random;
