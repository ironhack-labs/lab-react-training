
const NumbersTable = props => {
    let numbers = []
    for (let i = 0; i < props.limit; i++){
        numbers.push(0)
    }
    return (
        <div className="numTables">
            {numbers.map((num, index) => {
                return <div className={(index + 1) % 2 ? "white" : "red"}>{index + 1}</div>
            })}
        </div>
    )
}

export default NumbersTable