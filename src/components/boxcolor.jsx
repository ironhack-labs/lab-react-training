import React from 'react';
import './boxcolor.css';

const BoxColor = (props) => {
  let r = props.r;
  let g = props.g;
  let b = props.b;

  let rhex = r.toString(16);
  let ghex = g.toString(16);
  let bhex = b.toString(16);

  if (rhex.length === 1) rhex = '0' + rhex;
  if (ghex.length === 1) ghex = '0' + ghex;
  if (bhex.length === 1) bhex = '0' + bhex;

  return (
    <div
      className="container"
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
    >
      <div className="information">
        <p>
          rgb({r}, {g}, {b})
        </p>
        <p>
          #{rhex}
          {ghex}
          {bhex}
        </p>
      </div>
    </div>
  );
};

export default BoxColor;
