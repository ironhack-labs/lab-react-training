import React from 'react';
import './NumbersTable.css';

export default class NumbersTable extends React.Component {
  getBgColor(square) {
    return square % 2 === 0 ? 'red' : 'white';
  }

  getTableSize() {
    const size = this.props.limit;
    let list = [];
    for (let i = 1; i <= size; i++) {
      list.push(i);
    }
    return list;
  }

  render() {
    const board = this.getTableSize();

    const squareList = board.map((square, key) => (
      <li
        className="list-item"
        key={key}
        style={{
          backgroundColor: this.getBgColor(square),
        }}
      >
        {square}
      </li>
    ));

    return <ul className="list">{squareList}</ul>;
  }
}
