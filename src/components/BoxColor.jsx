import React from 'react';

const BoxColor = (props) => {
    const color = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`
    }
  return (
  <div style={color}>rgb({props.r},{props.g},{props.b})</div>
  );
};

export default BoxColor;
