import React from 'react';

function SingleColorPicker({ color, value, onChange }) {
  return (
    <div>
      <label htmlFor={color}>{color.toUpperCase()}</label>
      <input
        type="number"
        id={color}
        value={value}
        onChange={onChange}
        min={0}
        max={255}
      />
    </div>
  );
}

export default SingleColorPicker;
