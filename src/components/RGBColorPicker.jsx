import React from 'react';
import SingleColorPicker from './SingleColorPicker';
import BoxColor from './BoxColor';

function RGBColorPicker(props) {
  const [rValue, setRValue] = React.useState(0);
  const [gValue, setGValue] = React.useState(0);
  const [bValue, setBValue] = React.useState(0);

  return (
    <div>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(value) => {
          setRValue(value);
        }}
      />

      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(value) => {
          setGValue(value);
        }}
      />

      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(value) => {
          setBValue(value);
        }}
      />

      <BoxColor r={rValue} g={gValue} b={bValue} />
    </div>
  );
}

export default RGBColorPicker;
