
import './NumbersTable.css'

const NumbersTable = ({ limit }) => {
    const numbers = []

    for (let i = 1; i <= limit; i++) {
        numbers.push(
            <div key={i} className={i % 2 === 0 ? 'even' : ''}>{i}</div>
        )
    }

    return (
        <div className="numbers-table">
            {numbers}
        </div>
    )
}

export default NumbersTable