import './NumbersTable.scss'

const NumbersTable = ({ limit }) => {
  const arrayOfNumbers = Array.from(Array(limit), (number, index) => index +1);

  return (
      <div>
          <ul className="table">
              {arrayOfNumbers.map((number, index) => {
                  return (
                      <li key={index} style={{backgroundColor: number % 2 === 0 ? 'red' : 'white'}} className="table__number">{number}</li>
                  )
              })}
          </ul>
      </div>
  )
}

export default NumbersTable
