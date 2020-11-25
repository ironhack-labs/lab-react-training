import React from 'react';
import { ColorDiv, Container } from './styles/index';

const SingleColorPicker = ({ section, value, HandleNewValue, rgb }) => {
  return (
    <Container>
      {section === 'R' ? (
        <ColorDiv R={value} />
      ) : section === 'G' ? (
        <ColorDiv G={value} />
      ) : (
        <ColorDiv B={value} />
      )}
      <label htmlFor="number">{section}:</label>
      <input
        onChange={HandleNewValue(section)}
        min={0}
        max={255}
        type="number"
        name="number"
        value={value}
      />
    </Container>
  );
};

export default SingleColorPicker;
