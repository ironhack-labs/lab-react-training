import React from 'react';

export function BoxColor({ r, g, b }) {
  var styles = {
    margin: '20px',
    width: '400px',
    height: '250px',
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    display: 'inline-block',
  };
  return (
    <div>
      <div style={styles}></div>
    </div>
  );
}
