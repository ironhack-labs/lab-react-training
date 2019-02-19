import React, { Component } from 'react';

class NumbersTable extends Component {
  getList() {
    let list = []
    for (let n = 1; n <= this.props.limit; n++) {
      let style = {
        backgroundColor: n % 2 == 0 ? 'red' : 'white',
      }
      list.push(<li style={style} key={n}>{n}</li>)
    }
    return list
  }
  render() {
    return (
      <ul className="NumbersTable">
        {this.getList()}
      </ul>
    );
  }
}

export default NumbersTable;
