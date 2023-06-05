import { nanoid } from 'nanoid';

function NumbersTable({ limit }) {
  const numbersArr = [];
  for (let i = 1; i <= limit; i++) {
    numbersArr.push(i);
  }

  return (
    <div className="numbers-table grid">
      {numbersArr.map((num) => (
        <article key={nanoid()}>{num}</article>
      ))}
    </div>
  );
}

export default NumbersTable;
