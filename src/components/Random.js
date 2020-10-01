import React from 'react';

function randomInRange(min, max) {
  return Math.floor(Math.random() * max) + min
}


function Random(props) {
  return (
    <div>
      <p>{`Random value between ${props.min} and ${props.max} => ${randomInRange(props.min, props.max)}`}</p>
    </div>
  )
}

export default Random;