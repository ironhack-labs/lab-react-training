import React from 'react'

const BoxColor = ({ r, g, b, children }) => {

  function ColorToHex(color) {
    let hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
  }

  function ConvertRGBtoHex(r, g, b) {
    return "#" + ColorToHex(r) + ColorToHex(g) + ColorToHex(b);
  }

  return (
    <div className="words columns margin-all radius driver-bg" style={{backgroundColor: ConvertRGBtoHex(r, g, b)}}  >
      <p className="centered">
       {children}
      </p>
    </div>
  )
}

export default BoxColor