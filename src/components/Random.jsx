import React from 'react';
import '../App.css';

const Random = (props) => {
  return (
    <div className="random">
      <div min={props.min} max={props.max}>
        Random value between {props.min} and {props.max} ==> {' '}
        {Math.floor(Math.random() * (props.max - props.min) + props.min)}
      </div>
    </div>
  );
};

export default Random;
