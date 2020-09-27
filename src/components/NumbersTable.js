import React, { Component } from 'react';

export default class NumbersTable extends Component {
  render() {
    let count = 1;
    const items = [];

    while (count <= this.props.limit) {
      if (count % 2 === 0) {
        items.push(<div className="even-red-square"> {count} </div>);
      } else {
        items.push(<div className="odd-white-square"> {count} </div>);
      }
      count++;
    }

    return <div className="numbers-table"> {items} </div>;
  }
}
