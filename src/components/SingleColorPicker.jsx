import React from 'react';

function SingleColorPicker(props) {
  return (
    <div className="colorPick-container">
      <div
        className="color-box"
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: `rgb(${props.color === 'r' ? props.value : 0}, ${
            props.color === 'g' ? props.value : 0
          }, ${props.color === 'b' ? props.value : 0})`
        }}
      ></div>

      <label>{props.color.toUpperCase()}:</label>
      <input
        type="number"
        value={props.value}
        onChange={props.onChange}
        min="0"
        max="255"
      />
    </div>
  );
}

export default SingleColorPicker;
