function NumbersTable({ limit }) {
  const numArr = [];
  for (let i = 1; i <= limit; i++) {
    numArr.push(i);
  }

  return (
    <div className="numbers-table grid">
      {numArr.map((num) => (
        <article key={num}>{num}</article>
      ))}
    </div>
  );
}

export default NumbersTable;
