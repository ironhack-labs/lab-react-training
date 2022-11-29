import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    let table = []
    let tableNum = 1
    while (table.length < limit) {
        table.push(tableNum)
        tableNum++
    }

    return (
        <section className="NumbersTable">
            <table>
                <tbody>
                    <tr>
                        {table.map(elem => {
                            return (
                                elem % 2 === 0 ? <td key={elem} className='styleRed'>{elem}</td> : <td key={elem} className='styleWhite'>{elem}</td>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        </section>
    )

}

export default NumbersTable