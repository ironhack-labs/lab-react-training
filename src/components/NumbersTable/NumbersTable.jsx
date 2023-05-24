import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    const cells = []
    for (let i = 1; i <= limit; i++) {
        cells.push(i)
    }


    return (
        cells.map((num) => {
            const cellColor = num % 2 === 0 ? 'red' : 'white'
            return (
                <div className="cell" style={{ backgroundColor: cellColor }}>{num}</div>
            )
        })
    )
}

export default NumbersTable