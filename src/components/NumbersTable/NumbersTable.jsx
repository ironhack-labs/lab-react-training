import './NumbersTable.css'

const NumbersTable = ({limit}) => {
    const numbersArray = []
    let counter = 1

    while (numbersArray.length < limit) {
        numbersArray.push(counter)
        counter++
    }

    return (
<table>
    <tbody>
                <tr>
                    {
                        numbersArray.map(elm => {
                        return elm % 2 === 0 ? <td className="odd">{elm}</td> : <td className="even">{elm}</td> 
                    })  }
        </tr>
    </tbody>
</table>

    )
}
export default NumbersTable