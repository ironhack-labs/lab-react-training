import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';
export default function RGBColorPicker() {
  const [color, setColor] = useState({
    r: 0,
    g: 0,
    b: 0,
  });

  const selectedColor = 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';

  return (
    <>
      <SingleColorPicker color="r" value={color.r} onChange={setColor} />

      <SingleColorPicker color="g" value={color.g} onChange={setColor} />

      <SingleColorPicker color="b" value={color.b} onChange={setColor} />

      <p style={{ backgroundColor: selectedColor }}>{selectedColor}</p>
    </>
  );
}
