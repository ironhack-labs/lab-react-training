import React, { useState } from 'react';

const SingleColorPicker = ({ color, change }) => {
  const [colorNum, setColor] = useState(0);
  const handleChange = (event) => {
    let { value } = event.target;
    if (value > 255) value = 255;
    else if (value < 0) value = 0;
    setColor(value);
    change(color, value);
  };
  const backColor = {
    R: 'red',
    G: 'green',
    B: 'blue',
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <div
        style={{
          backgroundColor: backColor[color],
          width: '50px',
          height: '50px',
        }}
      ></div>
      <label htmlFor="color">{color}</label>
      <input
        type="number"
        name="color"
        id="color"
        onChange={handleChange}
        value={colorNum}
      />
    </div>
  );
};

export default SingleColorPicker;
