import React from 'react';

export default function Random(props) {
  let number = Math.floor(Math.random() * (props.max - props.min) + props.min);
  return (
    <div>
      <div>
        Random Value between {props.min} and {props.max}: {number}
      </div>
    </div>
  );
}
