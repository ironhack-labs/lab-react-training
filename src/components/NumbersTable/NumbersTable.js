import React, { Component } from 'react';
import './NumbersTable.css';
import Box from './Box';

class NumbersTable extends Component {

  printTable = () => {
    const {limit}= this.props;
    let array = []; 
    for (let i = 1; i <= limit; i++) {
      if(i%2){
        array.push(i)
      }else{
        array.push(i)
      }
    }
    return array.map((index) =>{
      return <Box key={index} num={index} />
    });
  }
  render(){
    return(<div className="Table">{this.printTable()}</div>)
  }
}

export default NumbersTable;