import React from 'react';

function BoxColor (props) {
  // console.log(props);
  const { r, g, b } = props;
  const divStyle = {
    width: 'auto',
    height: '3em',
    margin: '1em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: '1.25em',
    lineHeight: '0',
    backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')'
  }
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  const colorHex = rgbToHex(r, g, b);

  return (
    <div className="boxColor" style={divStyle}>
      <p>rgb({r}, {g}, {b})</p>
      <p>{colorHex}</p>
    </div>
  );
}

export default BoxColor;