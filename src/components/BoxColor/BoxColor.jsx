import React from 'react'
import './BoxColor.css'

function BoxColor({red, green, blue}) {

        function ColorToHex(color) {
            var hexadecimal = color.toString(16);
            return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
          }
          
          function ConvertRGBtoHex(red, green, blue) {
            return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
          }

          const hex = ConvertRGBtoHex(red, green, blue)
          
          const divStyle = {
            backgroundColor: hex
          };
          
        return (
            <div className='BoxColor-card' style={divStyle}>
                <p>rgb({red},{green},{blue})</p>
                <p>{hex}</p>
            </div>
        )
    }

export default BoxColor;
