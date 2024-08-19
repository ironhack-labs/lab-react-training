/* eslint-disable react/prop-types */
function NumbersTable(props) {
    const { limit } = props
    const numberCells = [];

    for (let i = 1; i < limit+1; i++) {
        let bgColor = i % 2 == 0 ? "red" : "white"
        numberCells.push(
            <div key={i} className="numberCell" style={{backgroundColor: bgColor}}>
                {i}
            </div>
        );         
    }

    return (
        <div className="numbersTable">
            {numberCells}
        </div>
    )
}

export default NumbersTable