import React from 'react'

const BoxColor = (props) => {
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }

    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    return (
        <div>
            <div className="box center" style={{ backgroundColor: rgbToHex(props.r, props.g, props.b), color: props.color }}>
                <p>rgb({props.r},{props.g},{props.b})</p>
                <p>{rgbToHex(props.r, props.g, props.b)}</p>
            </div>
        </div>
    )
}

export default BoxColor
