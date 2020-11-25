import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';
import { ColorDiv, Container } from './styles/index';

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
    <Container column={true}>
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
      <Container>
        <ColorDiv R={value.R} G={value.G} B={value.B} />
        rgb({value.R},{value.G},{value.B})
      </Container>
    </Container>
  );
};

export default RGBColorPicker;
