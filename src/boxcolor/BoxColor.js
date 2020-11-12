import React from 'react';
import './BoxColor.css';

function BoxColor(props) {
  const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };

  return (
    <div className="boxcolor" style={divStyle}>
      rgb({props.r}, {props.g}, {props.b})
    </div>
  );
}

export default BoxColor;
