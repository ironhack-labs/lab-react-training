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
      padding:'5px',
      width:'10px'
    };
    this.whiteTable = {
      listStyle: "none",
      border: "1px solid black",
      backgroundColor: "white",
      padding:'5px',
      width:'10px'
    };
  }

  render() {
    return (
      <div>
        {this.numbers.map((number, i) => {
          return number % 2 === 0 ? (
            <div key={i} style={this.redTable}>
              {number}
            </div>
          ) : (
            <div key={i} style={this.whiteTable}>
              {number}
            </div>
          );
        })}
      </div>
    );
  }
}
