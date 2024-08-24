function NumbersTable({ limit }) {
  // Generate an array of numbers from 1 to the limit
  const numbers = Array.from({ length: limit }, (_, index) => index + 1);

  return (
    <div style={styles.container}>
      {numbers.map((number) => (
        <div
          key={number}
          style={{
            color: number % 2 === 0 ? "red" : "black",
          }}
        >
          {number}
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
};

export default NumbersTable;
