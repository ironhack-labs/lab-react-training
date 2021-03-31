import React from 'react';
import '../assets/css/SingleColorPicker.css';


const SingleColorPicker = (props) => {
  const { rValue, gValue, bValue } = props;
  console.log(rValue)
  return (
    <div className='RGBColorPickerDiv'>
      <div
        className="caja"
        style={{
          backgroundColor: `rgb(${rValue}, ${gValue},${bValue})`,
          width: '40px',
          height: '40px',
        }}
      />
      <p>{`rgb(${rValue}, ${gValue},${bValue})`}</p>
    </div>
  );
};

export default SingleColorPicker;
