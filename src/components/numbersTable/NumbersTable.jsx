import React from 'react';
import Number from '../number/Number';
import '../number/Number.css';
import './NumbersTable.css';

export default class NumbersTable extends React.Component {
  render() {
    const getNumbers = (limit) => {
      const numbers = [];
      for (let i = 1; i <= this.props.limit; i++) {
        numbers.push(i);
      }
      return numbers;
    };
    const numbers = getNumbers(this.props.limit);
    console.log(numbers);
    return (
      <div className="NumbersTable">
        {numbers.map((number) => (
          <Number {...number} key={number}>
            {number}
          </Number>
        ))}
      </div>
    );
  }
}
