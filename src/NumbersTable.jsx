import React from 'react';

class NumbersTable extends React.Component {
  render() {
    const {limit} = this.props;
    let numToDsiplay = [];

    for (let i = 1; i <= limit; i++) {
      numToDsiplay.push(i);
    }
    return(
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)'}}>
        {numToDsiplay.map((num) => (
          num%2 === 0 ? <div key={num} style={{ backgroundColor: 'red' }}>{num}</div> : <div key={num} style={{ backgroundColor: 'white' }}>{num}</div>
        ))}
      </div>
    );
  }
}

export default NumbersTable;