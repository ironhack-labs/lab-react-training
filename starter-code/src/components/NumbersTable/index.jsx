import React, { Component } from "react";

class NumbersTable extends Component {
  numTable = () => {
    this.res = [];
    for (let i = 1; i <= this.props.limit; i++) {
      let squareColor = i % 2 === 0 ? "red" : "white";
      this.res.push(
        <div style={{ backgroundColor: squareColor }} key={i}>
          <p>{i}</p>
        </div>
      );
    }
    return this.res;
  };
  render() {
    return <div className="numberTable">{this.numTable()}</div>;
  }
}

export default NumbersTable;
