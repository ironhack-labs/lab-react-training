import React from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  const handleChange = (e) => {
    onChange(Number(e.target.value));
  };

  return (
    <div>
      <label>{color.toUpperCase()}:</label>
      <input
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SingleColorPicker;
