import React from 'react'
import SingleColorPicker from './single-color-picker/SingleColorPicker';
import { useState } from 'react';

function RGBColorPicker() {
  const [RGBColor, setRGBColor] = useState({ rValue: 0, gValue: 0, bValue: 0 });

  const bgRGBColor = `rgb(${RGBColor.rValue},${RGBColor.gValue},${RGBColor.bValue})`;
  
  const handleChangeRGBColor = (color, colorValue) => {
    switch(color) {
      case "r":
        setRGBColor({ rValue: colorValue, gValue: RGBColor.gValue, bValue: RGBColor.bValue })
        break;
      case "g":
        setRGBColor({ rValue: RGBColor.rValue, gValue: colorValue, bValue: RGBColor.bValue })
        break;
      case "b":
        setRGBColor({ rValue: RGBColor.rValue, gValue: RGBColor.gValue, bValue: colorValue })
        break
      default:
    }
  };

  return (
    <form className='m-3 d-flex flex-column gap-3'>
        <SingleColorPicker 
          color="r"
          value={RGBColor.rValue}
          onChange={handleChangeRGBColor}
        />
        <SingleColorPicker 
          color="g"
          value={RGBColor.gValue}
          onChange={handleChangeRGBColor}
        />
        <SingleColorPicker 
          color="b"
          value={RGBColor.bValue}
          onChange={handleChangeRGBColor}
        />
        <div className='d-flex gap-1 align-items-center'>
          <div className='p-3 border border-black border-2' style={{ backgroundColor: bgRGBColor }} />
          <span className='fs-5 fw-semibold'>{bgRGBColor}</span>
        </div>
    </form>
  )
}

export default RGBColorPicker;
