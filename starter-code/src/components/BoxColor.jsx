import React from "react";

const BoxColor = ({ redColor, greenColor, blueColor }) => (
  <div
    className="cards"
    style={{ backgroundColor: `rgb(${redColor}, ${greenColor}, ${blueColor})` }}
  >
    <p>This box is a random color!</p>
  </div>
);

export default BoxColor;
