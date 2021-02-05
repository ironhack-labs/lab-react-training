import React from 'react';
import './NumbersTable.css';

class NumbersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSquares: props.limit,
    };
  }

  render() {
    const colorEven = 'red';
    const colorOdd = 'blank';
    const liArray = new Array(this.state.numberOfSquares)
      .fill(1)
      .map((x, i) => (
        <li
          style={{
            backgroundColor: `${(x + i) % 2 == 0 ? colorEven : colorOdd}`,
          }}
          className="box list-group-item"
        >
          {x + i}
        </li>
      ));
    return <ul className="list-group list-group-horizontal">{liArray}</ul>;
  }
}

export default NumbersTable;