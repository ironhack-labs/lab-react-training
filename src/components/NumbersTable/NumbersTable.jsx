import './NumbersTable.css';

function NumbersTable({ limit }) {
  const numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }
  return (
    <div className="numbersTable">
      {numbers.map((number, index) => {
        return (
          <span
            className=
            {`${number % 2 === 0 ? 'even' : 'odd'} number`}
            key={index}
          >
            {number}
          </span>
        );
      })}
    </div>
  );
}

export default NumbersTable;
