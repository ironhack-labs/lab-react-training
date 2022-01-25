import { Fragment, useState } from 'react';

import SingleColorPicker from './SingleColorPicker';

import classes from './RGBColorPicker.module.css';

const RGBColorPicker = () => {
  const [colorState, setColorState] = useState({ r: 0, g: 0, b: 0 });
  const onColorChange = (value, color) => {
    setColorState((colorState) => ({ ...colorState, [color]: value }));
  };
  const bgColor = `rgb(${colorState.r}, ${colorState.g}, ${colorState.b})`;
  console.log(bgColor);
  return (
    <Fragment>
      <SingleColorPicker
        color="r"
        value={colorState.r}
        onChange={onColorChange}
      />

      <SingleColorPicker
        color="g"
        value={colorState.g}
        onChange={onColorChange}
      />

      <SingleColorPicker
        color="b"
        value={colorState.b}
        onChange={onColorChange}
      />
      <div
        className={classes.colorSquare}
        style={{ backgroundColor: bgColor }}
      ></div>
      <p>{bgColor}</p>
    </Fragment>
  );
};

export default RGBColorPicker;
