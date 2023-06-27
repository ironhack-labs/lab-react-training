function NumbersTable({ limit }) {
  const totalOfNumbers = limit;
  return (
    <div className="NumbersTable">
      {[...new Array(totalOfNumbers + 1)].map((arr, index) => (
        <div class="Number" style={{ backgroundColor: index % 2 === 0 ? 'red' : 'white'}}>
            {index}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;
