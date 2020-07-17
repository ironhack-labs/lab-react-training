import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [state, setState] = useState({
    rValue: 0,
    gValue: 0,
    bValue: 0,
  });

  const handleIndexChange = (value, index) => {
    if (index === 'r') {
      setState({ rValue: value });
    } else if (index === 'g') {
      setState({ gValue: value });
    } else {
      setState({ bValue: value });
    }
  };

  return (
    <div className="wrapper">
      <SingleColorPicker
        index="r"
        value={state.rValue}
        onIndexChange={handleIndexChange}
      />
      <SingleColorPicker
        index="g"
        value={state.gValue}
        onIndexChange={handleIndexChange}
      />
      <SingleColorPicker
        index="b"
        value={state.bValue}
        onIndexChange={handleIndexChange}
      />
    </div>
  );
};

export default RGBColorPicker;
