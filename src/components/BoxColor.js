import React from 'react'

const BoxColor = ({ r, g, b }) => {

  function ColorToHex(color) {
    let hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
  }

  function ConvertRGBtoHex(r, g, b) {
    return "#" + ColorToHex(r) + ColorToHex(g) + ColorToHex(b);
  }

  return (
    <div className="border words columns" style={{backgroundColor: ConvertRGBtoHex(r, g, b)}}  >
      <p className="centered">
        rgb({r},{g},{b})
      </p>
      <p className="centered">
      {ConvertRGBtoHex(r, g, b)}
      </p>
    </div>
  )
}

export default BoxColor
