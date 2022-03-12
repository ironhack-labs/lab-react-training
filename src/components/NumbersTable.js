function NumbersTable(props) {
  let arr = [];
  for (let i = 1; i <= props.limit; i++) {
    arr.push(i);
  }

  return (
    <div>
      <ul className="numberstable">
        {arr.map((currentNumber, i) => (
          <li style={{ backgroundColor: i % 2 === 0 ? 'white' : 'red' }}>
            {currentNumber}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default NumbersTable;
