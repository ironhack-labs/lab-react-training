export default function NumbersTable({ limit }) {
  const tableNumbers = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div
      style={{
        display: 'flex',
        width: '400px',
        height: 'auto',
        flexWrap: 'Wrap',
      }}
    >
      {tableNumbers.map((number) => (
        <div
          key={number}
          style={{
            backgroundColor: number % 2 === 0 ? 'red' : 'white',
            padding: '30px',
            border: '1px solid black',
          }}
        >
          {number}
        </div>
      ))}
    </div>
  );
}
