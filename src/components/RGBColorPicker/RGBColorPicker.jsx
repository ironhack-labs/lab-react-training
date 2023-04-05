import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker ';
import './RGBColorPicker.css';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(100);
  const [gValue, setGValue] = useState(100);
  const [bValue, setBValue] = useState(100);

  const rgbSquareStyle = {
    backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
  };

  const handleChangeColor = (e) => {
    const color = e.target.id;
    const value = e.target.value;

    switch (color) {
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
    <div className="rgb-container">
      <div>
        <SingleColorPicker
          color="r"
          value={rValue}
          handleChangeColor={handleChangeColor}
        />
        <SingleColorPicker
          color="g"
          value={gValue}
          handleChangeColor={handleChangeColor}
        />
        <SingleColorPicker
          color="b"
          value={bValue}
          handleChangeColor={handleChangeColor}
        />
      </div>
      <div>
        <div className="rgb-square" style={rgbSquareStyle}>
          <div className="rgb">
            <p>{`RGB(${rValue}, ${gValue}, ${bValue})`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RGBColorPicker;
