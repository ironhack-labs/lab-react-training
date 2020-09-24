import React from 'react'
import './BoxCOlor.css'


function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const BoxColor = (props) => {

  let bgColor = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    }

    return (
        <div className="BoxColor" style={bgColor}>
              <div className="BoxColorWhite">
              rgb({props.r}, {props.g}, {props.b})
              </div>
             <div>
              {rgbToHex(props.r, props.g, props.b)}
             </div>
        </div>
 )
}

export default BoxColor