import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';
import styled from 'styled-components';

const ColorDiv = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
  border: 2px solid black;
  background-color: rgb(${(props) => [...props.color]});
`;
const RGBColorPicker = () => {
  let [value, setValue] = useState({
    R: 255,
    G: 150,
    B: 10,
    rgb: [255, 150, 10],
  });

  const HandleNewValue = (section) => (e) => {
    section === 'R'
      ? setValue(
          (value = {
            ...value,
            R: e.target.value,
            rgb: [e.target.value, ...value.rgb.slice(1)],
          })
        )
      : section === 'G'
      ? setValue(
          (value = {
            ...value,
            G: e.target.value,
            rgb: [value.rgb[0], e.target.value, value.rgb[2]],
          })
        )
      : setValue(
          (value = {
            ...value,
            B: e.target.value,
            rgb: [...value.rgb.slice(0, 2), e.target.value],
          })
        );
  };

  return (
    <div>
      <SingleColorPicker
        key={1}
        section="R"
        HandleNewValue={HandleNewValue}
        value={value.R}
      />
      <SingleColorPicker
        key={2}
        section="G"
        HandleNewValue={HandleNewValue}
        value={value.G}
      />
      <SingleColorPicker
        key={3}
        section="B"
        HandleNewValue={HandleNewValue}
        value={value.B}
      />
      <ColorDiv color={value.rgb} />
    </div>
  );
};

export default RGBColorPicker;
