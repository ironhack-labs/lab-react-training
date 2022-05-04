
import './number-table.css'

const NumbersTable = ({ limit }) => {

    let arrLimit = []

    for (let i = 1; i <= limit; i++) {
        arrLimit.push(i)
    }

    return (
        <table className="table">

            {arrLimit.map((eachNum, idx) => <th className={eachNum % 2 === 0 ? 'back-style-color' : 'back-style-white'} key={idx}>{eachNum} </th>)}

        </table>

    )
}
export default NumbersTable

