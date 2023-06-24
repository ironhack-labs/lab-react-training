import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker ';

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleRChange = (e) => {

    setRValue(e.target.value);
  };

  const handleGChange = (e) => {
    setGValue(e.target.value);
  };

  const handleBChange = (e) => {
    setBValue(e.target.value);
  };

  const colorStyle = {
    backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
    width: '200px',
    height: '200px',
  };

  return (
    <div>
      <SingleColorPicker color="r" value={rValue} onChange={handleRChange} />

      <SingleColorPicker color="g" value={gValue} onChange={handleGChange} />

      <SingleColorPicker color="b" value={bValue} onChange={handleBChange} />

      <div style={colorStyle}></div>
    </div>
  );
}

export default RGBColorPicker;
