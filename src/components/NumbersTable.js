function NumbersTable({ limit }) {
  const numbers = Array.from({ length: limit }, (_, index) => index + 1);

  return (
    <div>
      {numbers.map((number) => (
        <span
          className="numbers"
          key={number}
          style={{ backgroundColor: number % 2 === 0 ? 'red' : 'white' }}
        >
          {number}
        </span>
      ))}
    </div>
  );
}

export default NumbersTable;
