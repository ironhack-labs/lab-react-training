import './NumbersTable.css';

function NumbersTable({ limit }) {
  let numbers = [];

  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }

  return (
    <div className="square-group">
      {numbers.map((number) => (
        <div
          className="square"
          key={number}
          style={{ backgroundColor: number % 2 === 0 ? 'red' : 'white' }}
        >
          <p>
            <b>{number}</b>
          </p>
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;
