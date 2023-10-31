import React, { useState } from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  return (
    <div>
      <label>{color.toUpperCase()}:</label>
      <input
        type="number"
        value={value}
        min={0}
        max={255}
        onChange={(e) => onChange(color, parseInt(e.target.value))}
      />
    </div>
  );
};

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

  return (
    <div>
      <SingleColorPicker color="r" value={rValue} onChange={handleColorChange} />
      <SingleColorPicker color="g" value={gValue} onChange={handleColorChange} />
      <SingleColorPicker color="b" value={bValue} onChange={handleColorChange} />

      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
        }}
      ></div>
    </div>
  );
};

export default RGBColorPicker;