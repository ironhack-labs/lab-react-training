import './NumbersTable.css';

function NumbersTable({ limit }) {
  const tableofNumbers = new Array(limit).fill();

  const bgColor = (num) => {
    if (num % 2 === 0) {
      return 'red';
    }
    return 'white';
  };

  return (
    <div className="d-flex w-100 flex-wrap align-items-center">
      {tableofNumbers.map((number, i) => (
        <div
          key={i}
          className=" box fs-2 border border-dark"
          style={{ backgroundColor: bgColor(i + 1) }}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;
