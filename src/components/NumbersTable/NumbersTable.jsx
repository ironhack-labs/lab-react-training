import "./NumbersTable.css"

const NumbersTable = ({ limit }) => {
    let rows = []
    for (let i = 1; i <= limit; i++) {
        rows.push(i)
    }
    console.log(rows)

    return (
        <table className="tNumber">
            <tr className="square">
                {rows.map(number => {
                    const numClass = number % 2 ? 'numberSquare2' : 'numberSquare'
                    return <th className={numClass}>{rows[number - 1]}</th>
                })
                }
            </tr>

        </table>
    )
}


export default NumbersTable;