import React from 'react';
const Boxcolor = ({ r, g, b }) => {
  if (r >= 0 && r <= 255) {
    if (g >= 0 && g <= 255) {
      if (b >= 0 && b <= 255) {
        const divStyle = {
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
          height: '50px',
          width: '300px',
        };
        return (
          <div className="rectangle" style={divStyle}>
            <p>Here is a rectangle</p>
          </div>
        );
      }
    }
  }
};
export default Boxcolor;
