import BoxColor from './BoxColor';
import SingleColorPicker from './SingleColorPicker';
import { useState } from 'react';

function RGBColorPicker() {
  const [rValue, setRValue] = useState(255);
  const [gValue, setGValue] = useState(150);
  const [bValue, setBValue] = useState(0);

  return (
    <div>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(event) => {
          setRValue(Number(event.target.value));
        }}
      />

      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(event) => {
          setGValue(Number(event.target.value));
        }}
      />

      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(event) => {
          setBValue(Number(event.target.value));
        }}
      />
      <BoxColor r={rValue} g={gValue} b={bValue} />
    </div>
  );
}

export default RGBColorPicker;
