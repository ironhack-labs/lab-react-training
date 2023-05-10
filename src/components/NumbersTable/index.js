import './index.css';

export const NumbersTable = (props) => {
  const { limit } = props;
  const numbers = Array.from({length: limit}, (_, i) => i + 1);
  const tableRows = numbers.map((number, index) =>
    <div className='Item' key={index} style={{backgroundColor: number % 2 === 0 ? 'red' : 'white'}}>
      {number}
    </div>
  );
  return (
    <div className='NumbersTable'>
    {tableRows}
    </div>
    
  );
}



