import React, { Component } from 'react';


class NumbersTable extends Component {

  render() {

    const { limit } = this.props;
    let numbers=[];

    for (let i = 1; i <= limit; i++) {
      numbers.push(i);
    }

    return(
      <div className="numbers-table-box">
        {numbers.map((num) => {
          return <p className="number-box" key={num} style={{backgroundColor: num % 2 === 0 ? "white" : "red"}}>{num}</p>;
        })}
      </div>
    )
  }
}

export default NumbersTable;