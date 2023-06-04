import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';
function RGBColorPicker() {
  const [rValue, setRValue] = useState(255);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);
  const color = 'rgb(' + rValue + ',' + gValue + ',' + bValue + ')';

  return (
    <div>
      <SingleColorPicker color="r" value={rValue} onChange={setRValue} />

      <SingleColorPicker color="g" value={gValue} onChange={setGValue} />

      <SingleColorPicker color="b" value={bValue} onChange={setBValue} />

      <div>
        <div style={{ backgroundColor: color, color: 'white' }}>
          <div>{color}</div>
        </div>
      </div>
    </div>
  );
}

export default RGBColorPicker;
