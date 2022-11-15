import { useEffect, useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker() {
  const defaultState = {
    rValue: 0,
    gValue: 0,
    bValue: 0,
  };
  const [state, setState] = useState(defaultState);

  function handleChange(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    setState((old) => {
      return { ...old, [event.target.name]: parseFloat(event.target.value) };
    });
  }

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="rgbColorPicker">
      <div>
        <SingleColorPicker
          color="r"
          value={state.rValue}
          handleChange={handleChange}
        />
        <SingleColorPicker
          color="g"
          value={state.gValue}
          handleChange={handleChange}
        />
        <SingleColorPicker
          color="b"
          value={state.bValue}
          handleChange={handleChange}
        />
      </div>
      <div
        className="rgbBigBox"
        style={{
          backgroundColor: `rgb(${state.rValue}, ${state.gValue}, ${state.bValue})`,
          width: 90,
          height: 90,
        }}
      ></div>
    </div>
  );
}

export default RGBColorPicker;