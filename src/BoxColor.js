import React from 'react'

const BoxColor = props => {

  function numToHex(num) {
    let hex = num.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }
  
  function rgbToHex(r, g, b) {
    return `#${numToHex(r)}${numToHex(g)}${numToHex(b)}`;
  }

    return (
        <div className="card card--dark" style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}>
           <p>RGB({props.r}, {props.g}, {props.b})</p>
           <p>{rgbToHex(props.r, props.g, props.b)}</p>
        </div>
    )
}

export default BoxColor