import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleChange = (color, value) => {
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

  return (
    <div>
      <SingleColorPicker color="r" value={rValue} onChange={handleChange} />
      <SingleColorPicker color="g" value={gValue} onChange={handleChange} />
      <SingleColorPicker color="b" value={bValue} onChange={handleChange} />
    </div>
  );
}

export default RGBColorPicker;
