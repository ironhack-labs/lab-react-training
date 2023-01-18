import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';
import ColorBox from './ColorBox';
export default function RGBColorPicker() {
  const [rValue, setRValue] = useState('0');
  const [gValue, setGValue] = useState('0');
  const [bValue, setBValue] = useState('0');

  return (
    <div>
      <SingleColorPicker
        color="r"
        RGBColors={{ setRValue, setGValue, setBValue }}
      />
      <SingleColorPicker
        color="g"
        RGBColors={{ setRValue, setGValue, setBValue }}
      />
      <SingleColorPicker
        color="b"
        RGBColors={{ setRValue, setGValue, setBValue }}
      />
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <ColorBox currentColor={`rgb(${rValue},${gValue},${bValue})`} />
        <span>
          Rgb({rValue}, {gValue}, {bValue})
        </span>
      </div>
    </div>
  );
}
