import './NumbersTable.css';

const NumbersTable = ({ limit }) => {
  const arrayOfLimit = [...Array(limit).keys()];

  return (
    <div>
      {arrayOfLimit.map((elm, idx) => {
        return (
          <div
            keys={idx}
            className={
              (elm + 1) % 2 === 0 ? `NumbersTable red` : `NumbersTable`
            }
          >
            <div>{elm + 1}</div>
          </div>
        );
      })}
    </div>
  );
};

export default NumbersTable;
