import React from 'react';
import './index.css'

const SingleColorPicker = ({ value, color, onChange, getColor, name}) => {
  return (
    <div className='SingleColorPicker'>
      <div style={{backgroundColor: getColor(color)}}></div>
      <p>{color}:</p>
      <input onChange={onChange} type='number' value={value} name={name}/>
    </div>
  );
};

export default SingleColorPicker;