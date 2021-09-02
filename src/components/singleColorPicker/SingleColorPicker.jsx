import React from 'react';
import './SingleColorPicker.css';

export default function SingleColorPicker({ color, value, onChange }) {
  const getBackgroundColor = (color) => {
    if (color === 'r') {
      return 'red';
    } else if (color === 'g') {
      return 'grey';
    } else if (color === 'b') {
      return 'blue';
    }
  };
  return (
    <div className="SingleColorPicker">
      <div
        className="square"
        style={{ backgroundColor: getBackgroundColor(color) }}
      ></div>
      <h2>{color.toUpperCase()}:</h2>
      <input
        type="number"
        min="0"
        max="255"
        className="form-control"
        placeholder="0-255"
        value={value}
        onChange={(e) => onChange(color, Number(e.target.value))}
      />
    </div>
  );
}
