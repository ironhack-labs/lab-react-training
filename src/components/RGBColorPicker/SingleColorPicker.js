import React from 'react';

const SingleColorPicker = (props) => {
  return (
    <div>
      <label> </label>
      <select
        value={props.value}
        name={props.color}
        onChange={props.handleChgColor}
      >
        {createRGBInput(0)}
      </select>
    </div>
  );
};

/** */
const createRGBInput = () => {
  let cnt = 0;
  const rgbSelect = [];

  while (cnt <= 255) {
    rgbSelect.push(<option value={cnt}> {cnt} </option>);
    cnt++;
  }
  return rgbSelect;
};

export default SingleColorPicker;
