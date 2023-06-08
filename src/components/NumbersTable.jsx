import { nanoid } from 'nanoid';

function NumbersTable({ limit }) {
  const numbersArr = [];
  for (let i = 1; i <= limit; i++) {
    numbersArr.push(i);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {numbersArr.map((num) =>
        num % 2 === 1 ? (
          <div
            style={{
              width: '50px',
              height: '50px',
              border: '1px solid black',
              margin: '5px',
            }}
            key={nanoid()}
          >
            {num}
          </div>
        ) : (
          <div
            key={nanoid()}
            style={{
              width: '50px',
              height: '50px',
              border: '1px solid black',
              margin: '5px',
              backgroundColor: 'red',
            }}
          >
            {num}
          </div>
        )
      )}
    </div>
  );
}

export default NumbersTable;
