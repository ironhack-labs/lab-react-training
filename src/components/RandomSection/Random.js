import React from 'react';

export default function Random(props) {
  return (
    <div className="Row">
      <p>
        Random value between {props.min} and {props.max} ={' '}
        {Math.floor(props.max * Math.random()) + props.min}
      </p>
    </div>
  );
}
