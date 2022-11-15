import styled from 'styled-components';

const BoldSpan = styled.span`
  font-weight: 700;
`;

const FlexDivWithBorder = styled.div`
  border: 1px solid black;
  display: flex;
  width: fit-content;
  margin: 10px;
  padding: 10px;
`;

const FlexDiv = styled.div`
  display: flex;
`;

const P = styled.p`
  margin: 0;
`;

const ColorDiv = styled.div`
  border: 1px solid black;
  width: 50px;
  height: 50px;
  margin: 5px;
  background-color: ${(props) => props.rgbColor};
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #555;
  transition: 0.5s;
  &:focus {
    outline: 1px solid darkblue;
    background-color: lightblue;
  }
`;

export { FlexDivWithBorder, FlexDiv, P, BoldSpan, ColorDiv, Input };
