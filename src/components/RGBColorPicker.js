import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleRChange = (value) => {
    setRValue(value);
  };

  const handleGChange = (value) => {
    setGValue(value);
  };

  const handleBChange = (value) => {
    setBValue(value);
  };

  const colorStyle = {
    backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
    width: '100px',
    height: '100px',
  };

  return (
    <div>
      <SingleColorPicker color="r" value={rValue} onChange={handleRChange} />
      <SingleColorPicker color="g" value={gValue} onChange={handleGChange} />
      <SingleColorPicker color="b" value={bValue} onChange={handleBChange} />
      <div style={colorStyle}></div>
    </div>
  );
};

export default RGBColorPicker;
