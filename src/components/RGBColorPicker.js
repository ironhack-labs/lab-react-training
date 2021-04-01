import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';
import '../assets/css/RGBColorPicker.css';

const RGBColorPicker = () => {
  const [state, setState] = useState({
    rValue: 255,
    gValue: 150,
    bValue: 0,
  });
  const onChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="RGBColorPicker">
      <div>
        <SingleColorPicker
          name="rValue"
          color="red"
          onChange={onChange}
          value={state.rValue}
        />
        <SingleColorPicker
          name="gValue"
          color="green"
          onChange={onChange}
          value={state.gValue}
        />
        <SingleColorPicker
          name="bValue"
          color="blue"
          onChange={onChange}
          value={state.bValue}
        />
      </div>

      <div
        className="colorSquare"
        style={{
          backgroundColor: `rgb(${state.rValue}, ${state.gValue}, ${state.bValue})`,
        }}
      ></div>
      <span>
        rgb({state.rValue}, {state.gValue}, {state.bValue})
      </span>
    </div>
  );
};

export default RGBColorPicker;
