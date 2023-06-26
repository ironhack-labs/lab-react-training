import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleColorChange = (color, value) => {
    const numericValue = Number(value);
    switch(color) {
      case 'r':
        setRValue(numericValue);
        break;
      case 'g':
        setGValue(numericValue);
        break;
      case 'b':
        setBValue(numericValue);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
        <div style={{backgroundColor: `rgb(${rValue}, 0, 0)`, width: '50px', height: '50px', marginRight: '10px'}} />
        <SingleColorPicker color="r" value={rValue} onChange={handleColorChange} />
      </div>
      <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
        <div style={{backgroundColor: `rgb(0, ${gValue}, 0)`, width: '50px', height: '50px', marginRight: '10px'}} />
        <SingleColorPicker color="g" value={gValue} onChange={handleColorChange} />
      </div>
      <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
        <div style={{backgroundColor: `rgb(0, 0, ${bValue})`, width: '50px', height: '50px', marginRight: '10px'}} />
        <SingleColorPicker color="b" value={bValue} onChange={handleColorChange} />
      </div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={{backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`, width: '50px', height: '50px', marginRight: '10px'}} />
        <p>rgb({rValue}, {gValue}, {bValue})</p>
      </div>
    </div>
  )
}

export default RGBColorPicker;

