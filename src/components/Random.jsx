import React from 'react';
import '../App.css';

function Random(props) {
  const random = Math.floor(Math.random() * props.max);
  return (
    <div>
      <p>
        Random value between {props.min} and {props.max} => {random}
      </p>
    </div>
  );
}

export default Random;
