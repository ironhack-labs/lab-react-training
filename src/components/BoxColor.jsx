import React from 'react';

const BoxColor = (props) => {
  const divStyle = {
    background: `rgb(${props.r},${props.g},${props.b})`
  };

  return <div style={divStyle}>rgb({props.r},{props.g},{props.b})</div>
};

export default BoxColor;
