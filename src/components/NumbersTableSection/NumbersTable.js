import React, { Component } from 'react';
import './NumbersTable.css';

export default class NumbersTable extends Component {
  renderSquares = () => {
    return Array.from({ length: this.props.limit }).map((e, i) => (
      <div
        key={i}
        className="cell"
        style={{ backgroundColor: i % 2 === 0 ? 'red' : 'white' }}
      >
        <h1>{i + 1}</h1>
      </div>
    ));
  };

  render() {
    return <div className="NumbersTable">{this.renderSquares()}</div>;
  }
}
