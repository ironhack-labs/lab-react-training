import '../Styles/NumbersTable.css';

function NumbersTable(props) {
  let numbersArr = new Array(props.limit).fill(0);

  return (
    <div className="flex-wrapper">
      {numbersArr.map((number, index) => {
        return (
          <div
            key={index}
            style={{ backgroundColor: index % 2 === 0 ? 'white' : 'red' }}
            className="numbersBlock"
          >
            <span>{index + 1}</span>
          </div>
        );
      })}
    </div>
  );
}

export default NumbersTable;
