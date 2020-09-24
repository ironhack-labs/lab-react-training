import React from 'react'

export default function BoxColor(props) {
    function componentToHex(c) {
        let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    function rgbToHex(r, g, b) {
        return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    return (
        <div className='container'>
        <div className='containerColor' style={{backgroundColor:rgbToHex(props.r,props.g,props.b)}}>
            <p>rgb({props.r},{props.g},{props.b})<br/>{rgbToHex(props.r,props.g,props.b)}</p>
        </div>
        </div>
    )
}
