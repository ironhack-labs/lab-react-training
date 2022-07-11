import React from 'react';

export default function BoxColor({ r, g, b }) {
  let style = { backgroundColor: `rgb(${r}, ${g}, ${b})` };
  function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  return (
    <>
      <div className="border mw-50 m-5" style={style}>
        <p>
          RGB({r}
          {g}
          {b})
        </p>
        <p>{rgbToHex(r, g, b)}</p>
      </div>
    </>
  );
}
