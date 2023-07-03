import React from 'react';

export default function BoxColor({ r, g, b }) {
  const string = `rgb(${r},${g},${b})`;

  return (
    <div
      className='box-color-div'
      style={{
        backgroundColor: string,
        border: '3px solid black',
        padding: 40,
        marginBottom: 10,
        width: 700,
      }}
    >
      <h1 className='rgb-text'>rgb({r},{g},{b})</h1>
    </div>
  );
}
