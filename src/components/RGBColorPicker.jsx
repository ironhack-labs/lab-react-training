import React from 'react';
import { useState } from 'react';

import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker(props) {
  const [rValue, setRValue] = useState(255);
  const [gValue, setGValue] = useState(255);
  const [bValue, setBValue] = useState(255);

  return (
    <div className="colorsPick-container">
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={e => {
          setRValue(e.target.value);
        }}
      />

      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={e => {
          setGValue(e.target.value);
        }}
      />

      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={e => {
          setBValue(e.target.value);
        }}
      />

      <div className="renderColor-wrapper">
        <div
          className="renderColor-box"
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: `rgb(${rValue},${gValue},${bValue})`
          }}
        ></div>
        <p>{`rgb(${rValue}, ${gValue}, ${bValue})`}</p>
      </div>
    </div>
  );
}

export default RGBColorPicker;
