import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;
  const divStyle = { backgroundColor: `rgb(${r}, ${g}, ${b})` };

  function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }

  return (
    <div className="profile-card" style={divStyle}>
      <p>
        rgb({r},{g},{b})
      </p>
      <br></br>
      <p>{rgbToHex(`${r}`, `${g}`, `${b}`)}</p>
    </div>
  );
}

export default BoxColor;
