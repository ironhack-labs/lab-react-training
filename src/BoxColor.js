import React from 'react';
import './index.css'

const BoxColor = (props) => {
  function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  return (
    <div className="box" style={{
      height: "100px",
      backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}>
      <p>
        rgb({props.r},{props.g},{props.b})<br />
        {rgbToHex(props.r, props.g, props.b)}
      </p>
    </div>
  )
}

export default BoxColor;