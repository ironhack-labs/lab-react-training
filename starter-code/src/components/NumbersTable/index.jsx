import React, { Component } from 'react';
import './style.scss';
import './../NumbersTable/style.scss';

export default class NumbersTable extends Component {
  setArrayNumbers() {
    const arr = [];
    const style = { backgroundColor: 'red' };
    for (let i = 1; i <= this.props.limit; i++) {
      arr.push(i);
    }
    return arr.map((x, i) => (
      <p style={i % 2 ? style : {}} key={i}>
        {x}
      </p>
    ));
  }

  render() {
    return <div className="numbersTable">{this.setArrayNumbers()}</div>;
  }
}
