import React from 'react';
import './Boxcolor.css';

const Boxcolor = ({ r, g, b }) => {
  const toHex = (r, g, b) => {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    r = r[0] === r[1] ? r[0] : r;
    g = g[0] === g[1] ? g[0] : g;
    b = b[0] === b[1] ? b[0] : b;
    return r + g + b;
  };

  const textColor = (r, g, b) => {
    if (r + g + b < 382) {
      return 'white';
    } else {
      return 'black';
    }
  };

  const showContent = (r, g, b) => {
    if (!r && !g && !b) {
      return 'Invalid parameter colors!';
    }
    return (
      <div
        className="boxcolor"
        style={{
          backgroundColor: `rgb(${r},${g},${b}`,
          color: textColor(r, g, b),
        }}
      >
        <h3>
          rgb ({r},{g},{b})
        </h3>
        <h3>#{toHex(r, g, b)}</h3>
      </div>
    );
  };

  return <div className="boxcolor-container">{showContent(r, g, b)}</div>;
};

export default Boxcolor;
