import React from 'react';

const NumbersTable = (props) => {
  let numberArray = [];

  for (let i = 1; i <= props.limit; i++) {
    numberArray.push(i);
  }

  return (
    <div>
      <div>
        {numberArray.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <div>
                <h3>{index + 1}</h3>
              </div>
            );
          } else {
            return (
              <div className=" bg-red-400">
                <h3>{index + 1}</h3>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default NumbersTable;
