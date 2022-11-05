import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const defaultState = {
  rValue: 0,
  gValue: 0,
  bValue: 0,
};

function RGBColorPicker() {
  const [rgb, setRgb] = useState(defaultState);
  const rgbColor = `rgb(${rgb.rValue}, ${rgb.gValue}, ${rgb.bValue})`;
  return (
    <>
      <SingleColorPicker
        color="r"
        value={rgb.rValue}
        onChange={(e) => {
          const newRgb = { ...rgb };
          newRgb.rValue = e.target.value;
          setRgb(newRgb);
        }}
      />
      <SingleColorPicker
        color="g"
        value={rgb.gValue}
        onChange={(e) => {
          const newRgb = { ...rgb };
          newRgb.gValue = e.target.value;
          setRgb(newRgb);
        }}
      />
      <SingleColorPicker
        color="b"
        value={rgb.bValue}
        onChange={(e) => {
          const newRgb = { ...rgb };
          newRgb.bValue = e.target.value;
          setRgb(newRgb);
        }}
      />
      <div style={{ display: 'flex' }}>
        <div
          style={{
            border: '2px solid black',
            width: '50px',
            height: '50px',
            margin: '5px',
            backgroundColor: rgbColor,
          }}
        ></div>
        <p>{rgbColor}</p>
      </div>
    </>
  );
}
export default RGBColorPicker;
