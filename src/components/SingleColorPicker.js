import React, { useState } from 'react';

const SingleColorPicker = (props) => {
  let color;
  if (props.color === 'r') {
    color = 'red';
  } else if (props.color === 'g') {
    color = 'green';
  } else if (props.color === 'b') {
    color = 'black';
  }

  const initialState = {
    value: 0,
  };
  const [state, setState] = useState(initialState);
  const handleChange = ({ target }) =>
    setState((state) => ({ ...state, [target.name]: target.value }));

  return (
    <div className="colorpicker">
      <div className="color-square" style={{ backgroundColor: color }}></div>
      {props.color.toUpperCase()}:
      <input
        type="number"
        value={state.value}
        onChange={handleChange}
        name="value"
        min={0}
        max={255}
      />
    </div>
  );
};

export default SingleColorPicker;
