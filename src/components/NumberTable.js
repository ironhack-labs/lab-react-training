import './Component.css';

function NumberTable(props) {
  let arrLimit = [];
  for (let i = 1; i <= props.limit; i++) {
    arrLimit.push(i);
  }

  console.log(arrLimit);

  return (
    <div className="numberTablesScript">
      {arrLimit.map((currentNumber) => {
        let color = 'white';
        if (currentNumber % 2 === 0) {
          color = 'red';
        }
        return (
          <div className="containerBox" style={{ backgroundColor: `${color}` }}>
            {currentNumber}
          </div>
        );
      })}
    </div>
  );
}

export default NumberTable;
