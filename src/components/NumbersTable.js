import React, { Component } from "react";

class NumbersTable extends Component {

  createList = () => {
    let styleBlack = {
      'background-color': 'white',
      'border': '2px solid black',
      'padding': '25px',
      'margin-left': '0.5rem',
    };
    let styleRed = {
      'background-color': 'red',
      'border': '2px solid black',
      'padding': '25px',
      'margin-left': '0.5rem',
    };
    let numbers = [];
    for (let i = 1; i <= this.props.limit; i++) {
      numbers.push(i);
    }
    let listOfNumbers = numbers.map(value => { 
      if (value % 2 === 0) {
        return <p style={styleRed}>{value}</p>
      } else {
        return <p style={styleBlack}>{value}</p>
      }
    });
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