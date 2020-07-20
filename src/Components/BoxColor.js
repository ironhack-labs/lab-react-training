import React from 'react'

const BoxColor = (props) => {

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }

      var colorText = function(){
          if (props.g === 0){
              return "white"
          } else {
              return "black"
          }
      }
      
    return (
        <div className="box" style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`, color: `${colorText()}`}}>
              <p>rgb({props.r}, {props.g}, {props.b})</p>
              <p>{rgbToHex(props.r, props.g, props.b)}</p>
        </div>
    )
}

export default BoxColor
