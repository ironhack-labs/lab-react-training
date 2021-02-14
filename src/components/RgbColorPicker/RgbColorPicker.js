import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker/SingleColorPicker';

const RgbColorPicker = () => {
  const initialValue = {
    R: 0,
    G: 0,
    B: 0,
  };
  const [colorRGB, setColor] = useState(initialValue);
  const handleColorChange = (color, value) => {
    setColor((state) => ({
      ...state,
      [color]: value,
    }));
  };
  console.log(colorRGB);
  return (
    <section>
      <SingleColorPicker color="R" change={handleColorChange} />
      <SingleColorPicker color="G" change={handleColorChange} />
      <SingleColorPicker color="B" change={handleColorChange} />
      <article>
        {' '}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div
            style={{
              backgroundColor: `rgb(${colorRGB.R}, ${colorRGB.G}, ${colorRGB.B})`,
              width: '50px',
              height: '50px',
            }}
          ></div>
          <div>
            <p>
              {' '}
              rgb({colorRGB.R}, {colorRGB.G}, {colorRGB.B})
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default RgbColorPicker;
