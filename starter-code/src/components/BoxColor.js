import React from "react";
function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function BoxColor (props){
const {r,g,b } =  props
return(
  
  <div className="boxColor" style={{ backgroundColor: `rgb(${r}, ${g},${b})`}}><p>rgb({r},{g},{b})</p> <p>{rgbToHex(r,g,b)}</p></div>
);
}
export default BoxColor;