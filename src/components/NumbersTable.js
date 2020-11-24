import React from 'react';
import styled from 'styled-components';

const Number = styled.article`
  width: 5rem;
  height: 5rem;
  background-color: ${(props) => (props % 2 ? 'red' : 'white')};
  border: 2px solid 'black';
`;

const DivStyled = styled.div`
  width: 25rem;
  height: auto;
  box-sizing: border-box;
`;

const NumbersTable = ({ limit }) => {
  const genNumbers = (limit) => {
    for (let i = 1; i <= limit; i++) {}
  };

  return <DivStyled></DivStyled>;
};

export default NumbersTable;
