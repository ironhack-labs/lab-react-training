/* const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}; */

import React from 'react';

const getStyle = ({ r, g, b }) => {
  return `rgb(${r},${g},${b})`;
};

const componentToHex = (c) => {
  let hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};

const rgbToHex = ({ r, g, b }) => {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
};

const BoxColor = (props) => {
  const style = {
    width: '18rem',
    backgroundColor: getStyle(props),
  };

  return (
    <div className="card" style={style}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{style.backgroundColor}</p>
        <p className="card-text">{rgbToHex(props)}</p>
      </div>
    </div>
  );
};

export { BoxColor };
