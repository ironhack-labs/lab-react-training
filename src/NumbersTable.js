import React from 'react';

function NumbersTable(props) {
  let list = []
  for (let n = 1; n <= props.limit; n++) {
    let style = {
      backgroundColor: n % 2 === 0 ? 'red' : 'white',
    }
    list.push(<li style={style} key={n}>{n}</li>)
  }
  return (
    <ul className="NumbersTable">
      {list}
    </ul>
  );
}

export default NumbersTable;
