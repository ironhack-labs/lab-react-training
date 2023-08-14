import React from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  const colorValue = color === 'r' ? value : color === 'g' ? value << 8 : value << 16;

  return (
    <div className="color-row">
      <div className="color-container">
        <div className="color-block" style={{ backgroundColor: `rgb(${color === 'r' ? colorValue : 0}, ${color === 'g' ? colorValue : 0}, ${color === 'b' ? colorValue : 0})` }}></div>
        <label className="color-label">{color.toUpperCase()}:</label>
      </div>
      <input
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(color, parseInt(e.target.value))}
      />
    </div>
  );
};

export default SingleColorPicker;

