import React from 'react';

function SingleColorPicker(props) {
  return (
    <div className="color-container">
      <div className="color-box" style={props.style}></div>
      <span>{props.color}</span>
      <input type="number" min="0" max="255" onChange={props.changeColor} />
    </div>
  );
}

export default SingleColorPicker;
