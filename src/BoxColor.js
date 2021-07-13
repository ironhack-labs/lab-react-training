import React from 'react';

function BoxColor({r, g, b}) {
  return (
    <div style={{ background: `rgb(${r} ${g} ${b})`}}>
      rgb({r}, {g}, {b})
    </div>
  );
}

export default BoxColor;
