function NumbersTable({ limit }) {
    const numbers = new Array(limit).fill(0)

    return (
        <div>
            {numbers.map((elem, index) => {
                const value = index + 1
                const isEven = value % 2 === 0
                return <div style={{backgroundColor: isEven ? "red" : "transparent"}}>{value}</div>
            } )}
        </div>
    )
    
}

export default NumbersTable