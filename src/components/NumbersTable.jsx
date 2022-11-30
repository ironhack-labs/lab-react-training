function NumbersTable({ limit }) {
    const numbers = []
    for (let i = 1; i <= limit; i++) {
        numbers.push(i)
    }
    console.log(numbers)

    return (
        <ul className="numbersTable">
            {numbers.map((elem) => (
                <li
                    key={elem}
                    className="numbersTableLi"
                    style={elem % 2 === 0 ? { backgroundColor: 'red' } : {}}
                >
                    {elem}
                </li>
            ))}
        </ul>
    );
}

export default NumbersTable