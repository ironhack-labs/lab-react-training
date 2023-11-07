import React from "react";

const NumbersTable = ({ limit }) => {

  const generateNumbers = () => {
    const numbers = [];

    for (let i = 1; i <= limit; i++) {
      numbers.push(i);
    }
    
    return numbers;
  };

  const numbersList = generateNumbers();

  return (
    <div className="numbers-table">
      {numbersList.map((number) => (
        <div
          key={number}
          className={`number-cell ${number % 2 === 0 ? "red" : ""}`}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;
