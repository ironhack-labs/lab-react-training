import React from 'react';

function Random(props) {
const randomNum = Math.floor(Math.random() * (props.max - props.min) + props.min)

  return (
    <div className="border border-dark m-2 d-flex p-1">
      <p> Random Value Between {props.min} and {props.max} => {randomNum} </p>
    </div>
  );
}

export default Random;
