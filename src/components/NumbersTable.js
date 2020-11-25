import styled from 'styled-components'
import React from 'react'

let Box = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  display: inline-block;
  background-color: ${(props) => (props.number % 2 ? '#FFF' : 'crimson')};
  p {
    margin: 30px auto;
  }
`;


function NumbersTable({ limit }) {

  return (
    <div>
      {new Array(limit).fill(false).map((ele, i) => (
        <Box key={i} number={i+1}>
          <p>{i+1}</p>
        </Box>
      ))}
    </div>
  );
}

export default NumbersTable;
