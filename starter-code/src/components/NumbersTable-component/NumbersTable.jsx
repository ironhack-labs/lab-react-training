import React, { Component } from "react";

export default class NumbersTable extends Component {
  constructor(props) {
    super(props);
    this.numbers = [];
    for (let i = 1; i <= this.props.limit; i++) {
      this.numbers.push(i);
    }
    this.redTable = {
      listStyle: "none",
      border: "1px solid black",
      backgroundColor: "red",
      float:'left',
      padding:'5px',
    };
    this.whiteTable = {
        listStyle: "none",
        border: "1px solid black",
        backgroundColor: "white",
        float:'left',
        padding:'5px',
    };
  }

  render() {
    return (
      <ul>
        {this.numbers.map((number, i) => {
          return number % 2 === 0 ? (
            <li key={i} style={this.redTable}>
              {number}
            </li>
          ) : (
            <li key={i} style={this.whiteTable}>
              {number}
            </li>
          );
        })}
      </ul>
    );
  }
}
