import React from 'react';

const BoxColor = ({ r, g, b }) => {
  return (
    <div className="my-2 d-flex align-items-center justify-content-center">
      <div
        className="border border-dark w-25"
        style={{ backgroundColor: `rgb(${r},${g},${b})` }}
      >
        rgb({r},{g},{b})
        <br />
        #{r.toString(16)}
        {g.toString(16)}
        {b.toString(16)}
      </div>
    </div>
  );
};

export default BoxColor;
