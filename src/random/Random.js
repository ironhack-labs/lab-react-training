import React from 'react';

function Random(props) {
  const randomNumber = Math.floor(
    Math.random() * (props.max - props.min + 1) + props.min
  );

  return (
    <div>
      <p>
        Random value between {props.min} and {props.max} = {randomNumber} !!
      </p>
    </div>
  );
}

export default Random;
