import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;
  return (
    <div>
      <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
        rgb{r}, {g}, {b}
        hex color: {r}, {g}, {b}
      </div>
    </div>
  );
}

export default BoxColor;
