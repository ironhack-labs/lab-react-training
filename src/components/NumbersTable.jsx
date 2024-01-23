function NumbersTable(props) {
  const { limit } = props;

  // make array with number range to limit
  const rangeArray = Array.from({ length: limit }, (value, index) => index + 1);

  const getBoxColor = (number) => {
    let color;
    number % 2 === 0
      ? (color = { backgroundColor: 'red' })
      : (color = { backgroundColor: 'white' });
    return color;
  };

  return (
    <div className="number-table">
      {rangeArray.map((element) => {
        return (
          <div
            className="number-table-square"
            key={element}
            style={getBoxColor(element)}
          >
            {element}
          </div>
        );
      })}
    </div>
  );
}
export default NumbersTable;
