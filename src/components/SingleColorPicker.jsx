import React from 'react';

function SingleColorPicker({ color, value, onChange }) {
  return (
    <div>
      <label>{color.toUpperCase()}</label>
      <input
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={(event) => onChange(color, +event.target.value)}
      />
    </div>
  );
}

export default SingleColorPicker;
