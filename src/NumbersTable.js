function NumbersTable(props) {
  let numbers = [];

  for (let i = 1; i < props.limit + 1; i++) {
    let red = false;
    if (i % 2 === 0) {
      red = true;
    }
    numbers.push(
      <div
        style={{ backgroundColor: red ? 'red' : 'white' }}
        className="block"
        key={i}
      >
        {i}
      </div>
    );
  }

  return <div className="blocks">{numbers}</div>;
}

export default NumbersTable;
