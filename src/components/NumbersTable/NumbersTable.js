import "./NumbersTable.css"

const NumbersTable = (props) => {
    const arrayOfTables = Array.from(Array(props.limit)).map((number, index)=>index +1)

    return (
        <div>
            <ul className="numbers">
                {arrayOfTables.map((number, index) => {
                    return (
                        <li key={number} style={{backgroundColor: number % 2 === 0 ? 'red' : 'white'}}>{number}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NumbersTable