import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  height: 15vh;
  box-sizing: border-box;
  & < img {
    width: 300px;
  }
  .id-stats {
    display: flex;
    flex-direction: column;
  }
`;

export const Greet = styled.div`
  border: 1px solid black;
`;

export const Random = styled.div`
  border: 1px solid black;
`;

export const Box = styled.div`
  border: 1px solid black;
  height: 100px;
  width: 100%;
`;

export const CreditC = styled.div`
  border: none;
  height: 200px;
  width: 300px;
  img {
    width: 45px;
  }
`;
export const Ratings = styled.span``;

export const DriverC = styled.div`
  img {
    width: 50px;
  }
`;
export const LaikButon = styled.button``;
