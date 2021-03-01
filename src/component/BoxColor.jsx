import React from 'react';

const BoxColor = ({
    r,
    g,
    b,
  }) => {
    return (
      <div className="box-color" style={{ backgroundColor: `rgba(${r}, ${g}, ${b}` }}>
          rgb({r},
          {g},
          {b}
      </div>
    );
  };

export default BoxColor;