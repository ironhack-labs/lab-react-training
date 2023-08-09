import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleColorChange = (color, newValue) => {
    if (color === 'r') {
      setRValue(newValue);
    } else if (color === 'g') {
      setGValue(newValue);
    } else if (color === 'b') {
      setBValue(newValue);
    }
  };

  const rgbColor = `rgb(${rValue}, ${gValue}, ${bValue})`;

  return (
    <div className="rgb-color-picker">
      <SingleColorPicker color="r" value={rValue} onChange={handleColorChange} />
      <SingleColorPicker color="g" value={gValue} onChange={handleColorChange} />
      <SingleColorPicker color="b" value={bValue} onChange={handleColorChange} />
      <div
        className="color-preview"
        style={{
          backgroundColor: rgbColor,
        }}
      ></div>
      <p>RGB: {rgbColor}</p>
    </div>
  );
};

export default RGBColorPicker;