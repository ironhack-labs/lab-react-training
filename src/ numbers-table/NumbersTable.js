import React from 'react';
import './NumbersTable.css';

class NumbersTable extends React.Component {
  render() {
    let numbers = [];
    let count = 1;

    while (count <= this.props.limit) {
      count % 2 === 0
        ? numbers.push(<p className="red">{count}</p>)
        : numbers.push(<p className="white">{count}</p>);
      count++;
    }

    return (
      <div>
        <div className="numbers">{numbers}</div>
      </div>
    );
  }
}

export default NumbersTable;
