function NumbersTable(props) {
  // function to create a Array with string or with a max length

  // const arrayRange = (start, stop, step) =>
  //   Array.from(
  //     { length: (stop - start) / step + 1 },
  //     (value, index) => start + index * step
  //   );

  const numArr = Array.from(
    { length: props.limit },
    (value, index) => 1 + index * 1
  );

  return (
    <div className="numbers-table">
      {numArr.map((num, index) => {
        if (num % 2 === 0) {
          return (
            <li
              key={index}
              className="numbers"
              style={{ backgroundColor: 'red' }}
            >
              {num}
            </li>
          );
        }
        return (
          <li key={index} className="numbers">
            {num}
          </li>
        );
      })}
    </div>
  );
}

export default NumbersTable;
