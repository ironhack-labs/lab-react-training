import React from 'react';

const SingleColorPicker = (props) => {
  let r = 0;
  let g = 0;
  let b = 0;

  if (props.color === 'r') {
    r = props.value;
  }
  if (props.color === 'g') {
    g = props.value;
  }
  if (props.color === 'b') {
    b = props.value;
  }

  const background = `rgb(${r},${g},${b})`;

  return (
    <div className="rgb-partial">
      <div className="color-box" style={{ backgroundColor: background }}></div>
      {props.color.toUpperCase()}:
      <input
        type="number"
        value={props.value}
        onChange={(e) => props.onColorChange(e.target.value, props.color)}
      />
    </div>
  );
};

export default SingleColorPicker;
