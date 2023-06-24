import '../App.css';

function NumbersTable({limit}) {

    const numbers = [];
    for (let i = 1; i <= limit; i++) {
      numbers.push(i);
    }

  return (
    <div className="numbers-table">
      {numbers.map((number) => (
        <div
          key={number}
          className={`number ${number % 2 === 0 ? 'even' : ''}`}
        >
          {number}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable