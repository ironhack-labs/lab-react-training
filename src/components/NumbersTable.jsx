function NumbersTable(props) {
  let cellsList = [];
  for (let i = 1; i <= props.limit ; i++)
    cellsList.push(i);
  return (
    <ul className="NumbersTable">
    { cellsList.map(cell => {
      return (<li key={cell} className="NumberCell" style={{backgroundColor: cell & 1 === 1 ? "white" : "red"}}>{cell}</li> );
    })}
    </ul>
  );
}

export default NumbersTable;
