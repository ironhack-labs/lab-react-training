import React from 'react';

class NumbersTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const numList = [...Array(this.props.limit + 1).keys()].slice(1);
    const elements = numList.map((num) => {
      return (
        <li
          key={num}
          style={{ backgroundColor: `${num % 2 === 0 ? 'red' : 'white'}` }}
        >
          {num}
        </li>
      );
    });
    return <ul className="NumbersTable">{elements}</ul>;
  }
}

export default NumbersTable;
