import "./NumbersTable.css";
const NumbersTable = ({ limit }) => {
  const generateArray = (limit) => {
    return Array.from({ length: limit }, (_, index) => index + 1);
  };
  const array = [1, 2, 3];
  return (
    <div className="numbers-table">
        {
            generateArray(limit).map(number => {
                return <div className="table" style={{backgroundColor:(number % 2 === 0) ? "red": "white"}} key={number}> {number} </div>
            })
        }
    </div>
  );
};

export default NumbersTable;
