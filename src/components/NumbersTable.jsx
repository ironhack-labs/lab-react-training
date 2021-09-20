import React, { Component } from 'react';

export class NumbersTable extends Component {
  state = {};

  render() {
    let numArr = [];
    for (let i = 0; i < this.props.limit; i++) {
      numArr.push(i + 1);
    }

    return (
      <>
        {numArr.map((item) => {
          return (
            <div
              key={item}
              className={item % 2 === 0 ? 'chessRed' : 'chessWhite'}
            >
              <h4>{item}</h4>
            </div>
          );
        })}
      </>
    );
  }
}

export default NumbersTable;
