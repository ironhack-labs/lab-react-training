import React from 'react';
import styled from 'styled-components';

const ColorDiv = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
  border: 2px solid black;
  background-color: rgb(${(props) => '#' + props.color.toString(16)});
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
`;

const SingleColorPicker = ({ section, value, HandleNewValue, rgb }) => {
  return (
    <Container>
      <ColorDiv section={section} color={value} />
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
