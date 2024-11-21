function NumbersTable({ limit }) {
  const numbers = [];
  for (let i = 1; i <= limit; i++) {
    console.log(numbers);
    numbers.push(i);
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin:"30px" }}>
      {numbers.map((number) => (
        <div
          key={number}
          style={{
            backgroundColor: number % 2 === 0 ? "red" : "white",
            display:"flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            padding: "10px",
            border: "2px solid black",
          }}
        >
          {number}
        </div>
      ))}
    </div>
  );
}
export default NumbersTable;
