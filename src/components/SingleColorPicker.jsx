import React from 'react';

function SingleColorPicker({ color, value, onChange }) {
  let rgb;
  color === 'r'
    ? (rgb = 'red')
    : color === 'g'
    ? (rgb = 'green')
    : (rgb = 'blue');

  return (
    <div>
      <div className="colorBoxContainer">
        <div className="box" style={{ backgroundColor: rgb }}></div>
        <h4>
          {color.toUpperCase()}:{value}
        </h4>
        <input
          type="number"
          onChange={(e) => {
            onChange(e, color);
          }}
          value={value}
          max="255"
          min="0"
        />
      </div>
    </div>
  );
}

export default SingleColorPicker;