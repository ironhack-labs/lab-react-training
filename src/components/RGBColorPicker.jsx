import SingleColorPicker from './SingleColorPicker';
import { useState } from 'react';

function RGBColorPicker() {
  const values = { rValue: '255', gValue: '150', bValue: '0' };
  const [rValue, setRValue] = useState('');
  const [gValue, setGValue] = useState('');
  const [bValue, setBValue] = useState('');

  const handleRChange = (event) => {
    setRValue(Number(event.target.value));
  };

  const handleGChange = (event) => {
    setGValue(Number(event.target.value));
  };

  const handleBChange = (event) => {
    setBValue(Number(event.target.value));
  };

  return (
    <div>
      <SingleColorPicker color="r" value={rValue} onChange={handleRChange} />

      <SingleColorPicker color="g" value={gValue} onChange={handleGChange} />

      <SingleColorPicker color="b" value={bValue} onChange={handleBChange} />
    </div>
  );
}

export default RGBColorPicker;
