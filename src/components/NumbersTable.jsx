import styled from 'styled-components';

function NumbersTable({ limit }) {
  const divArray = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <NumbersDivContainer>
      {divArray.map((number) =>
        number % 2 === 0 ? (
          <NumbersDiv key={number}>{number}</NumbersDiv>
        ) : (
          <RedNumbersDiv key={number}>{number}</RedNumbersDiv>
        )
      )}
    </NumbersDivContainer>
  );
}
export default NumbersTable;

const NumbersDivContainer = styled.div`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
`;

const NumbersDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  width: 100px;
  height: 100px;
  border: 3px solid black;
`;

const RedNumbersDiv = styled(NumbersDiv)`
  background-color: coral;
`;
