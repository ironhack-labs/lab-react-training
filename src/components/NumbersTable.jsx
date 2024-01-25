function NumbersTable({ limit }) {
  const numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }

  return (
    <div>
      <ul>
        {numbers.map((number) => (
          <li key={number} style={{ color: number % 2 === 0 ? "red" : "black"}}>
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NumbersTable;
