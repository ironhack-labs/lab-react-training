import React from 'react'

const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

const BoxColor = (props) => {
    return (
       <div className="color-box" style={{background: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
       <span>rgb({props.r}, {props.g}, {props.b})</span>
       <span>{rgbToHex(props.r, props.g, props.b)}</span>
       </div>
    )
}
export default BoxColor
