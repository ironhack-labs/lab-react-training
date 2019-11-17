import React, { Component } from 'react'

export class NumbersTable extends Component {

  showNumberTable =()=> {
    let limitNumber = this.props.limit;
    // let newNumberArr = Array.from(Array(limitNumber).keys(), n => n + 1);
    // console.log(newNumberArr);
    let numberArr = new Array(limitNumber).fill().map((x,i)=> {
      return <li key={i}>{i + 1}</li>
    })
    return numberArr;
  }
  render() {
    
    return (
      <ul className="NumbersTable">
        {this.showNumberTable()}
      </ul>
    )
  }
}

export default NumbersTable
