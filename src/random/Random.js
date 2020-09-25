import React from 'react';

function Random(props) {
  const rndm = Math.ceil(Math.random() * props.max);
  return (
    <div>
      Random value between {props.min} and {props.max} : {rndm}
    </div>
  );
}

export default Random;
