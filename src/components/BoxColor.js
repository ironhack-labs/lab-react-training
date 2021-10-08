import React from 'react';

export default function BoxColor({ r, g, b }) {
  return (
    <div
      style={{
        backgroundColor: `rgb(${r},${g},${b})`,
        height: `100px`,
        width: `300px`,
        boarder: '1px solid black',
        marginBottom: '1rem',
      }}
    >
      <h3>
        {' '}
        RGB({r},{g},{b}){' '}
      </h3>

      <h3>
        {' '}
        #{r.toString(16)}
        {g.toString(16)}
        {b.toString(16)}{' '}
      </h3>
    </div>
  );
}
