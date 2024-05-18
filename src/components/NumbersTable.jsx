

const NumbersTable = ({ limit }) => {

  const numbers = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {numbers.map(number => (
        <div 
          key={number} 
          style={{
            width: '50px', 
            height: '50px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '5px', 
            backgroundColor: number % 2 === 0 ? 'red' : 'transparent'
          }}
        >
          {number}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;