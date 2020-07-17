import React from 'react';

const SingleColorPicker = (props) => {
  let r = 255;
  let b = 255;
  let g = 255;

  if (props.index === 'r') {
    r = props.value;
  }
  if (props.index === 'g') {
    g = props.value;
  }
  if (props.index === 'b') {
    b = props.value;
  }

  const colorValue = `rgb(${r},${g},${b})`;

  return (
    <div className="wrapper">
      <span
        className="color-output"
        style={{ backgroundColor: colorValue }}
      ></span>
      {props.index.toUpperCase()}
      <input
        type="number"
        value={props.index}
        onChange={(e) => props.onIndexChange(e.target.value, props.index)}
      />
    </div>
  );
};

export default SingleColorPicker;
