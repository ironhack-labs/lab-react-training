import { useState } from 'react/cjs/react.development';
import './RGBColorPicer.css';

import SingleColorPicker from './SingleColorPicker';

export default function RGBColorPicker() {
  const [colors, setColors] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <div className="rgb-color-picker-container">
      <SingleColorPicker color="red" colors={colors} setColors={setColors} />
      <SingleColorPicker color="green" colors={colors} setColors={setColors} />
      <SingleColorPicker color="blue" colors={colors} setColors={setColors} />
      <div className="color-container">
        <div
          style={{
            backgroundColor: `rgb(${colors.red},${colors.green},${colors.blue})`,
          }}
          className="color-box"
        ></div>
        <p>{`rgb(${colors.red},${colors.green},${colors.blue})`}</p>
      </div>
    </div>
  );
}
