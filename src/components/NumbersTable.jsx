function NumbersTable({ limit }) {
    const range = [...Array(limit).keys()].map((num) => num + 1); // Adjusted to start from 1 instead of 0
    return (
      <div className="NumbersTable">
        {range.map((number) => (
          <div
            key={number} // Add a key to each element
            className="NumbersTable_NumberContainer"
            style={{ backgroundColor: number % 2 === 0 ? "red" : "white" }}
          >
            <p>{number}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default NumbersTable;