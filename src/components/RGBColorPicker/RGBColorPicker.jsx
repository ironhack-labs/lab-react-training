import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  return (
    <div>
      <SingleColorPicker
        color="R"
        value={rValue}
        onChange={(event) => setRValue(event.target.value)}
      />
      <SingleColorPicker
        color="G"
        value={gValue}
        onChange={(event) => setGValue(event.target.value)}
      />
      <SingleColorPicker
        color="B"
        value={bValue}
        onChange={(event) => setBValue(event.target.value)}
      />
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
        }}
      />
    </div>
  );
};

export default RGBColorPicker;
