import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleColorChange = (color, value) => {
    switch (color) {
      case 'r':
        setRValue(value);
        break;
      case 'g':
        setGValue(value);
        break;
      case 'b':
        setBValue(value);
        break;
      default:
        break;
    }
  };

  const rgbColor = `rgb(${rValue}, ${gValue}, ${bValue})`;

  return (
    <div>
      <div className="color-row">
        <SingleColorPicker color="r" value={rValue} onChange={handleColorChange} />
      </div>

      <div className="color-row">
        <SingleColorPicker color="g" value={gValue} onChange={handleColorChange} />
      </div>

      <div className="color-row">
        <SingleColorPicker color="b" value={bValue} onChange={handleColorChange} />
      </div>

      <div className="color-row">
        <div className="color-container">
          <div className="color-block" style={{ backgroundColor: rgbColor }}></div>
        </div>
        <p className="color-value">{rgbColor}</p>
      </div>
    </div>
  );
};

export default RGBColorPicker;


