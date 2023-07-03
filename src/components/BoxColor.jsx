import React from 'react';

function BoxColor({ r, g, b }) {
  const backgroundColor = `rgb(${r},${g},${b})`;

  return (
    <div className="box" style={{ backgroundColor: backgroundColor }}>
      <p>
        rgb({r},{g},{b})
      </p>
      <p>
        #{r.toString(16)}
        {g.toString(16)}
        {b.toString(16)}
      </p>
    </div>
  );
}

export default BoxColor;
