// components/RGBColorPicker/ColorResult.js

import React from 'react';

const ColorResult = (props) => {
  const { r, g, b } = props;
  const divStyle = { backgroundColor: `rgb(${r}, ${g}, ${b}` };
  return (
    <div className='single-color-picker'>
      <div className='color-box' style={divStyle}></div>
      <div className='form-group'>
        <label>RGB({r}, {g}, {b})</label>
      </div>
    </div>
  );
}

export default ColorResult;
