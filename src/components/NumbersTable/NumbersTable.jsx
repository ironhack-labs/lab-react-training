import './NumbersTable.css'

const NumbersTable = ({limit}) => {

    let table = []
    let number = 1

    for (let i = 0; i < limit; i++) {
        table.push(number)
        number++
    }

    return (

        <table>
            <tbody>
                <tr>
                    {table.map(elem => {
                    return ( elem % 2 !== 0 ? <td key={elem} className='whiteCell'>{elem}</td> : <td key={elem} className='redCell'>{elem}</td> )
                })}
                </tr>
            </tbody>
        </table>

        )
}

export default NumbersTable