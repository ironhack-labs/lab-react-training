import React from 'react';

export default function BoxColor(props) {
  let randomNum1 = Math.floor(Math.random() * (props.g - props.r)) + props.r;
  let randomNum2 = Math.floor(Math.random() * (props.g - props.r)) + props.r;
  let randomNum3 = Math.floor(Math.random() * (props.g - props.r)) + props.r;
  let color = {
    backgroundColor: `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`,
  };
  return (
    <div className="container" style={color}>
      <p>{color.backgroundColor}</p>
    </div>
  );
}
