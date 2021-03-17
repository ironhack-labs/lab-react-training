import React from 'react'

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const BoxColor = ({r, g, b}) => {
    return (
        <div className="BoxColor card mb-3" style={{ backgroundColor: `rgb(${r},${g},${b})`}}>
            <div className="row g-0">
                <div className="card-body text-center">
                    <p>rgb({r},{g},{b})</p>
                    <p>{rgbToHex(r, g, b)}</p>
                </div>
            </div>
        </div>
    )
}

export default BoxColor