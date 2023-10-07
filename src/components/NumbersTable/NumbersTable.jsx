/* eslint-disable react/prop-types */
const NumbersTable = ({ limit }) => {
  const tableNumber = [];
  for (let i = 1; i < limit; i++) {
    tableNumber.push(
      <div
        key={i}
        className={`d-flex align-items-center justify-content-center border border-1 ${i % 2 === 0 && "bg-danger"}`}
        style={{ width: "50px", height: "50px" }}>
        {i}
      </div>
    );
  }
  return <div className="d-flex justify-content-center">{tableNumber}</div>;
};

export default NumbersTable;
