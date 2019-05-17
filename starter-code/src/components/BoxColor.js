import React from 'react';

const BoxColor = (props) => {
  let backColor = `rgb(${props.r}, ${props.g}, ${props.b})`;
  let backColorHex = rgbToHex(props.r, props.g, props.b)

  const divStyle = {
    padding: '30px 0',
    backgroundColor: backColor,
    textAlign: 'center' 
  }

  return (
    <div className="app-div-black-border-box" style={divStyle}>
      <span>{backColor}</span>
      <br />
      <span>{backColorHex}</span>
    </div>
  )
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export default BoxColor;