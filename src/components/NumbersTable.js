
const NumbersTable = ({ limit }) => {

  const numbers = Array.from({ length: limit }, (_, index) => index + 1);

  const numberRows = [];
  while (numbers.length) {
    numberRows.push(numbers.splice(0, 5));
  }
  //No funciona lo de que aparezcan 5 por fila

  return (
    <ul className="flex flex-wrap pl-6">
      {numberRows.map((row, index) => (
        <li key={`row-${index}`} className="flex flex-row">
          {row.map((number) => (
            <li
              key={`number-${number}`}
              className={`w-16 h-16 border border-gray-400 flex items-center justify-center ${
                number % 2 === 0 ? 'bg-red-500 text-white' : 'bg-gray-300'
              }`}
            >
              {number}
            </li>
          ))}
        </li>
      ))}
    </ul>
  );
 
};
export default NumbersTable
