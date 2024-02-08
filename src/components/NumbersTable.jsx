const NumbersTable = ({ limit }) => {
  const generateNumbersList = () => {
    const numbers = [];
    for (let i = 1; i <= limit; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  return (
    <div className="numbers-table">
      <ul>
        {generateNumbersList().map((number) => (
          <li key={number} className={number % 2 === 0 ? "even" : "odd"}>
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NumbersTable;
