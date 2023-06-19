function NumbersTable(props) {
  const numbers = [];

  for (let i = 1; i <= props.limit; i++) {
    numbers.push(i);
  }

  return (
    <div className="numTable">
      {numbers.map((num) => {
        return <div>{num}</div>;
      })}
    </div>
  );
}

export default NumbersTable;
