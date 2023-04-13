import { useState } from 'react';
import './RGBColorPicker.css';

function SingleColorPicker({ color, value, onChange }) {
  const handleChange = (ev) => {
    onChange(ev.target.valueAsNumber);
  };

  const bgColor = (color) => {
    if (color === 'r') {
      return 'red';
    } else if (color === 'g') {
      return 'green';
    }
    return 'blue';
  };

  return (
    <div className="d-flex">
      <div
        className="color-box"
        style={{ backgroundColor: bgColor(color) }}
      ></div>
      <p className="fs-4 m-2">{color}</p>
      <input
        min="0"
        max="255"
        className="m-3 inputNumber"
        type="number"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}

function RGBColorPicker() {
  const [rValue, setRValue] = useState();
  const [gValue, setGValue] = useState();
  const [bValue, setBValue] = useState();

  const onChangeValueR = (value) => {
    setRValue(value);
  };

  const onChangeValueG = (value) => {
    setGValue(value);
  };

  const onChangeValueB = (value) => {
    setBValue(value);
  };

  return (
    <div>
      <SingleColorPicker color="r" value={rValue} onChange={onChangeValueR} />
      <SingleColorPicker color="g" value={gValue} onChange={onChangeValueG} />
      <SingleColorPicker color="b" value={bValue} onChange={onChangeValueB} />
      <div className="d-flex">
        <div
          className="color-box"
          style={{
            backgroundColor: `rgb(${rValue || 0},${gValue || 0},${
              bValue || 0
            })`,
          }}
        ></div>
        <p className="fs-4 m-2">
          rgb ({rValue || 0}, {gValue || 0}, {bValue || 0})
        </p>
      </div>
    </div>
  );
}

export default RGBColorPicker;
