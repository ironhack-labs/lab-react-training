import React, { Component } from 'react';
import './NumbersTable.css';

export default class NumbersTable extends Component {
  state = {
    limit: this.props.limit,
  };

  render() {
    const numbers = [];
    for (let i = 1; i <= this.state.limit; i++) {
      numbers.push(i);
    }

    return (
      <div>
        {numbers.map((number, i) =>
          number % 2 === 0 ? (
            <div id="number-card" style={{backgroundColor: 'red'}} key={i} >{number}</div>
          ) : (
            <div id="number-card" key={i} >{number}</div>
          )
        )}
      </div>
    );
  }
}
