import React from 'react';

function BoxColor(props) {
  const divStyle = {
    height: 50,
    border: 1,
    margin: 10,
    'background-color': `rgb(${props.r}, ${props.g}, ${props.b}`,
  };

  return (
    <div style={divStyle}>
      <span>
        rgb {props.r}, {props.g}, {props.b}
      </span>
    </div>
  );
}

export default BoxColor;
