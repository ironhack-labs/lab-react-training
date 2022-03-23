import './NumbersTable.css'

const NumbersTable = ({ limit }) => {
    const numbers = Array.from({length: limit}, (e, i) => i + 1)
    console.log(numbers)

    return (
        <div className="table">
            {numbers.map((number, index) => {
                return (
                    <div key={index} className="square" style={{backgroundColor: number %2 === 0 ? 'pink' : 'white'}}>{number}</div>
                )
            })}

        </div>
    )
}

export default NumbersTable