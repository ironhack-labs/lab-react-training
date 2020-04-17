// components/BoxColor.js

import React from 'react';

const BoxColor = (props) => {
  const { r, g, b } = props;
  const divStyle = {
    color: luminance(r, g, b) > 0.5 ? 'black' : 'white',
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  }
  return (
    <div className='colored-box' style={divStyle}>
      <p>rgb({r}, {g}, {b})</p>
      <p>#{rgbToHex(r, g, b)}</p>
    </div>
  )
}

const rgbToHex = (r, g, b) => {
  const hex = [r, g, b].map(color => { 
    let hexComponent = color.toString(16);
    if (hexComponent.length < 2) {
      hexComponent = '0' + hexComponent;
    }
    return hexComponent;
  });
  return hex;
}

const getLinearRGB = (color) => {
  // color is a standard (gamma-compressed) RGB component normalized to between 0 and 1
  let linearColor;
  if (color > 0.03928) {
    linearColor = Math.pow((color + 0.055) / 1.055, 2.4);
  } else {
    linearColor = color / 12.92;
  }
  return linearColor;
}

const luminance = (r, g, b) => {
  const relativeRGB = [r, g, b].map(color => color / 255);
  const linearRGB = relativeRGB.map(color => getLinearRGB(color));
  const RGB_FACTORS = [0.2126, 0.7152, 0.0722];
  const luminanceByRGB = linearRGB.map((color, index) => RGB_FACTORS[index] * color);
  const relativeLuminance = luminanceByRGB.reduce((accumulator, currentValue) => accumulator + currentValue);
  return relativeLuminance;
}

export default BoxColor;
