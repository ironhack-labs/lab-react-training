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
