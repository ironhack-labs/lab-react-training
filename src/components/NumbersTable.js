import React from 'react';
 
class NumbersTable extends React.Component {
  render() {
    return (
      <ul className="NumbersTable">
        {Array(this.props.limit).fill().map((x, i) => <li key={i} style={{backgroundColor: (i + 1) % 2 === 0 ? 'red' : 'white'}}>{i + 1}</li>)}
      </ul>
    );
  }
}
 
export default NumbersTable;