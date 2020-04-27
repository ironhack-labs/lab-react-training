import React from "react";
import "./BoxColors.css";

// Convert RGB to hex values
const rgbToHex = (color) => {
  let hex = Number(color).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

// Return a full color hex value
const fullHexValues = (r, g, b) => rgbToHex(r) + rgbToHex(g) + rgbToHex(b);

// Convert RGB tot luminance values and return either a white or black text color based on the luminance value
const textColor = (r, g, b) => {
    const luminance = [0.299 * r, 0.587 * g, 0.114 * b].reduce((a, b) => a + b) / 255
    return luminance < 0.5 ? '#FFFFFF' : '#000000';
}

export default function BoxColor(props) {
  const showHexColor = fullHexValues(props.r, props.g, props.b);
  const showRightTextColor = textColor(props.r, props.g, props.b);

  // Create an inline-style for the div
  const divStyle = {
    background: "rgb(" + props.r + "," + props.g + "," + props.b + ")",
    color: showRightTextColor,
  };

  return (
    <div className="boxcolors">
      <div className="boxcolors-content" style={divStyle}>
        <p>
          rgb({props.r},{props.g},{props.b})
        </p>
        <p>#{showHexColor}</p>
      </div>
    </div>
  );
}
