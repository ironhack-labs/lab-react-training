import './numbersTable.css';

const NumbersTable = ({ limit }) => {
  return (
    <div className="table-container">
      {[...new Array(limit)].map((table, i) => {
        const divStyleEven = {
          backgroundColor: 'red',
          color: 'white',
        };
        const divStyleOdd = {
          backgroundColor: 'white',
          color: 'black',
        };

        return (
          <div
            style={(i + 1) % 2 === 0 ? divStyleEven : divStyleOdd}
            className="table"
            key={i}
          >
            <h1>{i + 1}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default NumbersTable;
