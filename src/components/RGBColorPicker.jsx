import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

export default function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleColorChange = (color, value) => {
    switch(color){
        case "r":
            setRValue(value);
            break;
        case "g":
            setGValue(value);
            break;
        case "b":
            setBValue(value);
            break;
        default:
            break;
    }
  }

  const rgbFinalColor = `rgb(${rValue}, ${gValue}, ${bValue})`;

  return (
    <div className="rgb-color">
        <SingleColorPicker 
        color="r"
        value={rValue}
        onChange={handleColorChange} 
        />

        <SingleColorPicker 
        color="g"
        value={gValue}
        onChange={handleColorChange} 
        />

        <SingleColorPicker 
        color="b"
        value={bValue}
        onChange={handleColorChange} 
        />

        <div className="rgb-square">
            <div style={{backgroundColor: rgbFinalColor}}></div>
            <p>{`rgb(${rValue}, ${gValue}, ${bValue})`}</p>
        </div>
    </div>
  )
}
