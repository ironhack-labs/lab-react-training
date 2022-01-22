import classes from './NumbersTable.module.css';

const NumbersTable = ({ limit }) => {
  let numberSquares = new Array(limit).fill(0);
  numberSquares = numberSquares.map((_, i) => (
    <div
      className={`${classes.numSquare} ${i % 2 ? classes.white : classes.red}`}
    >
      {i + 1}
    </div>
  ));
  console.log(numberSquares);
  return <div className={classes.container}>{numberSquares}</div>;
};

export default NumbersTable;
