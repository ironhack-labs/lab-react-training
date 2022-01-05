import React from 'react';
import './BoxColor.css';




const BoxColor = (props) => {
  const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
};
//<< is the bitwise left shift operator. Assuming g is a non-zero integer, 
// g << 8 therefore effectively multiplies g by 256, adding to zeroes to the 
// end of its hex representation. Likewise r << 16 adds 4 zeroes. 
//Adding 1 << 24 (1000000 in hex) ensures that the hex representation is left-padded with 
//any required zeroes once the leading 1 is stripped off using slice(). 
//For example, if r and g were both zero and b was 51, ((r << 16) + (g << 8) + b).toString(16) 
//would return the string "33"; add 1 << 24 and you get "1000033". 
//Then strip the 1 and you're there
const rgb2hex = (red = 0, green = 0, blue = 0) =>
`#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;
// {{includes the same as passed, not a string}}
// {include 'string'}
  //return <div className="boxColor" style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>Hello World!</div>;
  return (
    <div className="boxColor" style={divStyle}>
      <p>rgb({props.r},{props.g},{props.b})</p>
      <p>{rgb2hex(props.r,props.g,props.b)}</p>
  </div>

  )
}
  
export default BoxColor;

  