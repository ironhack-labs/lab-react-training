import React from 'react';

const BoxColor = (props) => {
  const { r, g, b } = props;
  const divStyle = {
    backgroundColor: ` rgb(${r},${g},${b})`,
    border: '1px solid black',
  };
  return (
    <div style={divStyle}>
      <p>
        rgb ({r},{g},{b})
      </p>
    </div>
  );
};

export default BoxColor;
