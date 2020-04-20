import React, { Component } from "react";

class NumbersTable extends Component {

  createList = () => {
    let styleBlack = {
      'backgroundColor': 'white',
      'border': '2px solid black',
      'padding': '25px',
      'marginLeft': '0.5rem',
    };
    let styleRed = {
      'backgroundColor': 'red',
      'border': '2px solid black',
      'padding': '25px',
      'marginLeft': '0.5rem',
    };
    let numbers = [];
    for (let i = 1; i <= this.props.limit; i++) {
      numbers.push(i);
    }
    let listOfNumbers = numbers.map((value, index) => { 
      if (value % 2 === 0) {
        return <p key={index} style={styleRed}>{value}</p>
      } else {
        return <p key={index} style={styleBlack}>{value}</p>
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