import React from 'react';
import '../assets/css/SingleColorPicker.css';

const SingleColorPicker = ({ name, color, onChange, value }) => {
  return (
    <div className="SingleColorPicker">
      <div className="colorSquare" style={{ backgroundColor: color }}></div>
      <div>
        <label htmlFor="color">{color}: </label>
        <input
          min="0"
          type="number"
          id="color"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SingleColorPicker;
