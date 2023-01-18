import { useState } from 'react';
import ColorBox from './ColorBox';
export default function SingleColorPicker({ color, RGBColors }) {
  const [currentColor, setCurrentColor] = useState('rgb(0,0,0)');

  const handleInput = (e) => {
    let number =
      e.target.value < 0 ? 0 : e.target.value > 255 ? 255 : e.target.value;
    e.target.value = number;
    handleColorProp(number);
  };

  const handleColorProp = (number) => {
    if (color === 'r') {
      setCurrentColor(`rgb(${number},0,0)`);
      RGBColors.setRValue(number);
    } else if (color === 'g') {
      setCurrentColor(`rgb(0,${number},0)`);
      RGBColors.setGValue(number);
    } else if (color === 'b') {
      setCurrentColor(`rgb(0,0,${number})`);
      RGBColors.setBValue(number);
    }
  };
  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
      <ColorBox currentColor={currentColor} />
      <input type="number" onChange={handleInput} />
    </div>
  );
}
