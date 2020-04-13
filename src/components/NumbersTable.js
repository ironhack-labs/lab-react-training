import React, { Component } from "react";

class NumbersTable extends Component {

  createList = () => {
    let numbers = [];
    for (let i = 1; i <= this.props.limit; i++) {
      numbers.push(i);
    }
    let listOfNumbers = numbers.map(value => <p className="number-value">{value}</p>);
    return listOfNumbers;
  }

  render () {
    return (
      <div className="number-list">
        {this.createList()}
      </div>
    )
  }
}

export default NumbersTable;