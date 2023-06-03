export default function NumbersTable(props) {
  const numbers = [];
  const red = { backgroundColor: 'red' };
  for (let i = 1; i <= props.limit; i++) {
    numbers.push(i % 2 === 0 ? <div style={red}>{i}</div> : <div>{i}</div>);
  }

  return numbers;
}
