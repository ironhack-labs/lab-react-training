import React from 'react';
import '../App.css';

function Random(props) {
  const random = Math.floor(Math.random() * props.max);
  return (
    <div className="random">
      Random value between {props.min} and {props.max} => {random}
    </div>
  );
}

export default Random;
