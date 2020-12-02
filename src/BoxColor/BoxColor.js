import React from 'react';
import './BoxColor.css';

const BoxColor = (props) => {
  console.log('this is the color', props);
  const boxStyle = {
    backgroundColor: `RGB(${props.r}, ${props.g}, ${props.b})`,
    height: '100px',
    width: '100%',
  };

  return (
    <div
      className="
  box__color"
      style={boxStyle}
    >
      <p>
        rgb( {props.r}, {props.g}, {props.b})
      </p>
    </div>
  );
};

export default BoxColor;
