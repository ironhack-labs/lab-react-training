import React from 'react';
import './BoxColor.css'

const BoxColor = (props) => {
    const { r, g, b } = props;

    function componentToHex(c) {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }
      
    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    let textColor = '#000000'

    if (r + g + b <= 255) {
      textColor = '#ffffff'
    }

    let hexColor = rgbToHex(r, g, b)

    return (
        <div className='box-color' style={{
            backgroundColor: `rgb(${r},${g},${b})`,
            color: `${textColor}`
        }}>
            <p>rgb({r},{g},{b})</p>
            <p>{hexColor}</p>
        </div>  
    )
}

export default BoxColor;
