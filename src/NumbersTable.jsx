import './NumbersTable.css'

const NumbersTable = props => {

  const { limit } = props


  let array = []
  let number = 1


  for (let i = 1; i < limit; i++) {
    array.push(number)
    number++
  }

  return (
    <section className="NumbersTable">
      <ul>
        {array.map(elem => {
          return (
            elem % 2 === 0 ? <li key={elem} className='red'>{elem}</li> : <li key={elem} className='white'>{elem}</li>
          )
        })}
      </ul>
    </section>
  )

}


// const NumbersTable = props => {

//   const { limit } = props

//   let acc = 1


//   for (let i = 1; i < limit; i++) {
//     console.log(i)
//     acc++

//   }

//   return (
//     <div>
//       <p>{acc}</p>
//     </div>
//   )
// }

export default NumbersTable