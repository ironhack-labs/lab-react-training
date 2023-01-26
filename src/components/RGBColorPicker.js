import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker (){
    const [rValue, setR] = useState(0);
    const [gValue, setG] = useState(0);
    const [bValue, setB] = useState(0);
  
    const setRed = (value) => {
      if (value > 255) return setR(255);
      if (value <= 0) return setR(0);
      return setR(value);
    };
  
    const setGreen = (value) => {
      if (value > 255) return setG(255);
      if (value <= 0) return setG(0);
      return setG(value);
    };
  
    const setBlue = (value) => {
      if (value > 255) return setB(255);
      if (value <= 0) return setB(0);
      return setB(value);
    };
    return(
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <SingleColorPicker
            color="r"
            value={rValue}
            onChange={(e) => setRed(e.target.value)}
          />
          <SingleColorPicker
            color="g"
            value={gValue}
            onChange={(e) => setGreen(e.target.value)}
          />
          <SingleColorPicker
            color="b"
            value={bValue}
            onChange={(e) => setBlue(e.target.value)}
          />
    
          <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
            }}
          ></div>
        </div>
      );
}

export default RGBColorPicker