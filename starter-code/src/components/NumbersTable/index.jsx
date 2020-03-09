import React, { Component } from 'react';
import './style.scss';

class NumbersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [...Array(this.props.limit + 1)]
    };
  }
  render() {
    console.log(this.state.squares);

    return (
      <div className="squares">
        {this.state.squares.map((e, i) => {
          let style;
          if (i % 2 === 0) {
            style = { backgroundColor: 'red' };
          }

          return (
            <div className="eachSquare" style={style} key={i}>
              {i}
            </div>
          );
        })}
      </div>
    );
  }
}

export default NumbersTable;
