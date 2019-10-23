import React from 'react';

const BoxColor = (props) => {
  const { r, g, b } = props
  const backgroundColorRGB = `rgb(${r}, ${g}, ${b})`
  const backgroundColorHex = "#" + getHexa(r) + getHexa(g) + getHexa(b)

  return (
    <div className="BoxColor" style={{ backgroundColor: backgroundColorRGB }}>
      <div>{backgroundColorRGB}</div>
      <div>{backgroundColorHex}</div>
    </div>
  )
}

// Helper function
function getHexa(val) {
  const hexa = parseInt(val).toString(16) // to.String(16) returns a string representing a hexadecimal number
  return hexa.length === 1 ? "0" + hexa : hexa;
}

export default BoxColor;