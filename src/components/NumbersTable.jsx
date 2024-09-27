import '../App.css';

function NumbersTable({ limit }) {
  const numberArray = [];
  for (let i = 1; i <= limit; i++) {
    numberArray.push(i);
  }

  return (
    <div className="numbersDiv">
      {numberArray.map((number) => (
        <div
          className="number"
          style={{ backgroundColor: number % 2 === 0 ? 'red' : 'white' }}
          key={number}
        >
          <p>{number}</p>
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;
