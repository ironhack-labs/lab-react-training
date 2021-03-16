import React from 'react'


const BoxColor = (props) => {
    const divStyle = {
       backgroundColor : `rgb(${props.r}, ${props.g}, ${props.b})`, 
       margin: 5, 
       padding : 5
      };

      function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }
      
        function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
      const Hex =  rgbToHex(props.r, props.g, props.b)
      
    return (
        <div style={divStyle} >
            rgb({props.r}, {props.g}, {props.b})
            {Hex}

        </div>
    )
}

export default BoxColor
