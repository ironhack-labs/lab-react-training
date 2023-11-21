const NumbersTable = ({ limit }) => {
    const generateNumbers = () => Array.from({ length: limit }, (_, i) => i + 1);
  
    const numbers = generateNumbers();
  
    return (
      <ul className="NumbersTable">
        {numbers.map((num, index) => (
          <li
            key={index}
            className="cell"
            style={{ backgroundColor: num % 2 === 0 ? 'red' : 'white' }}
          >
            {num}
          </li>
        ))}
      </ul>
    );
  };
  
  export default NumbersTable;