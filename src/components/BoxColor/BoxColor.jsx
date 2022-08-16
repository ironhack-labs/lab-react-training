import React from 'react';

function BoxColor(props) {
  let { r, g, b } = props;

  let divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: 'white',
  };
  return <div style={divStyle}>BoxColor</div>;
}

export default BoxColor;
