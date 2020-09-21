import React from 'react';
import './NumbersTable.css';

export default class NumbersTable extends React.Component {
  getBgColor(square) {
    if (square % 2 === 0) {
      return 'red';
    }
  }
  getTableSize() {
    const size = this.props.limit;
    let list = [];
    for (let i = 1; i <= size; i++) {
      if (i % 2 === 0) {
        console.log(`${i} is even`);
      } else {
        console.log(`${i} is odd`);
      }
      list.push(i);
    }
    return list;
  }
  //   const numbers = [1, 2, 3, 4, 5];
  // const listItems = numbers.map((number) =>
  //   <li>{number}</li>
  // );

  render() {
    console.log(this.getTableSize());
    const board = this.getTableSize();

    return board.map((square, key) => (
      <li
        key={key}
        style={{
          backgroundColor: this.getBgColor(square),
        }}
      >
        {square}
      </li>
    ));
  }
}
