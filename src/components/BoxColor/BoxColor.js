import React from 'react';

import './BoxColor.css';

const BoxColor = ({ r, g, b }) => {

  const hexColor = (r, g, b) => {
    const rHex = ("0" + r.toString(16)).slice(-2);
    const gHex = ("0" + g.toString(16)).slice(-2);
    const bHex = ("0" + b.toString(16)).slice(-2);
    return `#${rHex}${gHex}${bHex}`
  };

  // const textColor = (r, g, b) => {
  //   if ((r * 0.299 + g * 0.587 + b * 0.114) > 186) {
  //     return 'black';
  //   } else {
  //     return 'white';
  //   }
  // };

  const textColor = (r, g, b) => ((r * 0.299 + g * 0.587 + b * 0.114) > 186) ? 'black' : 'white';

  const boxColor = {
    backgroundColor: hexColor(r, g, b),
    color: textColor(r, g, b),
  }

  return (
    <div style={boxColor} className="boxcolor-container">
      <h2>rgb({r},{g},{b})</h2>
      <h2>{hexColor(r, g, b)}</h2>
    </div>
  );
};

export default BoxColor;
