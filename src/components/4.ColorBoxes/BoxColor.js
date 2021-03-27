import React from 'react'

const BoxColor = ({r, g, b}) => {
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }

    const rgbToHex = (r, g, b) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }

    return (
        <div
            style={{
                backgroundColor:`rgb(${r},${g},${b})`,
                width: 120,
                height: 53,
                borderRadius: 15,
                display: 'flex',
                justifyContent: 'space-evenly'
            }}
        >
        <p><small>{rgbToHex(r, g, b)}</small></p>        
        </div>
    )
}

export default BoxColor
