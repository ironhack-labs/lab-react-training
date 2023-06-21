import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

export default function RGBColorPicker(props) {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);
  return (
    <>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(e) => {
          setRValue(e.target.value);
        }}
      />

      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(e) => {
          setGValue(e.target.value);
        }}
      />

      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(e) => {
          setBValue(e.target.value);
        }}
      />
      <div className="color-picker">
        <div
          className="color-picker__box"
          style={{
            backgroundColor: `rgb(${rValue},${gValue},${bValue})`,
          }}
        ></div>
        <label>{`rgb(${rValue},${gValue},${bValue})`}</label>
      </div>
    </>
  );
}
