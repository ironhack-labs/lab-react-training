import React from 'react';
import './NumbersTable.css';

export default class NumbersTable extends React.Component {
  state = {
    state: 0,
  };

  render() {
    const labels = [];
    for (var a = 1; this.props.limit >= a; a++)
      labels.push(<li className={!(a % 2) ? 'red' : 'white'}>{a}</li>);
    return (
      <div>
        <ul>{labels}</ul>
      </div>
    );
  }
}
