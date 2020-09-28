import React, { Component } from 'react';
import './NumbersTable.css';
export default class NumbersTable extends Component {
  state = {
    limit: this.props.limit,
    arr: [],
  };

  createArr = () => {
    let newArr = [];
    for (let i = 0; i < this.state.limit; i++) {
      newArr.push(i);
    }
    this.setState(
      {
        arr: newArr,
      },
      //this lets us know immediately what the state is
      () => console.log(this.state.arr)
    );
  };

  isEven(value) {
    if (value % 2 === 0) return true;
    else return false;
  }

  render() {
    let divStyle = {
      background: `red`,
    };
    return (
      <div>
        <h1>Numbers Table</h1>
        <div className="container">
          <button onClick={this.createArr}> Click for Boxes </button>
          <div className="numbers-container">
            {this.state.arr.map((index) => {
              return (
                <div key={index}>
                  {this.isEven(index + 1) ? (
                    <div className="box" style={divStyle}>
                      {index + 1}
                    </div>
                  ) : (
                    <div className="box">{index + 1}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
