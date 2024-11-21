import React from 'react';

function SingleColorPicker({ color, value, onChange }) {
  const getColorStyle = (color) => {
    switch (color) {
      case 'r':
        return { backgroundColor: `rgb(${value}, 0, 0)` };
      case 'g':
        return { backgroundColor: `rgb(0, ${value}, 0)` };
      case 'b':
        return { backgroundColor: `rgb(0, 0, ${value})` };
      default:
        return {};
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          width: '20px',
          height: '20px',
          marginRight: '10px',
          ...getColorStyle(color),
        }}
      ></div>
      <label>{color.toUpperCase()}:</label>
      <input
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={(e) => {
          onChange(color, e.target.value);
        }}
      />
    </div>
  );
}

export default SingleColorPicker;
