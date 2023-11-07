import React from "react";

const SingleColorPicker = ({ color, value, onChange }) => {
  return (
    <div className="single-color-picker">
      <label>{color.toUpperCase()}:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(color, parseInt(e.target.value, 10))}
        min="0"
        max="255"
      />
    </div>
  );
};

export default SingleColorPicker;
