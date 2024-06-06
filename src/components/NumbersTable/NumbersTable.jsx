export default function NumbersTable({ limit }) {
  const arrTable = [];
  for (let i = 1; i <= limit; i++) {
    arrTable.push(i);
  }
  return arrTable.map((element, index) => {
    let color;
    index % 2 === 0
      ? (color = { background: 'white' })
      : (color = { background: 'red' });
    return (
      <div>
        <div style={color}>{element}</div>
      </div>
    );
  });
}
