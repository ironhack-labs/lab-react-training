// imports
import React from 'react';
import styled from 'styled-components';
//components
class NumbersTable extends React.Component {
  render() {
    const { limit } = this.props;
    const squares = [];
    const SquareRed = styled.div`
      background-color: red;
      text-align: center;
      width: 150px;
      height: 150px;
      border: 1px solid black;
    `;
    const SquareWhite = styled.div`
      text-align: center;
      width: 150px;
      height: 150px;
      border: 1px solid black;
    `;
    for (let i = 1; i <= limit; i++) {
      if (i % 2 === 0) {
        squares.push(<SquareRed>{i}</SquareRed>);
      } else {
        squares.push(<SquareWhite>{i}</SquareWhite>);
      }
    }

    return <div className="squares">{squares}</div>;
  }
}

// exports
export default NumbersTable;
