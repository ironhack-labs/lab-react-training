import React from "react";

const boxColorStyle = (r, g, b) => {
  return {
    backgroundColor: `rgb(${r},${g},${b})`
  };
};

const toHex = number => {
  const hex = number.toString("16");
  if (hex.length < 2) return "0" + hex;
  return hex;
};

const BoxColor = ({ r, g, b }) => (
  <div className="box centered" style={boxColorStyle(r, g, b)}>
    <p>
      rgb({r},{g},{b})
    </p>
    <p>
      #{toHex(r)}
      {toHex(g)}
      {toHex(b)}
    </p>
  </div>
);

export default BoxColor;
