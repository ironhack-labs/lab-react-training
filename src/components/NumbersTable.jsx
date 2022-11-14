function NumbersTable({ limit }) {
  const divArray = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div className="numbers-div-container">
      {divArray.map((number) =>
        number % 2 === 0 ? (
          <div key={number} className="numbers-div">
            {number}
          </div>
        ) : (
          <div key={number} className="numbers-div red">
            {number}
          </div>
        )
      )}
    </div>
  );
}
export default NumbersTable;
