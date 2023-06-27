import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    const numbers = []

    for (let i = 0; i <= limit; i++) {
        const color = i % 2 == 0 ? 'red' : 'white';
        numbers.push(
            <div key={i} style={{ backgroundColor: color }}>{i}</div>
        )
    }

    return (
        <div className='number-color'>
            {numbers}
        </div>

    )
}
export default NumbersTable