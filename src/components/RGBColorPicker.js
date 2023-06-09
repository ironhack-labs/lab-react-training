import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker ';
import '../App.css';

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleRChange = (newValue) => {
    setRValue(newValue);
  };

  const handleGChange = (newValue) => {
    setGValue(newValue);
  };

  const handleBChange = (newValue) => {
    setBValue(newValue);
  };

  return (
    <div className="color-picker-container">
       <SingleColorPicker color="r" value={rValue} onChange={handleRChange} />
       <div className="color-box" style={{ backgroundColor: `rgb(${rValue}, 0, 0)` }}></div>
      <SingleColorPicker color="g" value={gValue} onChange={handleGChange} />
      <div className="color-box" style={{ backgroundColor: `rgb(0, ${gValue}, 0)` }}></div>
      <SingleColorPicker color="b" value={bValue} onChange={handleBChange} />
      <div className="color-box" style={{ backgroundColor: `rgb(0, 0, ${bValue})` }}></div>
      <div
        className="color-square"
        style={{ backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})` }}
      ></div>
   
    </div>
  );
}

export default RGBColorPicker;
