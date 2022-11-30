import './numbers-table.css'

const NumbersTable = (props) => {
    const numbers = []

    for (let i = 1; i <= props.limit; i++) {
        numbers.push(i)
    }

    return (
        <ul className="numbers-table">
            {numbers.map((number) => (
                <li
                    key={number}
                    className="numbers-table-list"
                    style={number % 2 === 0 ? { backgroundColor: 'red' } : {}}
                >
                    {number}
                </li>
            ))}
        </ul>
    )
}

export default NumbersTable