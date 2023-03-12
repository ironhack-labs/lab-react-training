/* eslint-disable no-mixed-operators */
import React from 'react';
function rgbToHex(r, g, b) {
  return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}
function getContrastColor({ r, g, b }) {
  let d = 0;
  let luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  if (luminance > 0.5) {
    d = 0; // bright colors - black font
  } else {
    d = 255; // dark colors - white font
  }

  return `rgb(${d},${d},${d})`;
}
export default function BoxColor({ r, g, b }) {
  return (
    <div style={{ backgroundColor: rgbToHex(r, g, b), color: getContrastColor({ r, g, b }), }} className="m-3 border border-dark d-flex flex-column align-items-center mb-3  pt-3 ps-3 fs-4">
      <p>rgb ({r},{g},{b})</p>
      <br />
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
}
