import './numbersTable.css';

const NumbersTable = ({ limit }) => {
  return (
    <div className='table-container'>
      {[...new Array(limit)].map((table, i) => {
        const divStyle = {
          backgroundColor: 'white',
        };

        const h1Style = {
          color: 'white',
        };

        if ((i + 1) % 2 === 0) {
          divStyle.backgroundColor = 'red';
        } else {
          h1Style.color = 'black';
        }

        return (
          <div style={divStyle} className="table">
            <h1 style={h1Style}>{i + 1}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default NumbersTable;
