import React from 'react';

const BoxColor = ({ r, g, b }) => {
  //*For example, style={{marginRight: spacing + 'em'}
  const styleToSet = { backgroundColor: `rgb(${r}, ${g}, ${b})` };
  return (
    <div style={styleToSet}>
      rgb({r},{g},{b})
    </div>
  );
};

export default BoxColor;
