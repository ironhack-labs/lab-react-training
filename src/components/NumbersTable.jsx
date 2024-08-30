function NumbersTable({ limit }) {
    const numbers = [];
    for (let i = 1; i <= limit; i++) {
      numbers.push(i);
    }
    
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {numbers.map((number) => (
        <div
          key={number}
          style={{
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: number % 2 === 0 ? 'red' : 'white',
            border: '1px solid black',
          }}
        >
          {number}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;
