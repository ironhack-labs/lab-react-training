const NumbersTable = ({ limit }) => {
    const numbers = []

    for (let i = 1; i <= limit; i++) {
        numbers.push(i)
    }

    return (
        <div className="numbers-table">
            <ul>
                {numbers.map((number) => (
                    <li key={number} style={number % 2 !== 0 ? { color: 'red' } : { color: 'black' }}>
                        {number}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NumbersTable