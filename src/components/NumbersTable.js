import React from 'react';

const NumbersTable = (props) => {
  let allItems = [];
  for (let i = 1; i < props.limit + 1; i++) {
    let oneItem = <li key={i}>{i}</li>;
    allItems.push(oneItem);
  }

  return <ul className="allNumbers">{allItems}</ul>;
};

export default NumbersTable;
