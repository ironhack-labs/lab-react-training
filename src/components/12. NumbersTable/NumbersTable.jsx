import Number from './Number';
import "./Numbers.css"

const NumbersTable = ({ limit }) => {
  const tableNumbers = (l) => {
    const numbers = [];
    for (let n = 1; n <= l; n++) {
      numbers.push(n);
    }
    return numbers.map((n) => <Number i={n} key={n} />);
  };

  return <div className="table">{tableNumbers(limit)}</div>;
};

export default NumbersTable;
