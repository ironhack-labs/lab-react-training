import React from 'react';
import './NumbersTable.css';
function NumbersTable(props) {
  const boxNumbers = [];

  for (let n = 1; n <= props.limit; n++) {
    const cssNumber =
      n % 2 === 0 ? 'numbersContainerEven' : 'numbersContainerOdd';

    boxNumbers.push(
      <div key={n} className={cssNumber}>
        {n}
      </div>
    );
  }
  return <div className="numbersContainer">{boxNumbers}</div>;
}
export default NumbersTable;
