import React from 'react';

function BoxColor(props) {
  const color = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };

  return (
    <div className="boxcolor" style={color}>
      rgb({props.r}, {props.g}, {props.b})
    </div>
  );
}

export default BoxColor;
