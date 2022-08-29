import './NumbersTable.css';

function NumbersTable({ limit }){

  const arrayNumbers = [];
  for(let i = 1; i< limit + 1; i++){
    arrayNumbers.push(
      <div key={i} className={`d-flex justify-content-center align-items-center numbers-table__element ${!(i % 2) ? 'bg-white' : 'bg-danger'}`}>{i}</div>
    );
  }

  return (
    <div className="numbers-table">
      <div className="d-flex flex-wrap">
        {arrayNumbers}
      </div>
    </div>
  );
}

export default NumbersTable;