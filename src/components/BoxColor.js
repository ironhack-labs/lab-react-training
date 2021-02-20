import React from 'react';

const BoxColor = ({ red, green, blue }) => {
  const i4 = {
    display: 'flex',
    justifyContent: 'center',
    margin: 15,
    padding: '50px 300px',
    borderStyle: 'solid',
    background: `rgba(${red},${green},${blue})`
  };
  return (
    <div style={i4}>
      rgb({red},{green},{blue})
    </div>
  );
};

export default BoxColor;
