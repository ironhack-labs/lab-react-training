import React from 'react';

const BoxColor = (props) => {
  const divStyle = {
    background: `rgb(${props.r},${props.g},${props.b})`,
    padding: '20px',
    border: 'thin solid black',
    textAlign: 'center',
  };

  let r = props.r.toString(16);
  let g = props.g.toString(16);
  let b = props.b.toString(16);

  if (r.length == 1) r = '0' + r;
  if (g.length == 1) g = '0' + g;
  if (b.length == 1) b = '0' + b;

  let hexColor = '#' + r + g + b;

  return (
    <div style={divStyle}>
      rgb({props.r},{props.g},{props.b})<br />
      {hexColor}
    </div>
  );
};

export default BoxColor;
