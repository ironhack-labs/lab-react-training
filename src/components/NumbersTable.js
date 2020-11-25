import React from 'react';
import styled from 'styled-components';

const Number = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  background-color: ${(props) => (props.i % 2 ? 'red' : 'white')};
  border: 1px solid;
  p {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DivStyled = styled.div`
  width: 25rem;
  height: auto;
  box-sizing: border-box;
`;

const NumbersTable = ({ limit }) => {
  return (
    <DivStyled>
      {new Array(limit).fill(false).map((e, i) => (
        <Number key={i} i={i + 1}>
          <p>{i + 1}</p>
        </Number>
      ))}
    </DivStyled>
  );
};

export default NumbersTable;
