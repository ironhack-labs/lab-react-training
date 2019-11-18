import React, { Component } from 'react';
import './numbers-table.css';

export default class NumbersTable extends Component {
    constructor(props) {
        super(props);
        this.styleRed = {backgroundColor: 'red'};
    this.st = {backgroundColor: 'white'};
    }
    
        display = () => {
            let keyList = [];
            for(let i=1;i<this.props.limit+1;i++) {
            
               keyList.push(i); 
            }
          return keyList.map((keyL,ind) => {
              if(keyL%2 === 0) {
                  this.boxStyle = this.styleRed;
              } else {
                this.boxStyle = this.st;
              }
            return (
              <div className="self-box" style = {this.boxStyle} key={ind}>{keyL}</div>
            )
          })
          }
    
    render() {
        return (
            <div className="key-box">
                {this.display()}
            </div>
        )
    }
}
