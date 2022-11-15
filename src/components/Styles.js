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

export { FlexDivWithBorder, FlexDiv, P, BoldSpan };
