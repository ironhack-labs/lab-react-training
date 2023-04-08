import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: '18rem',
    height: '6rem',
    margin: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const hexValue = rgbToHex(r, g, b);

  return (
    <div style={divStyle}>
      <p>rgb({r}, {g}, {b})</p>
      <p>{hexValue}</p>
    </div>
  );
}

function rgbToHex(r, g, b) {
  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');
  return `#${hexR}${hexG}${hexB}`;
}

export default BoxColor;


/*
import React from 'react';

const BoxColor = (props) => {
  const coloring = props.hex
    ? props.hex
    : `rgb(${props.r},${props.g},${props.b})`;
  return (
    <div
      onChange={props.onChange}
      className={props.class}
      style={{ backgroundColor: coloring }}
    >
      {props.children}
    </div>
  );
};

export default BoxColor;
*/