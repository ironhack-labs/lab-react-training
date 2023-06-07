import React from 'react';
import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleRChange = (event) => {
    setRValue(Number(event.target.value));
  };

  const handleGChange = (event) => {
    setGValue(Number(event.target.value));
  };

  const handleBChange = (event) => {
    setBValue(Number(event.target.value));
  };
  return (
    <div>
      RGBColorPicker
      <SingleColorPicker color="R:" value={rValue} onChange={handleRChange} />
      <SingleColorPicker color="G:" value={gValue} onChange={handleGChange} />
      <SingleColorPicker color="B:" value={bValue} onChange={handleBChange} />
    </div>
  );
}

export default RGBColorPicker;
