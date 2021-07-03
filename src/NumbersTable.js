import React from 'react';
import NumberCard from './NumberCard.js';

import './NumbersTable.css';

const NumbersTable = ({ title }) => {
  return (
    <article className="NumbersTable">
    <h2>{title}</h2>
      <div className="NumbersTable__wrapper">    
        <NumberCard limit={10} />
      </div>
    </article>
  );
};
 
export default NumbersTable;