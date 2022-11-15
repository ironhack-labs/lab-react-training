import styled from 'styled-components';
import { P } from './Styles';

function BoxColor({ r, g, b }) {
  const color = (a, b, c) => {
    return `rgb(${a}, ${b}, ${c})`;
  };

  // Bonus: RGB to HEX
  // Used to decide if color is black or white
  const sum = (a, b, c) => {
    return a + b + c;
  };

  // Transforms a single rgb value into HEX
  const toHex = (n) => {
    return Math.min(Math.max(parseInt(n), 0), 255)
      .toString(16)
      .padStart(2, '0');
    // .toUpperCase();
  };

  const rgbToHex = (r, g, b) => {
    return '#' + toHex(r) + toHex(g) + toHex(b);
  };

  return (
    <ColoredBox {...{ color, sum, r, g, b }}>
      <P>{color(r, g, b)}</P>
      <P>{rgbToHex(r, g, b)}</P>
    </ColoredBox>
  );
}
export default BoxColor;

const ColoredBox = styled.div`
  width: fit-content;
  background-color: ${({ color, r, g, b }) => color(r, g, b)};
  color: ${({ sum, r, g, b }) => (sum(r, g, b) > 382 ? 'black' : 'white')};
  border: 2px solid black;
  margin: 10px;
  padding: 10px 50px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
`;
