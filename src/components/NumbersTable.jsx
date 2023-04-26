const NumbersTable = ({ limit }) => {
  let numbers = [];

  numbers = Array.from({ length: limit }, (_, i) => i + 1);

  console.log('numbers', numbers);

  console.log('limit', typeof limit);

  return (
    <div>
      {numbers.map((number) => (
        <div
          className="border border-black"
          key={number}
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: number % 2 === 0 ? 'red' : 'white',
            color: number % 2 === 0 ? 'white' : 'black',
          }}
        >
          <p>{number}</p>
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;
