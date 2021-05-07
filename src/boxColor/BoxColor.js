import React from 'react';

export default function BoxColor(props) {
  const style = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
  };

  const hex = (props) => {
    let r = props.r.toString(16);
    let g = props.g.toString(16);
    let b = props.b.toString(16);

    if (r.length === 1) r = '0' + r;
    if (g.length === 1) g = '0' + g;
    if (b.length === 1) b = '0' + b;

    return '#' + r + g + b;
  };

  return (
    <div className="boxcolor" style={style}>
      <p className="rgb">
        rgb({props.r},{props.g},{props.b})
      </p>
      <p className="hex">{hex(props)}</p>
    </div>
  );
}
