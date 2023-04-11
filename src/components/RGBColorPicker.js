import SingleColorPicker from './SingleColorPicker';
import { useState } from 'react';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleRChange = (event) => {
    setRValue(event.target.value);
  };
  const handleGChange = (event) => {
    setGValue(event.target.value);
  };
  const handleBChange = (event) => {
    setBValue(event.target.value);
  };

  return (
    <div>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(e) => {
          handleRChange(e);
        }}
      />

      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(e) => {
          handleGChange(e);
        }}
      />

      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(e) => {
          handleBChange(e);
        }}
      />

      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
        }}
      ></div>
    </div>
  );
};

export default RGBColorPicker;
