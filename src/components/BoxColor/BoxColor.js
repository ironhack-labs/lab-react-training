import React from 'react';

const BoxColor = ({ r, g, b, txtcolor }) => {
  const rgbToHex = (r, g, b) => {
    let r2 = r.toString(16);
    let g2 = g.toString(16);
    let b2 = b.toString(16);

    if (r2.length === 1) r2 = '0' + r2;
    if (g2.length === 1) g2 = '0' + g2;
    if (b2.length === 1) b2 = '0' + b2;

    return '#' + r2 + g2 + b2;
  };

  return (
    <div
      className="boxColor"
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`, color: txtcolor }}
    >
      <p>{`rgb(${r}, ${g}, ${b})`}</p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
};

export default BoxColor;
