import React from 'react';

export default function BoxColor(props) {
  console.log(props);
  const divStyle = {
    'background-color': `rgb(${props.r}, ${props.g}, ${props.b})`,
  };

  const spanStyle = {
    color: +props.hex,
  };
  return (
    <div style={divStyle} className="box-color">
      <span style={spanStyle} className="box-text">
        rgb {props.r},{props.g},{props.b}
        {props.hex}
      </span>
    </div>
  );
}
