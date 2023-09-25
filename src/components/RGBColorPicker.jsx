import React from 'react';
import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker() {
  const [rValue, setRValue] = useState(255);
  const [gValue, setGValue] = useState(255);
  const [bValue, setBValue] = useState(255);
  const HandleChange = (e, color) => {
    console.log('here', e.target.value, color);
    let number = e.target.value;
    if (color === 'r') {
      setRValue(number);
    } else if (color === 'g') {
      setGValue(number);
    } else {
      setBValue(number);
    }
  };
  return (
    <div className="colorPickerContainer">
      <div style={{ width: '50%' }}>
        <h3>Colors:</h3>
        <SingleColorPicker color="r" value={rValue} onChange={HandleChange} />

        <SingleColorPicker color="g" value={gValue} onChange={HandleChange} />

        <SingleColorPicker color="b" value={bValue} onChange={HandleChange} />
      </div>
      <div className="finalColor">
        <h2>
          rgb({rValue}, {gValue}, {bValue})
        </h2>
        <div
          className="box"
          style={{ backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})` }}
        ></div>
      </div>
    </div>
  );
}

export default RGBColorPicker;