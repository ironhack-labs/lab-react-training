import React from 'react'

function rgbToHex(r, g, b) {
 return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const Boxcolor = (props) => {
 const divStyle = {
  "backgroundColor": `rgb(${props.r}), ${props.g}, ${props.b}`,
 }
 return(
  <div className='container' style={divStyle}>
  <p>rgb({props.r}, {props.g}, {props.b}) </p>
  <p>{rgbToHex(props.r, props.g, props.b)}</p>
  </div>
 )

}

export default Boxcolor