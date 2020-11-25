import styled from 'styled-components';

export const ImgStyled = styled.img`
  width: 8rem;
  height: auto;
  margin: 0.5rem;
  min-width: 5rem;
  min-height: 5rem;
`;

export const IdCard = styled.div`
  background-color: ${(props) => (props.isSelected ? '#A3D2E2' : 'white')};
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;
  img {
    width: 8rem;
    height: auto;
  }
  p {
    margin: 0 5px;
  }
`;

export const ColorDiv = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
  border: 2px solid black;
  background-color: rgb(
    ${(props) => props.R || 0},
    ${(props) => props.G || 0},
    ${(props) => props.B || 0}
  );
`;
export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
`;
