function NumbersTable(props) {
  const { limit } = props;

  const numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }

  return (
    <div className="NumbersTable">
      {numbers.map((number) => {
        return (
          <div
            className="Number"
            style={{
              backgroundColor: number % 2 === 0 ? 'red' : 'white',
            }}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
}

export default NumbersTable;
