import React, { Component } from 'react';
import './NumbersTable.css';

class NumbersTable extends Component {
  render() {
    console.log("limit: ", this.props.limit);

    let cnt = 1;
    const items = [];
     
    while (cnt <= this.props.limit) {
      if (cnt % 2 === 0) {
        items.push(<div className="red-square"> {cnt} </div>);
      } else {
        items.push(<div className="white-square"> {cnt} </div>);
      }
    cnt++;
    }
 
    return <div className="num-tbl-sec"> {items}  </div>;
 
  }
}

export default NumbersTable;
