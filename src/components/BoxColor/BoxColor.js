import React from 'react';
import './BoxColor.css';

const BoxColor = (props) => {
  const boxColorStyle = {
    backgroundColor: `RGB(${props.r}, ${props.g}, ${props.b})`,
  };
  return (
    <div style={boxColorStyle} className="BoxColor">
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
};

export default BoxColor;
