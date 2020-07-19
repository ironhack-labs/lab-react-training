import React from 'react'



const BoxColor = props => {
    const componentToHex = (c) => {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }
    
     const rgbToHex = (r, g, b) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
    const {r,g,b} = props
    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        width: '70%',
        height: '100px',
        border: '1px solid black',
        marginBottom: '10px'
    }
    return (
        <div style={divStyle}>
            <h2>rgb{`(${r},${g},${b})`}</h2>
            <h3>{rgbToHex(r,g,b)}</h3>
        </div>
    )
}

export default BoxColor
