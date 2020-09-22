import React from 'react';

const NumbersTable = (props) => {

  const tableItems = []
  for(let item=1; item <= props.limit; item++) {
    tableItems.push(<div className={item % 2 ? 'even' : 'odd'}>{item}</div>);
  }

  return (
    <div className='table-items'>
      {tableItems}
    </div>
  );
};

export default NumbersTable;