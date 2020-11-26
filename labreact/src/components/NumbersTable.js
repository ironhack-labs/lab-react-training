import React, { Component } from 'react';


class NumbersTable extends Component {
    getList = () => {
      let list = []
      for (let i = 1; i <= this.props.limit; i++) {
        let style = {
          backgroundColor: i % 2 === 0 ? 'red' : 'white',
        }
        list.push(<li style={style} key={i}>{i}</li>)
      }
      return list
    }


    render() {
      return (
        <ul>
          {this.getList()}
        </ul>
      );
    }
  }

export default NumbersTable; 