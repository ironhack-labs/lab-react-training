import React from 'react';
import './BoxColor.css';

const BoxColor = props => {

  const rgbValue = `rgb(${props.r},${props.g},${props.b})`;
  const rgbToHex = function (rgb) { 
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };
  

  return (
    <article className='boxcolor__box' style={{ backgroundColor: rgbValue }}>
      <div className='rgb'>
        <p>{rgbValue}</p>
        <p>#{rgbToHex(props.r)}{rgbToHex(props.g)}{rgbToHex(props.b)}</p>
      </div>
    </article>  
  )
}

export default BoxColor;