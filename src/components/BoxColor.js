import React from 'react';

export default function BoxColor(props) {
//   console.log(props);
  let colors = props.r + ', ' + props.g + ', ' + props.b;
  // console.log(colors);
  const style = {
      backgroundColor: `rgb(${colors})`
  }
  return <div style={style}>
      rgb({props.r},{props.g},{props.b})
  </div>;
}