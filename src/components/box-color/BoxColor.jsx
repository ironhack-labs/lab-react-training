import React from 'react';

function BoxColor({ r, g, b}) {
  return (
    <div style={{backgroundColor: `rgb(${r}, ${g}, ${b})`, border: '1px solid black'}}>
        <h5>rgb({r}, {g}, {b})</h5>
    </div>
  )
}

export default BoxColor;