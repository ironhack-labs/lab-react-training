import './NumbersTable.css'

const NumbersTable = (({ limit }) => {

    const cellsList = []
    for (let i = 1; i <= limit; i++) {
        cellsList.push(i)
    }

    return (
        <div className="numbers-container">
            {cellsList.map(cell => {
                return (
                    <div key={cell} className="number-cell" style={{ backgroundColor: cell && cell % 2 === 0 ? "red" : "white" }}>
                        {cell}
                    </div>
                );
            })}
        </div>
    )

})

export default NumbersTable