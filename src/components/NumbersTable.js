function NumbersTable({limit}) {
    const squares = []

    for (let i = 1; i <= limit; i++) {
        const className = `square ${i % 2 === 0 ? "even" : "" }`
        squares.push(<div className={className}>{i}</div>)
    }
    return (
        <div className="numbersTable">
            {squares}
        </div>
    )
}

export default NumbersTable;