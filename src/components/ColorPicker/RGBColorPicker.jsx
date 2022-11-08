import React, { useState } from 'react';

const defaultState = {
  rValue: 0,
  gValue: 0,
  bValue: 0,
};

export const RGBColorPicker = () => {
  const [state, setState] = useState(defaultState);
  function handleChange(event) {
    setState((old) => {
      return {
        ...{ old },
        [event.target.name]: parseFloat(event.target.value),
      };
    });
  }
  return <div>RGBColorPicker</div>;
};
