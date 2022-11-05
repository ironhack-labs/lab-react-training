function NumbersTable({ limit }) {
  const divArray = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div className="div-container">
      {divArray.map((number) =>
        number % 2 === 0 ? (
          <div key={number} className="div">
            {number}
          </div>
        ) : (
          <div key={number} className="div red">
            {number}
          </div>
        )
      )}
    </div>
  );
}
export default NumbersTable;
