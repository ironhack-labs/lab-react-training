const NumbersTable = ({limit}) => {
  const numbers = []
  for (let i = 1; i <= limit;  i++){numbers.push(i)}

  return (
    <>
      <ul className="listContainer"  >
        {numbers.map((number, index) => {
          let even = (number % 2 === 0)
          return  <li key={index} style={even ? {backgroundColor: 'red'} : {backgroundColor: 'white'}} > {number} </li>
          })}
      </ul>
    </>
  );
}

export default NumbersTable;