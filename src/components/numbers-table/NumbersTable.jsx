import './NumbersTable.css'
function NumbersTable({ limit }) {

    const numbers = [];
    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0) {
            numbers.push(<div key={i} style={{backgroundColor: 'red'}} className="num">{i}</div>)
        } else if (i % 2 !== 0){
            numbers.push(<div key={i} className="num">{i}</div>)
        }
    }

  return (
    <div className='table'>
        {numbers}
    </div>
  )
}

export default NumbersTable