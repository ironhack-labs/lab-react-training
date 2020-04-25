import React from 'react'
import './BoxColor.css'

export default function BoxColor(props) {

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }

    const result = rgbToHex(props.r, props.g, props.b);
    console.log(result)
    const color = `${props.r},${props.g},${props.b}`

    return (
        <div>

        <div className='message-box' style={{ backgroundColor: "rgb("+color+")" }}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{result}</p>
        </div>
            
        </div>
    )
}
