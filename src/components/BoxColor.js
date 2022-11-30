import React from 'react'

const BoxColor = ({r, g, b}) => {
  const rgbText = `rgb(${r}, ${g}, ${b})`;

  const compToHex = c => {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  const rgbToHex = (cR, cG, cB) => {
    return "#" + compToHex(cR) + compToHex(cG) + compToHex(cB);
  }

  const hexText = rgbToHex(r, g, b);
  const bgStyle = {backgroundColor: rgbText};

  return (
    <div className='comp box-color' style={bgStyle}>
      <p>
        {rgbText}<br/>
        {hexText}
      </p>
    </div>
  )
}

export default BoxColor