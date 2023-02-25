import React from 'react';

export const BoxColor = (props) => {
  const { r, g, b } = props;
  const hex = rgbToHex(r, g, b);

  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    height: '100px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    color: '#ffffff',
  };

  return (
    <div style={boxStyle}>
      <p>
        rgb({r}, {g}, {b})
      </p>
      <p>{hex}</p>
    </div>
  );
};

const rgbToHex = (r, g, b) => {
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const hex = '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  return hex;
};
