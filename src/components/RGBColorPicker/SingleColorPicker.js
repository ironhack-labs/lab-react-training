// components/RGBColorPicker/SingleColorPicker.js

import React from 'react';

const SingleColorPicker = (props) => {

  const handleChange = (e) => {
    const { color, onChange } = props;
    const { value } = e.target;
    onChange(color, value);
  }

  const colorName = () => {
    const { color } = props;
    switch (color) {
      case 'r':
        return 'red';
      case 'g':
        return 'green';
      case 'b':
        return 'blue';
      default:
        return '';
    }
  }

  const { color, value } = props;
  const divStyle = { backgroundColor: colorName() };
  return (
    <div className='single-color-picker'>
      <div className='color-box' style={divStyle}></div>
      <div className='form-group'>
        <label htmlFor='color'>{color.toUpperCase()}</label>
        <input
          type='number'
          id='color'
          className='form-control'
          min='0'
          max='255'
          value={value}
          onChange={handleChange}
          />
      </div>
    </div>
  );
}

export default SingleColorPicker;
