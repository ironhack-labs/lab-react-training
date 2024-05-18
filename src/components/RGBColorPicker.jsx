import  { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleColorChange = (color) => (e) => {
    const value = Number(e.target.value);
    switch(color) {
      case 'r':
        setRValue(value);
        break;
      case 'g':
        setGValue(value);
        break;
      case 'b':
        setBValue(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div 
        style={{
          background: `rgb(${rValue}, ${gValue}, ${bValue})`,
          width: '150px',
          height: '150px',
          margin: '20px'
        }}
      ></div>
      <SingleColorPicker color="r" value={rValue} onChange={handleColorChange('r')} />
      <SingleColorPicker color="g" value={gValue} onChange={handleColorChange('g')} />
      <SingleColorPicker color="b" value={bValue} onChange={handleColorChange('b')} />
    </div>
  );
};

export default RGBColorPicker;