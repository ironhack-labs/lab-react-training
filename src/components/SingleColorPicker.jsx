import styled from 'styled-components';
import { FlexDiv, ColorDiv, Input } from './Styles';

function SingleColorPicker({ color, onChange, value }) {
  const bg = (color) => {
    if (color === 'r') {
      return 'red';
    }
    if (color === 'g') {
      return 'green';
    }
    if (color === 'b') {
      return 'blue';
    }
  };

  return (
    <FlexDiv style={{ display: 'flex', alignItems: 'center' }}>
      <SingleColorDiv {...{ value, bg, color }} />
      <label htmlFor={color}>{color.toUpperCase()} </label>
      <Input
        onChange={onChange}
        value={value}
        style={{ width: '50px', margin: '5px' }}
        type="number"
        min={0}
        max={255}
      />
      <input
        onChange={onChange}
        value={value}
        type="range"
        min="0"
        max="255"
        step="1"
      />
    </FlexDiv>
  );
}
export default SingleColorPicker;

const SingleColorDiv = styled(ColorDiv)`
  border-radius: ${(props) => props.value / 10 + 5}px;
  background-color: ${(props) => props.bg(props.color)};
`;
