import { nanoid } from 'nanoid';

function NumbersTable({ limit }) {
  const numbersArr = [];
  for (let i = 1; i <= limit; i++) {
    numbersArr.push(i);
  }

  return (
    <div>
      {numbersArr.map((num) =>
        num % 2 === 1 ? (
          <div key={nanoid()}>{num}</div>
        ) : (
          <div key={nanoid()} style={{ backgroundColor: 'red' }}>
            {num}
          </div>
        )
      )}
    </div>
  );
}

export default NumbersTable;
