import React from 'react';

class NumbersTable extends React.Component {
  render() {
    const numbers = []
    for (let i = 1; i <= this.props.limit; i++) {
      i % 2 === 0 ? numbers.push({ number: i, backColor: 'red' }) : numbers.push({ number: i })
    }

    return (
      <ul className="NumberTable">
        {numbers.map((n, idx) => {
          return <li style={{ backgroundColor: n.backColor }} key={'number_' + idx}>{n.number}</li>
        })}
      </ul>
    )
  }
}

export default NumbersTable;
