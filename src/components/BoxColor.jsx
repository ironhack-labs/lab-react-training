import React from 'react';

function BoxColor(props) {
  const { r, g, b, color } = props;
  return (
    <div
      className="box-card"
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
    >
      <p style={{ color: `${color}` }}>
        <b>
          rgb({r},{g},{b})
        </b>
      </p>
    </div>
  );
}

export default BoxColor;
