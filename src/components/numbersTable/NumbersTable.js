import React, {Component} from 'react';
import './style.css';

class NumbersTable extends Component {
  render() {
    const {limit} = this.props;
    const items = [];

    for (let i = 1; i <= limit; i++) {
        items.push(<div key={i} className={'block'}>{i}</div> )
    }

    return (
      <div className={'numbersTable'}>
        {items}
      </div>
    );
  }
}

export default NumbersTable;