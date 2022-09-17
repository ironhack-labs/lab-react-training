import React from 'react';

const BoxColors = (props) => {
  return (
    <div style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}>
      {props.r} {props.g} {props.b} Boxcolors
    </div>
  );
};

export default BoxColors;
