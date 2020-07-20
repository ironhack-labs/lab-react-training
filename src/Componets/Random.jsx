import React from 'react';

const Random = (props) => {
  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  //const rand = Math.floor(Math.random() * ({props.max} - {props.min} + 1) + {props.min})

  return (
    <div>
      <p>
        Random value between {props.min} and {props.max} =
        {rand(props.min, props.max)}
      </p>
    </div>
  );
};

export default Random;
